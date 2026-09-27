import { useMemo, useState } from 'react'
import SEO from '../components/SEO'

// TODO: Replace these placeholders with the official Zen Cafe ordering links.
const ZOMATO_ORDER_URL = 'https://www.zomato.com/pune/zen-cafe-koregaon-park/order'
const SWIGGY_ORDER_URL = 'https://www.swiggy.com/city/pune/zen-cafe-koregaon-park-rest134883'

const MENU_PLACEHOLDER_ITEMS = [
  { id: 'm1', name: 'Coffee & Breakfast Combo', price: 349 },
  { id: 'm2', name: 'Sushi Bowl (Veg)', price: 499 },
  { id: 'm3', name: 'Signature Pizza', price: 599 },
]

export default function OrderNow() {
  const [directOrderMode, setDirectOrderMode] = useState(false)

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
    menuItemId: MENU_PLACEHOLDER_ITEMS[0].id,
    quantity: 1,
  })

  const menuItem = useMemo(
    () => MENU_PLACEHOLDER_ITEMS.find((i) => i.id === form.menuItemId) || MENU_PLACEHOLDER_ITEMS[0],
    [form.menuItemId],
  )

  const summary = useMemo(() => {
    const qty = Math.max(1, Number(form.quantity) || 1)
    const itemTotal = (menuItem?.price || 0) * qty
    return {
      itemTotal,
      qty,
    }
  }, [form.quantity, menuItem])

  const [status, setStatus] = useState('idle') // idle | success

  const setField = (key) => (e) => {
    const value = e.target.value
    setForm((f) => ({ ...f, [key]: value }))
  }

  const handleQuantity = (delta) => {
    setForm((f) => {
      const next = Math.max(1, Math.min(20, Number(f.quantity) + delta))
      return { ...f, quantity: next }
    })
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault()

    const requiredOk =
      form.name.trim().length > 0 &&
      form.phone.trim().length > 0 &&
      form.address.trim().length > 0 &&
      Boolean(form.menuItemId)

    if (!requiredOk) return

    setStatus('success')
  }

  return (
    <>
      <SEO
        title="Order Now | Zen Cafe, Koregaon Park, Pune"
        description="Order Zen Cafe favorites from Zomato or Swiggy, or place a direct order online for delivery."
      />

      <section className="pt-36 pb-20 px-5 sm:px-8 bg-ink text-ivory bg-noise">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow text-xs uppercase font-medium text-clay-light mb-3">Order Now</p>
          <h1 className="font-display text-4xl sm:text-5xl text-balance">Order Your Favorites</h1>
          <p className="mt-4 text-ivory/75">
            Choose Zomato or Swiggy for quick delivery, or order directly from Zen Cafe for a more personal experience.
          </p>
        </div>
      </section>



      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid sm:grid-cols-3 gap-6">
          <a
            href={ZOMATO_ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className="group bg-ivory rounded-3xl p-8 shadow-card border border-ink/10 hover:translate-y-[-2px] transition-transform"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full grid place-items-center bg-clay/15 text-clay-dark flex-none">
                <span className="font-display">Z</span>
              </div>
              <div>
                <h2 className="font-display text-xl text-ink group-hover:text-clay-dark transition-colors">Zomato</h2>
              </div>
            </div>
            <p className="mt-2 text-ink/70 text-sm">Order from Zomato</p>
            <p className="text-ink/70/80 text-sm">Fast delivery to your doorstep.</p>
          </a>

          <a
            href={SWIGGY_ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className="group bg-ivory rounded-3xl p-7 shadow-card border border-ink/10 hover:translate-y-[-2px] transition-transform"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full grid place-items-center bg-clay/15 text-clay-dark flex-none">
                <span className="font-display">S</span>
              </div>
              <div>
                <h2 className="font-display text-xl text-ink group-hover:text-clay-dark transition-colors">Swiggy</h2>
              </div>
            </div>
            <p className="mt-2 text-ink/70 text-sm">Order from Swiggy</p>
            <p className="text-ink/70/80 text-sm">Freshly prepared and delivered with care.</p>
          </a>


          <button
            type="button"
            onClick={() => setDirectOrderMode(true)}
            className="group bg-clay rounded-3xl p-7 shadow-card hover:bg-clay-dark transition-colors text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full grid place-items-center bg-ivory/15 text-ivory flex-none">
                <span className="font-display">Z</span>
              </div>
              <div>
                <h2 className="font-display text-xl text-ivory">Zen Cafe</h2>
              </div>
            </div>
            <p className="mt-2 text-ivory/80 text-sm">Order Directly from Zen Cafe</p>
            <p className="mt-2 text-ivory/80 text-sm">The best way to enjoy Zen Cafe.</p>
          </button>
        </div>
      </section>

      {directOrderMode && (
        <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-20">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3">
              {status === 'success' ? (
                <div className="bg-ivory border border-ink/10 rounded-3xl p-10 text-center shadow-card">
                  <div className="mx-auto w-16 h-16 rounded-full bg-moss/20 grid place-items-center text-moss mb-4">
                    ✓
                  </div>
                  <h2 className="font-display text-3xl text-ink">Order placed!</h2>
                  <p className="mt-3 text-ink/70">
                    Thanks — your Zen Cafe direct order has been received. Our team will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle')
                      setDirectOrderMode(false)
                    }}
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-ivory px-7 py-3.5 font-medium hover:bg-ink/85 transition-colors"
                  >
                    Place Another Order
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePlaceOrder} className="bg-ivory rounded-3xl p-6 sm:p-10 shadow-card border border-ink/10">
                  <h2 className="font-display text-2xl sm:text-3xl text-ink mb-2">Direct Order</h2>
                  <p className="text-ink/70 mb-7">Enter your delivery details and we’ll confirm your order.</p>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-ink/80" htmlFor="customerName">Customer Name</label>
                      <input
                        id="customerName"
                        value={form.name}
                        onChange={setField('name')}
                        required
                        placeholder="Your name"
                        className="rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink focus:border-moss outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-ink/80" htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        value={form.phone}
                        onChange={setField('phone')}
                        required
                        placeholder="98765 43210"
                        type="tel"
                        className="rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink focus:border-moss outline-none"
                      />
                    </div>

                    <div className="sm:col-span-2 flex flex-col gap-2">
                      <label className="text-sm font-medium text-ink/80" htmlFor="address">Delivery Address</label>
                      <textarea
                        id="address"
                        value={form.address}
                        onChange={setField('address')}
                        required
                        rows={3}
                        placeholder="House/Flat no, street, area"
                        className="rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink focus:border-moss outline-none resize-none"
                      />
                    </div>

                    <div className="sm:col-span-2 flex flex-col gap-2">
                      <label className="text-sm font-medium text-ink/80" htmlFor="notes">Optional Order Notes</label>
                      <textarea
                        id="notes"
                        value={form.notes}
                        onChange={setField('notes')}
                        rows={3}
                        placeholder="Allergies, timing preferences, extra chutney..."
                        className="rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink focus:border-moss outline-none resize-none"
                      />
                    </div>

                    <div className="sm:col-span-2 flex flex-col gap-2">
                      <label className="text-sm font-medium text-ink/80" htmlFor="menuItem">Menu selection</label>
                      <select
                        id="menuItem"
                        value={form.menuItemId}
                        onChange={setField('menuItemId')}
                        className="rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink focus:border-moss outline-none"
                      >
                        {MENU_PLACEHOLDER_ITEMS.map((i) => (
                          <option key={i.id} value={i.id}>
                            {i.name} — ₹{i.price}
                          </option>
                        ))}
                      </select>
                      <p className="text-xs text-ink/55 mt-1">Placeholder menu integration — replace with your actual menu source if needed.</p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-ink/80" htmlFor="qty">Quantity</label>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleQuantity(-1)}
                          className="w-11 h-11 rounded-full bg-ink/5 border border-ink/15 text-ink hover:bg-ink/10 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <input
                          id="qty"
                          value={form.quantity}
                          onChange={setField('quantity')}
                          type="number"
                          min={1}
                          max={20}
                          required
                          className="w-20 text-center rounded-xl border border-ink/15 bg-white px-2 py-3 text-ink focus:border-moss outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => handleQuantity(1)}
                          className="w-11 h-11 rounded-full bg-ink/5 border border-ink/15 text-ink hover:bg-ink/10 transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-ink/80">Menu price</label>
                      <div className="rounded-xl border border-ink/15 bg-ink/5 px-4 py-3 text-ink">
                        ₹{menuItem?.price} / item
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 rounded-3xl bg-ink/5 border border-ink/10 p-5">
                    <h3 className="font-display text-lg text-ink mb-3">Order Summary</h3>
                    <div className="flex items-center justify-between text-ink/80 text-sm mb-2">
                      <span>{menuItem?.name}</span>
                      <span>₹{menuItem?.price} x {summary.qty}</span>
                    </div>
                    <div className="flex items-center justify-between text-ink font-medium">
                      <span>Total</span>
                      <span>₹{summary.itemTotal}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full inline-flex items-center justify-center rounded-full bg-clay hover:bg-clay-dark transition-colors text-ivory font-medium px-6 py-4"
                  >
                    Place Order
                  </button>
                </form>
              )}
            </div>

            <aside className="lg:col-span-2 space-y-6">
              <div className="bg-moss/10 rounded-3xl p-6 border border-moss/20">
                <h3 className="font-display text-lg text-ink mb-2">How it works</h3>
                <ul className="text-ink/70 text-sm space-y-2">
                  <li>1) Pick an item from the menu selection</li>
                  <li>2) Add delivery details and quantity</li>
                  <li>3) Place order — we confirm shortly</li>
                </ul>
              </div>

              <div className="bg-clay/10 rounded-3xl p-6 border border-clay/20">
                <h3 className="font-display text-lg text-ink mb-2">Tip</h3>
                <p className="text-ink/70 text-sm">
                  For large orders or special requests, include notes so our team can prepare accordingly.
                </p>
              </div>
            </aside>
          </div>
        </section>
      )}
    </>
  )
}

