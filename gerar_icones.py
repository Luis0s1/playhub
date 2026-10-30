import os
from PIL import Image, ImageDraw, ImageFont

def criar_icones():
    os.makedirs("icons", exist_ok=True)
    tamanhos = [16, 48, 128]
    
    for tam in tamanhos:
        img = Image.new("RGBA", (tam, tam), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        
        draw.rounded_rectangle([0, 0, tam - 1, tam - 1], radius=int(tam * 0.2), fill=(99, 102, 241, 255))
        
        font = None
        for font_name in ["arial.ttf", "DejaVuSans.ttf"]:
            try:
                font = ImageFont.truetype(font_name, int(tam * 0.6))
                break
            except IOError:
                continue
                
        if font is None:
            font = ImageFont.load_default()
            
        draw.text((tam // 2, tam // 2), "P", fill=(255, 255, 255, 255), font=font, anchor="mm")
        
        caminho = os.path.join("icons", f"icon{tam}.png")
        img.save(caminho, "PNG")
        print(f"Ícone gerado: {caminho}")

if __name__ == "__main__":
    criar_icones()

