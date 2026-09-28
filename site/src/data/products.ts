import type { ImageMetadata } from 'astro';

export type ProductCategory = 'meat' | 'seafood' | 'plant' | 'egg';
export type ProductFor = 'cats' | 'dogs' | 'both';

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  image: ImageMetadata;
  benefit: string;
  for: ProductFor;
  weight?: string;
  ingredients?: string[];
  feedingGuide?: string;
}

const productImages = import.meta.glob<{ default: ImageMetadata }>('../assets/products/*.png', { eager: true });
const productImage = (file: string) => productImages[`../assets/products/${file}`].default;

export const products: Product[] = [
  { slug: 'beef-chunks', name: 'Beef Chunks', category: 'meat', image: productImage('beef.png'), benefit: 'Iron-rich red meat. Single ingredient.', for: 'both' },
  { slug: 'chicken-chunks', name: 'Chicken Chunks', category: 'meat', image: productImage('chicken.png'), benefit: 'Lean protein. Gentle on digestion.', for: 'both' },
  { slug: 'goat-meat-chunks', name: 'Goat Meat Chunks', category: 'meat', image: productImage('goat-meat.png'), benefit: 'Novel protein. Hypoallergenic option.', for: 'dogs' },
  { slug: 'egg-yolk-cubes', name: 'Egg Yolk Cubes', category: 'egg', image: productImage('egg-yolk.png'), benefit: 'Choline and healthy fats. Coat support.', for: 'both' },
  { slug: 'fish-chunks', name: 'Fish Chunks', category: 'seafood', image: productImage('fish.png'), benefit: 'Omega-3 rich. Skin and coat support.', for: 'both' },
  { slug: 'mackerel-tuna-chunks', name: 'Mackerel Tuna Chunks', category: 'seafood', image: productImage('mackerel-tuna.png'), benefit: 'High protein. Naturally aromatic.', for: 'both' },
  { slug: 'pacific-mackerel-chunks', name: 'Pacific Mackerel Chunks', category: 'seafood', image: productImage('pacific-mackerel.png'), benefit: 'Cold-water omega-3. Heart-healthy.', for: 'both' },
  { slug: 'mix-seafood', name: 'Mix Seafood Chunks & Whole', category: 'seafood', image: productImage('mix-seafood.png'), benefit: 'Variety pack. A taste of the ocean.', for: 'both' },
  { slug: 'mussels-whole', name: 'Mussels Whole', category: 'seafood', image: productImage('mussels.png'), benefit: 'Natural glucosamine. Joint support.', for: 'both' },
  { slug: 'shrimp-whole', name: 'Shrimp Whole', category: 'seafood', image: productImage('shrimp.png'), benefit: 'Astaxanthin and lean protein.', for: 'both' },
  { slug: 'pumpkin-chunks', name: 'Pumpkin Chunks', category: 'plant', image: productImage('pumpkin.png'), benefit: 'Fiber and vitamin A. Digestive support.', for: 'both' },
  { slug: 'sweet-potato-cubes', name: 'Sweet Potato Cubes', category: 'plant', image: productImage('sweet-potato.png'), benefit: 'Natural energy. Easy to digest.', for: 'both' },
  { slug: 'tofu-cubes', name: 'Tofu Cubes', category: 'plant', image: productImage('tofu.png'), benefit: 'Plant protein. Light and crumbly.', for: 'both' },
  { slug: 'ube-cubes', name: 'Ube Cubes', category: 'plant', image: productImage('ube.png'), benefit: 'Antioxidant-rich purple yam.', for: 'both' },
];

export const categoryLabel: Record<ProductCategory, string> = {
  meat: 'Meat',
  seafood: 'Seafood',
  plant: 'Plant-based',
  egg: 'Egg',
};

export const forLabel: Record<ProductFor, string> = {
  cats: 'For cats',
  dogs: 'For dogs',
  both: 'For cats & dogs',
};
