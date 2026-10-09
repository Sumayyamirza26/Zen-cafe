# Zen Cafe — Koregaon Park, Pune

> A modern, responsive restaurant website for Zen Cafe — a warm gathering place in Koregaon Park, Pune, serving globally-inspired coffee, sushi, pizza, and vegan bowls.

**Live Demo:** [zen-cafe-seven.vercel.app](https://zen-cafe-seven.vercel.app)

---

## Features

- **Hero Section** — Full-screen landing with real-time open/closed status and Google rating badge
- **Menu Page** — Browsable menu with category filtering
- **Online Ordering** — Order directly or redirect to Zomato / Swiggy
- **Table Reservations** — Reservation form with date, time, and guest count
- **Photo Gallery** — Lightbox-enabled image grid
- **Location Page** — Address, hours, and embedded map directions
- **Contact Form** — Direct enquiry form with WhatsApp floating button
- **SEO** — Per-page meta tags via a reusable SEO component
- **Smooth Animations** — Framer Motion scroll and entrance transitions throughout

---

## Tech Stack

- **React 18** — Component-based UI
- **Vite** — Fast development and optimised production builds
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations and transitions
- **React Router v6** — Client-side routing
- **Lucide React** — Icon set

---

## Project Structure

```
zen-cafe/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── swiggy-logo.svg
│   └── zen-cafe-logo.svg
├── src/
│   ├── components/
│   │   ├── ContactForm.jsx
│   │   ├── FeaturedDishes.jsx
│   │   ├── Footer.jsx
│   │   ├── GalleryGrid.jsx
│   │   ├── Hero.jsx
│   │   ├── Lightbox.jsx
│   │   ├── LocationSection.jsx
│   │   ├── MenuCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── ReservationForm.jsx
│   │   ├── ReviewCard.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── SEO.jsx
│   │   └── WhatsAppButton.jsx
│   ├── data/
│   │   ├── businessInfo.js
│   │   ├── galleryData.js
│   │   ├── menuData.js
│   │   └── reviewsData.js
│   ├── images/
│   │   ├── image1.webp
│   │   ├── image2.webp
│   │   ├── image3.webp
│   │   └── logo.jpg
│   ├── pages/
│   │   ├── Contact.jsx
│   │   ├── Gallery.jsx
│   │   ├── Home.jsx
│   │   ├── Location.jsx
│   │   ├── Menu.jsx
│   │   ├── NotFound.jsx
│   │   ├── OrderNow.jsx
│   │   └── Reservations.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Author

**Sumayya Mirza**
[GitHub](https://github.com/Sumayyamirza26) · [LinkedIn](#)
