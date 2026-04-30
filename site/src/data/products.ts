export type ProductCategory = 'meat' | 'seafood' | 'plant' | 'egg';
export type ProductFor = 'cats' | 'dogs' | 'both';

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  image: string;
  benefit: string;
  for: ProductFor;
  weight?: string;
  ingredients?: string[];
  feedingGuide?: string;
}

export const products: Product[] = [
  { slug: 'beef-chunks', name: 'Beef Chunks', category: 'meat', image: '/assets/products/beef.png', benefit: 'Iron-rich red meat. Single ingredient.', for: 'both' },
  { slug: 'chicken-chunks', name: 'Chicken Chunks', category: 'meat', image: '/assets/products/chicken.png', benefit: 'Lean protein. Gentle on digestion.', for: 'both' },
  { slug: 'goat-meat-chunks', name: 'Goat Meat Chunks', category: 'meat', image: '/assets/products/goat-meat.png', benefit: 'Novel protein. Hypoallergenic option.', for: 'dogs' },
  { slug: 'egg-yolk-cubes', name: 'Egg Yolk Cubes', category: 'egg', image: '/assets/products/egg-yolk.png', benefit: 'Choline and healthy fats. Coat support.', for: 'both' },
  { slug: 'fish-chunks', name: 'Fish Chunks', category: 'seafood', image: '/assets/products/fish.png', benefit: 'Omega-3 rich. Skin and coat support.', for: 'both' },
  { slug: 'mackerel-tuna-chunks', name: 'Mackerel Tuna Chunks', category: 'seafood', image: '/assets/products/mackerel-tuna.png', benefit: 'High protein. Naturally aromatic.', for: 'both' },
  { slug: 'pacific-mackerel-chunks', name: 'Pacific Mackerel Chunks', category: 'seafood', image: '/assets/products/pacific-mackerel.png', benefit: 'Cold-water omega-3. Heart-healthy.', for: 'both' },
  { slug: 'mix-seafood', name: 'Mix Seafood Chunks & Whole', category: 'seafood', image: '/assets/products/mix-seafood.png', benefit: 'Variety pack. A taste of the ocean.', for: 'both' },
  { slug: 'mussels-whole', name: 'Mussels Whole', category: 'seafood', image: '/assets/products/mussels.png', benefit: 'Natural glucosamine. Joint support.', for: 'both' },
  { slug: 'shrimp-whole', name: 'Shrimp Whole', category: 'seafood', image: '/assets/products/shrimp.png', benefit: 'Astaxanthin and lean protein.', for: 'both' },
  { slug: 'pumpkin-chunks', name: 'Pumpkin Chunks', category: 'plant', image: '/assets/products/pumpkin.png', benefit: 'Fiber and vitamin A. Digestive support.', for: 'both' },
  { slug: 'sweet-potato-cubes', name: 'Sweet Potato Cubes', category: 'plant', image: '/assets/products/sweet-potato.png', benefit: 'Natural energy. Easy to digest.', for: 'both' },
  { slug: 'tofu-cubes', name: 'Tofu Cubes', category: 'plant', image: '/assets/products/tofu.png', benefit: 'Plant protein. Light and crumbly.', for: 'both' },
  { slug: 'ube-cubes', name: 'Ube Cubes', category: 'plant', image: '/assets/products/ube.png', benefit: 'Antioxidant-rich purple yam.', for: 'both' },
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
