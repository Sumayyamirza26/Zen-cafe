import { useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'

// Replace with your own Formspree endpoint: https://formspree.io/
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id'

const initialState = { name: '', email: '', phone: '', subject: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _subject: 'New Zen Cafe Contact Message' }),
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
        <h3 className="font-display text-2xl text-ink mb-2">Message Sent!</h3>
        <p className="text-ink/70">Thanks for reaching out — our team will get back to you soon.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 inline-flex rounded-full bg-ink text-ivory px-6 py-3 font-medium hover:bg-ink/85 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5 bg-ivory rounded-3xl p-6 sm:p-10 shadow-card">
      <div className="flex flex-col gap-2">
        <label htmlFor="cf-name" className="text-sm font-medium text-ink/80">Full Name</label>
        <input id="cf-name" name="name" value={form.name} onChange={handleChange} required
          className="rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink focus:border-moss outline-none" placeholder="Your name" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="cf-phone" className="text-sm font-medium text-ink/80">Phone</label>
        <input id="cf-phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
          className="rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink focus:border-moss outline-none" placeholder="98765 43210" />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="cf-email" className="text-sm font-medium text-ink/80">Email Address</label>
        <input id="cf-email" name="email" type="email" value={form.email} onChange={handleChange} required
          className="rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink focus:border-moss outline-none" placeholder="you@example.com" />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="cf-subject" className="text-sm font-medium text-ink/80">Subject</label>
        <input id="cf-subject" name="subject" value={form.subject} onChange={handleChange}
          className="rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink focus:border-moss outline-none" placeholder="How can we help?" />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="cf-message" className="text-sm font-medium text-ink/80">Message</label>
        <textarea id="cf-message" name="message" rows={5} value={form.message} onChange={handleChange} required
          className="rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink focus:border-moss outline-none resize-none" placeholder="Write your message..." />
      </div>

      {status === 'error' && (
        <p className="sm:col-span-2 text-clay-dark text-sm">
          Something went wrong sending your message. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-moss hover:bg-moss-dark disabled:opacity-70 transition-colors text-ivory font-medium px-6 py-4 mt-2"
      >
        {status === 'loading' && <Loader2 className="animate-spin" size={18} />}
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
