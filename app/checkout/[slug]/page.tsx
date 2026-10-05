import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, getCourse } from "@/data/courses";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

// หน้าชั่วคราว: หน้าจ่ายเงินจริงจะทำในขั้นถัดไป
export default async function CheckoutPlaceholder({ params }: { params: Promise<{ slug: string }> }) {
  const course = getCourse((await params).slug);
  if (!course) notFound();
  return (
    <main className="wrap section">
      <p className="eyebrow">{course.name}</p>
      <h1 className="h2">หน้าจ่ายเงินกำลังทำอยู่</h1>
      <p className="muted">ขั้นถัดไปจะเป็นฟอร์มกรอกชื่อ อีเมล เบอร์ และจ่ายผ่าน Beam Checkout</p>
      <Link href={`/courses/${course.slug}`} className="btn btn--ghost">
        ← กลับไปหน้าคอร์ส
      </Link>
    </main>
  );
}
