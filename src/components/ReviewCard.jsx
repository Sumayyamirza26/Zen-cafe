import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ReviewCard({ review, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="bg-ivory rounded-3xl p-6 sm:p-8 shadow-card border border-ink/5 h-full flex flex-col"
    >
      <Quote className="text-clay/40 mb-4" size={28} />
      <p className="text-ink/75 leading-relaxed flex-1">{review.text}</p>
      <div className="mt-6 flex items-center gap-3">
        <img
          src={review.avatar}
          alt={review.name}
          loading="lazy"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-ink">{review.name}</p>
          <div className="flex gap-0.5 mt-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < review.rating ? 'text-clay' : 'text-ink/15'}
                fill="currentColor"
                strokeWidth={0}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
