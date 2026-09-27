import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'

// Replace with your own Formspree endpoint: https://formspree.io/
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id'

const initialState = {
  name: '',
  phone: '',
  email: '',
  date: '',
  time: '',
  guests: '2',
  message: '',
}

export default function ReservationForm() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _subject: 'New Zen Cafe Reservation Request' }),
      })
      if (res.ok) {
        setStatus('success')
        setForm(initialState)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-moss/10 border border-moss/30 rounded-3xl p-10 text-center">
        <CheckCircle2 className="mx-auto text-moss mb-4" size={48} />
        <h3 className="font-display text-2xl text-ink mb-2">Reservation Request Sent!</h3>
        <p className="text-ink/70">
          Thank you — we've received your request and our team will confirm your table by phone or
          email shortly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 inline-flex rounded-full bg-ink text-ivory px-6 py-3 font-medium hover:bg-ink/85 transition-colors"
        >
          Make Another Reservation
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5 bg-ivory rounded-3xl p-6 sm:p-10 shadow-card">
      <Field label="Full Name" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
      <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="98765 43210" />
      <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" className="sm:col-span-2" />
      <Field label="Date" name="date" type="date" value={form.date} onChange={handleChange} required />
      <Field label="Time" name="time" type="time" value={form.time} onChange={handleChange} required />
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="guests" className="text-sm font-medium text-ink/80">Number of Guests</label>
        <select
          id="guests"
          name="guests"
          value={form.guests}
          onChange={handleChange}
          className="rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink focus:border-moss outline-none"
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium text-ink/80">Special Requests (optional)</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Window seat, birthday celebration, dietary needs..."
          className="rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink focus:border-moss outline-none resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="sm:col-span-2 text-clay-dark text-sm">
          Something went wrong sending your request. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-clay hover:bg-clay-dark disabled:opacity-70 transition-colors text-ivory font-medium px-6 py-4 mt-2"
      >
        {status === 'loading' && <Loader2 className="animate-spin" size={18} />}
        {status === 'loading' ? 'Sending Request...' : 'Confirm Reservation'}
      </button>
    </form>
  )
}

function Field({ label, name, type = 'text', value, onChange, required, placeholder, className = '' }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={name} className="text-sm font-medium text-ink/80">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-ink/35 focus:border-moss outline-none"
      />
    </div>
  )
}
