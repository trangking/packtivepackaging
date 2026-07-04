import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { contact } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "ติดต่อ Packtive Packaging | ขอใบเสนอราคาและปรึกษางานบรรจุภัณฑ์",
  description: "ติดต่อ Packtive Packaging เพื่อขอใบเสนอราคาและปรึกษาแนวทางบรรจุภัณฑ์ ผ่าน Line โทรศัพท์ Facebook หรืออีเมล",
  path: "/contact",
  keywords: ["ติดต่อ Packtive Packaging", "ขอใบเสนอราคาแพคเกจจิ้ง"]
});

const channels = [
  { label: "Line", value: "ส่งรายละเอียดสินค้าและ reference ให้ทีมงานประเมิน", href: contact.lineUrl, primary: true },
  { label: "โทร", value: contact.phone, href: `tel:${contact.phone}`, primary: false },
  { label: "Facebook", value: "Packtive Packaging", href: contact.facebookUrl, primary: false },
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, primary: false }
];

export default function ContactPage() {
  return (
    <main className="section-y bg-[linear-gradient(180deg,#fff,#fff5f5)]">
      <div className="container-px grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="ขอใบเสนอราคา หรือปรึกษาแนวทางบรรจุภัณฑ์"
            description="ส่งรายละเอียดสินค้า จำนวนที่ต้องการ งบประมาณโดยประมาณ และ reference ที่มี ทีมงานจะช่วยประเมินสเปกเบื้องต้นและแนะนำแนวทางผลิตที่เหมาะสม"
          />
          <div className="mt-8 rounded-[1.1rem] border border-brand-100/80 bg-white/92 p-5 shadow-[0_18px_54px_rgba(110,18,15,0.08)] backdrop-blur sm:rounded-[1.25rem] sm:p-6">
            <h2 className="text-xl font-black text-ink">ข้อมูลที่ช่วยให้ประเมินงานได้ชัดเจน</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-neutral-600">
              <li>ประเภทสินค้าและขนาดโดยประมาณ</li>
              <li>จำนวนที่ต้องการผลิต หรือช่วงงบประมาณโดยประมาณ</li>
              <li>ไฟล์โลโก้ สีแบรนด์ หรือ reference ที่ต้องการใช้อ้างอิง</li>
              <li>กำหนดวันใช้งานหรือวันเปิดตัวสินค้า</li>
            </ul>
          </div>
        </div>
        <section className="grid gap-4 sm:grid-cols-2" aria-label="ช่องทางติดต่อ Packtive Packaging">
          {channels.map((channel) => (
            <Link
              key={channel.label}
              href={channel.href}
              className={`focus-ring rounded-[1.1rem] p-5 shadow-crimson transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-crimson-lg sm:rounded-[1.25rem] sm:p-6 ${
                channel.primary ? "bg-[linear-gradient(135deg,#b31d18,#d8251f)] text-white shadow-brand-900/15" : "border border-neutral-200/70 bg-white text-ink hover:border-brand-100"
              }`}
            >
              <h2 className="text-2xl font-black">{channel.label}</h2>
              <p className={`mt-3 text-sm leading-7 ${channel.primary ? "text-white/85" : "text-neutral-600"}`}>{channel.value}</p>
              <span className={`mt-8 inline-flex text-sm font-bold ${channel.primary ? "text-white" : "text-brand-700"}`}>ติดต่อผ่านช่องทางนี้</span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
