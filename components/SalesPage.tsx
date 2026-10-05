import type { Course } from "@/data/courses";
import { formatBaht } from "@/data/courses";
import { ImageSlot, Txt } from "./Txt";

// หน้าขายแบบเดียว ใช้ได้กับทุกคอร์สใน data/courses.ts
export function SalesPage({ course: c }: { course: Course }) {
  const checkoutHref = `/checkout/${c.slug}`;
  const price = formatBaht(c.price);

  return (
    <>
      <header className="topbar">
        <div className="wrap topbar__in">
          <span className="brand">
            The <b>Bossnoi</b>
          </span>
          <a href="#pricing" className="topbar__cta">
            สมัครเรียน
          </a>
        </div>
      </header>

      <main>
        {/* 1. Hero */}
        <section className="hero">
          <div className="wrap hero__grid">
            <div>
              <p className="eyebrow">{c.hero.eyebrow}</p>
              <h1 className="h1">{c.hero.headline}</h1>
              <p className="lead">{c.hero.subheadline}</p>
              <p className="muted">{c.hero.audienceLine}</p>
              <ul className="chips">
                {c.hero.reassurances.map((r) => (
                  <li key={r} className="chip">
                    <Check /> {r}
                  </li>
                ))}
              </ul>
              <div className="hero__cta">
                <a href="#pricing" className="btn btn--primary btn--lg">
                  ดูราคาและสมัครเรียน
                </a>
                <a href="#curriculum" className="btn btn--ghost">
                  ดูเนื้อหาคอร์ส
                </a>
              </div>
            </div>
            <ImageSlot src={c.hero.image} label={c.hero.imageLabel} ratio="4 / 5" />
          </div>
        </section>

        {/* 2. Problem */}
        <section className="section">
          <div className="wrap">
            <h2 className="h2">{c.problem.title}</h2>
            <p className="muted section__intro">{c.problem.intro}</p>
            <div className="pains">
              {c.problem.pains.map((p, i) => (
                <article key={p.title} className="card">
                  <p className="num">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="h3">{p.title}</h3>
                  <ul className="bullets">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Why */}
        <section className="section section--alt">
          <div className="wrap">
            <h2 className="h2">{c.why.title}</h2>
            {c.why.body.map((b) => (
              <p key={b} className="quote">
                {b}
              </p>
            ))}
            <h3 className="h3 mt">ความเชื่อที่ทำให้หลายคนไม่ได้เริ่ม</h3>
            <div className="beliefs">
              {c.why.beliefs.map((b) => (
                <div key={b.myth} className="belief">
                  <p className="belief__myth">
                    <span aria-hidden>✕</span> {b.myth}
                  </p>
                  <p className="belief__truth">
                    <Check /> {b.truth}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Intro + USP */}
        <section className="section">
          <div className="wrap">
            <p className="eyebrow">{c.code}</p>
            <h2 className="h2">{c.intro.title}</h2>
            {c.intro.body.map((b) => (
              <p key={b} className="lead-sm">
                {b}
              </p>
            ))}
            <div className="usps">
              {c.intro.usps.map((u, i) => (
                <div key={u.title} className="usp">
                  <span className="usp__n">{i + 1}</span>
                  <div>
                    <h3 className="h4">{u.title}</h3>
                    <p className="muted">
                      <Txt>{u.body}</Txt>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Roadmap */}
        <section className="section section--alt">
          <div className="wrap">
            <h2 className="h2">{c.roadmap.title}</h2>
            <p className="muted section__intro">{c.roadmap.subtitle}</p>
            <ol className="roadmap">
              {c.roadmap.steps.map((s, i) => (
                <li key={s.label} className="roadmap__step">
                  <span className="roadmap__dot">{i + 1}</span>
                  <div>
                    <p className="roadmap__label">{s.label}</p>
                    <p className="muted">{s.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="path">{c.roadmap.fullPath.join("  →  ")}</p>
          </div>
        </section>

        {/* 6. Curriculum */}
        <section className="section" id="curriculum">
          <div className="wrap">
            <h2 className="h2">{c.modules.title}</h2>
            <div className="stack">
              {c.modules.items.map((m, i) => (
                <details key={m.part} className="module" open={i === 0}>
                  <summary>
                    <span className="module__part">{m.part}</span>
                    <span className="module__title">{m.outcomeTitle}</span>
                    <span className="module__chev" aria-hidden>
                      +
                    </span>
                  </summary>
                  <div className="module__body">
                    <p className="module__q">{m.question}</p>
                    <ul className="lessons">
                      {m.lessons.map((l) => (
                        <li key={l.title}>
                          <b>{l.title}</b>
                          {l.detail && <span className="muted"> — {l.detail}</span>}
                        </li>
                      ))}
                    </ul>
                    <p className="module__result">
                      <span>จบ {m.part} คุณจะมี</span>
                      {m.result}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Outcomes */}
        <section className="section section--alt">
          <div className="wrap">
            <h2 className="h2">{c.outcomes.title}</h2>
            <ul className="checks">
              {c.outcomes.items.map((o) => (
                <li key={o}>
                  <Check /> {o}
                </li>
              ))}
            </ul>
            <p className="note">{c.outcomes.note}</p>
          </div>
        </section>

        {/* 8. Bonus */}
        <section className="section">
          <div className="wrap">
            <h2 className="h2">{c.bonuses.title}</h2>
            <p className="section__intro">
              <Txt>{c.bonuses.note}</Txt>
            </p>
            <div className="bonuses">
              {c.bonuses.items.map((b) => (
                <div key={b.title} className="card card--tight">
                  <p className="tag">BONUS</p>
                  <h3 className="h4">{b.title}</h3>
                  <p className="muted">{b.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Audience */}
        <section className="section section--alt">
          <div className="wrap two-col">
            <div>
              <h2 className="h2">{c.audience.title}</h2>
              <ul className="checks">
                {c.audience.items.map((a) => (
                  <li key={a}>
                    <Check /> {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="h3">เริ่มจากตรงไหนก็ได้ เช่น…</h3>
              <ul className="bullets">
                {c.audience.startingPoints.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 10. Instructor */}
        <section className="section">
          <div className="wrap instructor">
            <ImageSlot src={c.instructor.photo} label={c.instructor.photoLabel} ratio="1 / 1" />
            <div>
              <p className="eyebrow">ผู้สอน</p>
              <h2 className="h2">{c.instructor.greeting}</h2>
              {c.instructor.story.map((s) => (
                <p key={s} className="lead-sm">
                  <Txt>{s}</Txt>
                </p>
              ))}
              <p className="muted">{c.instructor.name}</p>
            </div>
          </div>
        </section>

        {/* 11. Proof */}
        <section className="section section--alt">
          <div className="wrap">
            <h2 className="h2">{c.proof.title}</h2>
            <p className="muted section__intro">{c.proof.note}</p>
            <div className="proofs">
              {c.proof.items.map((p) => (
                <div key={p} className="card card--dashed">
                  <Txt>{p}</Txt>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. Offer / Pricing */}
        <section className="section" id="pricing">
          <div className="wrap">
            <div className="offer">
              <p className="eyebrow">{c.name}</p>
              <h2 className="h2">{c.offer.title}</h2>
              <ul className="checks">
                {c.offer.includes.map((i) => (
                  <li key={i}>
                    <Check /> <Txt>{i}</Txt>
                  </li>
                ))}
              </ul>
              <div className="offer__price">
                {c.compareAtPrice && <s className="muted">{formatBaht(c.compareAtPrice)} บาท</s>}
                <p className="price">
                  {price} <span>บาท</span>
                </p>
                <p className="small">
                  <Txt>{c.priceNote}</Txt>
                </p>
              </div>
              <a href={checkoutHref} className="btn btn--primary btn--lg btn--block">
                สมัครเรียน {c.code}
              </a>
              <p className="small center">{c.offer.paymentNote}</p>
            </div>
          </div>
        </section>

        {/* 13. FAQ */}
        <section className="section section--alt">
          <div className="wrap narrow">
            <h2 className="h2">{c.faq.title}</h2>
            <div className="stack">
              {c.faq.items.map((f) => (
                <details key={f.q} className="faq">
                  <summary>
                    {f.q}
                    <span className="module__chev" aria-hidden>
                      +
                    </span>
                  </summary>
                  <p>
                    <Txt>{f.a}</Txt>
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section final">
          <div className="wrap narrow center">
            <h2 className="h2">{c.finalCta.title}</h2>
            <p className="lead">{c.finalCta.body}</p>
            <a href={checkoutHref} className="btn btn--primary btn--lg">
              สมัครเรียน {c.code} · {price} บาท
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <p>© The Bossnoi</p>
        </div>
      </footer>

      {/* ปุ่มติดล่างจอ (มือถือ) */}
      <div className="sticky-cta">
        <div>
          <p className="sticky-cta__name">{c.code}</p>
          <p className="sticky-cta__price">{price} บาท</p>
        </div>
        <a href={checkoutHref} className="btn btn--primary">
          สมัครเรียน
        </a>
      </div>
    </>
  );
}

function Check() {
  return (
    <svg className="ico" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
