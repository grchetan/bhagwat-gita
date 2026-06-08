# 🌸 Bhagavad Gita — The Celestial Song of God 🌸

[![React Version](https://img.shields.io/badge/react-v19.2.0-blue.svg)](https://react.dev/)
[![Vite Version](https://img.shields.io/badge/vite-v7.2.5-purple.svg)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-v5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, high-fidelity, responsive React web application designed to present the timeless spiritual wisdom of the Bhagavad Gita. This project features immersive dual-language (Hindi and English) translations, word-by-word Sanskrit breakdowns, and practical life lessons, all packaged inside a premium, glassmorphic, and spiritually rich user experience.

🔗 **Live Demo:** [https://grchetan.github.io/bhagwat-gita](https://grchetan.github.io/bhagwat-gita)

---

## ✨ Key Features

- **Premium Spiritual Visual Design:** Built with curated design tokens (saffron, gold, and deep temple maroon) using Cinzel, Lora, and Tiro Devanagari Sanskrit typography for a premium, sacred feel.
- **Asymmetrical 4K Hero Canvas:** Features a stunning, custom-generated 4K illustration of Lord Krishna and Prince Arjuna on their golden chariot, centered perfectly to prevent overlap with responsive typography.
- **Detailed Shlok Analysis (Sanskrit, Hindi, English):**
  - Original **संस्कृत** Devanagari shlok text.
  - **Transliteration** for accurate phonetic pronunciation.
  - **Word-by-word meanings** (शब्दार्थ) in Hindi.
  - **Hindi explanations** (6-8 lines) providing rich contextual breakdowns.
  - **English explanations** (6-8 lines) explaining deep metaphysical meanings.
  - **Real-world Life Lessons** (3-4 lines) to apply the teachings in daily modern life.
- **Floating Glassmorphic Navbar:**
  - **Desktop:** Capsule-like navbar that floats with a blur backdrop, gold border trim, and animated saffron links that expand from the center on hover.
  - **Mobile:** Auto-expanding edge-to-edge layout with a fixed, full-height sliding glass drawer menu.
- **Interactive Chapter Navigation:** A sidebar navigator allowing readers to easily switch between verses, complete with responsive mobile toggles.
- **Peacock Feather (Mor Pankh) Animations:** Features detailed custom-styled vector SVG peacock feathers with gentle floating animations and low-opacity parchment watermarks representing the presence of Lord Krishna.
- **100% Offline Asset Bundling:** All spiritual illustrations, paintings, and icons are bundled locally in the asset pipeline to ensure 100% offline uptime and bypass strict network or cross-origin restrictions.

---

## 🛠️ Tech Stack & Libraries

- **Core Framework:** React 19 & React-DOM
- **Routing:** React Router DOM v7 (Client-side routing)
- **Language & Translation System:** i18next & react-i18next (Pre-configured)
- **Styling Engine:** Vanilla CSS (Maximum control, zero overhead, Tailwind avoided for spiritual design rules)
- **Build Pipeline & Dev Server:** Vite (using `rolldown-vite` under the hood)
- **Language Support:** TypeScript (~5.9) for strict type checks

---

## 📂 Folder Structure

```text
bhagwat-gita/
├── public/                     # Static files (favicons, manifest, etc.)
├── src/
│   ├── assets/
│   │   ├── icons/              # Spiritual SVGs & icons
│   │   └── images/             # Local 4K spiritual illustrations & profile images
│   ├── components/
│   │   ├── layout/             # Shared Layout, Navbar, and Footer components
│   │   ├── navigation/         # Sidebar shlok navigation components
│   │   └── shlok/              # Card structures for rendering shlokas
│   ├── data/
│   │   ├── chapter1.ts         # Complete Chapter 1 shlokas database
│   │   └── chapter2.ts         # Chapter 2 shlokas database (with detailed 1-10 verses)
│   ├── pages/
│   │   ├── about/              # About Page component (Redesigned UI)
│   │   ├── chapter/            # Dynamic Chapter Page component
│   │   ├── chapters/           # Grid index of all 18 Chapters
│   │   ├── contact/            # Support / Contact Page
│   │   └── home/               # Homepage landing layout
│   ├── router/                 # Client-side router configurations
│   ├── styles/
│   │   ├── pages-style/        # Page-specific CSS sheets
│   │   ├── navbar.css          # Floating capsule nav & mobile drawer styles
│   │   └── variables.css       # Core color tokens, typography, and border properties
│   ├── main.tsx                # App bootstrap file
│   └── App.tsx                 # Core app wrapper
├── package.json                # Project scripts, assets, and dependencies
├── tsconfig.json               # TypeScript configurations
└── vite.config.ts              # Vite configurations
```

---

## 🚀 How to Run Locally

Follow these steps to set up the project on your local machine:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/chetanprajapat/bhagwat-gita.git
    cd bhagwat-gita
    ```

2.  **Install Dependencies:**
    Make sure you have Node.js installed, then run:

    ```bash
    npm install
    ```

3.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

---

## 📦 Build & Deploy to GitHub Pages

The project is fully pre-configured to build static files and deploy them automatically to GitHub Pages using the `gh-pages` package.

1.  **Build the Production Bundle:**
    Creates an optimized build of the application inside the `dist/` directory:

    ```bash
    npm run build
    ```

2.  **Deploy to GitHub Pages:**
    Stages the production files, pushes them to the `gh-pages` branch on your repository, and publishes it online:
    ```bash
    npm run deploy
    ```
    _Note: Ensure the `homepage` URL in `package.json` matches your GitHub username and repository name before running the command._

---

## 🌸 Credits & Spiritual Sources

- **Design & Development:** Developed with devotion by **Chetan Prajapat**.
- **Translations:** English and Hindi translations are sourced from authorized, classical commentaries of Vedic Acharyas.
- **Visual Assets:** High-fidelity spiritual illustrations and paintings generated using advanced AI image generators and compiled into local optimized Web assets.

---

_“कुरुक्षेत्रे समवेता युयुत्सवः...” — May the wisdom of the Gita guide your path._ 📿
