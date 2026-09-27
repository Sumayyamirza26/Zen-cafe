import { Link } from 'react-router-dom'
import { Coffee } from 'lucide-react'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | Zen Cafe" description="The page you're looking for doesn't exist." />
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5 pt-20">
        <Coffee size={48} className="text-clay mb-6" />
        <h1 className="font-display text-4xl text-ink mb-3">Page not found</h1>
        <p className="text-ink/70 mb-8 max-w-sm">
          This page seems to have wandered off for a coffee break. Let's get you back on track.
        </p>
        <Link to="/" className="inline-flex rounded-full bg-clay text-ivory font-medium px-6 py-3.5 hover:bg-clay-dark transition-colors">
          Back to Home
        </Link>
      </section>
    </>
  )
}
