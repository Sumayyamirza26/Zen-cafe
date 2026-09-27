import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Lightbox({ items, activeIndex, onClose, onNavigate }) {
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    setVideoError(false)
  }, [activeIndex])

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate(1)
      if (e.key === 'ArrowLeft') onNavigate(-1)
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [activeIndex, onClose, onNavigate])

  if (activeIndex === null) return null
  const item = items[activeIndex]
  if (!item) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-ink/95 flex items-center justify-center px-4"
        role="dialog"
        aria-modal="true"
        onClick={onClose}
      >
        <button
          aria-label="Close preview"
          onClick={onClose}
          className="absolute top-5 right-5 text-ivory/80 hover:text-ivory w-11 h-11 grid place-items-center rounded-full bg-ivory/10 z-10"
        >
          <X size={22} />
        </button>

        <button
          aria-label="Previous"
          onClick={(e) => {
            e.stopPropagation()
            onNavigate(-1)
          }}
          className="absolute left-3 sm:left-6 text-ivory/80 hover:text-ivory w-11 h-11 grid place-items-center rounded-full bg-ivory/10 z-10"
        >
          <ChevronLeft size={24} />
        </button>

        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[85vh] max-w-[92vw] flex flex-col items-center"
        >
          {item.type === 'video' && !videoError ? (
            <video
              key={item.videoSrc}
              src={item.videoSrc}
              poster={item.src}
              controls
              autoPlay
              playsInline
              onError={() => setVideoError(true)}
              className="max-h-[80vh] max-w-[92vw] rounded-2xl object-contain shadow-soft bg-ink"
            />
          ) : (
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-[80vh] max-w-[92vw] rounded-2xl object-contain shadow-soft"
            />
          )}
          <div className="mt-4 text-center">
            <p className="text-ivory text-sm font-medium">{item.alt}</p>
            <p className="text-ivory/60 text-xs mt-1">
              {item.category}
              {item.type === 'video' && videoError ? ' \u00b7 Video preview unavailable' : ''}
            </p>
          </div>
        </motion.div>

        <button
          aria-label="Next"
          onClick={(e) => {
            e.stopPropagation()
            onNavigate(1)
          }}
          className="absolute right-3 sm:right-6 text-ivory/80 hover:text-ivory w-11 h-11 grid place-items-center rounded-full bg-ivory/10 z-10"
        >
          <ChevronRight size={24} />
        </button>

        <p className="absolute bottom-4 text-ivory/40 text-xs">
          {activeIndex + 1} / {items.length}
        </p>
      </motion.div>
    </AnimatePresence>
  )
}
