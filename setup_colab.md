# Google Colab Setup Commands

Here are the commands formatted for Google Colab. You can copy and paste these into individual Colab cells to get started.

## 1. Datalab Chandra 2 Setup

Chandra is available as a Python package and can be installed via pip.

**Cell 1: Install Chandra OCR**
```python
!pip install git+https://github.com/datalab-to/chandra.git
```

**Cell 2: Run Chandra on a Sample Document**
*(Make sure to upload a PDF file named `sample.pdf` to your Colab environment before running this)*
```python
# This will extract the contents of sample.pdf into an output folder
!chandra sample.pdf ./output

# View the extracted output
!ls ./output
```

---

## 2. RealDoc-Bench Setup

RealDoc-Bench uses `uv` for dependency management, so we need to install `uv`, clone the repo, and set up our API keys.

**Cell 1: Clone the Repository and Install Dependencies**
```python
# Install uv (blazing fast Python package manager)
!pip install uv

# Clone the RealDoc-Bench repository
!git clone https://github.com/extend-hq/realdoc-bench.git

# Change working directory to the cloned repo
%cd realdoc-bench

# Sync and install all dependencies
!uv sync
```

**Cell 2: Configure Environment Variables**
RealDoc-Bench requires API keys for the judge (Gemini) and whichever parser you are testing.
```python
import os

# Set your Gemini API key for the evaluator
os.environ["GEMINI_API_KEY"] = "your_gemini_api_key_here"

# (Optional) Set API keys for specific parsers you want to test
# os.environ["EXTEND_API_KEY"] = "your_extend_api_key_here"
# os.environ["MISTRAL_API_KEY"] = "your_mistral_api_key_here"
```

**Cell 3: Run the Benchmark Pipeline**
```python
# 1. Pull the benchmark dataset from Hugging Face
!realdoc-bench evaluate download --run-dir runs/qa --dataset Extend-AI/RealDoc-Bench

# 2. Parse the dataset with a specific parser (e.g., azure_di, reducto, mistral_ocr_4)
# Note: Ensure you have the corresponding API key set!
!realdoc-bench evaluate parse --run-dir runs/qa -p mistral_ocr_4

# 3. Score the parser's output using Gemini
!realdoc-bench evaluate score --run-dir runs/qa
```
