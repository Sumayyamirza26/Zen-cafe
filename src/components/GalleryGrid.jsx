import { useMemo, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Expand, Play } from 'lucide-react'
import Lightbox from './Lightbox'
import { galleryItems, galleryFilters } from '../data/galleryData'

// Simple 1x1 transparent-ish gradient used if a source image ever fails to load,
// so the masonry layout never breaks with a broken-image icon.
const FALLBACK =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#3F5B45"/>
          <stop offset="1" stop-color="#182019"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
    </svg>`
  )

function GalleryTile({ item, index, onOpen }) {
  const [errored, setErrored] = useState(false)

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35, delay: (index % 8) * 0.04 }}
      onClick={() => onOpen(index)}
      className="relative group block w-full break-inside-avoid mb-4 rounded-2xl overflow-hidden shadow-card bg-ink/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay"
      aria-label={item.type === 'video' ? `Play video: ${item.alt}` : `View photo: ${item.alt}`}
    >
      <img
        src={errored ? FALLBACK : item.src}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        onError={() => setErrored(true)}
        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
      />

      {/* Hover / focus overlay */}
      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/35 transition-colors duration-300 flex items-center justify-center">
        {item.type === 'video' ? (
          <span className="w-14 h-14 rounded-full bg-ivory/90 grid place-items-center scale-90 group-hover:scale-100 transition-transform duration-300 shadow-soft">
            <Play className="text-ink translate-x-[1px]" size={22} fill="currentColor" />
          </span>
        ) : (
          <Expand
            className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            size={26}
          />
        )}
      </div>

      {/* Always-visible video indicator (Instagram-style corner icon) */}
      {item.type === 'video' && (
        <span className="absolute top-3 right-3 text-ivory drop-shadow-md">
          <Play size={18} fill="currentColor" />
        </span>
      )}

      <span className="absolute bottom-3 left-3 text-xs text-ivory bg-ink/60 px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {item.category}
      </span>
    </motion.button>
  )
}

export default function GalleryGrid() {
  const [filter, setFilter] = useState('All')
  const [activeIndex, setActiveIndex] = useState(null)

  const filtered = useMemo(
    () => (filter === 'All' ? galleryItems : galleryItems.filter((g) => g.category === filter)),
    [filter]
  )

  const openAt = useCallback((i) => setActiveIndex(i), [])
  const close = useCallback(() => setActiveIndex(null), [])
  const navigate = useCallback(
    (dir) => setActiveIndex((i) => (i === null ? null : (i + dir + filtered.length) % filtered.length)),
    [filtered.length]
  )

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {galleryFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
              filter === f
                ? 'bg-ink text-ivory border-ink'
                : 'bg-transparent text-ink/70 border-ink/15 hover:border-ink/40'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="text-center text-sm text-ink/50 mb-8">
        {filtered.length} {filtered.length === 1 ? 'post' : 'posts'}
      </p>

      {/* Instagram / Pinterest style masonry — a natural CSS-columns flow,
          no fixed height or internal scroll container, so the page scrolls
          normally with the rest of the site. */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4">
        {filtered.map((item, i) => (
          <GalleryTile key={item.id} item={item} index={i} onOpen={openAt} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-ink/50 py-16">No posts in this category yet.</p>
      )}

      <Lightbox items={filtered} activeIndex={activeIndex} onClose={close} onNavigate={navigate} />
    </div>
  )
}
