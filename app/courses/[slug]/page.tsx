import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courses, getCourse } from "@/data/courses";
import { SalesPage } from "@/components/SalesPage";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const course = getCourse((await params).slug);
  if (!course) return {};
  return {
    title: course.seo.title,
    description: course.seo.description,
    openGraph: { title: course.seo.title, description: course.seo.description, locale: "th_TH" },
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const course = getCourse((await params).slug);
  if (!course) notFound();
  return <SalesPage course={course} />;
}
