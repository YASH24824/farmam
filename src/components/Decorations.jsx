import { Wheat } from "lucide-react";

/**
 * Decorative botanical elements shared across the site.
 * All are aria-hidden and purely ornamental.
 */

export function WheatDivider({ tone = "light", className = "" }) {
  const line =
    tone === "dark"
      ? "from-transparent via-gold/50 to-transparent"
      : "from-transparent via-earth/35 to-transparent";
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden="true">
      <span className={`h-px flex-1 bg-gradient-to-r ${line}`} />
      <Wheat className="h-5 w-5 text-gold" />
      <span className={`h-px flex-1 bg-gradient-to-l ${line}`} />
    </div>
  );
}

const LEAF_PATH =
  "M0 0 C 7 -8, 20 -8, 27 0 C 20 8, 7 8, 0 0 Z";

/**
 * A hand-drawn style leaf branch for section corners.
 * Inherits currentColor — control tone with a text-* class.
 */
export function LeafBranch({ className = "" }) {
  const leaves = [
    { y: 138, dir: -1, scale: 1 },
    { y: 112, dir: 1, scale: 1.05 },
    { y: 86, dir: -1, scale: 0.95 },
    { y: 60, dir: 1, scale: 0.9 },
    { y: 34, dir: -1, scale: 0.8 },
    { y: 12, dir: 1, scale: 0.7 },
  ];
  return (
    <svg
      viewBox="0 0 120 170"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M56 168 C 56 120, 54 70, 62 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {leaves.map(({ y, dir, scale }, i) => (
        <g
          key={i}
          transform={`translate(${dir === 1 ? 57 : 53} ${y}) rotate(${dir * 32}) scale(${dir * scale} ${scale})`}
        >
          <path d={LEAF_PATH} fill="currentColor" opacity="0.55" />
        </g>
      ))}
      <circle cx="63" cy="6" r="4" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

/** Small rounded botanical corner frame accent. */
export function CornerSprig({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M4 96 C 4 50, 40 8, 96 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="1 7"
      />
      <path d="M30 62 C 44 58, 56 48, 60 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M38 70 C 52 70, 66 64, 74 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
