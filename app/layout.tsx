import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { createMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = createMetadata({
  title: "Packtive Packaging",
  description:
    "Packtive Packaging ให้บริการออกแบบและผลิตบรรจุภัณฑ์สำหรับแบรนด์สินค้า เช่น ซองฟอยล์ หลอดครีม กระปุก ขวดเซรั่ม ขวดปั๊ม กล่อง และบรรจุภัณฑ์เครื่องสำอาง พร้อมให้คำแนะนำด้านสเปกและงานผลิต",
  keywords: ["โรงงานแพคเกจจิ้ง", "ผลิตบรรจุภัณฑ์", "ออกแบบแพคเกจจิ้ง", "บรรจุภัณฑ์สินค้า"]
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
