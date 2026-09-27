import { motion } from 'framer-motion'

export default function MenuCard({ item, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: 'easeOut' }}
      className="group bg-ivory rounded-3xl overflow-hidden shadow-card border border-ink/5 hover:-translate-y-1.5 hover:shadow-soft transition-all duration-300"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-3 right-3 bg-ink/80 backdrop-blur text-ivory text-sm font-semibold px-3 py-1.5 rounded-full">
          {item.price}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl text-ink mb-1.5">{item.name}</h3>
        <p className="text-ink/65 text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.article>
  )
}
