import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import MenuCard from './MenuCard'
import { featuredDishes } from '../data/menuData'

export default function FeaturedDishes() {
  return (
    <section className="py-24 px-5 sm:px-8 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Chef's Picks"
        title="Dishes people come back for"
        description="A small taste of what's cooking across our coffee bar, sushi counter and wood-fired oven."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {featuredDishes.map((item, i) => (
          <MenuCard key={item.id} item={item} index={i} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-clay-dark font-medium hover:gap-3 transition-all"
        >
          Explore Full Menu <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
