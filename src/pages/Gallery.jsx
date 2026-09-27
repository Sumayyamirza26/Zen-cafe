import SEO from '../components/SEO'
import GalleryGrid from '../components/GalleryGrid'

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery | Zen Cafe, Koregaon Park, Pune"
        description="Browse photos and videos of Zen Cafe — interiors, coffee, breakfast, sushi, pizza, desserts, outdoor seating and the everyday moments in between."
      />
      <section className="pt-36 pb-16 px-5 sm:px-8 bg-ink text-ivory bg-noise">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow text-xs uppercase font-medium text-clay-light mb-3">Gallery</p>
          <h1 className="font-display text-4xl sm:text-5xl text-balance">A look inside Zen Cafe</h1>
          <p className="mt-4 text-ivory/75">
            Tap any photo to open a full preview. Filter by category to find exactly what you're
            curious about.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <GalleryGrid />
      </section>
    </>
  )
}
