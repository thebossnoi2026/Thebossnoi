import Link from "next/link";
import { courses, formatBaht } from "@/data/courses";

export default function Home() {
  return (
    <main className="wrap section">
      <p className="eyebrow">The Bossnoi</p>
      <h1 className="h1">คอร์สออนไลน์</h1>
      <div className="stack">
        {courses.map((c) => (
          <Link key={c.slug} href={`/courses/${c.slug}`} className="card card--link">
            <p className="eyebrow">{c.code}</p>
            <h2 className="h3">{c.name}</h2>
            <p className="muted">{c.tagline}</p>
            <p className="price-sm">{formatBaht(c.price)} บาท</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
