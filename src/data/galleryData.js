// Gallery media data — Zen Cafe
// Images: high-quality royalty-free photography from Unsplash.
// Videos: use cafe-relevant Unsplash poster frames with sample video sources.
// Replace `videoSrc` values with real cafe footage whenever available —
// they currently point to stable placeholder clips so the lightbox/video
// experience can be demonstrated end-to-end.

const SIZES = {
  portrait: 'w=800&h=1067&fit=crop&crop=entropy',
  square: 'w=800&h=800&fit=crop&crop=entropy',
  landscape: 'w=900&h=600&fit=crop&crop=entropy',
  wide: 'w=1000&h=560&fit=crop&crop=entropy',
}

const sizeCycle = ['portrait', 'square', 'landscape', 'square', 'wide', 'portrait', 'landscape']

// [unsplashPhotoId, category, alt]
const rawImages = [
  // Coffee
  ['1495474472287-4d71bcdd2085', 'Coffee', 'Barista pouring latte art at Zen Cafe'],
  ['1541167760496-1628856ab772', 'Coffee', 'Close up of a signature latte'],
  ['1509042239860-f550ce710b93', 'Coffee', 'Fresh roasted coffee beans overhead'],
  ['1497935586351-b67a49e012bf', 'Coffee', 'Espresso shot pulling at the counter'],
  ['1517701550927-30cf4ba1dba9', 'Coffee', 'Cappuccino with delicate foam art'],

  // Breakfast
  ['1533089860892-a7c6f0a88666', 'Breakfast', 'Breakfast spread with pastries and fresh juice'],
  ['1504754524776-8f4f37790ca0', 'Breakfast', 'Sunny side up eggs on rustic plate'],
  ['1525351484163-7529414344d8', 'Breakfast', 'Avocado toast with poached egg'],
  ['1484723091739-30a097e8f929', 'Breakfast', 'Stack of fluffy pancakes with syrup'],
  ['1525755662778-989d0524087e', 'Breakfast', 'Full breakfast board with fruit and bread'],

  // Sushi
  ['1579584425555-c3ce17fd4351', 'Sushi', 'Rainbow sushi roll platter'],
  ['1611143669185-af224c5e3252', 'Sushi', 'Assorted nigiri and maki rolls'],
  ['1553621042-f6e147245754', 'Sushi', 'Fresh sushi rolls with soy sauce'],

  // Pizza
  ['1574071318508-1cdbab80d002', 'Pizza', 'Fresh margherita pizza on wooden board'],
  ['1513104890138-7c749659a591', 'Pizza', 'Cheesy pizza slice close up'],
  ['1548365328-9f547fb0953c', 'Pizza', 'Whole wood-fired pizza fresh from the oven'],
  ['1590947132387-155cc02f3212', 'Pizza', 'Pizza baking in a stone oven'],

  // Healthy / Vegan
  ['1512621776951-a57141f2eefd', 'Healthy & Vegan', 'Fresh vegan buddha bowl'],
  ['1490645935967-10de6ba17061', 'Healthy & Vegan', 'Colourful vegan grain bowl'],
  ['1490474418585-ba9bad8fd0ea', 'Healthy & Vegan', 'Smoothie bowl topped with fruit'],
  ['1546069901-ba9599a7e63c', 'Healthy & Vegan', 'Fresh green salad bowl'],

  // Desserts
  ['1551024506-0bccd828d307', 'Desserts', 'Assorted desserts and pastries on display'],
  ['1587314168485-3236d6710814', 'Desserts', 'Slice of layered cake'],
  ['1488477181946-6428a0291777', 'Desserts', 'Glazed donuts on a plate'],
  ['1533134242443-d4fd215305ad', 'Desserts', 'Rich chocolate cake with ganache'],

  // Cafe Interior
  ['1554118811-1e0d58224f24', 'Cafe Interior', 'Warm, modern interior seating area of Zen Cafe'],
  ['1509305717900-84f40e18eb45', 'Cafe Interior', 'Wood-toned cafe interior with hanging lights'],
  ['1481833761820-0509d3217039', 'Cafe Interior', 'Bright cafe interior with plants'],
  ['1493857671505-72967e2e2760', 'Cafe Interior', 'Cozy interior corner with soft lighting'],

  // Outdoor Seating
  ['1516214104703-d870798883c5', 'Outdoor Seating', 'Outdoor seating area with string lights'],
  ['1495856458515-0637185db551', 'Outdoor Seating', 'Sunny outdoor cafe patio seating'],
  ['1522336572468-97b06e8ef143', 'Outdoor Seating', 'Garden style outdoor seating area'],

  // Barista
  ['1442512595331-e89e73853f31', 'Barista', 'Barista carefully preparing an order'],
  ['1512568400610-62da28bc8a13', 'Barista', 'Barista pouring milk into espresso'],
  ['1509785307050-d4066910ec1b', 'Barista', 'Barista portrait behind the counter'],

  

  // Lifestyle
  ['1445116572660-236099ec97a0', 'Lifestyle', 'Person reading a book with coffee cup'],
  ['1524350876685-274059332603', 'Lifestyle', 'Laptop and coffee on a cafe table'],
  ['1499750310107-5fef28a66643', 'Lifestyle', 'Open book beside a warm coffee cup'],

  // Cafe Ambiance
  ['1498804103079-a6351b050096', 'Cafe Ambiance', 'Warm ambient lighting inside the cafe'],
  ['1466978913421-dad2ebd01d17', 'Cafe Ambiance', 'Golden hour light across cafe tables'],


  // Pastries
  ['1509440159596-0249088772ff', 'Pastries', 'Display case filled with fresh pastries'],
  ['1555507036-ab794f575c8a', 'Pastries', 'Golden croissants fresh from the oven'],
  ['1550617931-e17a7b70dce2', 'Pastries', 'Assorted bakery pastries on a tray'],

  
]

export const galleryImages = rawImages.map(([id, category, alt], i) => {
  const size = sizeCycle[i % sizeCycle.length]
  return {
    id: `g${i + 1}`,
    type: 'image',
    category,
    size,
    src: `https://images.unsplash.com/photo-${id}?auto=format&${SIZES[size]}&q=80`,
    alt,
  }
})

// Sample video sources are stable, freely-hostable placeholder clips used to
// demonstrate the play/lightbox experience — swap `videoSrc` for licensed
// cafe footage (e.g. from Pexels/Coverr) when it's available.
const rawVideos = [
  ['1495474472287-4d71bcdd2085', 'Coffee', 'Morning brew ritual', 'ForBiggerFun'],
  ['1442512595331-e89e73853f31', 'Barista', 'Behind the espresso bar', 'ForBiggerBlazes'],
  ['1579584425555-c3ce17fd4351', 'Sushi', 'Sushi, slice by slice', 'ForBiggerEscapes'],
  ['1554118811-1e0d58224f24', 'Cafe Ambiance', 'A morning at Zen Cafe', 'ForBiggerJoyrides'],
  ['1574071318508-1cdbab80d002', 'Pizza', 'Fresh out of the oven', 'ForBiggerMeltdowns'],
  ['1516214104703-d870798883c5', 'Outdoor Seating', 'Evenings on the patio', 'Sintel'],
  ['1512568400610-62da28bc8a13', 'Barista', 'Pulling the perfect shot', 'TearsOfSteel'],
  ['1551024506-0bccd828d307', 'Desserts', 'Plating today\u2019s specials', 'ElephantsDream'],
]
export const galleryVideos = rawVideos.map(([id, category, title, clip], i) => ({
  id: `v${i + 1}`,
  type: 'video',
  category,
  size: sizeCycle[i % sizeCycle.length],
  src: `https://images.unsplash.com/photo-${id}?auto=format&${SIZES[sizeCycle[i % sizeCycle.length]]}&q=80`,
  videoSrc: `https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${clip}.mp4`,
  alt: title,
  title,
}))

// Interleave videos through the image set so the feed feels naturally mixed,
// like a real Instagram grid, rather than all videos being grouped at the end.
export const galleryItems = (() => {
  const items = [...galleryImages]
  const step = Math.floor(items.length / (galleryVideos.length + 1)) || 1
  galleryVideos.forEach((v, i) => {
    const pos = Math.min(items.length, (i + 1) * step + i)
    items.splice(pos, 0, v)
  })
  return items
})()

export const galleryFilters = [
  'All',
  'Coffee',
  'Breakfast',
  'Sushi',
  'Pizza',
  'Healthy & Vegan',
  'Desserts',
  'Cafe Interior',
  'Outdoor Seating',
  'Barista',
  'Lifestyle',
  'Cafe Ambiance',
  'Pastries',
  
]
