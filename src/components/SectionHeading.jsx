import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, align = 'center', dark = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-12`}
    >
      {eyebrow && (
        <p className={`eyebrow text-xs uppercase font-medium mb-3 ${dark ? 'text-clay-light' : 'text-clay-dark'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl text-balance ${dark ? 'text-ivory' : 'text-ink'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? 'text-ivory/75' : 'text-ink/70'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
