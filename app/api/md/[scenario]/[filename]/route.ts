import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ scenario: string; filename: string }> }
) {
  const { scenario, filename } = await params;

  // Security: only allow known scenarios and alphanumeric filenames
  const validScenarios = ['Scanning', 'Warping', 'Screen-Photography', 'Illumination', 'Skew'];
  if (!validScenarios.includes(scenario)) {
    return NextResponse.json({ error: 'Invalid scenario' }, { status: 400 });
  }

  // Strip .md extension if present, then add it back
  const safeFilename = filename.replace(/\.md$/, '').replace(/[^a-zA-Z0-9._\-\s\u4e00-\u9fff%()[\]{}#@!,;+=~]/g, '');
  
  const filePath = path.join(process.cwd(), scenario, `${safeFilename}.md`);

  try {
    const content = await readFile(filePath, 'utf-8');
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
