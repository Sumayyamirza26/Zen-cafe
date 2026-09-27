import { useState } from 'react'
import { Coffee, Sunrise, Fish, Pizza, Leaf, IceCreamCone } from 'lucide-react'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import MenuCard from '../components/MenuCard'
import { menuCategories } from '../data/menuData'

const iconMap = { Coffee, Sunrise, Fish, Pizza, Leaf, IceCreamCone }

export default function Menu() {
  const [active, setActive] = useState(menuCategories[0].id)
  const activeCategory = menuCategories.find((c) => c.id === active)

  return (
    <>
      <SEO
        title="Menu | Zen Cafe, Koregaon Park, Pune"
        description="Explore Zen Cafe's menu: coffee & beverages, breakfast, sushi, pizza, healthy & vegan bowls, and desserts. Freshly made daily in Koregaon Park, Pune."
      />
      <section className="pt-36 pb-16 px-5 sm:px-8 bg-ink text-ivory bg-noise">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow text-xs uppercase font-medium text-clay-light mb-3">Our Menu</p>
          <h1 className="font-display text-4xl sm:text-5xl text-balance">
            Coffee rituals to late-night bites
          </h1>
          <p className="mt-4 text-ivory/75">
            Six categories, made fresh every day — from single-origin pour-overs to hand-rolled sushi.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="flex flex-wrap gap-2 justify-center mb-14 sticky top-24 z-10">
          {menuCategories.map((cat) => {
            const Icon = iconMap[cat.icon]
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium border transition-colors ${
                  active === cat.id
                    ? 'bg-ink text-ivory border-ink'
                    : 'bg-ivory text-ink/70 border-ink/15 hover:border-ink/40'
                }`}
              >
                <Icon size={16} /> {cat.name}
              </button>
            )
          })}
        </div>

        <SectionHeading
          eyebrow="Category"
          title={activeCategory.name}
          description={`Every dish below is prepared fresh — ${activeCategory.items.length} favorites from this category.`}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {activeCategory.items.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}
