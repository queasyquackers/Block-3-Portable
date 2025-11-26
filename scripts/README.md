# Exam Image Generator

This script automates the process of generating medical illustrations for your exam questions using OpenAI's DALL-E 3 model.

## Prerequisites
1.  **OpenAI API Key**: You need a paid OpenAI API key. Get one at [platform.openai.com](https://platform.openai.com).
2.  **PowerShell**: Pre-installed on Windows.

## Usage

1.  Open PowerShell in this directory.
2.  Run the script providing the path to your Test JS file and your API Key.

```powershell
.\Generate-ExamImages.ps1 -FilePath "..\Test1.js" -ApiKey "sk-YOUR-OPENAI-API-KEY-HERE"
```

## What it does
- Reads the specified JS file.
- Finds questions that have an empty `slideImagePath`.
- Generates an image using DALL-E 3 based on the question text and category.
- Saves the image to the `images/` folder.
- Updates the JS file with the new image path.

> [!WARNING]
> **Cost**: Generating images costs money (approx $0.04 per image for DALL-E 3). Monitor your usage.
