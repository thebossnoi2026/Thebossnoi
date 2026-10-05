// ข้อมูลคอร์สทั้งหมดอยู่ในไฟล์นี้ไฟล์เดียว
// เพิ่มคอร์สใหม่ = คัดลอกก้อน CCM ด้านล่าง แล้วแก้ข้อความ เว็บจะสร้างหน้า /courses/<slug> ให้เอง
// ข้อความไหนยังไม่มีข้อมูลจริง ให้เขียนว่า [ระบุ: ...] หน้าเว็บจะไฮไลต์ไว้ให้เห็น

export type Pain = { title: string; points: string[] };
export type Belief = { myth: string; truth: string };
export type Usp = { title: string; body: string };
export type RoadmapStep = { label: string; detail: string };
export type Module = {
  part: string;
  outcomeTitle: string; // เขียนเป็นผลลัพธ์ก่อน
  question: string;
  lessons: { title: string; detail?: string }[];
  result: string;
};
export type Bonus = { title: string; detail: string };
export type Faq = { q: string; a: string };

export type Course = {
  slug: string;
  code: string;
  name: string;
  tagline: string;
  price: number; // บาท
  compareAtPrice: number | null; // ราคาปกติ (ใส่ null ถ้ายังไม่ยืนยัน)
  priceNote: string;
  seo: { title: string; description: string };

  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    audienceLine: string;
    reassurances: string[];
    image: string | null; // ไฟล์ใน /public เช่น "/images/ccm/hero.jpg"
    imageLabel: string;
  };
  problem: { title: string; intro: string; pains: Pain[] };
  why: { title: string; body: string[]; beliefs: Belief[] };
  intro: { title: string; body: string[]; usps: Usp[] };
  roadmap: { title: string; subtitle: string; steps: RoadmapStep[]; fullPath: string[] };
  modules: { title: string; items: Module[] };
  outcomes: { title: string; items: string[]; note: string };
  bonuses: { title: string; note: string; items: Bonus[] };
  audience: { title: string; items: string[]; startingPoints: string[] };
  instructor: {
    name: string;
    greeting: string;
    story: string[];
    photo: string | null;
    photoLabel: string;
  };
  proof: { title: string; note: string; items: string[] };
  offer: { title: string; includes: string[]; paymentNote: string };
  faq: { title: string; items: Faq[] };
  finalCta: { title: string; body: string };

  // ใช้ในขั้นจ่ายเงิน/หน้าขอบคุณ (ยังไม่ได้ทำ)
  checkout: {
    orderBumps: { slug: string; label: string; price: string }[];
    nextCourseSlug: string | null;
  };
};

export const courses: Course[] = [
  {
    slug: "ccm",
    code: "CCM",
    name: "Course Creator Masterclass",
    tagline: "เปลี่ยนความรู้ให้เป็นคอร์สออนไลน์ที่ขายได้จริง",
    price: 4590,
    compareAtPrice: null, // [ระบุ: ราคาปกติ 9,990 รอพี่ลีโอยืนยัน]
    priceNote: "[ระบุ: เงื่อนไขราคาเปิดตัว เช่น 10 คนแรก — รอยืนยัน]",
    seo: {
      title: "Course Creator Masterclass (CCM) | The Bossnoi",
      description:
        "เปลี่ยนความรู้ให้เป็นคอร์สออนไลน์ที่ขายได้จริง สอนระบบตั้งแต่สร้าง Product, หน้าร้าน, Content, Facebook Ads จนถึงปิดการขาย",
    },

    hero: {
      eyebrow: "Course Creator Masterclass · The Bossnoi",
      headline: "เปลี่ยนความรู้ให้เป็นคอร์สออนไลน์ที่ขายได้จริง",
      subheadline:
        "ไม่ได้สอนแค่ “สร้างคอร์ส” แต่สอนระบบตั้งแต่สร้าง Product จนถึงการหาลูกค้าและขาย",
      audienceLine:
        "สำหรับ Coach, Trainer, ครู, ผู้เชี่ยวชาญ, Freelancer, Creator และเจ้าของธุรกิจ ที่มีความรู้ แต่ยังไม่รู้จะเริ่มเปลี่ยนเป็นรายได้จากตรงไหน",
      reassurances: [
        "ยังไม่รู้ว่าจะขายอะไร ก็เริ่มได้",
        "ยังไม่มีคอร์ส ไม่มีเพจ ก็เริ่มได้",
        "ไม่ต้องเป็น Influencer",
        "ไม่เคยยิงแอดก็เรียนได้",
      ],
      image: null,
      imageLabel: "[ระบุ: รูปปกคอร์ส / รูปพี่ลีโอ]",
    },

    problem: {
      title: "มีความรู้ แต่ยังเปลี่ยนเป็น Product และรายได้ไม่ได้?",
      intro: "ถ้าคุณติดอยู่ตรงไหนสักข้อด้านล่างนี้ ผมเข้าใจครับ เพราะเป็นจุดที่ผมเห็นคนติดบ่อยที่สุด",
      pains: [
        {
          title: "มีความรู้ แต่ไม่รู้จะขายอะไร",
          points: [
            "ทำงานมาหลายปี มีประสบการณ์ แต่พอถามว่า “จะเอาอะไรไปทำเป็นสินค้า?” กลับตอบไม่ได้",
            "“เรื่องที่เรารู้มันธรรมดาเกินไปหรือเปล่า?”",
            "“จะมีใครยอมจ่ายเงินเรียนไหม?”",
          ],
        },
        {
          title: "อยากทำคอร์ส แต่ไม่รู้จะเริ่มตรงไหน",
          points: [
            "มีไอเดียแล้ว แต่ติดเรื่องเรียงบท สอนเยอะแค่ไหน ตั้งราคา ทำ Offer ใช้ Platform อะไร",
            "คิดเยอะมาก แต่ไม่เคย Launch จริงสักที",
          ],
        },
        {
          title: "ทำสินค้าได้ แต่ไม่มีคนรู้จัก",
          points: [
            "ทำคอร์สเสร็จแล้ว แต่ไม่มีคนดู ไม่มีคนรู้ว่าเราสอนอะไร",
            "โพสต์ Content แบบไม่มีทิศทาง หรือโพสต์แต่ขายจนคนไม่สนใจ",
          ],
        },
        {
          title: "อยากยิง Ads แต่ไม่รู้เริ่มยังไง",
          points: [
            "ไม่เข้าใจ Creative, Copy, Audience, Objective, Budget และตัวเลขหลังบ้าน",
            "กลัวเสียเงิน หรือเคยยิงแล้วไม่รู้ว่าแอดตัวไหนควรไปต่อ ตัวไหนควรหยุด",
          ],
        },
        {
          title: "มีคนทัก แต่ปิดการขายไม่ได้",
          points: [
            "ลูกค้าถามแล้วหาย",
            "เจอ “แพง” “ขอคิดดูก่อน” “เดี๋ยวค่อยกลับมา” “ต่างจากที่อื่นยังไง?” แล้วไม่รู้จะตอบยังไง",
          ],
        },
      ],
    },

    why: {
      title: "สิ่งที่ขาด ไม่ใช่ความรู้ แต่คือ “ระบบ”",
      body: [
        "ปัญหาที่ผมเห็นบ่อยไม่ใช่คนไม่มีความรู้ครับ แต่คือมีความรู้เยอะจนไม่รู้ว่าจะหยิบเรื่องไหนออกมาขายก่อน",
        "และทำคอร์สเสร็จ ก็ไม่ได้แปลว่าจะขายได้ เพราะยังมีอีกหลายเรื่องที่ต้องต่อกัน ทั้ง Offer, Content, Ads และการปิดการขาย",
      ],
      beliefs: [
        {
          myth: "ต้องมีคนติดตามเยอะก่อน ถึงจะขายคอร์สได้",
          truth: "ไม่จำเป็นครับ เริ่มจาก Problem + Offer + Content + การกระจายให้คนเห็น",
        },
        {
          myth: "ต้องเก่งที่สุดก่อน ถึงจะสอนได้",
          truth: "แค่มีความรู้ที่ช่วยคนกลุ่มหนึ่งไปจากจุด A ไปจุด B ได้",
        },
        {
          myth: "ต้องทำคอร์สให้เสร็จก่อน ค่อยเริ่มขาย",
          truth: "ควรเช็กว่ามีคนอยากได้จริงและเก็บ Feedback ก่อน จะได้ไม่เสียเวลาสร้างทั้งหมด",
        },
        {
          myth: "ทำคอร์สเสร็จแล้ว เดี๋ยวคนก็ซื้อเอง",
          truth: "Product อย่างเดียวไม่พอ ต้องมี Content, Marketing และ Sales",
        },
        {
          myth: "ยิง Ads แล้วจะขายได้เลย",
          truth: "ถ้า Offer, Message หรือ Creative ยังไม่ดี Ads ก็แก้ให้ไม่ได้ทุกอย่าง",
        },
      ],
    },

    intro: {
      title: "CCM คืออะไร",
      body: [
        "คอร์สที่พาคนมีความรู้ ตั้งแต่ยังไม่รู้ว่าจะขายอะไร ไปจนถึงมีสินค้า มีหน้าร้าน มีคอนเทนต์ รู้วิธียิงแอด และมีระบบปิดการขายของตัวเอง",
        "ความรู้หนึ่งชุดต่อยอดได้หลายแบบ ไม่จำเป็นต้องเป็นคอร์สออนไลน์อย่างเดียว เช่น eBook, Workshop, Zoom Class, Coaching, Digital Product หรือบริการ",
      ],
      usps: [
        { title: "เริ่มได้แม้ยังไม่รู้ว่าจะขายอะไร", body: "ไม่ต้องมีคอร์สพร้อมก่อน เราเริ่มจากหาว่าความรู้ไหนของคุณช่วยคนได้" },
        { title: "ไม่ได้หยุดแค่สร้างคอร์ส", body: "สอนต่อไปถึง Content, Ads และการขาย" },
        { title: "ใช้ AI เป็นผู้ช่วย", body: "โดยเฉพาะช่วงคิดไอเดีย Content และ Copy" },
        { title: "เหมาะกับคนเริ่มจากศูนย์", body: "วางตั้งแต่ Product ไปจนถึงระบบขาย" },
        {
          title: "มาจากระบบที่ผมใช้กับธุรกิจจริง",
          body: "[ระบุ: ตัวอย่างธุรกิจ/ผลงานของพี่ลีโอที่ยืนยันว่าเปิดเผยได้]",
        },
      ],
    },

    roadmap: {
      title: "5 ระบบที่คุณจะได้สร้าง",
      subtitle: "จากความรู้ในหัว ไปจนถึงลูกค้าคนแรก",
      steps: [
        { label: "Product", detail: "หาให้เจอว่าจะขายอะไร ให้ใคร ราคาเท่าไร" },
        { label: "หน้าร้าน", detail: "เพจ พื้นที่เรียน ระบบรับเงิน และส่งมอบ" },
        { label: "Content", detail: "ให้คนรู้จัก เชื่อ และอยากได้" },
        { label: "Facebook Ads", detail: "หาลูกค้าเพิ่ม ไม่ต้องรอ Organic อย่างเดียว" },
        { label: "ปิดการขาย", detail: "คุยกับลูกค้า ตอบข้อโต้แย้ง และต่อยอด" },
      ],
      fullPath: [
        "หา Problem",
        "สร้าง Product",
        "วาง Offer",
        "สร้าง Page",
        "สร้าง Content",
        "สร้าง Personal Brand",
        "ยิง Ads",
        "คุยลูกค้า",
        "ปิดการขาย",
        "ส่งมอบ",
        "เก็บ Feedback",
        "พัฒนาสินค้า",
      ],
    },

    modules: {
      title: "เนื้อหาในคอร์ส",
      items: [
        {
          part: "PART 1",
          outcomeTitle: "หาให้เจอว่าความรู้อะไรของคุณควรเอาไปขาย",
          question: "“ผมควรขายอะไร?”",
          lessons: [
            { title: "เข้าใจรูปแบบสินค้าความรู้", detail: "Online Course, eBook, Workshop, Zoom, Coaching, Digital Product" },
            { title: "Mindset ก่อนสร้างสินค้า", detail: "ไม่ได้เริ่มจาก “เราอยากสอนอะไร” อย่างเดียว แต่ดูว่าคนมีปัญหาอะไร และความรู้ของเราช่วยเรื่องไหนได้" },
            { title: "หาไอเดียสิ่งที่จะขาย", detail: "หาจุดตัดของความรู้ ทักษะ ประสบการณ์ และปัญหาของลูกค้า" },
            { title: "ใช้ AI ช่วยหาไอเดีย Course / Product" },
            { title: "สร้าง Offer", detail: "ลูกค้าจะได้อะไร แก้ปัญหาอะไร ผลลัพธ์คืออะไร ทำไมควรซื้อ" },
            { title: "ตั้งราคา", detail: "วิธีคิดราคาสินค้าความรู้ ไม่ได้ตั้งจากจำนวนวิดีโออย่างเดียว" },
          ],
          result: "ไอเดียสินค้า + กลุ่มลูกค้า + Offer + ราคาเบื้องต้น",
        },
        {
          part: "PART 2",
          outcomeTitle: "มีหน้าร้านและพื้นที่ส่งมอบสินค้าที่พร้อมใช้",
          question: "“มี Product แล้ว จะเอาไปขายและส่งให้ลูกค้าที่ไหน?”",
          lessons: [
            { title: "ตั้งชื่อเพจ", detail: "ให้สัมพันธ์กับตัวตน ความเชี่ยวชาญ และสิ่งที่ขาย" },
            { title: "สร้าง / ปรับ Facebook Page", detail: "ให้คนเข้ามาแล้วรู้ว่าคุณคือใคร ช่วยเรื่องอะไร มีอะไรขาย" },
            { title: "Branding เบื้องต้น", detail: "Canva, Logo, Visual, หน้าช่อง — ไม่ต้องเป็น Designer" },
            { title: "สร้างพื้นที่เรียน", detail: "Group, Video, Learning Area" },
            { title: "ระบบรับเงิน" },
            { title: "ระบบส่งมอบ", detail: "หลังลูกค้าซื้อ จะได้รับคอร์ส ไฟล์ eBook หรือสิทธิ์เข้ากลุ่มอย่างไร" },
          ],
          result: "เพจ / หน้าร้าน + พื้นที่เรียนหรือส่งมอบ Product พร้อมใช้งาน",
        },
        {
          part: "PART 3",
          outcomeTitle: "ทำให้คนรู้จักคุณด้วย Content และ Personal Brand",
          question: "“มีของขายแล้ว จะทำให้คนรู้จักเราได้อย่างไร?”",
          lessons: [
            { title: "Value Content", detail: "Content ที่ช่วยคนก่อนขาย: แก้ปัญหา ให้ Insight ท้าทายความเชื่อ ให้วิธีที่นำไปใช้ได้" },
            { title: "Selling Content", detail: "Content ที่พาคนเข้าสู่ Offer" },
            { title: "สูตรและโครงสร้าง Content", detail: "ให้คนเข้าใจ สนใจ ดูต่อ และเชื่อมไปสู่สินค้า" },
            { title: "Hook", detail: "เปิด Content ให้คนหยุดดู" },
            { title: "AI ช่วยคิด Content", detail: "ไอเดีย Hook Copy ทิศทาง — โดยยังมีตัวตนของคุณ" },
            { title: "Personal Brand และปรับหน้าช่อง", detail: "ให้คนรู้ทันทีว่าคุณคือใคร เก่งเรื่องอะไร ช่วยเขาเรื่องอะไร" },
          ],
          result: "ทิศทาง Content + แนวทาง Personal Brand + ข้อความขาย + แผนสื่อสารสินค้า",
        },
        {
          part: "PART 4",
          outcomeTitle: "เริ่มใช้ Facebook Ads หาลูกค้าได้",
          question: "“ถ้าไม่อยากรอ Organic อย่างเดียว จะหาลูกค้าเพิ่มอย่างไร?”",
          lessons: [
            { title: "เตรียมก่อนยิง Ads", detail: "Product, Offer, Page และ Creative พร้อมหรือยัง" },
            { title: "Creative และ Copy", detail: "ให้สัมพันธ์กับ Audience, Pain และ Offer" },
            { title: "Audience", detail: "จะยิงหาใคร" },
            { title: "Ads Setup และ Objective", detail: "ตั้ง Campaign เลือกวัตถุประสงค์ให้ตรงกับสิ่งที่ต้องการ" },
            { title: "Budget", detail: "เริ่มต้นจัดงบ" },
            { title: "อ่านผล Ads", detail: "ตัวไหนไปต่อ ตัวไหนหยุด ตัวไหนควรปรับ" },
          ],
          result: "เข้าใจพื้นฐาน และเริ่มใช้ Facebook Ads หาลูกค้าได้",
        },
        {
          part: "PART 5",
          outcomeTitle: "เปลี่ยนคนสนใจให้เป็นลูกค้า และดูแลต่อได้",
          question: "“มีคนสนใจแล้ว จะเปลี่ยนเป็นลูกค้าอย่างไร?”",
          lessons: [
            { title: "การคุยกับลูกค้า", detail: "ไม่ใช่ตอบราคาอย่างเดียว แต่เข้าใจว่าเขามีปัญหาอะไร" },
            { title: "Diagnose Problem", detail: "ถามและฟังให้รู้ว่า Product ของเราเหมาะกับเขาไหม" },
            { title: "Closing และ Objection Handling", detail: "รับมือ “แพง” “ขอคิดดูก่อน” และข้อโต้แย้งอื่น" },
            { title: "Sales Script" },
            { title: "Upsell", detail: "เช่น eBook → Course → Zoom → Coaching" },
            { title: "ส่งมอบ และเก็บ Feedback", detail: "นำกลับมาปรับ Product, Content, Offer และ Sales" },
          ],
          result: "รู้วิธีคุยกับลูกค้า ปิดการขาย รับมือข้อโต้แย้ง และต่อยอดลูกค้าเดิม",
        },
      ],
    },

    outcomes: {
      title: "เรียนจบแล้ว คุณจะ…",
      items: [
        "รู้ว่าความรู้อะไรของตัวเองนำมาทำ Product ได้",
        "รู้ว่าควรขายให้ใคร",
        "สร้าง Offer และตั้งราคาได้อย่างมีหลักคิด",
        "มีเพจ / หน้าร้าน และพื้นที่ส่งมอบสินค้า",
        "รู้ว่าจะทำ Content อะไร และเริ่มสร้าง Personal Brand ได้",
        "ใช้ AI ช่วยทำงานได้เร็วขึ้น",
        "เข้าใจพื้นฐาน Facebook Ads และอ่านผลเบื้องต้นได้",
        "รู้วิธีคุยและปิดการขาย",
        "นำ Feedback กลับไปพัฒนา Product ได้",
      ],
      note: "คอร์สนี้ไม่การันตีรายได้ครับ สิ่งที่คุณจะได้คือระบบและความเข้าใจที่นำไปใช้ต่อได้",
    },

    bonuses: {
      title: "Bonus",
      note: "[ระบุ: ยืนยันกับพี่ลีโอว่า Bonus ชุดนี้ยังแจกครบ]",
      items: [
        { title: "AI Niche Prompt", detail: "Prompt ช่วยหา Niche / ไอเดียจากความรู้ของตัวเอง" },
        { title: "Course Idea Worksheet", detail: "ช่วยจัดความคิดว่าสร้าง Product อะไรได้บ้าง" },
        { title: "Offer Builder Template", detail: "Template ช่วยวาง Offer" },
        { title: "Selling Content Formula", detail: "สูตรวาง Content สำหรับขาย" },
        { title: "Course Launch Checklist", detail: "เช็กลิสต์ก่อนเปิดขาย" },
      ],
    },

    audience: {
      title: "คอร์สนี้เหมาะกับใคร",
      items: [
        "Coach / Trainer",
        "ครู / อาจารย์",
        "ผู้เชี่ยวชาญเฉพาะทาง / Consultant",
        "Freelancer / Creator",
        "เจ้าของธุรกิจ",
        "คนที่มีทักษะหรือประสบการณ์ แต่ไม่รู้จะเริ่มสอนอะไร",
        "คนที่อยากทำ Online Course, eBook, Workshop, Coaching หรือ Digital Product",
        "คนที่เริ่มจากศูนย์และยังไม่มีระบบ",
      ],
      startingPoints: [
        "ยังไม่รู้ว่าจะสอนเรื่องอะไร",
        "ไม่รู้ว่าความรู้ของตัวเองมีคนซื้อไหม",
        "ไม่รู้ควรตั้งราคาเท่าไร",
        "ยังไม่มีเพจ ไม่มี Personal Brand",
        "ไม่เคยยิง Ads",
        "ไม่รู้จะตอบลูกค้ายังไง",
      ],
    },

    instructor: {
      name: "ลีโอ · The Bossnoi",
      greeting: "สวัสดีครับ ผมลีโอ",
      story: [
        "[ระบุ: เรื่องราวการสร้างธุรกิจจากความรู้ของพี่ลีโอ]",
        "[ระบุ: สิ่งที่ลองผิดลองถูกมา และทำไมถึงจัดเป็น CCM]",
      ],
      photo: null,
      photoLabel: "[ระบุ: รูปพี่ลีโอ]",
    },

    proof: {
      title: "ผลงานและเสียงจากผู้เรียน",
      note: "ใส่เฉพาะข้อมูลที่มีหลักฐาน และพี่ลีโออนุมัติแล้ว",
      items: [
        "[ระบุ: รีวิวผู้เรียน 1 — ชื่อ อาชีพ สิ่งที่เปลี่ยนไป]",
        "[ระบุ: รีวิวผู้เรียน 2]",
        "[ระบุ: Case Study / Product ที่พี่ลีโอเคยสร้าง]",
      ],
    },

    offer: {
      title: "สิ่งที่คุณจะได้รับ",
      includes: [
        "คอร์สวิดีโอ 5 Part เรียนด้วยตัวเอง",
        "Bonus 5 ชิ้น [ระบุ: รอยืนยัน]",
        "[ระบุ: จำนวนบทเรียน / ความยาวรวม]",
        "[ระบุ: เรียนผ่าน Skool ได้นานแค่ไหน]",
        "[ระบุ: Community / Q&A / Support ผ่าน LINE OA]",
      ],
      paymentNote: "จ่ายได้ทั้งบัตรและ PromptPay",
    },

    faq: {
      title: "คำถามที่พบบ่อย",
      items: [
        {
          q: "ไม่มีผู้ติดตามเลย เริ่มได้ไหม?",
          a: "ได้ครับ ไม่จำเป็นต้องเป็น Influencer หรือมีผู้ติดตามหลักแสนก่อน สิ่งที่สำคัญกว่าคือรู้ว่าจะช่วยใคร แก้ปัญหาอะไร และสื่อสารยังไง",
        },
        {
          q: "ยังไม่รู้ว่าจะสอนอะไร เรียนได้ไหม?",
          a: "ได้ครับ Part 1 ทั้งหมดคือการหาว่าความรู้ไหนของคุณควรเอาไปขาย และมี AI ช่วยหาไอเดียด้วย",
        },
        {
          q: "ยังไม่มีคอร์สเลย เรียนได้ไหม?",
          a: "ได้ครับ คอร์สนี้ออกแบบให้เริ่มตั้งแต่ยังไม่มีสินค้า",
        },
        {
          q: "ไม่เคยยิง Ads / ไม่มีพื้นฐาน Marketing ได้ไหม?",
          a: "ได้ครับ Part 4 สอนพื้นฐาน Facebook Ads ตั้งแต่เตรียมตัว ตั้งค่า จนถึงอ่านผล",
        },
        { q: "ต้องถ่ายวิดีโอเก่งไหม?", a: "[ระบุ]" },
        { q: "ใช้ AI ไม่เป็น เรียนได้ไหม?", a: "[ระบุ]" },
        { q: "เรียนผ่านช่องทางไหน เรียนได้นานแค่ไหน?", a: "[ระบุ: Skool / ระยะเวลา]" },
        { q: "จ่ายเงินแล้วเข้าเรียนยังไง?", a: "[ระบุ: ขั้นตอนเข้า Skool หลังจ่ายเงิน]" },
      ],
    },

    finalCta: {
      title: "ถ้าคุณมีความรู้อยู่แล้ว",
      body: "สิ่งที่ขาดอาจไม่ใช่ความรู้เพิ่ม แต่คือระบบที่พาความรู้นั้นออกไปขายครับ",
    },

    checkout: {
      orderBumps: [
        { slug: "[ระบุ]", label: "[ระบุ: คอร์สเสริมราคาพิเศษ]", price: "[ระบุ]" },
      ],
      nextCourseSlug: null, // [ระบุ: คอร์สถัดไปที่จะเสนอในหน้าขอบคุณ]
    },
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function formatBaht(amount: number): string {
  return amount.toLocaleString("th-TH");
}
