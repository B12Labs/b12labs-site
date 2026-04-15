/**
 * ImageMosaic — 300 deterministic random images tiled as a fixed background.
 *
 * Server-rendered, no JavaScript. Picsum URLs with fixed seeds give repeatable
 * layouts across renders. Content floats above via an overlay gradient that
 * keeps text contrast accessible at all viewport sizes.
 */

const COUNT = 300;

const cells = Array.from({ length: COUNT }, (_, i) => {
  const seed = (i * 31 + 7) % 1024;
  return {
    url: `https://picsum.photos/seed/b12-${seed}/160/160`,
    key: `cell-${i}`,
  };
});

export function ImageMosaic() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none motion-reduce:opacity-[0.04]"
    >
      <div
        className="absolute inset-0 grid gap-0 opacity-[0.06] dark:opacity-[0.04]"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))",
          gridAutoRows: "96px",
          gridAutoFlow: "dense",
        }}
      >
        {cells.map((c) => (
          <img
            key={c.key}
            src={c.url}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-[var(--bg)]/75 to-[var(--bg)]" />
    </div>
  );
}
