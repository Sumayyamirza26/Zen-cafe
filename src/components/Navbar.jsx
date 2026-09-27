import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../images/logo.jpg'


const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/reservations', label: 'Reservations' },
  { to: '/location', label: 'Location' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass-dark shadow-soft' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => setOpen(false)}
          >
          <span className="rounded-full overflow-hidden transition-transform duration-300 hover:scale-105">

            <img
              src={logo}
              alt="Zen Cafe Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </span>

          <span
            className={`font-display text-xl tracking-wide ${scrolled ? 'text-ivory' : 'text-ivory'} transition-transform duration-300 hover:scale-[1.01]`}

          >
            Zen Cafe
          </span>
        </Link>



        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors ${
                    isActive ? 'text-clay-light font-medium' : 'text-ivory/85 hover:text-clay-light'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/reservations"
          className="hidden lg:inline-flex items-center rounded-full bg-clay hover:bg-clay-dark transition-colors text-ivory text-sm font-medium px-5 py-2.5 shadow-card"
        >
          Reserve a Table
        </Link>

        <Link
          to="/order"
          className="hidden lg:inline-flex items-center rounded-full bg-clay hover:bg-clay-dark transition-colors text-ivory text-sm font-medium px-5 py-2.5 shadow-card"
        >
          Order Now
        </Link>


        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-ivory p-2 -mr-2"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden glass-dark mt-4 mx-4 rounded-3xl"
          >
            <ul className="flex flex-col divide-y divide-ivory/10 px-6 py-2">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-4 text-base ${isActive ? 'text-clay-light font-medium' : 'text-ivory/90'}`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li className="py-4">
                <Link
                  to="/reservations"
                  onClick={() => setOpen(false)}
                  className="block text-center rounded-full bg-clay text-ivory font-medium py-3"
                >
                  Reserve a Table
                </Link>
              </li>

              <li className="py-4">
                <Link
                  to="/order"
                  onClick={() => setOpen(false)}
                  className="block text-center rounded-full bg-clay text-ivory font-medium py-3"
                >
                  Order Now
                </Link>
              </li>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
