export const site = {
  name: 'Yumiyu',
  tagline: 'Premium Freeze-Dried Nutrition for Pets',
  description:
    'Yumiyu makes premium freeze-dried pet food and treats for cats and dogs. Single-ingredient, human-grade, crafted in Indonesia.',
  url: 'https://yumiyu.id',
  email: 'social@yumi-yu.com',
  whatsapp: '+62 898 4976 377',
  whatsappUrl: 'https://wa.me/628984976377',
  address: 'Indonesia', // PLACEHOLDER — see CONTENT.md
  social: {
    instagram: 'https://instagram.com/yumiyu.id',
    tiktok: 'https://tiktok.com/@yumiyu.id',
    shopee: 'https://shopee.co.id/yumiyu.id',
  },
} as const;

export const nav = [
  { label: 'Products', href: '/products' },
  { label: 'Manufacturing', href: '/manufacturing' },
  { label: 'Private Label', href: '/private-label' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
