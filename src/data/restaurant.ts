export interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
  label?: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
}

export const ASSETS = {
  hero: '/assets/luna-hero-CBoSy-TL.webp',
  interior: '/assets/luna-interior-Cdot2C5e.webp',
  burrata: '/assets/burrata-DCv5sIua.webp',
  pasta: '/assets/pasta-B55EepLZ.webp',
  seabass: '/assets/seabass-BsU25TZy.webp',
  tiramisu: '/assets/tiramisu-Cfq0I8sb.webp',
  chef: '/assets/chef-C-BXRL3s.webp',
  spritz: '/assets/spritz-DNOQDdj3.webp',
  guests: '/assets/guests-CiuTwh0G.webp',
  entrance: '/assets/entrance-BQ6K-5jr.webp',
  table: '/assets/table-lWVB8irv.webp',
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    category: 'Starters',
    items: [
      {
        name: 'Whipped Feta & Charred Peppers',
        description: 'Creamy feta, roasted peppers, herbs, warm flatbread.',
        price: 12,
        image: '/assets/menu-whipped-feta-DCBhKPev.jpg',
      },
      {
        name: 'Burrata & Roasted Tomatoes',
        description: 'Creamy burrata, heirloom tomatoes, basil oil.',
        price: 14,
        image: '/assets/burrata-DCv5sIua.webp',
      },
      {
        name: 'Crispy Calamari',
        description: 'Lemon, parsley, smoked paprika aioli.',
        price: 15,
        image: '/assets/menu-calamari-40r3bmvz.jpg',
      },
    ],
  },
  {
    category: 'Pasta & Grains',
    items: [
      {
        name: 'Truffle Mushroom Pasta',
        description: 'Fresh pasta, wild mushrooms, parmesan, truffle oil.',
        price: 22,
        image: '/assets/pasta-B55EepLZ.webp',
      },
      {
        name: 'Lemon Herb Orzo',
        description: 'Orzo, seasonal vegetables, herbs, lemon, parmesan.',
        price: 18,
        image: '/assets/menu-orzo-BhtzpAAg.jpg',
      },
      {
        name: 'Spiced Lamb Pappardelle',
        description: 'Slow-cooked lamb, tomato, warm spices, aged cheese.',
        price: 24,
        image: '/assets/menu-pappardelle-D1gaDBHE.jpg',
      },
    ],
  },
  {
    category: 'Mains',
    items: [
      {
        name: 'Grilled Mediterranean Sea Bass',
        description: 'Seasonal vegetables, lemon butter, herbs.',
        price: 28,
        image: '/assets/seabass-BsU25TZy.webp',
      },
      {
        name: 'Rosemary Chicken',
        description: 'Roasted chicken, garlic potatoes, charred greens, jus.',
        price: 24,
        image: '/assets/menu-chicken-sqn1dtNb.jpg',
      },
      {
        name: 'Herb-Crusted Lamb Chops',
        description: 'Grilled lamb, olive tapenade, seasonal vegetables.',
        price: 31,
        image: '/assets/menu-lamb-chops-BLI1SQMy.jpg',
      },
    ],
  },
  {
    category: 'Desserts',
    items: [
      {
        name: 'Pistachio Tiramisu',
        description: 'Classic tiramisu with pistachio cream.',
        price: 11,
        image: '/assets/tiramisu-Cfq0I8sb.webp',
      },
      {
        name: 'Olive Oil Cake',
        description: 'Citrus, whipped mascarpone, toasted almonds.',
        price: 10,
        image: '/assets/menu-olive-oil-cake-Ddsag0qf.jpg',
      },
      {
        name: 'Dark Chocolate Tart',
        description: 'Bittersweet chocolate, sea salt, vanilla cream.',
        price: 11,
        image: '/assets/menu-chocolate-tart-BMDHMWT0.jpg',
      },
    ],
  },
  {
    category: 'Drinks',
    items: [
      {
        name: 'House Lemonade',
        description: 'Fresh citrus and herbs.',
        price: 6,
        image: '/assets/menu-lemonade-MFgyutrR.jpg',
      },
      {
        name: 'Sparkling Citrus Spritz',
        description: 'Citrus, bubbles, botanical notes.',
        price: 9,
        image: '/assets/spritz-DNOQDdj3.webp',
      },
      {
        name: 'Mediterranean Tonic',
        description: 'Herbal tonic with citrus.',
        price: 8,
        image: '/assets/menu-tonic-dyo2j8Qm.jpg',
      },
      {
        name: 'Espresso',
        description: 'Freshly pulled espresso.',
        price: 4,
        image: '/assets/menu-espresso-DRipTCAJ.jpg',
      },
      {
        name: 'Cappuccino',
        description: 'Espresso with steamed milk.',
        price: 5,
        image: '/assets/menu-cappuccino-CwzNsux9.jpg',
      },
    ],
  },
];

export const FEATURED_DISHES: MenuItem[] = [
  {
    name: 'Burrata & Roasted Tomatoes',
    description: 'Creamy burrata, heirloom tomatoes, basil oil.',
    price: 14,
    image: ASSETS.burrata,
    label: 'To begin',
  },
  {
    name: 'Truffle Mushroom Pasta',
    description: 'Fresh pasta, wild mushrooms, parmesan, truffle oil.',
    price: 22,
    image: ASSETS.pasta,
    label: 'From the kitchen',
  },
  {
    name: 'Grilled Mediterranean Sea Bass',
    description: 'Seasonal vegetables, lemon butter, herbs.',
    price: 28,
    image: ASSETS.seabass,
    label: 'From the sea',
  },
  {
    name: 'Pistachio Tiramisu',
    description: 'Classic tiramisu with pistachio cream.',
    price: 11,
    image: ASSETS.tiramisu,
    label: 'Something sweet',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: ASSETS.burrata,
    alt: 'Creamy burrata with roasted heirloom tomatoes and basil oil',
    caption: 'Seasonal, from the start',
  },
  {
    src: ASSETS.interior,
    alt: 'Sunlit Luna dining room with arched windows and olive trees',
    caption: 'A place to linger',
  },
  {
    src: ASSETS.chef,
    alt: 'Chef finishing a Mediterranean dish with fresh herbs',
    caption: 'Care in every detail',
  },
  {
    src: ASSETS.table,
    alt: 'Linen-set bistro table with ceramic plates and a candle',
    caption: 'Your evening begins here',
  },
  {
    src: ASSETS.spritz,
    alt: 'Sparkling citrus spritz with an orange slice',
    caption: 'A little golden hour',
  },
  {
    src: ASSETS.tiramisu,
    alt: 'Pistachio tiramisu topped with crushed pistachios',
    caption: 'Save room for sweetness',
  },
  {
    src: ASSETS.guests,
    alt: 'A couple sharing conversation over dinner',
    caption: 'Better, together',
  },
  {
    src: ASSETS.entrance,
    alt: 'Mediterranean bistro entrance with an arched wooden door and olive trees',
    caption: 'Come as you are',
  },
];

export const OPENING_HOURS: [string, string][] = [
  ['Monday–Thursday', '5:00 PM–11:00 PM'],
  ['Friday–Saturday', '5:00 PM–12:00 AM'],
  ['Sunday', '4:00 PM–10:00 PM'],
];

export const STORY_LEAD_TEXT =
  'At Luna Bistro, we believe great food is only part of the experience. From carefully selected ingredients to the atmosphere around the table, every detail is designed to make your visit memorable.';

export const MOMENTS_TEXT =
  "Whether it's a quiet dinner for two or a celebration with friends, Luna Bistro is made for moments worth remembering.";

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];
