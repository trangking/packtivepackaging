# Packtive Packaging

เว็บไซต์บริษัท Packtive Packaging สร้างด้วย Next.js App Router, TypeScript และ Tailwind CSS

## Run

```bash
npm install
npm run dev
```

เปิดเว็บที่ `http://localhost:3000`

## Image Placement

รูปสำหรับ `next/image` ต้องอยู่ใน `public` เพื่อเรียกใช้ด้วย path สั้น ๆ จากหน้าเว็บ

```text
public/
  PacktivePackaging/
    hero-packtive.jpg
    products/
      foil-bag.jpg
      tube-cream.jpg
      cream-jar.jpg
      serum-bottle.jpg
      pump-bottle.jpg
      paper-box.jpg
      cosmetic-packaging.jpg
    portfolio/
      portfolio-1.jpg
      portfolio-2.jpg
      portfolio-3.jpg
```

ตัวอย่างการใช้งาน:

```tsx
<Image
  src="/PacktivePackaging/products/foil-bag.jpg"
  alt="ตัวอย่างซองฟอยล์พิมพ์ลายหลายสี"
  fill
/>
```

ถ้ามีรูปเพิ่มจากโฟลเดอร์ `D:/Repo/PacktivePackaging/img` ให้คัดลอกมาไว้ใน `public/PacktivePackaging/products` หรือ `public/PacktivePackaging/portfolio` แล้วอัปเดตข้อมูลใน `data/site.ts`
