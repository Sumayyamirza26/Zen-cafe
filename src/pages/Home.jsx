import image1 from "../images/image1.webp";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Leaf, Coffee, Clock, Users, ChefHat, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import FeaturedDishes from '../components/FeaturedDishes'
import ReviewCard from '../components/ReviewCard'
import { reviews } from '../data/reviewsData'
import image3 from "../images/image3.webp";

const whyChooseUs = [
  {
    icon: Coffee,
    title: 'Small-Batch Coffee',
    text: 'Beans roasted in micro-batches and brewed to order by trained baristas.',
  },
  {
    icon: ChefHat,
    title: 'Global, Honest Menu',
    text: 'Sushi, pizza, breakfast and vegan bowls made from scratch, every single day.',
  },
  {
    icon: Leaf,
    title: 'Calm, Green Interiors',
    text: 'A living-plant interior designed for slow mornings and easy conversation.',
  },
  {
    icon: Clock,
    title: 'Open Late, Daily',
    text: 'Doors open at 8 AM and stay open until 11 PM, seven days a week.',
  },
  {
    icon: Users,
    title: 'Built for Groups & Solo Guests',
    text: 'Communal tables, quiet corners and outdoor seating for every kind of visit.',
  },
]

export default function Home() {
  return (
    <>
      <SEO
        title="Zen Cafe | Koregaon Park, Pune — Coffee, Sushi, Pizza & More"
        description="Zen Cafe in Koregaon Park, Pune serves globally-inspired coffee, breakfast, sushi, pizza, vegan bowls and desserts. Open daily till 11 pm. Rated 4.2 from 1,449 Google reviews."
      />
      <Hero />

      {/* About Preview */}
      <section className="py-24 px-5 sm:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
           <img
              src={image1}
              alt="Guests enjoying coffee inside Zen Cafe"
              loading="lazy"
              className="rounded-4xl w-full h-[420px] object-cover shadow-soft"
            />
          <div className="absolute -bottom-6 -right-6 hidden sm:block bg-clay text-ivory rounded-3xl px-6 py-5 shadow-soft">
            <p className="font-display text-3xl">7+</p>
            <p className="text-xs uppercase tracking-wider">Years in Koregaon Park</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="eyebrow text-xs uppercase font-medium text-clay-dark mb-3">Our Story</p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance mb-5">
            A little sanctuary between the trees of North Main Road
          </h2>
          <p className="text-ink/70 leading-relaxed mb-4">
            Nestled among the lush greenery of North Main Road, Zen Cafe is a place to slow down, unwind, and enjoy thoughtfully prepared food in a warm, 
            welcoming atmosphere. Every detail is designed to make each visit feel relaxed and memorable.
          </p>
          <p className="text-ink/70 leading-relaxed mb-8">
            Today, Zen Cafe has become a favorite gathering spot in Koregaon Park, where guests come to enjoy great coffee, 
            delicious food, and meaningful moments with friends, family,or simply a quiet break from the city's pace.
          </p>
          <Link
            to="/reservations"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-ivory px-6 py-3.5 font-medium hover:bg-ink/85 transition-colors"
          >
            Reserve Your Table <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      <FeaturedDishes />

      {/* Why Choose Us */}
      <section className="py-24 bg-ink text-ivory bg-noise relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <p className="eyebrow text-xs uppercase font-medium text-clay-light mb-3">Why Zen Cafe</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-balance">
              Details that make each visit feel considered
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-dark rounded-3xl p-6"
              >
                <span className="grid place-items-center w-12 h-12 rounded-full bg-clay/20 mb-4">
                  <item.icon size={22} className="text-clay-light" />
                </span>
                <h3 className="font-display text-lg mb-2">{item.title}</h3>
                <p className="text-ivory/70 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-24 px-5 sm:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <p className="eyebrow text-xs uppercase font-medium text-clay-dark mb-3">Guest Reviews</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-balance">
            Loved by 1,449+ Google reviewers
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, i) => (
            <ReviewCard key={review.id} review={review} index={i} />
          ))}
        </div>
      </section>

      {/* Call To Action */}
<section className="relative py-28 px-5 sm:px-8 text-center overflow-hidden">
  <div className="absolute inset-0">
      <img
        src={image3}
        alt="Outdoor seating area at Zen Cafe at dusk"
        loading="lazy"
        className="w-full h-full object-cover object-[center_75%]"
      />
    <div className="absolute inset-0 bg-ink/75" />
  </div>

  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
    className="relative max-w-2xl mx-auto"
  >
    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ivory mb-5 text-balance">
      Your table by the greenery is waiting
    </h2>

    <p className="text-ivory/80 mb-8">
      Reserve online in under a minute, or just walk in — we always keep a corner open.
    </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/reservations" className="inline-flex rounded-full bg-clay text-ivory font-medium px-7 py-4 hover:bg-clay-dark transition-colors">
              Reserve a Table
            </Link>
            <Link to="/menu" className="inline-flex rounded-full border border-ivory/50 text-ivory font-medium px-7 py-4 hover:bg-ivory/10 transition-colors">
              See the Menu
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}
