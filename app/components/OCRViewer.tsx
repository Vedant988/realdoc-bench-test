'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';

const SCENARIOS = ['Scanning', 'Warping', 'Screen-Photography', 'Illumination', 'Skew'];
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];
const HF_BASE = 'https://huggingface.co/datasets/PaddlePaddle/Real5-OmniDocBench/resolve/main';

type ViewMode = 'split' | 'image' | 'markdown';

interface Manifest {
  [scenario: string]: string[];
}

function getImageUrl(scenario: string, filename: string): string {
  // Try .jpg first (most common). Component will handle fallback.
  return `${HF_BASE}/Real5-OmniDocBench-${scenario}/${filename}.jpg`;
}

function getMarkdownUrl(scenario: string, filename: string): string {
  // MD files are served via the Next.js API route
  return `/api/md/${encodeURIComponent(scenario)}/${encodeURIComponent(filename)}`;
}

function getDocTypeIcon(filename: string): string {
  if (filename.startsWith('PPT_') || filename.startsWith('color_textbook')) return '📊';
  if (filename.startsWith('book_en') || filename.startsWith('book_zh')) return '📚';
  if (filename.startsWith('docstructbench')) return '📄';
  if (filename.startsWith('eastmoney')) return '📈';
  if (filename.startsWith('exam_paper')) return '📝';
  return '🗒️';
}

function getDocTypeName(filename: string): string {
  if (filename.startsWith('PPT_')) return 'Presentation';
  if (filename.startsWith('color_textbook')) return 'Textbook';
  if (filename.startsWith('book_en') || filename.startsWith('book_zh')) return 'Book';
  if (filename.startsWith('docstructbench')) return 'Research Paper';
  if (filename.startsWith('eastmoney')) return 'Financial Doc';
  if (filename.startsWith('exam_paper')) return 'Exam Paper';
  return 'Document';
}

export default function OCRViewer() {
  const [manifest, setManifest] = useState<Manifest>({});
  const [activeScenario, setActiveScenario] = useState('Scanning');
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('split');
  const [markdownContent, setMarkdownContent] = useState<string | null>(null);
  const [markdownLoading, setMarkdownLoading] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [imgSrc, setImgSrc] = useState<string>('');
  const [imgExtIdx, setImgExtIdx] = useState(0);

  useEffect(() => {
    fetch('/manifest.json')
      .then(r => r.json())
      .then((data: Manifest) => {
        setManifest(data);
        // Select first file of first scenario
        const firstScenario = SCENARIOS.find(s => data[s]?.length > 0) || 'Scanning';
        setActiveScenario(firstScenario);
        if (data[firstScenario]?.length > 0) {
          setSelectedFile(data[firstScenario][0]);
        }
      })
      .catch(console.error);
  }, []);

  const filteredFiles = useMemo(() => {
    const files = manifest[activeScenario] || [];
    if (!searchQuery) return files;
    const q = searchQuery.toLowerCase();
    return files.filter(f => f.toLowerCase().includes(q));
  }, [manifest, activeScenario, searchQuery]);

  // Load markdown when file or scenario changes
  useEffect(() => {
    if (!selectedFile) {
      setMarkdownContent(null);
      return;
    }
    setMarkdownLoading(true);
    setMarkdownContent(null);
    const url = getMarkdownUrl(activeScenario, selectedFile);
    fetch(url)
      .then(r => {
        if (!r.ok) throw new Error('Not found');
        return r.text();
      })
      .then(text => {
        setMarkdownContent(text);
        setMarkdownLoading(false);
      })
      .catch(() => {
        setMarkdownContent('*Markdown file not found in repository.*');
        setMarkdownLoading(false);
      });
  }, [selectedFile, activeScenario]);

  // Set image URL when file/scenario changes
  useEffect(() => {
    if (!selectedFile) return;
    setImageError(false);
    setImgExtIdx(0);
    setImgSrc(getImageUrl(activeScenario, selectedFile));
  }, [selectedFile, activeScenario]);

  const handleImgError = useCallback(() => {
    // Try next extension
    const nextIdx = imgExtIdx + 1;
    if (nextIdx < IMAGE_EXTENSIONS.length) {
      setImgExtIdx(nextIdx);
      const ext = IMAGE_EXTENSIONS[nextIdx];
      const base = `${HF_BASE}/Real5-OmniDocBench-${activeScenario}/${selectedFile}${ext}`;
      setImgSrc(base);
    } else {
      setImageError(true);
    }
  }, [imgExtIdx, activeScenario, selectedFile]);

  const handleScenarioChange = (scenario: string) => {
    setActiveScenario(scenario);
    setSearchQuery('');
    setSelectedFile(null);
    // Select first file of new scenario
    const files = manifest[scenario] || [];
    if (files.length > 0) setSelectedFile(files[0]);
  };

  const totalFiles = Object.values(manifest).reduce((a, b) => a + b.length, 0);

  return (
    <section className="viewer-section" id="viewer">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-tag">📋 Live Viewer</div>
        <h2 className="section-title">
          Browse All{' '}
          <span style={{ background: 'linear-gradient(135deg, var(--accent-light), var(--cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {totalFiles.toLocaleString()}
          </span>{' '}
          Extractions
        </h2>
        <p className="section-desc">
          Click any document to see the original image alongside Chandra&apos;s perfect markdown extraction.
        </p>
      </div>

      {/* Controls */}
      <div className="viewer-controls">
        <div className="scenario-tabs">
          {SCENARIOS.map(scenario => {
            const count = manifest[scenario]?.length || 0;
            return (
              <button
                key={scenario}
                className={`scenario-tab ${activeScenario === scenario ? 'active' : ''}`}
                onClick={() => handleScenarioChange(scenario)}
              >
                {scenario}
                <span className="scenario-badge">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search files..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="file-count-info">
          Showing <strong>{filteredFiles.length.toLocaleString()}</strong> files
        </div>
      </div>

      {/* Viewer Layout */}
      <div className="viewer-layout">
        {/* File List Panel */}
        <div className="file-panel">
          <div className="file-panel-header">
            {activeScenario} — {filteredFiles.length} files
          </div>
          <div className="file-list">
            {filteredFiles.map(file => (
              <div
                key={file}
                className={`file-item ${selectedFile === file ? 'selected' : ''}`}
                onClick={() => setSelectedFile(file)}
              >
                <div className="file-item-icon">{getDocTypeIcon(file)}</div>
                <div className="file-item-info">
                  <div className="file-item-name" title={file}>{file}</div>
                  <div className="file-item-meta">{getDocTypeName(file)}</div>
                </div>
              </div>
            ))}
            {filteredFiles.length === 0 && (
              <div className="empty-state" style={{ padding: '2rem' }}>
                <div className="empty-state-icon">🔍</div>
                <div className="empty-state-text">No files match your search</div>
              </div>
            )}
          </div>
        </div>

        {/* View Pane */}
        <div className="view-pane">
          <div className="view-pane-header">
            <div className="view-pane-title">
              {selectedFile ? `${activeScenario} / ${selectedFile}.md` : 'Select a file to preview'}
            </div>
            <div className="view-toggle">
              <button
                className={`view-toggle-btn ${viewMode === 'split' ? 'active' : ''}`}
                onClick={() => setViewMode('split')}
              >⚏ Split</button>
              <button
                className={`view-toggle-btn ${viewMode === 'image' ? 'active' : ''}`}
                onClick={() => setViewMode('image')}
              >🖼 Image</button>
              <button
                className={`view-toggle-btn ${viewMode === 'markdown' ? 'active' : ''}`}
                onClick={() => setViewMode('markdown')}
              >📝 Markdown</button>
            </div>
          </div>

          <div className="view-pane-body">
            {!selectedFile ? (
              <div className="empty-state">
                <div className="empty-state-icon">👈</div>
                <div className="empty-state-text">Select a file from the list to view the extraction</div>
              </div>
            ) : viewMode === 'split' ? (
              <div className="split-view">
                {/* Image Pane */}
                <div className="split-pane">
                  <div className="split-pane-label">
                    <span>🖼</span> Original Document Image
                  </div>
                  <div className="image-container">
                    {imageError ? (
                      <div className="empty-state">
                        <div className="empty-state-icon">🖼️</div>
                        <div className="empty-state-text">
                          Image not available from HuggingFace.<br />
                          <small style={{ color: 'var(--text-muted)', marginTop: '0.5rem', display: 'block' }}>
                            Only the Scanning scenario images are available. Other scenarios require downloading.
                          </small>
                        </div>
                      </div>
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={imgSrc}
                        alt={selectedFile}
                        className="document-image"
                        onError={handleImgError}
                      />
                    )}
                  </div>
                </div>
                {/* Markdown Pane */}
                <div className="split-pane">
                  <div className="split-pane-label">
                    <span>📝</span> Chandra OCR Output
                    <span style={{ marginLeft: 'auto', color: 'var(--green)', fontSize: '0.68rem' }}>✓ Extracted</span>
                  </div>
                  {markdownLoading ? (
                    <div className="loading-state">
                      <div className="spinner" />
                      <span>Loading extraction...</span>
                    </div>
                  ) : (
                    <div className="markdown-container">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm, remarkMath]}
                        rehypePlugins={[rehypeRaw as never, rehypeKatex as never]}
                      >
                        {markdownContent || ''}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            ) : viewMode === 'image' ? (
              <div className="image-container">
                {imageError ? (
                  <div className="empty-state">
                    <div className="empty-state-icon">🖼️</div>
                    <div className="empty-state-text">Image not available</div>
                  </div>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={imgSrc}
                    alt={selectedFile}
                    className="document-image"
                    onError={handleImgError}
                  />
                )}
              </div>
            ) : (
              markdownLoading ? (
                <div className="loading-state">
                  <div className="spinner" />
                  <span>Loading extraction...</span>
                </div>
              ) : (
                <div className="markdown-container">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkMath]}
                    rehypePlugins={[rehypeRaw as never, rehypeKatex as never]}
                  >
                    {markdownContent || ''}
                  </ReactMarkdown>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
