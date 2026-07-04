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

type RealCatalogItemInput = {
  file: string;
  title: string;
};

function realImage(fileName: string) {
  return `/PacktivePackaging/image/${fileName}`;
}

function createRealItems(category: string, items: RealCatalogItemInput[]) {
  return items.map((item, index) => ({
    id: `${category}-${index + 1}`,
    title: item.title,
    category,
    image: realImage(item.file),
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

const bottleItems = createRealItems("ขวดและดรอปเปอร์", [
  { file: "ขวดปั๊มพลาสติก1.webp", title: "ขวดปั๊มพลาสติก แบบที่ 1" },
  { file: "ขวดปั๊มพลาสติก2.webp", title: "ขวดปั๊มพลาสติก แบบที่ 2" },
  { file: "ขวดปั๊มพลาสติก3.webp", title: "ขวดปั๊มพลาสติก แบบที่ 3" },
  { file: "ขวดปั๊มพลาสติก4.webp", title: "ขวดปั๊มพลาสติก แบบที่ 4" },
  { file: "ขวดฝาเกลียว1.webp", title: "ขวดฝาเกลียว แบบที่ 1" },
  { file: "ขวดฝาเกลียว2.webp", title: "ขวดฝาเกลียว แบบที่ 2" },
  { file: "ขวดฝาเกลียว3.webp", title: "ขวดฝาเกลียว แบบที่ 3" },
  { file: "ขวดฝาเกลียว4.webp", title: "ขวดฝาเกลียว แบบที่ 4" },
  { file: "ขวดสุญญากาศ1.webp", title: "ขวดสุญญากาศ แบบที่ 1" },
  { file: "ขวดสูญญากาศ2.webp", title: "ขวดสุญญากาศ แบบที่ 2" },
  { file: "ขวดสูญญากาศ3.webp", title: "ขวดสุญญากาศ แบบที่ 3" },
  { file: "ขวดสุญญากาศ4.webp", title: "ขวดสุญญากาศ แบบที่ 4" },
  { file: "ขวดสเปรย์สุญญากาศ1.webp", title: "ขวดสเปรย์สุญญากาศ แบบที่ 1" },
  { file: "ขวดสเปรย์สุญญากาศ2.webp", title: "ขวดสเปรย์สุญญากาศ แบบที่ 2" },
  { file: "ขวดสเปรย์สุญญากาศ3.webp", title: "ขวดสเปรย์สุญญากาศ แบบที่ 3" },
  { file: "ขวดสเปรย์สุญญากาศ4.webp", title: "ขวดสเปรย์สุญญากาศ แบบที่ 4" },
  { file: "ขวดแก้วฝาบีบ1.webp", title: "ขวดแก้วฝาบีบ แบบที่ 1" },
  { file: "ขวดแก้วฝาบีบ2.webp", title: "ขวดแก้วฝาบีบ แบบที่ 2" },
  { file: "ขวดแก้วฝาบีบ3.webp", title: "ขวดแก้วฝาบีบ แบบที่ 3" },
  { file: "ขวดแก้วฝาบีบ4.webp", title: "ขวดแก้วฝาบีบ แบบที่ 4" },
  { file: "img2/1-14-2048x2048.jpg.webp", title: "ขวดปั๊มสูญญากาศภาพสินค้าจริง แบบที่ 1" },
  { file: "img2/1-6.jpg.webp", title: "ขวดปั๊มและดรอปเปอร์ภาพสินค้าจริง แบบที่ 2" },
  { file: "img2/2-2j.jpg.webp", title: "ขวดฝาบอลภาพสินค้าจริง แบบที่ 3" },
  { file: "img3/463.jpg.webp", title: "ขวดปั๊มพลาสติกภาพสินค้าจริง แบบที่ 4" },
  { file: "img3/8.jpg.webp", title: "ขวดปั๊มแชมพูภาพสินค้าจริง แบบที่ 5" },
  { file: "img3/36.png.webp", title: "ขวดดรอปเปอร์แก้วภาพสินค้าจริง แบบที่ 6" },
  { file: "img3/BY022-1.jpg.webp", title: "ขวดดรอปเปอร์ภาพสินค้าจริง แบบที่ 7" }
]);

const tubeItems = createRealItems("หลอดครีม", [
  { file: "หลอดฝาหมุน1.webp", title: "หลอดฝาหมุน แบบที่ 1" },
  { file: "หลอดฝาหมุน2.webp", title: "หลอดฝาหมุน แบบที่ 2" },
  { file: "หลอดฝาหมุน3.webp", title: "หลอดฝาหมุน แบบที่ 3" },
  { file: "หลอดฝาหมุน4.webp", title: "หลอดฝาหมุน แบบที่ 4" },
  { file: "img2/1-4-2048x2048.jpg.webp", title: "หลอดครีมภาพสินค้าจริง แบบที่ 1" },
  { file: "img2/2-4-2048x2048.jpg.webp", title: "หลอดครีมภาพสินค้าจริง แบบที่ 2" },
  { file: "img2/3-6.jpg.webp", title: "หลอดครีมภาพสินค้าจริง แบบที่ 3" },
  { file: "img2/4-6.jpg.webp", title: "หลอดครีมภาพสินค้าจริง แบบที่ 4" },
  { file: "img3/11_看图王_副本.jpg.webp", title: "หลอดครีมกันแดดภาพสินค้าจริง แบบที่ 5" }
]);

const jarItems = createRealItems("กระปุกครีม", [
  { file: "กระปุกครีมพลาสติก5.webp", title: "กระปุกครีมพลาสติก แบบที่ 1" },
  { file: "กระปุกครีมพลาสติก6.webp", title: "กระปุกครีมพลาสติก แบบที่ 2" },
  { file: "กระปุกครีมพลาสติก8.webp", title: "กระปุกครีมพลาสติก แบบที่ 3" },
  { file: "กระปุกครีมพลาสติก9.webp", title: "กระปุกครีมพลาสติก แบบที่ 4" },
  { file: "กระปุกครีมพลาสติกและช้อน1.webp", title: "กระปุกครีมพลาสติกพร้อมช้อน แบบที่ 1" },
  { file: "กระปุกครีมพลาสติกและช้อน2.webp", title: "กระปุกครีมพลาสติกพร้อมช้อน แบบที่ 2" },
  { file: "กระปุกครีมพลาสติกและช้อน3.webp", title: "กระปุกครีมพลาสติกพร้อมช้อน แบบที่ 3" },
  { file: "กระปุกครีมพลาสติกและช้อน4.webp", title: "กระปุกครีมพลาสติกพร้อมช้อน แบบที่ 4" },
  { file: "กระปุกครีมแก้ว1.webp", title: "กระปุกครีมแก้ว แบบที่ 1" },
  { file: "กระปุกครีมแก้ว2.webp", title: "กระปุกครีมแก้ว แบบที่ 2" },
  { file: "กระปุกครีมแก้ว3.webp", title: "กระปุกครีมแก้ว แบบที่ 3" },
  { file: "กระปุกครีมแก้ว4.webp", title: "กระปุกครีมแก้ว แบบที่ 4" },
  { file: "กระปุกพลาสติก1.webp", title: "กระปุกพลาสติก แบบที่ 1" },
  { file: "กระปุกพลาสติก2.webp", title: "กระปุกพลาสติก แบบที่ 2" },
  { file: "กระปุกพลาสติก3.webp", title: "กระปุกพลาสติก แบบที่ 3" },
  { file: "กระปุกพลาสติก4.webp", title: "กระปุกพลาสติก แบบที่ 4" },
  { file: "img2/2-1-2048x2048.jpg.webp", title: "กระปุกครีมภาพสินค้าจริง โทนพาสเทล แบบที่ 1" },
  { file: "img2/3-1-2048x2048.jpg.webp", title: "กระปุกครีมภาพสินค้าจริง โทนม่วง แบบที่ 2" },
  { file: "img2/4-1-2048x2048.jpg.webp", title: "กระปุกครีมภาพสินค้าจริง โทนฟ้า แบบที่ 3" },
  { file: "img3/JAR.jpg.webp", title: "กระปุกครีมภาพสินค้าจริง เซ็ตหลายสี แบบที่ 4" },
  { file: "img3/100G.jpg.webp", title: "กระปุกครีมภาพสินค้าจริง แพ็กคู่ แบบที่ 5" },
  { file: "img3/9_副本.jpg.webp", title: "กระปุกครีมภาพสินค้าจริง โทนเทาฟ้า แบบที่ 6" },
  { file: "img2/1-2.jpg.webp", title: "กระปุกครีมภาพสินค้าจริง โทนแดง แบบที่ 7" },
  { file: "img3/2_副本.jpg.webp", title: "กระปุกครีมภาพสินค้าจริง โทนน้ำตาล แบบที่ 8" },
  { file: "img3/5_副本.jpg.webp", title: "กระปุกครีมภาพสินค้าจริง พร้อมช้อน แบบที่ 9" },
  { file: "img3/BY011-3.jpg.webp", title: "กระปุกครีมแก้วภาพสินค้าจริง แบบที่ 10" }
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
    image: realImage("img3/JAR.jpg.webp"),
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
    title: "ชุดขวดพลาสติกสำหรับสกินแคร์",
    category: "ขวดและดรอปเปอร์",
    image: realImage("ชุดขวดพลาสติก2.webp"),
    alt: "ผลงานชุดขวดพลาสติกสำหรับสกินแคร์ โดย Packtive Packaging"
  },
  {
    title: "ชุดกระปุกและขวดครีมพลาสติก",
    category: "กระปุกครีม",
    image: realImage("ชุดครีมพลาสติก5.webp"),
    alt: "ผลงานชุดกระปุกและขวดครีมพลาสติก โดย Packtive Packaging"
  },
  {
    title: "เซตเครื่องสำอางไลฟ์สไตล์",
    category: "เครื่องสำอาง",
    image: realImage("เครื่องสำอาง1.webp"),
    alt: "ผลงานเซตบรรจุภัณฑ์เครื่องสำอางไลฟ์สไตล์ โดย Packtive Packaging"
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
