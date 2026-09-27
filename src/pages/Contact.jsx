import { Phone, MapPin, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react'
import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'
import { business } from '../data/businessInfo'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | Zen Cafe, Koregaon Park, Pune"
        description="Get in touch with Zen Cafe, Koregaon Park, Pune. Call, WhatsApp, email or send us a message directly through our contact form."
      />
      <section className="pt-36 pb-16 px-5 sm:px-8 bg-ink text-ivory bg-noise">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow text-xs uppercase font-medium text-clay-light mb-3">Get in Touch</p>
          <h1 className="font-display text-4xl sm:text-5xl text-balance">We'd love to hear from you</h1>
          <p className="mt-4 text-ivory/75">
            Questions, feedback or a private event to plan? Reach out any way that's easiest for you.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 order-2 lg:order-1">
          <ContactForm />
        </div>

        <aside className="space-y-4 order-1 lg:order-2">
          <a href={`tel:${business.phoneDial}`} className="flex items-center gap-3 bg-ivory rounded-2xl p-5 shadow-card hover:-translate-y-0.5 transition-transform">
            <span className="grid place-items-center w-11 h-11 rounded-full bg-moss/10 shrink-0">
              <Phone className="text-moss" size={20} />
            </span>
            <div>
              <p className="text-xs text-ink/50">Call Us</p>
              <p className="font-medium text-ink">{business.phone}</p>
            </div>
          </a>

          <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-ivory rounded-2xl p-5 shadow-card hover:-translate-y-0.5 transition-transform">
            <span className="grid place-items-center w-11 h-11 rounded-full bg-[#25D366]/10 shrink-0">
              <MessageCircle className="text-[#25D366]" size={20} />
            </span>
            <div>
              <p className="text-xs text-ink/50">WhatsApp</p>
              <p className="font-medium text-ink">Chat with us</p>
            </div>
          </a>

          <a href={`mailto:${business.emailPlaceholder}`} className="flex items-center gap-3 bg-ivory rounded-2xl p-5 shadow-card hover:-translate-y-0.5 transition-transform">
            <span className="grid place-items-center w-11 h-11 rounded-full bg-clay/10 shrink-0">
              <Mail className="text-clay-dark" size={20} />
            </span>
            <div>
              <p className="text-xs text-ink/50">Email</p>
              <p className="font-medium text-ink break-all">{business.emailPlaceholder}</p>
            </div>
          </a>

          <div className="flex items-center gap-3 bg-ivory rounded-2xl p-5 shadow-card">
            <span className="grid place-items-center w-11 h-11 rounded-full bg-ink/5 shrink-0">
              <MapPin className="text-ink" size={20} />
            </span>
            <p className="text-ink/70 text-sm">{business.addressLines.join(' ')}</p>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a href={business.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-11 h-11 grid place-items-center rounded-full bg-ivory shadow-card hover:bg-ink hover:text-ivory transition-colors">
              <Instagram size={20} />
            </a>
            <a href={business.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-11 h-11 grid place-items-center rounded-full bg-ivory shadow-card hover:bg-ink hover:text-ivory transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </aside>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-20">
        <div className="rounded-3xl overflow-hidden shadow-card h-[360px] border border-ink/5">
          <iframe
            title="Zen Cafe location on Google Maps"
            src={business.mapEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </section>
    </>
  )
}
