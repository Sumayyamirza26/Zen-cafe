# Zen Cafe

## Project Description
A frontend-only React + Vite website for **Zen Cafe**.

## Tech Stack
- React 18
- Vite
- React Router (`react-router-dom`)
- Tailwind CSS
- Framer Motion (`framer-motion`)
- Lucide React (`lucide-react`)

## Libraries and Dependencies Used
### Runtime dependencies
- `react` / `react-dom` 
- `react-router-dom` (v6)
- `framer-motion`
- `lucide-react`

### Dev dependencies
- `vite`
- `@vitejs/plugin-react`
- `tailwindcss`
- `postcss` / `autoprefixer`
- `@types/react`, `@types/react-dom`

## Folder Structure
```text
.
├─ index.html
├─ package.json
├─ vite.config.js
├─ postcss.config.js
├─ tailwind.config.js
├─ public/
│  ├─ favicon.svg
│  ├─ robots.txt
│  ├─ sitemap.xml
│  ├─ swiggy-logo.svg
│  ├─ zomato-logo.svg
│  └─ zen-cafe-logo.svg
└─ src/
   ├─ main.jsx                 # React entry + BrowserRouter
   ├─ App.jsx                  # Routes + global layout (Navbar/Footer/WhatsApp)
   ├─ index.css               
   ├─ images/
   │  └─ logo.jpg             # Navbar/Footer logo
   ├─ components/
   │  ├─ Navbar.jsx
   │  ├─ Footer.jsx
   │  ├─ WhatsAppButton.jsx
   │  ├─ SEO.jsx
   │  ├─ Hero.jsx
   │  ├─ SectionHeading.jsx
   │  ├─ FeaturedDishes.jsx
   │  ├─ MenuCard.jsx
   │  ├─ GalleryGrid.jsx
   │  ├─ Lightbox.jsx
   │  ├─ ReviewCard.jsx
   │  ├─ LocationSection.jsx
   │  ├─ ContactForm.jsx
   │  ├─ ReservationForm.jsx
   │  └─ (Pages are under src/pages)
   ├─ pages/
   │  ├─ Home.jsx
   │  ├─ Menu.jsx
   │  ├─ Reservations.jsx
   │  ├─ OrderNow.jsx
   │  ├─ Location.jsx
   │  ├─ Gallery.jsx
   │  ├─ Contact.jsx
   │  └─ NotFound.jsx
   └─ data/
      ├─ businessInfo.js       # address, hours, phone, social links, map embed URLs
      ├─ menuData.js           # menu categories + items, featured dish IDs
      ├─ galleryData.js        # gallery images/videos and filter list
      └─ reviewsData.js        # customer review cards
```

## Project Architecture
- **Single Page Application (SPA)** using `react-router-dom`.
- Global layout is defined in `src/App.jsx`:
  - `Navbar` (fixed at the top)
  - `Footer`
  - `WhatsAppButton` (fixed bottom-right)
  - Route-based page content rendered inside `<main>`.
- Page-level SEO is handled by the `SEO` component (`src/components/SEO.jsx`) which updates `document.title` and meta tags.
- Visual animations and transitions are implemented using **Framer Motion**.
- Styling is done with **Tailwind CSS**; custom theme values are in `tailwind.config.js`.

## Features Implemented
- Fixed responsive navigation bar with mobile menu.
- SEO updates per route via `<SEO />` component.
- Home page:
  - Hero section with open/close indicator derived from `businessInfo.js`.
  - Featured dishes, “Why Zen Cafe” highlights, and customer review cards.
- Menu page with category tabs and menu item cards.
- Reservations page with reservation form submission.
- Contact page with contact form submission.
- Order Now page with external links and a direct-order flow (placeholder ordering data).
- Location page with Google Maps embed, opening hours, and nearby landmarks.
- Gallery page:
  - Filterable masonry-style feed (images + videos).
  - Click-to-open `Lightbox` preview with keyboard navigation and video support.
- WhatsApp floating action button.

## Routing Structure
Defined in `src/App.jsx`:
- `/` → `src/pages/Home.jsx`
- `/menu` → `src/pages/Menu.jsx`
- `/reservations` → `src/pages/Reservations.jsx`
- `/order` → `src/pages/OrderNow.jsx`
- `/location` → `src/pages/Location.jsx`
- `/gallery` → `src/pages/Gallery.jsx`
- `/contact` → `src/pages/Contact.jsx`
- `*` → `src/pages/NotFound.jsx`

## Components Used
- `Navbar` (`src/components/Navbar.jsx`): fixed header, desktop links, mobile menu (Framer Motion).
- `Footer` (`src/components/Footer.jsx`): footer navigation + business info.
- `WhatsAppButton` (`src/components/WhatsAppButton.jsx`): fixed WhatsApp link.
- `SEO` (`src/components/SEO.jsx`): sets title and meta tags.
- `Hero` (`src/components/Hero.jsx`): landing hero with open/close status.
- `FeaturedDishes` (`src/components/FeaturedDishes.jsx`): featured menu items preview.
- `MenuCard` (`src/components/MenuCard.jsx`): shared card UI for menu items.
- `ReviewCard` (`src/components/ReviewCard.jsx`): animated review display.
- `GalleryGrid` (`src/components/GalleryGrid.jsx`): filterable masonry grid.
- `Lightbox` (`src/components/Lightbox.jsx`): modal preview for images/videos.
- `LocationSection` (`src/components/LocationSection.jsx`): map, address, hours, landmarks.
- `ContactForm` (`src/components/ContactForm.jsx`): contact form (Formspree submission).
- `ReservationForm` (`src/components/ReservationForm.jsx`): reservation form (Formspree submission).
- `SectionHeading` (`src/components/SectionHeading.jsx`): standardized section headings.

## Assets and Data Structure
### Images
- `src/images/logo.jpg` used by `Navbar` and `Footer`.
- Gallery and menu items use external image URLs (mostly Unsplash) referenced from:
  - `src/data/galleryData.js`
  - `src/data/menuData.js`

### Data modules
- `src/data/businessInfo.js`
  - Business name, address lines, phone, WhatsApp number
  - Opening hours and `isCafeOpenNow()` helper
  - Google Maps embed URL and directions URL
  - Social links (Instagram, Facebook)
  - Email placeholder
- `src/data/menuData.js`
  - `menuCategories`: categories and items (id, name, price, description, image)
  - `featuredDishIds` and `featuredDishes`
  - `allMenuItems` helper
- `src/data/galleryData.js`
  - `galleryItems`: interleaved array of image and video items (for masonry-style layout)
  - `galleryFilters`: filter labels
  - `galleryImages`, `galleryVideos` as intermediate structures
- `src/data/reviewsData.js`
  - `reviews`: array of review cards (id, name, rating, text, avatar)

## Installation Instructions
```bash
npm install
```

## Setup Instructions
No local backend is required.

Both `src/components/ContactForm.jsx` and `src/components/ReservationForm.jsx` send form submissions to a Formspree endpoint:
- `FORMSPREE_ENDPOINT` is currently set to the placeholder `https://formspree.io/f/your-form-id`.
- To enable submissions, replace the placeholder endpoint in both files.

## Prerequisites
- Node.js (to run Vite)
- npm

## Available npm Scripts
From `package.json`:
- `npm run dev` → `vite`
- `npm run build` → `vite build`
- `npm run preview` → `vite preview`
- `npm run lint` → `eslint . --ext js,jsx`

## Build and Production Commands
```bash
npm run build
npm run preview
```

## Configuration Files Used
- `vite.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `src/index.css` (Tailwind base/components/utilities + custom CSS)

## Environment Variables
No environment variables are used in the project code.

## External Services / APIs Integrated
- **Formspree**: contact and reservation forms POST to `FORMSPREE_ENDPOINT`.
- **Google Maps embeds**: used on the Location page via `business.mapEmbedSrc`.
- **WhatsApp**: WhatsApp links use `https://wa.me/...`.
- **External media URLs**: gallery images/videos and some hero/gallery imagery are loaded via remote URLs.

## Deployment Information
The project is built as a static frontend using Vite (output goes to `dist/` on build). The repository root `README.md` previously mentioned deployment targets such as Vercel, Netlify, or GitHub Pages.

## How to Run the Project Locally
```bash
npm install
npm run dev
```
Then open the local server URL shown by Vite (commonly `http://localhost:5173`).

## Notes / Placeholders Present in the Code
- `src/pages/OrderNow.jsx` includes TODO comments and placeholder ordering data:
  - Direct order uses hardcoded `MENU_PLACEHOLDER_ITEMS`.
  - Zomato/Swiggy URLs are set as placeholder ordering links.
- `src/components/ContactForm.jsx` and `src/components/ReservationForm.jsx` both include TODO-style comments to replace the Formspree endpoint.

