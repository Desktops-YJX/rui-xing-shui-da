import os
import sys
from docx import Document

# Fix encoding issue when redirecting output
sys.stdout.reconfigure(encoding='utf-8')

assets_dir = r"e:\桌面\SDP\rui_xing\_local_assets"
docx_files = [f for f in os.listdir(assets_dir) if f.endswith(".docx")]

for file in docx_files:
    file_path = os.path.join(assets_dir, file)
    print(f"--- Contents of {file} ---")
    try:
        doc = Document(file_path)
        for para in doc.paragraphs:
            if para.text.strip():
                print(para.text.strip())
    except Exception as e:
        print(f"Error reading {file}: {e}")
    print("\n" + "="*40 + "\n")
