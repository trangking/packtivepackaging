import type { Metadata } from "next";

const siteUrl = "https://www.packtivepackaging.com";

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = []
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: [
      "Packtive Packaging",
      "รับผลิตแพคเกจจิ้ง",
      "ออกแบบบรรจุภัณฑ์",
      "ผลิตซองฟอยล์",
      "ผลิตหลอดครีม",
      "บรรจุภัณฑ์เครื่องสำอาง",
      ...keywords
    ],
    alternates: { canonical: url },
    icons: {
      icon: "/PacktivePackaging/image/logo/packtive-icon-rounded.png",
      shortcut: "/PacktivePackaging/image/logo/packtive-icon-rounded.png",
      apple: "/PacktivePackaging/image/logo/packtive-icon-rounded.png"
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Packtive Packaging",
      locale: "th_TH",
      type: "website",
      images: [
        {
          url: "/PacktivePackaging/hero-packtive.jpg",
          width: 1920,
          height: 1920,
          alt: "Packtive Packaging รับผลิตและออกแบบบรรจุภัณฑ์"
        }
      ]
    }
  };
}
