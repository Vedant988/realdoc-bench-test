import OCRViewer from './components/OCRViewer';

const CODE_SNIPPET = `<span class="cm"># vLLM served on Kaggle: 2×T4 GPUs, tensor_parallel_size=2</span>
<span class="kw">from</span> <span class="cl">concurrent.futures</span> <span class="kw">import</span> ThreadPoolExecutor, as_completed
<span class="kw">from</span> <span class="cl">PIL</span> <span class="kw">import</span> Image
<span class="kw">from</span> <span class="cl">chandra.model</span> <span class="kw">import</span> InferenceManager

client = InferenceManager(<span class="st">method=</span><span class="st">"vllm"</span>)

<span class="kw">def</span> <span class="fn">process_single_image</span>(img_path, output_dir):
    page_img = Image.<span class="fn">open</span>(img_path).<span class="fn">convert</span>(<span class="st">"RGB"</span>)
    page_img.<span class="fn">thumbnail</span>((<span class="nu">1280</span>, <span class="nu">1280</span>))
    inp = <span class="cl">BatchInputItem</span>(image=page_img, prompt_type=<span class="st">"ocr_layout"</span>)
    results = client.<span class="fn">generate</span>([inp])
    <span class="kw">if</span> results[<span class="nu">0</span>].<span class="st">markdown</span>:
        <span class="fn">save_markdown</span>(results[<span class="nu">0</span>].<span class="st">markdown</span>, output_dir)

<span class="cm"># Fire 40 concurrent requests — maxing out the vLLM queue</span>
<span class="kw">with</span> <span class="cl">ThreadPoolExecutor</span>(max_workers=<span class="nu">40</span>) <span class="kw">as</span> executor:
    futures = {executor.<span class="fn">submit</span>(process_single_image, p, out): p 
               <span class="kw">for</span> p <span class="kw">in</span> pending_paths}
    <span class="kw">for</span> future <span class="kw">in</span> <span class="fn">as_completed</span>(futures):
        result = future.<span class="fn">result</span>()`;

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <a href="#" className="navbar-brand">
          <div className="navbar-logo">⚡</div>
          <span className="navbar-name">Chandra <span>OCR</span></span>
        </a>
        <ul className="navbar-links">
          <li><a href="#pipeline">Pipeline</a></li>
          <li><a href="#viewer">Viewer</a></li>
          <li>
            <a href="https://huggingface.co/datasets/PaddlePaddle/Real5-OmniDocBench" target="_blank" rel="noopener noreferrer">
              Dataset ↗
            </a>
          </li>
        </ul>
        <a
          href="https://huggingface.co/datasets/PaddlePaddle/Real5-OmniDocBench"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-badge"
        >
          Real5-OmniDocBench
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
        </div>

        <div className="hero-pill">
          <span className="hero-pill-dot" />
          Perfect Extraction · 100% Coverage · Production Ready
        </div>

        <h1 className="hero-title">
          <span className="hero-title-gradient">1,350 Pages.</span>
          <br />
          Zero Misses.
        </h1>

        <p className="hero-subtitle">
          Complete OCR extraction of the entire <strong>Real5-OmniDocBench</strong> dataset 
          using the <strong>Chandra</strong> vision model — served via <strong>vLLM</strong> on 
          2×T4 GPUs with tensor parallelism at 40 concurrent threads.
        </p>

        <div className="hero-cta">
          <a href="#viewer" className="btn-primary">
            Browse Extractions →
          </a>
          <a
            href="https://github.com/vedant988/realdoc-bench-test/blob/main/chandra-ocr-benchmarking%20(2).ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            View Jupyter Notebook ↗
          </a>
          <a
            href="https://huggingface.co/datasets/PaddlePaddle/Real5-OmniDocBench"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            View Dataset ↗
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-card stat-card-violet">
            <div className="stat-number stat-violet">1,350</div>
            <div className="stat-label">Total Pages</div>
            <div className="stat-sublabel">All 5 degradation scenarios</div>
          </div>
          <div className="stat-card stat-card-green">
            <div className="stat-number stat-green">100%</div>
            <div className="stat-label">Coverage</div>
            <div className="stat-sublabel">Not a single file missed</div>
          </div>
          <div className="stat-card stat-card-cyan">
            <div className="stat-number stat-cyan">40</div>
            <div className="stat-label">Batch Size</div>
            <div className="stat-sublabel">Concurrent async requests</div>
          </div>
          <div className="stat-card stat-card-orange">
            <div className="stat-number stat-orange">2×T4</div>
            <div className="stat-label">GPU Setup</div>
            <div className="stat-sublabel">Kaggle tensor parallelism</div>
          </div>
          <div className="stat-card stat-card-pink">
            <div className="stat-number stat-pink">vLLM</div>
            <div className="stat-label">Inference Server</div>
            <div className="stat-sublabel">High-throughput OpenAI API</div>
          </div>
        </div>
      </div>

      {/* Pipeline Section */}
      <section className="pipeline-section" id="pipeline">
        <div className="section-header">
          <div className="section-tag">⚙️ Technical Details</div>
          <h2 className="section-title">The Extraction Pipeline</h2>
          <p className="section-desc">
            A fully async Python pipeline that maxes out two T4 GPUs in parallel via 
            tensor-parallel vLLM inference.
          </p>
        </div>

        <div className="pipeline-flow">
          <div className="pipeline-step">
            <div className="pipeline-step-icon">🖼️</div>
            <div className="pipeline-step-title">Image Input</div>
            <div className="pipeline-step-desc">1280×1280 thumbnail, RGB</div>
          </div>
          <div className="pipeline-arrow">→</div>

          <div className="pipeline-step">
            <div className="pipeline-step-icon">🔀</div>
            <div className="pipeline-step-title">ThreadPoolExecutor</div>
            <div className="pipeline-step-desc">40 concurrent workers</div>
          </div>
          <div className="pipeline-arrow">→</div>

          <div className="pipeline-step">
            <div className="pipeline-step-icon">⚡</div>
            <div className="pipeline-step-title">vLLM Server</div>
            <div className="pipeline-step-desc">OpenAI-compatible API</div>
          </div>
          <div className="pipeline-arrow">→</div>

          <div className="pipeline-step">
            <div className="pipeline-step-icon">🎯</div>
            <div className="pipeline-step-title">Chandra Model</div>
            <div className="pipeline-step-desc">tensor_parallel_size=2</div>
          </div>
          <div className="pipeline-arrow">→</div>

          <div className="pipeline-step">
            <div className="pipeline-step-icon">📝</div>
            <div className="pipeline-step-title">Markdown Output</div>
            <div className="pipeline-step-desc">Saved per-page .md file</div>
          </div>
        </div>

        {/* Code Block */}
        <div className="code-block">
          <div className="code-block-header">
            <div className="code-block-dots">
              <div className="code-dot code-dot-red" />
              <div className="code-dot code-dot-yellow" />
              <div className="code-dot code-dot-green" />
            </div>
            <div className="code-block-lang">extraction_pipeline.py</div>
          </div>
          <div className="code-block-body">
            <pre dangerouslySetInnerHTML={{ __html: CODE_SNIPPET }} />
          </div>
        </div>
      </section>

      {/* OCR Viewer Section */}
      <OCRViewer />

      {/* Footer */}
      <footer className="footer">
        <p>
          Built to showcase{' '}
          <a href="https://huggingface.co/datasets/PaddlePaddle/Real5-OmniDocBench" target="_blank" rel="noopener noreferrer">
            Real5-OmniDocBench
          </a>{' '}
          extraction with the Chandra vision model.{' '}
          Powered by{' '}
          <a href="https://github.com/vllm-project/vllm" target="_blank" rel="noopener noreferrer">vLLM</a>{' '}
          on Kaggle 2×T4 GPUs.
        </p>
      </footer>
    </>
  );
}
