# 🇪🇹 Legna Solutions — Digital Portfolio & Conversion Engine

### *Digital tools built by us, for us.*

---

## 📖 Overview

This is not a typical developer portfolio. It is a **high-conversion sales page** designed to convince early-to-mid-stage Ethiopian startups (with *zero* digital presence) that they need a website—even if it's just for information.

Built during a strategic return to development after a year-long burnout break, this project prioritizes:

- **Speed** (loads in < 1.5s on 3G networks)
- **Clarity** (speaks to founders about revenue, not tech jargon)
- **Mental Sustainability** (requires only 3-hour daily work windows)

**Target Market:** Addis Ababa startups (Fintech, Agritech, E-commerce, Restaurants).  
**Core Positioning:** Mobile-first, Telebirr/Chapa integration, ultra-lightweight static pages.

---

## ✨ Key Features

- **Dark / Light Mode Toggle** – Remembers user preference via `localStorage` and respects system defaults.
- **Mobile-First Design** – Scaled perfectly for the 80% of Ethiopian users who browse exclusively on phones.
- **3-Tier Pricing Model** – Static (5k–10k ETB), Dynamic (12k+ ETB), Care Plan (1,500 ETB/month).
- **Case Study Portfolio** – 3 fictitious but hyper-realistic Ethiopian businesses (Coffee exporter, Clothing brand, Restaurant) to build instant trust.
- **Gatekeeper Intake Form** – Qualifies leads before they book a call; reduces friction with a "Free Voice Note" offer.
- **Zero Third-Party Dependencies** – No `node_modules`, no build step, no maintenance headaches.

---

## 🧠 Why Vanilla HTML / CSS / JS? (The Technical Decision)

| Criteria | Vanilla Stack | React / Next.js |
| :--- | :--- | :--- |
| **Load Time (3G)** | ~0.8 – 1.2 seconds | ~4 – 6 seconds (hydration overhead) |
| **Build Complexity** | Open file → Edit → Refresh | Run `npm build`, wait for compilation |
| **Cognitive Load (Burnout)** | Minimal. No dependency conflicts. | High. Package versions, breaking changes. |
| **Maintenance** | Works forever. No security patches. | Requires quarterly updates for vulnerabilities. |

**Conclusion:** For a solo founder targeting cost-conscious, mobile-first users, proving *speed* is the #1 sales pitch. This page is our "dog food"—it demonstrates exactly how fast we can make *their* business run.

---

## 📂 Project Structure
legna-solutions-portfolio/
├── index.html # Main structure (all sections: Hero, Problem, Why, Portfolio, About, Pricing, Form)
├── style.css # Custom overrides (scrollbars, transitions, iOS zoom fix, dark mode transitions)
├── script.js # Interactivity (dark mode toggle, form handler, smooth scroll, localStorage)
└── README.md # You are here.