import { MapPin, Phone, MessageCircle, Navigation, Clock } from 'lucide-react'
import { business, weeklyHours, nearbyLandmarks } from '../data/businessInfo'

export default function LocationSection({ showLandmarks = true }) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      <div className="rounded-3xl overflow-hidden shadow-card h-[380px] lg:h-full min-h-[380px] border border-ink/5">
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

      <div className="space-y-8">
        <div className="flex gap-4">
          <span className="grid place-items-center w-12 h-12 rounded-full bg-moss/10 shrink-0">
            <MapPin className="text-moss" size={22} />
          </span>
          <div>
            <h3 className="font-display text-xl text-ink mb-1">Address</h3>
            <p className="text-ink/70 leading-relaxed">{business.addressLines.join(' ')}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <span className="grid place-items-center w-12 h-12 rounded-full bg-clay/10 shrink-0">
            <Clock className="text-clay-dark" size={22} />
          </span>
          <div>
            <h3 className="font-display text-xl text-ink mb-2">Opening Hours</h3>
            <ul className="text-ink/70 text-sm space-y-1">
              {weeklyHours.map((d) => (
                <li key={d.day} className="flex justify-between max-w-xs">
                  <span>{d.day}</span>
                  <span>{d.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {showLandmarks && (
          <div className="flex gap-4">
            <span className="grid place-items-center w-12 h-12 rounded-full bg-moss/10 shrink-0">
              <Navigation className="text-moss" size={22} />
            </span>
            <div>
              <h3 className="font-display text-xl text-ink mb-2">Nearby Landmarks</h3>
              <ul className="text-ink/70 text-sm space-y-1">
                {nearbyLandmarks.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={business.mapsDirectionsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-ivory px-5 py-3 font-medium hover:bg-ink/85 transition-colors"
          >
            <Navigation size={16} /> Get Directions
          </a>
          <a
            href={`tel:${business.phoneDial}`}
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 text-ink px-5 py-3 font-medium hover:bg-ink/5 transition-colors"
          >
            <Phone size={16} /> Call Us
          </a>
          <a
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3 font-medium hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
