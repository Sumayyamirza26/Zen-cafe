import image2 from "../images/image2.webp";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, MapPin, UtensilsCrossed, CalendarCheck, Leaf } from 'lucide-react'
import { business, isCafeOpenNow } from '../data/businessInfo'

export default function Hero() {
  const open = isCafeOpenNow()

  return (
    <section className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image2}
          alt="Warm interior of Zen Cafe with plants and wooden furnishing"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="absolute inset-0 bg-ink/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pb-16 pt-40 sm:py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="grid place-items-center w-11 h-11 rounded-full bg-ivory/10 border border-ivory/30">
              <Leaf size={20} className="text-clay-light" />
            </span>
            <span className="text-ivory/80 text-sm tracking-[0.25em] uppercase">Koregaon Park, Pune</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-ivory leading-[1.05] text-balance">
            Slow mornings, <span className="italic text-clay-light">global</span> plates.
          </h1>
          <p className="mt-6 text-ivory/85 text-base sm:text-lg max-w-lg leading-relaxed">
            Zen Cafe is a warm, modern gathering place where single-origin coffee, sushi, wood-fired
            pizza and vegan bowls share the same quiet table.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 glass rounded-full pl-3 pr-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className={`absolute inline-flex h-full w-full rounded-full ${
                    open ? 'bg-moss-light animate-pulseSoft' : 'bg-clay-light'
                  }`}
                />
              </span>
              <span className="text-ink text-sm font-medium">
                {open ? 'Open Now' : 'Opens 8:00 AM'} · Closes 11 PM
              </span>
            </div>

            <div className="flex items-center gap-1.5 glass rounded-full px-4 py-2">
              <Star size={16} className="text-clay" fill="currentColor" strokeWidth={0} />
              <span className="text-ink text-sm font-semibold">{business.rating}</span>
              <span className="text-ink/60 text-sm">({business.reviewCount.toLocaleString()})</span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-ivory text-ink font-medium px-6 py-3.5 hover:bg-ivory/90 transition-colors shadow-soft"
            >
              <UtensilsCrossed size={18} /> View Menu
            </Link>
            <Link
              to="/reservations"
              className="inline-flex items-center gap-2 rounded-full bg-clay text-ivory font-medium px-6 py-3.5 hover:bg-clay-dark transition-colors shadow-soft"
            >
              <CalendarCheck size={18} /> Reserve
            </Link>
            <Link
              to="/location"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/50 text-ivory font-medium px-6 py-3.5 hover:bg-ivory/10 transition-colors"
            >
              <MapPin size={18} /> Directions
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/60 text-xs tracking-[0.3em] uppercase">
        Scroll
      </div>
    </section>
  )
}
