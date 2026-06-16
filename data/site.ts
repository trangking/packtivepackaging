export const contact = {
  phone: "099-999-9999",
  lineUrl: "https://line.me/R/ti/p/@packtive",
  facebookUrl: "https://www.facebook.com/PacktivePackaging?locale=th_TH",
  email: "sales@packtivepackaging.com",
  address: "Packtive Packaging | ทีมออกแบบและผลิตบรรจุภัณฑ์สำหรับแบรนด์สินค้า"
};

type CatalogItemInput = {
  id: number;
  title: string;
};

function imagePath(id: number) {
  return `/PacktivePackaging/catalog/item-${String(id).padStart(2, "0")}.jpg`;
}

function createItems(category: string, items: CatalogItemInput[]) {
  return items.map((item) => ({
    id: `${category}-${item.id}`,
    title: item.title,
    category,
    image: imagePath(item.id),
    alt: `${category} ${item.title} โดย Packtive Packaging`
  }));
}

const pouchItems = createItems("ซองและถุงแพคเกจจิ้ง", [
  { id: 3, title: "ซองชาและเครื่องดื่มพิมพ์สี" },
  { id: 65, title: "ซองอาหารพร้อมทาน Packtive" },
  { id: 71, title: "ซอง Super Oats" },
  { id: 72, title: "ซอง Super Oats แบบจัดวางสินค้า" },
  { id: 75, title: "ซองขนมและเครื่องดื่มรวมสี" },
  { id: 76, title: "ซอง Green Crunch ทรงการ์ด" },
  { id: 66, title: "ซอง Almond & Vanilla สีฟ้า" },
  { id: 67, title: "ซอง Almond & Vanilla แบบตั้ง" },
  { id: 68, title: "ซอง Ready to Cook สีเขียว" },
  { id: 69, title: "ซอง Ready to Cook แนวตั้ง" },
  { id: 70, title: "ซอง Ready to Cook สีชมพู" },
  { id: 73, title: "ซอง Ready to Cook สีเหลือง" },
  { id: 74, title: "ซองแครอทไดคัท" },
  { id: 25, title: "ซองตั้งสีพาสเทล" },
  { id: 26, title: "ซองกล้วย Pack'd" },
  { id: 29, title: "ซองอาหารบนพื้นสีเหลือง" },
  { id: 30, title: "ซอง Nuts & Bites" },
  { id: 31, title: "ซอง Smash Mallow หลายรส" },
  { id: 35, title: "ซอง Mindful Chew" },
  { id: 36, title: "ซองชา Flowerhead" },
  { id: 37, title: "ซอง Smash Mallow สีเขียว" },
  { id: 38, title: "ถุง Baba Nana" },
  { id: 40, title: "ถุง Baba Nana สีเข้ม" },
  { id: 41, title: "ซอง Smash Mallow สองสี" },
  { id: 42, title: "ซอง Coffee บนฉาก Tropical" },
  { id: 43, title: "ซอง Coffee ชุดสินค้า" },
  { id: 46, title: "ซอง Baba Nana สีเหลือง" },
  { id: 2, title: "ซอง Joe Banana" },
  { id: 4, title: "ซอง Granutty" },
  { id: 5, title: "ซอง Goji Super Mix" },
  { id: 7, title: "ซองสินค้าแนวไลฟ์สไตล์" },
  { id: 9, title: "ซอง Natural Snacks" },
  { id: 13, title: "ซอง Kombucha" },
  { id: 21, title: "ซองชา Typography" },
  { id: 23, title: "ซองขนมลายวัว" },
  { id: 27, title: "ซองอาหารรวมเซ็ต" },
  { id: 28, title: "ซองอาหารรวมเซ็ตแนวนอน" },
  { id: 33, title: "ซอง Natural Snacks แบบจัดวาง" }
]);

const bottleItems = createItems("ขวดและดรอปเปอร์", [
  { id: 60, title: "ขวดสกินแคร์ Packtive สีขาว" },
  { id: 78, title: "ขวดเซรั่มใสบนพื้นฟ้า" },
  { id: 81, title: "ขวดปั๊มและขวดสเปรย์" },
  { id: 82, title: "ขวดดรอปเปอร์เซรั่มหลากสี" },
  { id: 90, title: "ขวดแก้วใสแบบพกพา" },
  { id: 97, title: "ขวดเซรั่มใสหลายขนาด" },
  { id: 98, title: "ขวดปั๊มสกินแคร์สีชมพู" },
  { id: 12, title: "ขวดดรอปเปอร์พร้อมกล่อง" },
  { id: 14, title: "ขวดดรอปเปอร์ Amber Set" },
  { id: 15, title: "ขวดดรอปเปอร์ Amber แบบเรียง" },
  { id: 17, title: "ขวดดรอปเปอร์ The Ordinary" },
  { id: 24, title: "ขวดสกินแคร์สีขาวหลายแบบ" },
  { id: 32, title: "ขวดปั๊ม Mockup สีขาว" },
  { id: 34, title: "เซ็ตขวดและกระปุกสกินแคร์" },
  { id: 44, title: "ขวด Mist สีขาว" },
  { id: 45, title: "ขวดเครื่องสำอางสีขาวชมพู" },
  { id: 47, title: "เซ็ตขวดปั๊มสีเหลือง" },
  { id: 48, title: "ขวดปั๊ม Fresh สีพีช" },
  { id: 49, title: "ขวดปั๊ม Fresh สีเขียว" },
  { id: 50, title: "ขวดแคปซูลสีเหลือง" },
  { id: 51, title: "ขวดปั๊ม Fresh สีเหลือง" },
  { id: 53, title: "เซ็ตขวดปั๊มและหลอด" },
  { id: 54, title: "ขวดปั๊ม Fresh สีม่วง" },
  { id: 61, title: "หัวดรอปเปอร์สีพาสเทล" },
  { id: 62, title: "หัวดรอปเปอร์บนพื้นพีช" },
  { id: 63, title: "หัวดรอปเปอร์บนพื้นเข้ม" },
  { id: 64, title: "หัวดรอปเปอร์สีสด" },
  { id: 92, title: "ขวด Roll-on สีพาสเทล" },
  { id: 93, title: "ขวดเซรั่มสีชมพู" }
]);

const tubeItems = createItems("หลอดครีม", [
  { id: 56, title: "หลอดครีม Fragrance สีพาสเทล" },
  { id: 57, title: "หลอดครีม VIVI" },
  { id: 58, title: "หลอดครีม Fragrance จัดวาง" },
  { id: 55, title: "หลอดครีมสีฟ้า" },
  { id: 6, title: "หลอดครีม Hand Cream" },
  { id: 8, title: "หลอดครีมบนกระดาษคราฟต์" },
  { id: 18, title: "หลอดครีม Ordinary" },
  { id: 19, title: "หลอดครีมบนผ้าขาว" },
  { id: 39, title: "หลอดครีมสีฟ้าและเขียว" },
  { id: 52, title: "หลอดครีม Fresh สีขาวเหลือง" }
]);

const jarItems = createItems("กระปุกครีม", [
  { id: 80, title: "กระปุกครีมสีเขียวมิ้นต์" },
  { id: 83, title: "กระปุกครีม Thepro สีฟ้า" },
  { id: 84, title: "กระปุกครีม Thepro หลายขนาด" },
  { id: 85, title: "กระปุกครีมเปิดฝา" },
  { id: 87, title: "กระปุกครีมพร้อมกล่องลูกฟูก" },
  { id: 88, title: "กระปุกครีม Thepro สีเทา" },
  { id: 89, title: "กระปุกครีมสีพาสเทล" },
  { id: 91, title: "กระปุกครีมสีเทาและชมพู" },
  { id: 94, title: "กระปุกครีมสีขาวมินิมอล" },
  { id: 95, title: "กระปุกครีมพร้อมกล่องสีชมพู" },
  { id: 96, title: "กระปุกครีมสีสดหลายแบบ" },
  { id: 0, title: "กระปุกและซองสินค้าไลฟ์สไตล์" }
]);

const boxItems = createItems("กล่องและเซ็ตบรรจุภัณฑ์", [
  { id: 86, title: "กล่องเซ็ต Packtive สีชมพู" },
  { id: 79, title: "กล่องและกระปุก Gift Set" },
  { id: 87, title: "กล่องลูกฟูกพร้อมกระปุก" },
  { id: 95, title: "กล่องครีมสีชมพู" },
  { id: 11, title: "งานออกแบบเซ็ตตกแต่งสินค้า" },
  { id: 22, title: "งานจัดวางแบรนด์บนชั้นสินค้า" }
]);

export const productCategories = [
  {
    slug: "pouches",
    name: "ซองและถุงแพคเกจจิ้ง",
    shortName: "ซอง",
    description: "ซองฟอยล์ ซองตั้ง ถุงสินค้า และซองอาหารที่ออกแบบให้เหมาะกับแบรนด์อาหาร เครื่องดื่ม ขนม และสินค้าไลฟ์สไตล์",
    image: pouchItems[0].image,
    alt: "ตัวอย่างซองและถุงแพคเกจจิ้งหลายรูปแบบ",
    features: ["เหมาะกับอาหาร ขนม เครื่องดื่ม และสินค้าแห้ง", "รองรับงานพิมพ์สีและลายกราฟิกตามอัตลักษณ์แบรนด์", "เลือกทรงได้ตามการใช้งาน เช่น ซองตั้ง ซองแบน และถุงไดคัท"],
    items: pouchItems
  },
  {
    slug: "bottles",
    name: "ขวดและดรอปเปอร์",
    shortName: "ขวด",
    description: "ขวดเซรั่ม ขวดปั๊ม ขวดสเปรย์ และดรอปเปอร์สำหรับสกินแคร์ เครื่องสำอาง และผลิตภัณฑ์ดูแลผิวที่ต้องการภาพลักษณ์สะอาดน่าเชื่อถือ",
    image: bottleItems[0].image,
    alt: "ตัวอย่างขวดและดรอปเปอร์สำหรับเครื่องสำอาง",
    features: ["เหมาะกับเซรั่ม โลชั่น สเปรย์ และผลิตภัณฑ์สกินแคร์", "เลือกหัวปั๊ม ดรอปเปอร์ ฝา และโทนสีขวดได้ตามสเปก", "รองรับฉลาก โลโก้ และรายละเอียดแบรนด์บนบรรจุภัณฑ์"],
    items: bottleItems
  },
  {
    slug: "tubes",
    name: "หลอดครีม",
    shortName: "หลอด",
    description: "หลอดครีม หลอดโลชั่น และหลอดสกินแคร์สำหรับแบรนด์ที่ต้องการบรรจุภัณฑ์ใช้งานง่าย พกพาสะดวก และดูเป็นมืออาชีพ",
    image: tubeItems[0].image,
    alt: "ตัวอย่างหลอดครีมหลายสี",
    features: ["เหมาะกับครีม โลชั่น เจล และแฮนด์ครีม", "เลือกขนาด ผิวสัมผัส และรูปแบบฝาให้เข้ากับสินค้าได้", "เหมาะกับแบรนด์สกินแคร์ คลินิก และผลิตภัณฑ์ดูแลผิว"],
    items: tubeItems
  },
  {
    slug: "jars",
    name: "กระปุกครีม",
    shortName: "กระปุก",
    description: "กระปุกครีมและกระปุกเครื่องสำอางสำหรับครีม มาสก์ สครับ และผลิตภัณฑ์บำรุงผิวที่ต้องการงานนำเสนอเรียบร้อยและมั่นใจ",
    image: jarItems[0].image,
    alt: "ตัวอย่างกระปุกครีมหลายขนาด",
    features: ["เหมาะกับครีม มาสก์ สครับ และผลิตภัณฑ์บำรุงผิว", "มีหลายวัสดุและหลายขนาดให้เลือกตามกลุ่มสินค้า", "จับคู่กับกล่อง ฉลาก หรือองค์ประกอบแบรนด์อื่นได้"],
    items: jarItems
  },
  {
    slug: "boxes",
    name: "กล่องและเซ็ตบรรจุภัณฑ์",
    shortName: "กล่อง",
    description: "กล่องเซ็ต กล่องของขวัญ กล่องสินค้า และงานจัดวางแบรนด์สำหรับยกระดับการนำเสนอสินค้าให้ดูพร้อมขายมากขึ้น",
    image: boxItems[0].image,
    alt: "ตัวอย่างกล่องเซ็ตบรรจุภัณฑ์ Packtive",
    features: ["เหมาะกับ gift set, product set และชุดเปิดตัวสินค้า", "เพิ่มคุณค่าการนำเสนอด้วยโครงสร้างกล่องและฟินิชงานพิมพ์", "ออกแบบให้สอดคล้องกับสินค้า ภาพลักษณ์ และวิธีใช้งานจริง"],
    items: boxItems
  }
];

export const products = productCategories;
export type ProductCategory = (typeof productCategories)[number];
export type Product = ProductCategory;
export type CatalogItem = ProductCategory["items"][number];

export const highlights = [
  { title: "ดูแลครบกระบวนการ", description: "ช่วยวางแนวทางตั้งแต่เลือกประเภทบรรจุภัณฑ์ กำหนดสเปก ออกแบบ ผลิต ตรวจงาน และส่งมอบ" },
  { title: "แนะนำงานออกแบบอย่างเหมาะสม", description: "ทีมงานช่วยปรับภาพลักษณ์และ artwork ให้สอดคล้องกับสินค้า กลุ่มลูกค้า และข้อจำกัดการผลิตจริง" },
  { title: "MOQ ตามโจทย์ธุรกิจ", description: "ให้คำแนะนำจำนวนเริ่มต้นที่เหมาะกับประเภทสินค้า งบประมาณ และแผนการขายของแต่ละแบรนด์" },
  { title: "คุมรายละเอียดงานผลิต", description: "ตรวจสเปก วัสดุ สี งานพิมพ์ และรายละเอียดสำคัญ เพื่อให้งานออกมาตรงตามที่ตกลง" },
  { title: "สื่อสารเป็นขั้นตอน", description: "มีทีมงานช่วยประสานงาน แจ้งข้อมูลที่จำเป็น และติดตามความคืบหน้าระหว่างการผลิต" }
];

export const processSteps = [
  { title: "รับโจทย์และทำความเข้าใจแบรนด์", description: "แจ้งประเภทสินค้า กลุ่มลูกค้า งบประมาณ จำนวนที่ต้องการ และภาพลักษณ์ที่ต้องการให้บรรจุภัณฑ์สื่อสาร" },
  { title: "กำหนดสเปกบรรจุภัณฑ์", description: "ทีมงานช่วยแนะนำวัสดุ ขนาด รูปทรง เทคนิคพิมพ์ และ MOQ ที่เหมาะสมกับสินค้าและการใช้งานจริง" },
  { title: "จัดทำแนวทางและเสนอราคา", description: "สรุปสเปก แนวทาง artwork และใบเสนอราคา เพื่อให้ตรวจสอบรายละเอียดก่อนยืนยันการผลิต" },
  { title: "ผลิตและตรวจสอบรายละเอียด", description: "ดำเนินการผลิตตามสเปกที่ยืนยัน พร้อมตรวจความถูกต้องของวัสดุ สี และรายละเอียดงานพิมพ์" },
  { title: "จัดส่งพร้อมใช้งาน", description: "บรรจุและจัดส่งงานให้พร้อมสำหรับการขาย เปิดตัวสินค้า หรือส่งต่อเข้าสู่กระบวนการแพ็คของแบรนด์" }
];

export const portfolioItems = [
  {
    title: "ซองอาหารพร้อมทาน Packtive",
    category: "ซองและถุงแพคเกจจิ้ง",
    image: imagePath(65),
    alt: "ผลงานซองอาหารพร้อมทาน Packtive"
  },
  {
    title: "กล่องเซ็ต Packtive",
    category: "กล่องและเซ็ตบรรจุภัณฑ์",
    image: imagePath(86),
    alt: "ผลงานกล่องเซ็ตบรรจุภัณฑ์ Packtive"
  },
  {
    title: "กระปุกครีม Thepro",
    category: "กระปุกครีม",
    image: imagePath(88),
    alt: "ผลงานกระปุกครีม Thepro"
  }
];

export const faqs = [
  {
    question: "Packtive Packaging รับผลิตบรรจุภัณฑ์ประเภทใดบ้าง?",
    answer: "เราดูแลงานซองและถุงแพคเกจจิ้ง ขวด ดรอปเปอร์ หลอดครีม กระปุกครีม กล่อง และเซ็ตบรรจุภัณฑ์ โดยช่วยแนะนำรูปแบบให้เหมาะกับสินค้าและงบประมาณ"
  },
  {
    question: "มีบริการช่วยออกแบบหรือปรับ artwork หรือไม่?",
    answer: "มีทีมงานช่วยให้คำแนะนำด้านภาพลักษณ์ โครงสร้าง และ artwork เพื่อให้บรรจุภัณฑ์สอดคล้องกับแบรนด์และพร้อมเข้าสู่กระบวนการผลิต"
  },
  {
    question: "ขั้นต่ำการผลิต (MOQ) เริ่มต้นเท่าไร?",
    answer: "MOQ ขึ้นอยู่กับประเภทบรรจุภัณฑ์ วัสดุ ขนาด และเทคนิคการผลิต ทีมงานจะช่วยประเมินจำนวนที่เหมาะสมกับงบประมาณและแผนการขายของคุณ"
  },
  {
    question: "ระยะเวลาผลิตใช้เวลาประมาณเท่าไร?",
    answer: "ระยะเวลาขึ้นอยู่กับประเภทงาน จำนวนผลิต และความซับซ้อนของรายละเอียด โดยจะเริ่มนับหลังจากยืนยันสเปก artwork และเงื่อนไขการผลิตเรียบร้อยแล้ว"
  },
  {
    question: "ต้องเตรียมข้อมูลอะไรเพื่อขอใบเสนอราคา?",
    answer: "ควรเตรียมประเภทสินค้า จำนวนที่ต้องการ ขนาดโดยประมาณ งบประมาณคร่าว ๆ ไฟล์โลโก้หรือ reference ที่ชอบ เพื่อให้ทีมงานประเมินสเปกและราคาได้แม่นยำขึ้น"
  }
];
