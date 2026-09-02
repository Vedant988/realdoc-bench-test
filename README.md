# Chandra OCR — Real5-OmniDocBench Showcase

> **1,350 pages. 5 degradation scenarios. Zero misses.**

A portfolio site showcasing perfect OCR extraction quality on the complete [Real5-OmniDocBench](https://huggingface.co/datasets/PaddlePaddle/Real5-OmniDocBench) dataset using the **Chandra** vision model.

## 🚀 Live Demo

Deploy on [Vercel](https://vercel.com) for a live side-by-side viewer of original document images and extracted markdown.

## 🧠 Extraction Setup

| Parameter | Value |
|-----------|-------|
| Model | Chandra (vision LLM) |
| Inference Server | vLLM |
| Hardware | Kaggle 2×T4 GPUs |
| Tensor Parallelism | `tensor_parallel_size=2` |
| Batch Size | 40 concurrent async requests |
| Total Pages | 1,350 (all 5 scenarios) |
| Coverage | **100%** |

## 📁 Dataset Scenarios

| Scenario | Pages | Description |
|----------|-------|-------------|
| Scanning | ~270 | Professional document scans |
| Warping | ~270 | Physically warped/bent pages |
| Screen-Photography | ~270 | Photos of screens |
| Illumination | ~270 | Variable lighting conditions |
| Skew | ~270 | Tilted/rotated documents |

## 🔧 Running Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

## 🚢 Deploying to Vercel

1. Push this repo to GitHub
2. Import the repo on [Vercel](https://vercel.com/new)
3. Vercel auto-detects Next.js — just click **Deploy**

The MD files in each scenario folder are served via the Next.js API route.
Images are fetched directly from HuggingFace's CDN.

## 📊 Extraction Code

```python
from concurrent.futures import ThreadPoolExecutor, as_completed
from PIL import Image
from chandra.model import InferenceManager
from chandra.model.schema import BatchInputItem

client = InferenceManager(method="vllm")

def process_single_image(img_path, output_dir):
    page_img = Image.open(img_path).convert("RGB")
    page_img.thumbnail((1280, 1280))
    inp = BatchInputItem(image=page_img, prompt_type="ocr_layout")
    results = client.generate([inp])
    if results[0].markdown:
        save_markdown(results[0].markdown, output_dir)

# Fire 40 concurrent requests to max the vLLM queue
with ThreadPoolExecutor(max_workers=40) as executor:
    futures = {executor.submit(process_single_image, p, out): p for p in pending_paths}
    for future in as_completed(futures):
        future.result()
```
