import { Phone, Clock, Users } from 'lucide-react'
import SEO from '../components/SEO'
import ReservationForm from '../components/ReservationForm'
import { business } from '../data/businessInfo'

export default function Reservations() {
  return (
    <>
      <SEO
        title="Reservations | Zen Cafe, Koregaon Park, Pune"
        description="Book a table at Zen Cafe, Koregaon Park, Pune. Simple online reservation form — pick your date, time and party size."
      />
      <section className="pt-36 pb-20 px-5 sm:px-8 bg-ink text-ivory bg-noise">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow text-xs uppercase font-medium text-clay-light mb-3">Book a Table</p>
          <h1 className="font-display text-4xl sm:text-5xl text-balance">Reserve your corner of Zen Cafe</h1>
          <p className="mt-4 text-ivory/75">
            Tell us when you'd like to visit and we'll hold your table. For same-day requests, a call
            gets the fastest response.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 order-2 lg:order-1">
          <ReservationForm />
        </div>

        <aside className="space-y-6 order-1 lg:order-2">
          <div className="bg-moss/10 rounded-3xl p-6">
            <span className="grid place-items-center w-11 h-11 rounded-full bg-moss/20 mb-4">
              <Clock className="text-moss" size={20} />
            </span>
            <h3 className="font-display text-lg text-ink mb-1">Hours</h3>
            <p className="text-ink/70 text-sm">{business.hoursLabel}</p>
          </div>

          <div className="bg-clay/10 rounded-3xl p-6">
            <span className="grid place-items-center w-11 h-11 rounded-full bg-clay/20 mb-4">
              <Users className="text-clay-dark" size={20} />
            </span>
            <h3 className="font-display text-lg text-ink mb-1">Large Groups</h3>
            <p className="text-ink/70 text-sm">
              Planning for 10 or more guests? Call us directly so we can arrange the right seating.
            </p>
          </div>

          <a
            href={`tel:${business.phoneDial}`}
            className="flex items-center gap-3 bg-ink text-ivory rounded-3xl p-6 hover:bg-ink/90 transition-colors"
          >
            <span className="grid place-items-center w-11 h-11 rounded-full bg-ivory/10 shrink-0">
              <Phone size={20} />
            </span>
            <div>
              <p className="font-display text-lg">{business.phone}</p>
              <p className="text-ivory/60 text-xs">Tap to call for urgent reservations</p>
            </div>
          </a>
        </aside>
      </section>
    </>
  )
}
