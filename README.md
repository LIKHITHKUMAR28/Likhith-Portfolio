<div align="center">

# ✨ Interactive Portfolio Experience

**A physics-driven, micro-interaction rich digital portfolio built with React 19 and TypeScript.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Website-8b5cf6?style=for-the-badge&logo=firefox&logoColor=white)](https://likhith-portfolio-3362e.web.app/)
[![React 19](https://img.shields.io/badge/React%2019-UI%20Engine-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Type--Safe-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-Lightning%20Fast-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-Glassmorphism-38b2ac?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

<br />

<p align="center">
  Most portfolios are static brochures. This project was built as an <b>interactive playground</b> — blending real-time physical simulation, ambient lighting, and fluid motion so that every click, drag, and scroll feels alive and tactile.
</p>

[👉 Launch the Live Website](https://likhith-portfolio-3362e.web.app/)

---

</div>

## 💡 What Makes It Unique?

Instead of relying on standard templates, this portfolio introduces custom-crafted interactive components built from scratch:

### 🪪 1. The Interactive Hanging ID Card

- **What it does**: In the hero section, the ID card is suspended from a virtual black lanyard rope.
- **The feel**: You can grab, drag, and swing it in any direction. When released, it obeys realistic gravity and air resistance, gently swaying back to center like a real conference badge.

### 📡 2. Ambient Sci-Fi Hologram

- **What it does**: A futuristic hologram projector glowing in the background of the contact section.
- **The feel**: Projects volumetric cyan and violet light cones upward, featuring floating emblem levitation and animated CRT scanlines without any distracting text.

### 🧭 3. macOS-Inspired Proximity Dock

- **What it does**: A floating quick-nav dock pinned to the bottom of the screen.
- **The feel**: Icons dynamically expand and magnify based on your cursor's proximity using smooth spring physics, making navigation feel tactile and responsive.

### 🌊 4. Liquid Momentum Scrolling

- **What it does**: Decouples jerky trackpad/mouse-wheel steps using the **Lenis** engine.
- **The feel**: The entire webpage glides with natural inertia, keeping animations and parallax cards perfectly in sync without stuttering.

### 🌗 5. Dual-Atmosphere Glassmorphism

- **What it does**: Seamless, zero-delay switching between **Deep Void Dark** and **Vibrant Aurora Light**.
- **The feel**: Frosted glass panels (`backdrop-blur-2xl`), subtle border beams, and colored glowing ambient orbs adapt naturally to your lighting preference.

---

## 🎨 Interactive Elements At a Glance

| Feature                  | Interaction Type                                 | Technology                              |
| ------------------------ | ------------------------------------------------ | --------------------------------------- |
| **Hanging Lanyard Card** | Real-time drag & pendulum physics                | SVG Rope + Physics Loop                 |
| **Volumetric Hologram**  | Continuous sine levitation + CRT scanline optics | Pure CSS + Framer Motion                |
| **Floating Quick Dock**  | Cursor distance-field magnification              | Spring Physics + Motion Values          |
| **Smooth Marquee**       | Infinite developer tech stack ticker             | Hardware-accelerated CSS Keyframes      |
| **Interactive Carousel** | Touch drag with active progress indicators       | Gesture Listeners + Spring Damping      |
| **Theme Toggle**         | Animated day/night mode switch                   | CSS Custom Properties + Data Attributes |

---

## ⚡ Engineering Philosophy

1. **GPU-Accelerated 60 FPS Performance**:
   All animations run strictly on compositor-only properties (`transform` and `opacity`), keeping CPU paint cycles at virtually zero and ensuring butter-smooth 60 frames per second on mobile and desktop.

2. **Zero Layout Shifts (0.00 CLS)**:
   Every interactive element and card reserves its exact dimensional bounds in advance, preventing jarring jumps or reflows as elements hydrate.

3. **Enterprise Security Hardened**:
   Configured with production HTTP security headers including Clickjacking protection (`X-Frame-Options: DENY`), strict MIME-sniffing prevention, and modern Content Security Policies.

---

## 🛠️ Built With

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom Glassmorphism, CSS Custom Properties
- **Motion & Physics**: Framer Motion, Lenis Smooth Scroll
- **Icons**: Lucide Icons
- **Hosting**: Firebase Hosting (HTTP/2 CDN)

---

<div align="center">
  <sub>Built with care, precision, and a passion for creative frontend engineering by Likhith Kumar.</sub>
</div>
