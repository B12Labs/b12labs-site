/**
 * B12 Labs logo — "Cognitive hub"
 *
 * 12 dots arranged on a circle around a central brand-colored hub.
 * Four cardinal dots carry the B12 pastel palette and connect to the hub
 * via subtle lines — a minimal diagram of a cognitive system with four
 * peripheral faculties feeding a central core.
 */

interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  inverted?: boolean;
  className?: string;
}

const ACCENT_COLORS = ["#5DCAA5", "#8B7CF0", "#E8C86A", "#E89A7A"] as const;

export function Logo({
  size = 28,
  showWordmark = false,
  inverted = false,
  className = "",
}: LogoProps) {
  const dotColor = inverted ? "#d6d3d1" : "#78716c";
  const centerColor = "#0F8A8A";
  const lineColor = inverted ? "rgba(255,255,255,0.18)" : "rgba(15,138,138,0.25)";

  const cx = 32;
  const cy = 32;
  const R = 22;

  const dots = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 - 90) * (Math.PI / 180);
    return {
      x: cx + R * Math.cos(angle),
      y: cy + R * Math.sin(angle),
      cardinal: i % 3 === 0,
      accentIndex: i / 3,
    };
  });

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="B12 Labs"
      >
        {/* Connection lines from center to cardinal dots */}
        {dots
          .filter((d) => d.cardinal)
          .map((d, i) => (
            <line
              key={`line-${i}`}
              x1={cx}
              y1={cy}
              x2={d.x}
              y2={d.y}
              stroke={lineColor}
              strokeWidth="1"
              strokeLinecap="round"
            />
          ))}

        {/* Peripheral dots */}
        {dots.map((d, i) => {
          if (d.cardinal) {
            return (
              <circle
                key={`dot-${i}`}
                cx={d.x}
                cy={d.y}
                r="3"
                fill={ACCENT_COLORS[d.accentIndex]}
              />
            );
          }
          return (
            <circle key={`dot-${i}`} cx={d.x} cy={d.y} r="1.6" fill={dotColor} />
          );
        })}

        {/* Center hub */}
        <circle
          cx={cx}
          cy={cy}
          r="5"
          fill={centerColor}
          stroke={inverted ? "#fff" : "#fff"}
          strokeWidth="1.5"
        />
        <circle cx={cx} cy={cy} r="2" fill="#ffffff" opacity="0.9" />
      </svg>

      {showWordmark && (
        <span className="flex items-baseline gap-0.5 leading-none">
          <span
            className={`text-[15px] font-bold tracking-[-0.03em] ${
              inverted ? "text-white" : "text-stone-900 dark:text-stone-50"
            }`}
          >
            B12
          </span>
          <span
            className={`text-[15px] font-light tracking-[-0.03em] ${
              inverted ? "text-white/70" : "text-stone-400 dark:text-stone-500"
            }`}
          >
            Labs
          </span>
        </span>
      )}
    </span>
  );
}
