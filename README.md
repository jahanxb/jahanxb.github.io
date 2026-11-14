# Muhammad Jahanzeb Khan — Academic Homepage

**Live site:** https://jahanxb.github.io

---

## About

**Muhammad Jahanzeb Khan** (Jahanzeb Khan, JK)
Ph.D. Candidate in Computer Science, The University of Alabama
Advisor: Dr. Ahmad Alsharif
Expected completion: Spring 2027

Research: Security and trustworthiness of machine learning for connected and automated vehicles. Dissertation covers adversarial attacks on traffic sign recognition, poisoning detection in federated learning, and secure communication for electric vehicle charging.

| Profile | Link |
|---|---|
| LinkedIn | https://www.linkedin.com/in/jahanxb-khan/ |
| Google Scholar | https://scholar.google.com/citations?user=w1_pqnoAAAAJ |
| GitHub | https://github.com/jahanxb |
| CV (PDF) | `assets/cv/MuhammadJahanzebKhan_CV.pdf` |

---

## Site Overview

Single-page academic portfolio built on the iPortfolio layout (Bootstrap 4 sidebar design) with the University of Alabama crimson color scheme (`#9E1B32`). No build step required: GitHub Pages serves it directly as static HTML.

**Sections:** About, News, Biography (Education + Experience), Research, Publications, Teaching and Service.

---

## Directory Structure

```
jahanxb.github.io/
├── index.html                        # Main site (single page)
├── assets/
│   ├── css/style.css                 # All styles — UA crimson theme
│   ├── js/main.js                    # Nav toggle, AOS, Typed.js
│   ├── cv/MuhammadJahanzebKhan_CV.pdf
│   └── img/
│       ├── profile.jpg               # Profile photo (replace placeholder)
│       ├── favicon.svg               # MJK initials favicon
│       ├── research-fl-poisoning.svg         # Research figure placeholders
│       ├── research-ev-charging.svg
│       ├── research-adversarial-attacks.svg
│       ├── research-adversarial-patches.svg
│       ├── research-fl-traffic.svg
│       └── research-privacy-preserving.svg
├── robots.txt
├── sitemap.xml
└── WEBSITE_BUILD_SPEC.md             # Full content and privacy spec
```

---

## How to Update Content

All content is in `index.html`. Each section has a clear HTML comment marking it.

### Update the bio or research interests
Find `<!-- ======= About Section =======` in `index.html` and edit the paragraph text directly.

### Add a news item
Find `<!-- ======= News Section =======` and add a new `<li>` at the top of the list:
```html
<li>
  <span class="news-year">2027</span>
  Your news item here.
</li>
```

### Add a publication
Find the relevant category inside `<!-- ======= Publications Section =======` and copy an existing `<div class="pub-item">` block:
```html
<div class="pub-item">
  <span class="pub-number">[C11]</span>
  <div class="pub-content">
    <strong>Paper title here.</strong>
    <div class="pub-venue"><em>Venue name</em>, Year.</div>
    <div class="pub-role">First Author</div>
  </div>
</div>
```

### Add a research project
Find `<!-- ======= Research Section =======` and copy an existing project block. Each project has an image on the left and description on the right:
```html
<div class="row research-project" data-aos="fade-up">
  <div class="col-lg-4">
    <img src="assets/img/your-figure.jpg" class="img-fluid research-img" alt="Description">
  </div>
  <div class="col-lg-8 pt-4 pt-lg-0 content">
    <h4>Project Title</h4>
    <span class="badge-research">First Author</span>
    <span class="badge-venue">Venue 2027</span>
    <p class="body-text mt-2">Description here.</p>
  </div>
</div>
<div class="research-divider"></div>
```

### Update the CV
Replace `assets/cv/MuhammadJahanzebKhan_CV.pdf` with the new file at the same path. All links update automatically.

---

## Replacing Placeholder Images

| File to replace | What it is | Recommended size |
|---|---|---|
| `assets/img/profile.jpg` | Profile photo (sidebar + About section) | Square, at least 400x400 px, under 200 KB |
| `assets/img/research-fl-poisoning.svg` | Federated learning poisoning defense figure | 600x400 px recommended |
| `assets/img/research-ev-charging.svg` | EV charging / VehicleSec demo figure | 600x400 px |
| `assets/img/research-adversarial-attacks.svg` | Adversarial attacks figure | 600x400 px |
| `assets/img/research-adversarial-patches.svg` | Drone adversarial patches figure | 600x400 px |
| `assets/img/research-fl-traffic.svg` | Federated traffic prediction figure | 600x400 px |
| `assets/img/research-privacy-preserving.svg` | Homomorphic encryption / privacy figure | 600x400 px |

After replacing, convert `.svg` references in `index.html` to `.jpg` or `.png` as needed. Use find-and-replace on the filename, for example change `research-fl-poisoning.svg` to `research-fl-poisoning.jpg`.

---

## Deployment

The site deploys automatically via GitHub Pages on every push to `master`. No build step or Jekyll required.

To push an update:
```bash
git add .
git commit -m "Brief description of changes"
git push origin master
```

Changes are typically live within 1 to 2 minutes at https://jahanxb.github.io.

---

## Privacy Rules (do not violate)

The following must never appear anywhere on the site, in HTML source, metadata, or JSON-LD:

- Email addresses
- Phone numbers
- Street address, city of residence as a contact detail, or ZIP code
- Date of birth, nationality, or immigration status

The only contact path is LinkedIn. The only permitted external profile links are LinkedIn, Google Scholar, and GitHub (see `WEBSITE_BUILD_SPEC.md` for full rules).

---

## Colors

| Token | Hex | Use |
|---|---|---|
| Crimson | `#9E1B32` | Primary accent, links, icons, borders |
| Crimson dark | `#700D22` | Visited links, hover darken |
| Crimson hover | `#C41E3A` | Hover states |
| Sidebar background | `#160308` | Fixed left panel |
| Section alternate | `#FDF5F7` | Even-numbered sections |

To change the color scheme, update the `:root` variables at the top of `assets/css/style.css`.

---

## Libraries Used (all via CDN, no install needed)

| Library | Version | Purpose |
|---|---|---|
| Bootstrap | 4.6.2 | Grid and utilities |
| Boxicons | 2.1.4 | Navigation and UI icons |
| Academicons | 1.9.4 | Google Scholar icon |
| AOS | 2.3.4 | Scroll animations |
| Typed.js | 2.0.12 | Hero text animation |
| jQuery | 3.6.4 | Bootstrap dependency |
