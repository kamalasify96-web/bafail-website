import { categoryShapes } from "@/components/ui/CategoryIcon";

// [category, x, y, rotation, scale]
const tile: [string, number, number, number, number][] = [
  ["confectionery", 20, 18, -14, 2.4],
  ["biscuits", 150, 60, 10, 2.1],
  ["wafers", 270, 14, 18, 2.2],
  ["sweets", 395, 52, -20, 2.5],
  ["snacks", 60, 140, 12, 2.3],
  ["beverages", 205, 160, -8, 2.4],
  ["confectionery", 330, 170, 22, 2.0],
  ["biscuits", 445, 150, -12, 2.3],
  ["sweets", 15, 250, 16, 2.1],
  ["wafers", 130, 262, -18, 2.2],
  ["snacks", 285, 270, 8, 2.1],
  ["beverages", 410, 262, 20, 2.3],
];

const W = 520;
const H = 340;

export default function CategoryPattern() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.1] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
    >
      <defs>
        <pattern id="category-pattern" width={W} height={H} patternUnits="userSpaceOnUse">
          {tile.map(([cat, x, y, rot, s], i) => (
            <g
              key={i}
              transform={`translate(${x} ${y}) rotate(${rot} ${12 * s} ${12 * s}) scale(${s})`}
              fill="none"
              stroke="#0A1A2F"
              strokeWidth={1.5 / s + 0.3}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {categoryShapes[cat]}
            </g>
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#category-pattern)" />
    </svg>
  );
}
