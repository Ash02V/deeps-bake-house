import { MenuItem } from '../types';
import pistachioNutellaImg from '../assets/images/pistachio_nutella_cake_1786865091442.jpg';
import lotusBiscoffImg from '../assets/images/lotus_biscoff_cake_1786865106690.jpg';
import nutellaBombolonisImg from '../assets/images/nutella_bombolonis_1786865123880.jpg';
import gourmetCookieTinImg from '../assets/images/gourmet_cookie_tin_1786865147334.jpg';
import blueberryCheesecakeImg from '../assets/images/blueberry_cheesecake_1786865167860.jpg';
import mangoCheesecakeImg from '../assets/images/mango_cheesecake_1786865185978.jpg';
import gourmetDonutsBoxImg from '../assets/images/gourmet_donuts_box_1786865210195.jpg';
import bentoBasqueCakeImg from '../assets/images/bento_basque_cake_1786865231683.jpg';

export const BAKERY_PHONE = '8855952207';
export const BAKERY_PHONE_DISPLAY = '88559 52207';
export const BAKERY_INSTAGRAM = '@deepsbakehouse';
export const BAKERY_ADDRESS = 'Mahalaxmi Nilayam, near Gayatri Pooja Store, Madhav Nagar, Solapur';
export const BAKERY_LOCATION_CITY = 'Solapur';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'pistachio-nutella-cheesecake',
    name: 'Baked Pistachio Nutella Cheesecake',
    marathiHindiTagline: 'Pure Cream Cheese Magic',
    category: 'cheesecakes',
    userDescription: 'Baked pistachio Nutella cheesecake 😋😍 DM for order❤️',
    detailedDescription: 'Velvety slow-baked cheesecake made with 100% pure cream cheese, layered with artisanal pistachio ganache, swirl of rich Nutella, and crowned with dark chocolate chips. No maida, no oil.',
    basePrice: 549,
    priceOptions: [
      { label: '250g Bento', price: 549, weightOrQuantity: '250g', isPopular: true },
      { label: 'Half KG (500g)', price: 999, weightOrQuantity: '500g' },
      { label: '1 KG Full Cake', price: 1899, weightOrQuantity: '1000g' }
    ],
    image: pistachioNutellaImg,
    badges: ['Pure Cream Cheese', 'No Maida', 'Nutella & Pistachio', 'Bestseller'],
    isEggless: true,
    pureCreamCheese: true,
    preOrderOnly: true,
    whatsappMessage: 'Hi Deeps Bake House! I would like to order the Baked Pistachio Nutella Cheesecake 🍰',
    rating: 5.0,
    servingSuggestion: 'Best enjoyed chilled right out of the refrigerator.'
  },
  {
    id: 'nutella-bombolonis',
    name: 'Nutella Bombolonis',
    marathiHindiTagline: 'Italian Sugar-Dusted Donuts',
    category: 'donuts',
    userDescription: 'Nutella bombolonis ✨ DM for order ❤️',
    detailedDescription: 'Pillow-soft Italian style fried bombolonis tossed in crystal sugar and bursting with warm, molten Nutella hazelnut filling at the center. Soft, pillowy, and utterly irresistible.',
    basePrice: 180,
    priceOptions: [
      { label: 'Box of 2 Pcs', price: 180, weightOrQuantity: '2 pcs' },
      { label: 'Box of 4 Pcs', price: 340, weightOrQuantity: '4 pcs', isPopular: true },
      { label: 'Party Box (6 Pcs)', price: 490, weightOrQuantity: '6 pcs' }
    ],
    image: nutellaBombolonisImg,
    badges: ['100% Eggless', 'Nutella Loaded', 'Freshly Fried', 'Soft & Fluffy'],
    isEggless: true,
    preOrderOnly: false,
    whatsappMessage: 'Hi Deeps Bake House! I want to order freshly made Nutella Bombolonis ✨🍩',
    rating: 4.9,
    servingSuggestion: 'Serve slightly warm or at room temperature.'
  },
  {
    id: 'lotus-biscoff-cheesecake',
    name: 'Half KG Lotus Biscoff Cheesecake',
    marathiHindiTagline: 'Caramelized Speculoos Heaven',
    category: 'cheesecakes',
    userDescription: 'Half kg lotus biscoff cheesecake 😋',
    detailedDescription: 'Our iconic signature bake! Crunchy Lotus Biscoff biscuit crust topped with rich pure cream cheese, flooded with molten Biscoff spread, biscuit crumble ring, and an authentic Biscoff biscuit topping.',
    basePrice: 449,
    priceOptions: [
      { label: '250g Bento', price: 449, weightOrQuantity: '250g' },
      { label: 'Half KG (500g)', price: 899, weightOrQuantity: '500g', isPopular: true },
      { label: '1 KG Full Cake', price: 1699, weightOrQuantity: '1000g' }
    ],
    image: lotusBiscoffImg,
    badges: ['Signature Bake', '100% Biscoff', 'No Maida', 'Pure Cream Cheese'],
    isEggless: true,
    pureCreamCheese: true,
    preOrderOnly: true,
    whatsappMessage: 'Hi Deeps Bake House! I would like to order the Lotus Biscoff Cheesecake 🍰✨',
    rating: 5.0,
    servingSuggestion: 'Pair with warm coffee or tea.'
  },
  {
    id: 'gourmet-donut-box',
    name: 'Gourmet Donut Box (4 Pcs)',
    marathiHindiTagline: 'Ek donut aur ho jaye? 😋😍',
    category: 'donuts',
    userDescription: 'Ek donut aur ho jaye?😋😍 Treat yourself @deepsbakehouse',
    detailedDescription: 'Treat yourself to our handcrafted box of 4 gourmet donuts: Dark chocolate with toasted almond flakes, White chocolate marble swirl, Classic sprinkle glaze, and Milk chocolate drizzle.',
    basePrice: 299,
    priceOptions: [
      { label: 'Box of 4 Assorted', price: 299, weightOrQuantity: '4 pcs', isPopular: true },
      { label: 'Box of 6 Assorted', price: 430, weightOrQuantity: '6 pcs' }
    ],
    image: gourmetDonutsBoxImg,
    badges: ['Assorted Flavours', 'Almond Flakes', '100% Eggless', 'Insta-Worthy'],
    isEggless: true,
    preOrderOnly: false,
    whatsappMessage: 'Hi Deeps Bake House! "Ek donut aur ho jaye?" - I would like to order the Gourmet Donut Box 🍩',
    rating: 4.9,
    servingSuggestion: 'Freshly baked daily for instant craving fixes.'
  },
  {
    id: 'cookie-menu-tins',
    name: 'Handcrafted Cookie Menu & Tins',
    marathiHindiTagline: 'Luxury in a Tin ✨ Solapur Exclusive',
    category: 'cookies',
    userDescription: 'Our Cookie Menu is here! 💜 Fresh • Eggless • Homemade • Made with Premium Ingredients ✨ 📩 DM or WhatsApp to place your order 📍 Solapur | Self Pickup ✨ Made with love at Deeps Bake House',
    detailedDescription: 'Crispy edges, soft chewy centers, baked to golden perfection and sealed in our aesthetic reusable tins. Choose from 7 decadent varieties: Chocolate, Dark Chocolate, Milk Chocolate, Nutella, Double Choc, Vanilla + Dark Choc, and Red Velvet.',
    basePrice: 250,
    priceOptions: [
      { label: 'Classic Chocolate (Small)', price: 250, weightOrQuantity: 'Small Tin' },
      { label: 'Classic Chocolate (Large)', price: 500, weightOrQuantity: 'Large Tin' },
      { label: 'Nutella Stuffed Tin (Small)', price: 320, weightOrQuantity: 'Small Tin', isPopular: true },
      { label: 'Nutella Stuffed Tin (Large)', price: 600, weightOrQuantity: 'Large Tin' },
      { label: 'Red Velvet Cookie Tin (Small)', price: 350, weightOrQuantity: 'Small Tin' },
      { label: 'Red Velvet Cookie Tin (Large)', price: 699, weightOrQuantity: 'Large Tin' },
      { label: 'Double Chocolate Tin (Small)', price: 300, weightOrQuantity: 'Small Tin' },
      { label: 'Double Chocolate Tin (Large)', price: 600, weightOrQuantity: 'Large Tin' }
    ],
    image: gourmetCookieTinImg,
    badges: ['Eggless', 'Reusable Tin', 'Gifting Favorite', 'Homemade'],
    isEggless: true,
    preOrderOnly: true,
    takeawayOnly: true,
    whatsappMessage: 'Hi Deeps Bake House! I would like to order Cookie Tins from your Cookie Menu 🍪💜',
    rating: 5.0,
    servingSuggestion: 'Warm in microwave for 10 seconds for a gooey center!'
  },
  {
    id: 'fresh-mango-cheesecake',
    name: 'Fresh Mango Cheesecake (1/2 KG)',
    marathiHindiTagline: 'Juicy Alphonso Slices & Birthday Special',
    category: 'cheesecakes',
    userDescription: 'Our first order is out of the door 💞 1/2 kg mango cheesecake',
    detailedDescription: 'Seasonal favorite loaded with generous juicy diced Alphonso mangoes, mango mirror glaze, and a chilled silken pure cream cheese layer on a buttery biscuit base. Includes complimentary birthday plaque upon request.',
    basePrice: 499,
    priceOptions: [
      { label: '250g Bento', price: 499, weightOrQuantity: '250g' },
      { label: 'Half KG (500g)', price: 899, weightOrQuantity: '500g', isPopular: true },
      { label: '1 KG Celebration Cake', price: 1699, weightOrQuantity: '1000g' }
    ],
    image: mangoCheesecakeImg,
    badges: ['Real Mango Chunks', 'Pure Cream Cheese', 'Celebration Ready', 'Seasonal Hit'],
    isEggless: true,
    pureCreamCheese: true,
    preOrderOnly: true,
    whatsappMessage: 'Hi Deeps Bake House! I want to order the Fresh Mango Cheesecake (1/2 kg / custom size) 🥭🍰',
    rating: 4.9,
    servingSuggestion: 'Best served chilled for birthday & anniversary celebrations.'
  },
  {
    id: 'pure-creamcheese-assorted-wheel',
    name: 'Assorted Cheesecake Variety Wheel (6 Slices)',
    marathiHindiTagline: 'No Maida • No Oil • Pure Cream Cheese',
    category: 'specials',
    userDescription: 'Every cheesecake is made with pure cheescream🧀🍰 No oil used, No meida added, Rich creamy feels in every bite 😋😍',
    detailedDescription: 'Can’t choose just one flavour? Get our multi-flavour sampler wheel featuring 6 distinct gourmet slices: Lotus Biscoff, Blueberry Compote, Nutella Swirl, Dark Chocolate Truffle, and Pistachio Cream. 100% pure cream cheese goodness.',
    basePrice: 999,
    priceOptions: [
      { label: '6-Slice Sampler Wheel', price: 999, weightOrQuantity: 'Approx 600g', isPopular: true },
      { label: '8-Slice Grand Party Wheel', price: 1399, weightOrQuantity: 'Approx 850g' }
    ],
    image: bentoBasqueCakeImg,
    badges: ['6 Flavours in 1', 'Pure Cream Cheese', 'No Maida Added', 'No Oil Used'],
    isEggless: true,
    pureCreamCheese: true,
    preOrderOnly: true,
    whatsappMessage: 'Hi Deeps Bake House! I would like to order the Assorted Cheesecake Sampler Wheel 🧀🍰',
    rating: 5.0,
    servingSuggestion: 'Perfect for family get-togethers and tasting sessions.'
  },
  {
    id: 'blueberry-cheesecake',
    name: 'Freshly Baked Blueberry Cheesecake',
    marathiHindiTagline: 'Juicy Blueberry Goodness',
    category: 'cheesecakes',
    userDescription: 'Freshly Baked Blueberry Cheesecake 😍 Creamy, rich, and topped with juicy blueberry goodness. Every slice is made with premium ingredients for the perfect melt-in-your-mouth experience. 🍰✨ 📍 Available at Deeps Bake House 📲 Order now: 88559 52207',
    detailedDescription: 'Rich, dense, and velvety baked cheesecake slathered with homemade chunky wild blueberry compote that cuts through the creamy decadence with a bright fruity tang.',
    basePrice: 449,
    priceOptions: [
      { label: '250g Bento', price: 449, weightOrQuantity: '250g', isPopular: true },
      { label: 'Half KG (500g)', price: 899, weightOrQuantity: '500g' },
      { label: '1 KG Full Cake', price: 1699, weightOrQuantity: '1000g' }
    ],
    image: blueberryCheesecakeImg,
    badges: ['Wild Blueberry Compote', 'Pure Cream Cheese', 'Customer Favorite', 'No Maida'],
    isEggless: true,
    pureCreamCheese: true,
    preOrderOnly: true,
    whatsappMessage: 'Hi Deeps Bake House! I would like to order the Freshly Baked Blueberry Cheesecake 🫐🍰',
    rating: 5.0,
    servingSuggestion: 'Keep refrigerated until 10 minutes before serving.'
  },
  {
    id: 'solapur-crunchy-cookie-tin',
    name: 'Crunchy Cookie Tin (Solapur Pre-Order)',
    marathiHindiTagline: 'Luxury in a Tin • Golden & Crunchy',
    category: 'cookies',
    userDescription: 'Hello solapurkars ✨🍪 Cookie tins available now 😋 Luxury in a tin. Freshly baked, beautifully packed, and customized just for you. 🍪✨ Order yours today! ❤️📞 88559 52207 📍 Takeaway | Pre-orders only Mahalaxmi Nilayam, near Gayatri Pooja Store, Madhav Nagar, Solapur',
    detailedDescription: 'Handcrafted with butter, golden brown sugar, and premium chocolate chunks with molten fudge drops. Beautifully packaged in giftable tins with protective sealing for long-lasting crunch.',
    basePrice: 280,
    priceOptions: [
      { label: 'Small Tin (Treat Yourself)', price: 280, weightOrQuantity: 'Small (200g)' },
      { label: 'Medium Tin (Great for Sharing)', price: 450, weightOrQuantity: 'Medium (350g)', isPopular: true },
      { label: 'Large Tin (Gatherings & Gifts)', price: 650, weightOrQuantity: 'Large (550g)' }
    ],
    image: gourmetCookieTinImg,
    badges: ['Solapur Pre-Orders', 'Gifting Tin', 'Crispy Edges Soft Center', 'Eggless'],
    isEggless: true,
    preOrderOnly: true,
    takeawayOnly: true,
    whatsappMessage: 'Hello Deeps Bake House! I am from Solapur and want to pre-order a Crunchy Cookie Tin 🍪✨',
    rating: 4.9,
    servingSuggestion: 'Pair with hot milk, filter coffee, or a cozy evening.'
  },
  {
    id: 'chocolate-donuts-box',
    name: 'Chocolate Glazed Donuts (Box of 5)',
    marathiHindiTagline: 'Spiderweb Drizzle & Fun Sprinkles',
    category: 'donuts',
    userDescription: 'Chocolate donuts 🍩',
    detailedDescription: 'A five-piece party pack of pillowy yeast-raised eggless donuts coated in glossy dark chocolate ganache, intricate white vanilla spiderweb piping, and colourful rainbow sprinkles.',
    basePrice: 320,
    priceOptions: [
      { label: 'Box of 5 Chocolate Donuts', price: 320, weightOrQuantity: '5 pcs', isPopular: true },
      { label: 'Box of 10 Party Pack', price: 599, weightOrQuantity: '10 pcs' }
    ],
    image: gourmetDonutsBoxImg,
    badges: ['Box of 5', 'Spiderweb Art', '100% Eggless', 'Kids Favorite'],
    isEggless: true,
    preOrderOnly: false,
    whatsappMessage: 'Hi Deeps Bake House! I would like to order the Chocolate Donuts Box 🍩✨',
    rating: 4.8,
    servingSuggestion: 'Best enjoyed fresh on the day of delivery.'
  },
  {
    id: 'nutella-cookie-pie-skillet',
    name: 'Molten Nutella Stuffed Cookie Pie',
    marathiHindiTagline: 'Deep-Dish Warm Cookie Skillet',
    category: 'specials',
    userDescription: 'Done orders 🩷 DM for order or call 88559 52207',
    detailedDescription: 'Thick baked deep-dish golden cookie pie segmented into generous warm triangles, each oozing with a rich hazelnut Nutella center pocket. An absolute crowd favorite!',
    basePrice: 399,
    priceOptions: [
      { label: '6-Inch Skillet Pie (6 Slices)', price: 399, weightOrQuantity: '6 Slices', isPopular: true },
      { label: '8-Inch Mega Cookie Pie (8 Slices)', price: 650, weightOrQuantity: '8 Slices' }
    ],
    image: gourmetCookieTinImg,
    badges: ['Molten Nutella Center', 'Fresh Out of Oven', 'Eggless Bakes', 'Limited Batches'],
    isEggless: true,
    preOrderOnly: true,
    whatsappMessage: 'Hi Deeps Bake House! I want to order the Molten Nutella Stuffed Cookie Pie 🩷🍪',
    rating: 5.0,
    servingSuggestion: 'Warm in microwave for 15 seconds and top with vanilla ice cream.'
  },
  {
    id: 'loaded-choc-chunk-cookie-tin',
    name: 'Completed Cookie Tin Order (Loaded Choc Chunks)',
    marathiHindiTagline: 'Freshly Baked & Packed with Love',
    category: 'cookies',
    userDescription: '🍪Cookie tin order: completed!',
    detailedDescription: 'Freshly baked batch of thick gourmet butter cookies loaded with Belgian milk chocolate chunks and melted chocolate pools, nestled in food-grade parchment paper inside our signature brown craft tins.',
    basePrice: 299,
    priceOptions: [
      { label: 'Small Batch Tin (approx 6-8 cookies)', price: 299, weightOrQuantity: 'Small Tin' },
      { label: 'Large Batch Tin (approx 14-16 cookies)', price: 550, weightOrQuantity: 'Large Tin', isPopular: true }
    ],
    image: gourmetCookieTinImg,
    badges: ['Completed Batch', 'Belgian Choc', 'Craft Packaging', 'Eggless'],
    isEggless: true,
    preOrderOnly: true,
    takeawayOnly: true,
    whatsappMessage: 'Hi Deeps Bake House! I would like to order a batch of the Loaded Choc-Chunk Cookie Tins 🍪🤎',
    rating: 4.9,
    servingSuggestion: 'Store in an airtight container for up to 10 days.'
  },
  {
    id: 'bento-basque-cheesecake-menu',
    name: 'Bento Basque & Full Cheesecake Menu',
    marathiHindiTagline: 'Caramelized Burnt Basque & Pre-Order Bakes',
    category: 'menus',
    userDescription: 'Lotus Biscoff (₹449) • Blueberry (₹449) • Nutella (₹549) • Pistachio (₹549) • Bento Basque (₹500) | Half KG & 1 KG Available on Pre-Order | Customizable Orders Available',
    detailedDescription: 'Explore our complete cheesecake lineup. From our caramelized Spanish Basque bento cheesecake with its custard-like molten center, to custom 1/2 KG & 1 KG bakes customized with your personalized messages and flavor combos.',
    basePrice: 500,
    priceOptions: [
      { label: 'Bento Basque Cheesecake (250g)', price: 500, weightOrQuantity: '250g Bento', isPopular: true },
      { label: 'Nutella Cheesecake (250g)', price: 549, weightOrQuantity: '250g' },
      { label: 'Pistachio Cheesecake (250g)', price: 549, weightOrQuantity: '250g' },
      { label: 'Lotus Biscoff (250g)', price: 449, weightOrQuantity: '250g' },
      { label: 'Blueberry Cheesecake (250g)', price: 449, weightOrQuantity: '250g' },
      { label: 'Custom 1/2 KG Pre-Order', price: 899, weightOrQuantity: '500g' },
      { label: 'Custom 1 KG Pre-Order', price: 1699, weightOrQuantity: '1000g' }
    ],
    image: bentoBasqueCakeImg,
    badges: ['Full Menu', 'Basque Special', 'Custom Toppers', 'Pure Cream Cheese'],
    isEggless: true,
    pureCreamCheese: true,
    preOrderOnly: true,
    whatsappMessage: 'Hi Deeps Bake House! I would like to place a custom Cheesecake Pre-Order / Bento Basque 🎂',
    rating: 5.0,
    servingSuggestion: 'Pre-order 24-48 hours in advance for 1/2 KG and 1 KG custom cakes.'
  }
];

export const OFFICIAL_COOKIE_TIN_PRICES = [
  { flavor: 'Chocolate Cookie Tin', small: 250, large: 500 },
  { flavor: 'Dark Chocolate Cookie Tin', small: 250, large: 500 },
  { flavor: 'Milk Chocolate Cookie Tin', small: 300, large: 600 },
  { flavor: 'Nutella Cookie Tin', small: 320, large: 600 },
  { flavor: 'Double Chocolate Cookie Tin', small: 300, large: 600 },
  { flavor: 'Vanilla + Dark Chocolate Cookie Tin', small: 300, large: 600 },
  { flavor: 'Red Velvet Cookie Tin', small: 350, large: 699 }
];

export const OFFICIAL_CHEESECAKE_PRICES = [
  { item: 'Lotus Biscoff Cheesecake', size: '250g', price: 449 },
  { item: 'Blueberry Cheesecake', size: '250g', price: 449 },
  { item: 'Nutella Cheesecake', size: '250g', price: 549 },
  { item: 'Pistachio Cheesecake', size: '250g', price: 549 },
  { item: 'Bento Basque Cheesecake', size: '250g', price: 500 }
];

export const BAKERY_PROMISES = [
  {
    title: 'Pure Cream Cheese',
    description: 'Every cheesecake is crafted with 100% pure cream cheese. No oil used, No maida added.',
    icon: 'Cake'
  },
  {
    title: '100% Eggless & Homemade',
    description: 'Freshly baked daily in our Solapur kitchen with love, hygiene, and finest imported ingredients.',
    icon: 'Sparkles'
  },
  {
    title: 'Instant WhatsApp Booking',
    description: 'Direct communication with the baker. Customize sizes, names, and pickup times seamlessly.',
    icon: 'MessageCircle'
  },
  {
    title: 'Pre-Orders & Fresh Takeaways',
    description: 'Self-pickup at Mahalaxmi Nilayam, Madhav Nagar, Solapur for peak freshness.',
    icon: 'MapPin'
  }
];
