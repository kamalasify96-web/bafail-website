const common = {
  fill: "none",
  stroke: "#0A1A2F",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const categoryShapes: Record<string, JSX.Element> = {
  confectionery: (
    <>
      <path d="M7 9h10v6H7z" />
      <path d="M7 10L3 8v8l4-2" />
      <path d="M17 10l4-2v8l-4-2" />
    </>
  ),
  biscuits: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="9" cy="10" r="0.9" fill="#0A1A2F" stroke="none" />
      <circle cx="14.5" cy="9.5" r="0.9" fill="#0A1A2F" stroke="none" />
      <circle cx="15" cy="14" r="0.9" fill="#0A1A2F" stroke="none" />
      <circle cx="9.5" cy="14.5" r="0.9" fill="#0A1A2F" stroke="none" />
    </>
  ),
  wafers: (
    <>
      <rect x="4" y="4" width="16" height="4.5" rx="0.8" />
      <rect x="4" y="9.75" width="16" height="4.5" rx="0.8" />
      <rect x="4" y="15.5" width="16" height="4.5" rx="0.8" />
    </>
  ),
  sweets: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="M12 8 A2 2 0 0 0 15 5" />
      <path d="M12 13v7" />
    </>
  ),
  snacks: (
    <>
      <path d="M6 6l1-2h10l1 2" />
      <path d="M6 6h12l1 14a1 1 0 01-1 1H6a1 1 0 01-1-1z" />
      <path d="M9 11h6" />
    </>
  ),
  beverages: (
    <>
      <path d="M9 3h6v3l2 3v11H7V9l2-3z" />
      <path d="M9 6h6M8 12h8" />
    </>
  ),
};

export default function CategoryIcon({
  category,
  className,
}: {
  category: string;
  className?: string;
}) {
  const shapes = categoryShapes[category];
  if (!shapes) return null;
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      {shapes}
    </svg>
  );
}
