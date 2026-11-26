import type { ImageMetadata } from 'astro';

export type EventType = 'Expo' | 'Bazaar' | 'Exhibition' | 'Community';

export interface EventEntry {
  slug: string;
  name: string;
  date: string;
  location: string;
  type: EventType;
  description: string;
  funFact?: string;
  photos?: ImageMetadata[];
}

// Add each event Yumiyu has joined below, most recent first.
//
// 1. Drop photos in src/assets/events/<slug>/ and import them at the top of
//    this file, e.g. `import cover from '../assets/events/pet-expo-2026/cover.png';`
// 2. Add an entry here:
//
// {
//   slug: 'pet-expo-2026',
//   name: 'Indonesia Pet Expo 2026',
//   date: 'March 2026',
//   location: 'Jakarta Convention Center',
//   type: 'Expo',
//   description: 'Our first national pet expo — sampled all 14 flavors to visitors over three days.',
//   funFact: 'We handed out over 2,000 samples and sold out of Ube Cubes by day two.',
//   photos: [cover],
// },
export const events: EventEntry[] = [];
