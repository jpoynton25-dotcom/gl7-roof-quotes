# GL7 Roof Quotes

**Request help from local roofers — fast**

A Bark-style lead intake platform for emergency roof repairs in Lechlade (GL7) and surrounding areas. Homeowners submit a roofing request via a multi-step form; a local roofing professional receives the lead and contacts them.

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Building for Production

```bash
npm run build
```

Output goes to `dist/`. Deploy to any static host.

---

## Form Submission

The form currently posts to a **Formspree** endpoint defined in `src/config.ts`:

```ts
formEndpoint: "https://formspree.io/f/YOUR_FORM_ID"
```

### Options:

**Formspree** (current setup):
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Replace `YOUR_FORM_ID` in config.ts

**Netlify Forms**:
1. Add `data-netlify="true"` to the form element
2. Netlify will handle submissions automatically

**Custom endpoint**:
Replace `formEndpoint` with your own API URL.

---

## Configuration

All key settings are in `src/config.ts`:

| Setting | Description |
|---------|-------------|
| `platformName` | Brand name shown throughout |
| `phone` | Phone number |
| `email` | Contact email |
| `primaryArea` | Main location focus |
| `areas` | List of service areas |
| `formEndpoint` | Form submission URL |
| `operator` | Legal operator details (for privacy/terms) |

---

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Homepage with hero, how it works, issues, CTA |
| `/request` | Multi-step request form (7 steps) |
| `/how-it-works` | Explainer page |
| `/areas` | Service areas with postcode guidance |
| `/faq` | Frequently asked questions |
| `/roof-leak-help` | Emergency guidance for leaks |
| `/privacy` | Privacy policy (operator disclosed) |
| `/terms` | Terms of service |
| `/contact` | Contact page with form |
| `/thank-you` | Post-submission confirmation |

---

## Branding Rules

- SN6 Roofing only appears in footer small print, Privacy Policy, Terms, and Contact page
- Platform brand is "GL7 Roof Quotes" throughout
- Language must be accurate: "we match you with a suitable local roofing professional"
- Do NOT claim multiple quotes or guaranteed availability

---

## Tech Stack

- Vite + React + TypeScript
- React Router for routing
- Vanilla CSS (no Tailwind/framework)
- Formspree for form handling

---

## SEO

- Unique meta titles/descriptions per page
- sitemap.xml and robots.txt included
- WebSite + LocalBusiness schema on homepage
- OpenGraph tags on all pages

---

## Deploying

### Netlify (recommended)
1. Push to GitHub
2. Connect repo in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel / Cloudflare Pages
Same settings: build with `npm run build`, publish `dist/`.

---

## License

Proprietary — all rights reserved.
