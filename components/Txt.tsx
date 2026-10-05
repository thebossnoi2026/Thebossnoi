// แสดงข้อความ และไฮไลต์ส่วนที่ยังเป็น [ระบุ...] ให้เห็นชัด
export function Txt({ children }: { children: string }) {
  const parts = children.split(/(\[ระบุ[^\]]*\])/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("[ระบุ") ? (
          <mark key={i} className="todo">
            {p}
          </mark>
        ) : (
          p
        ),
      )}
    </>
  );
}

export function ImageSlot({ src, label, ratio }: { src: string | null; label: string; ratio: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className="img-slot" src={src} alt="" style={{ aspectRatio: ratio }} />;
  }
  return (
    <div className="img-slot img-slot--empty" style={{ aspectRatio: ratio }}>
      <Txt>{label}</Txt>
    </div>
  );
}
