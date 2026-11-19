# Free Diff Checker

**Live:** [free-diff-checker.web-free.site](https://free-diff-checker.web-free.site)

Browser-based text and file comparison for [web-free.site](https://web-free.site). Powered by the MIT-licensed [diffvoid](https://github.com/timoheimonen/diffvoid) engine by Timo Heimonen.

## Features

- Side-by-side and unified diff views
- Ignore whitespace / ignore case
- Local file drop (UTF-8, UTF-16, Windows-1252)
- Change navigation, merge with undo, `.patch` export
- Client-side processing (text is not uploaded for comparison)

## Development

```bash
npm test
cd public && python3 -m http.server 8000
```

Static pages use clean URLs when served via Cloudflare Workers (`wrangler.toml`); a plain local server may need `.html` suffixes.

## License

MIT — see [LICENSE](LICENSE) (Copyright (c) 2026 Timo Heimonen). Site branding and deployment files in this repository are maintained for web-free.site.