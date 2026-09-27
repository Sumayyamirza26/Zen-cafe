import SEO from '../components/SEO'
import LocationSection from '../components/LocationSection'

export default function Location() {
  return (
    <>
      <SEO
        title="Location & Hours | Zen Cafe, Koregaon Park, Pune"
        description="Find Zen Cafe at Galaxy Garden, N Main Rd, Koregaon Park, Pune 411001. Open daily from 8 AM to 11 PM. Get directions, call, or message us on WhatsApp."
      />
      <section className="pt-36 pb-16 px-5 sm:px-8 bg-ink text-ivory bg-noise">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow text-xs uppercase font-medium text-clay-light mb-3">Find Us</p>
          <h1 className="font-display text-4xl sm:text-5xl text-balance">Location &amp; Hours</h1>
          <p className="mt-4 text-ivory/75">
            Tucked into Galaxy Garden on North Main Road, right in the heart of Koregaon Park.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <LocationSection />
      </section>
    </>
  )
}
