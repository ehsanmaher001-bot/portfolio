# Assets Guide — Ehsan Maher Portfolio

This directory is organized so you can easily drop in your real assets without touching any code or altering the website's layout.

---

## 1. Portrait Photo
- **Destination Folder**: `assets/portrait/`
- **File Name**: `ehsan-portrait.jpg` (or `.png`)
- **Recommended Aspect Ratio**: 3:4 (e.g. 1200 × 1600 px)
- **Note**: The portrait placeholder in the About Me section automatically displays your photo as soon as `ehsan-portrait.jpg` is placed in this folder. If you choose a different file name, simply update the `portrait.src` path in `js/data.js`.

---

## 2. Project Previews
- **Destination Folder**: `assets/projects/`
- **File Names** (corresponding to each of the 9 projects):
  1. `optical-illusion.jpg`
  2. `pop-up-gift.jpg`
  3. `smart-safety-watch.jpg`
  4. `vacation-motion.jpg`
  5. `wasla-promo.jpg`
  6. `interactive-packaging.jpg`
  7. `wasla-uiux.jpg`
  8. `fokhara-branding.jpg`
  9. `ganoubi-redesign.jpg`
- **Recommended Aspect Ratio**: 16:10 for projects 1–8; 21:9 or panoramic for project 9 (GANOUBI).
- **Behance URLs**: Update the exact `behanceUrl` property for each project in `js/data.js` so clicking "View Full Project on Behance" takes visitors directly to your verified Behance presentation.

---

## 3. Certificates & Achievements
- **Destination Folder**: `assets/certificates/`
- **File Names**:
  1. `jetpack-certificate.jpg` (Jetpack — Packaging Design & Offset Prepress, 64 hrs)
  2. `iti-certificate.jpg` (ITI — 2D Graphic Design, 60 hrs)
  3. `nahdet-misr-certificate.jpg` (Nahdet Misr Publishing House — Design Management)
- **Behavior**: Clicking on any certificate opens the full-screen inspection document modal. When these image files are present, they will render in high-resolution inside the inspection frame.

---

## 4. Contact & Social Links
- To adjust your email address, LinkedIn profile URL, or Behance profile URL, open `js/data.js` and edit `PORTFOLIO_DATA.personalInfo.contact`.
