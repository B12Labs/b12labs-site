# b12labs-site

Marketing site for [B12 Labs](https://b12labs.com). The research lab behind [BOSS](https://boss.ceo), [Cintrico](https://cintrico.com), and [Engram](https://github.com/B12Labs/engram).

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4 (CSS-first `@import "tailwindcss"`)
- Lucide React icons
- DM Sans (Google Fonts)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — home (hero + products + thesis + hiring CTA)
- `/about` — what B12 Labs is and how we work
- `/products` — BOSS, Cintrico, Engram
- `/research` — published and in-progress work
- `/careers` — open roles + how to apply

## Deployment

Targets `b12labs.com` and `b12lab.com`, both fronted by Cloudflare DNS pointing at Vercel.

## License

All content on this site is © B12 Labs. Code is internal — open-source research lives in [github.com/B12Labs/engram](https://github.com/B12Labs/engram).
