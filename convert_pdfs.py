import os
import fitz  # PyMuPDF

source_dir = r"e:\桌面\SDP\rui_xing\_local_assets"
dest_dir = r"e:\桌面\SDP\rui_xing\public\images\assets"

os.makedirs(dest_dir, exist_ok=True)

for filename in os.listdir(source_dir):
    if filename.lower().endswith(".pdf"):
        pdf_path = os.path.join(source_dir, filename)
        try:
            doc = fitz.open(pdf_path)
            for page_num in range(len(doc)):
                page = doc.load_page(page_num)
                pix = page.get_pixmap(dpi=150)
                
                # Base name without extension
                base_name = os.path.splitext(filename)[0]
                if len(doc) > 1:
                    img_name = f"{base_name}_page{page_num + 1}.jpg"
                else:
                    img_name = f"{base_name}.jpg"
                    
                img_path = os.path.join(dest_dir, img_name)
                pix.save(img_path)
            doc.close()
        except Exception as e:
            pass
