export const business = {
  name: 'Zen Cafe',
  addressLines: ['Galaxy Garden,', 'N Main Rd,', 'Koregaon Park,', 'Pune,', 'Maharashtra 411001'],
  addressFull: 'Galaxy Garden, N Main Rd, Koregaon Park, Pune, Maharashtra 411001',
  phone: '090217 12312',
  phoneDial: '+919021712312',
  whatsapp: '919021712312',
  rating: 4.2,
  reviewCount: 1449,
  openingHour: 8,
  closingHour: 23,
  hoursLabel: 'Open daily, 8:00 AM – 11:00 PM',
  mapEmbedSrc:
    'https://www.google.com/maps?q=Galaxy+Garden+N+Main+Rd+Koregaon+Park+Pune+Maharashtra+411001&output=embed',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Galaxy+Garden+N+Main+Rd+Koregaon+Park+Pune+Maharashtra+411001',
  instagram: 'https://www.instagram.com/zencafepune/?hl=en',
  facebook: 'https://www.facebook.com/ZencafePune/',
  emailPlaceholder: 'hello@zencafepune.com',
}

// Returns true if the cafe is currently open, based on local browser time.
export function isCafeOpenNow() {
  const now = new Date()
  const hour = now.getHours() + now.getMinutes() / 60
  return hour >= business.openingHour && hour < business.closingHour
}

export const weeklyHours = [
  { day: 'Monday', hours: '8:00 AM – 11:00 PM' },
  { day: 'Tuesday', hours: '8:00 AM – 11:00 PM' },
  { day: 'Wednesday', hours: '8:00 AM – 11:00 PM' },
  { day: 'Thursday', hours: '8:00 AM – 11:00 PM' },
  { day: 'Friday', hours: '8:00 AM – 11:00 PM' },
  { day: 'Saturday', hours: '8:00 AM – 11:00 PM' },
  { day: 'Sunday', hours: '8:00 AM – 11:00 PM' },
]

export const nearbyLandmarks = [
  'Koregaon Park Plaza — 3 min walk',
  'Osho Teerth Park — 5 min walk',
  'North Main Road Market — 4 min walk',
  'Pune Railway Station — 12 min drive',
]
