from PIL import Image
import os

image_path = r"e:\桌面\SDP\rui_xing\public\images\assets\cert_zhuanjiaweiyuanhui.jpg"
if os.path.exists(image_path):
    img = Image.open(image_path)
    print(f"Size: {img.size}")
else:
    print("File not found")
