import { MessageCircle } from 'lucide-react'
import { business } from '../data/businessInfo'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent('Hi Zen Cafe, I would like to know more about...')}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Zen Cafe on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-soft hover:scale-105 transition-transform"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </a>
  )
}
