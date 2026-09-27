import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Instagram, Facebook, Star } from 'lucide-react'
import { business } from '../data/businessInfo'
import logo from '../images/logo.jpg'


export default function Footer() {
  return (
    <footer className="bg-ink text-ivory/80 relative bg-noise">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="rounded-full overflow-hidden transition-transform duration-300 hover:scale-105">

                <img
                  src={logo}
                  alt="Zen Cafe Logo"
                  className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </span>

              <span className="font-display text-xl text-ivory transition-transform duration-300 hover:scale-[1.01]">
                Zen Cafe
              </span>
            </Link>

          </div>

          <p className="text-sm leading-relaxed max-w-xs">
            A quiet, modern gathering place in Koregaon Park for coffee rituals, global plates and
            unhurried evenings.
          </p>
          <div className="flex items-center gap-1 mt-4 text-clay-light text-sm">
            <Star size={16} fill="currentColor" strokeWidth={0} />
            <span className="font-medium">{business.rating}</span>
            <span className="text-ivory/60">({business.reviewCount.toLocaleString()} Google reviews)</span>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg text-ivory mb-4">Explore</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/menu" className="hover:text-clay-light transition-colors">Menu</Link></li>
            <li><Link to="/reservations" className="hover:text-clay-light transition-colors">Reservations</Link></li>
            <li><Link to="/gallery" className="hover:text-clay-light transition-colors">Gallery</Link></li>
            <li><Link to="/location" className="hover:text-clay-light transition-colors">Location &amp; Hours</Link></li>
            <li><Link to="/contact" className="hover:text-clay-light transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-ivory mb-4">Visit Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin size={18} className="shrink-0 text-clay-light mt-0.5" />
              <span>{business.addressLines.join(' ')}</span>
            </li>
            <li className="flex gap-2 items-center">
              <Phone size={18} className="shrink-0 text-clay-light" />
              <a href={`tel:${business.phoneDial}`} className="hover:text-clay-light transition-colors">
                {business.phone}
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <Mail size={18} className="shrink-0 text-clay-light" />
              <a href={`mailto:${business.emailPlaceholder}`} className="hover:text-clay-light transition-colors">
                {business.emailPlaceholder}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-ivory mb-4">Hours</h3>
          <p className="text-sm mb-4">{business.hoursLabel}</p>
          <div className="flex items-center gap-3">
            <a
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Zen Cafe on Instagram"
              className="w-10 h-10 grid place-items-center rounded-full bg-ivory/10 hover:bg-clay transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href={business.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Zen Cafe on Facebook"
              className="w-10 h-10 grid place-items-center rounded-full bg-ivory/10 hover:bg-clay transition-colors"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10 py-6 text-center text-xs text-ivory/50 px-5">
        © {new Date().getFullYear()} Zen Cafe, Koregaon Park, Pune. All rights reserved.
      </div>
    </footer>
  )
}
