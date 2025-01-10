import { http, HttpResponse } from 'msw';

import type { CollectionDTO } from '@/services/api/dto/Collection.dto';

export const collections: CollectionDTO[] = [
  {
    id: 'g-shock',
    title: 'G-Shock',
    description: 'Toughness meets bold style',
  },
  {
    id: 'baby-g',
    title: 'Baby-G',
    description: 'Tough, stylish, and colorful',
    image: 'https://utfs.io/f/oM0zaDGq1OeYXB5bXqL3HZdv4qR56pWGYb2cm1PK97XrnFCf',
  },
  {
    id: 'edifice',
    title: 'Edifice',
    description: 'Speed and intelligence',
    image: 'https://utfs.io/f/oM0zaDGq1OeYq10Eyes0V3tDQwrj1qEnh2xYWlBf4gS8beI7',
  },
  {
    id: 'pro-trek',
    title: 'Pro Trek',
    description: 'Toughness for the great outdoors',
    image: 'https://utfs.io/f/oM0zaDGq1OeYLeemj82Z2icjoHEyCG1QBAhxVKMsuUfS9w4J',
  },
  {
    id: 'oceanus',
    title: 'Oceanus',
    description: 'High-precision timepieces',
    image: 'https://utfs.io/f/oM0zaDGq1OeYr2bvTWasc69rf2RoHl3GiBVvn0yOIeJgxFdZ',
  },
  {
    id: 'sheen',
    title: 'Sheen',
    description: 'Elegance and sophistication',
    image: 'https://utfs.io/f/oM0zaDGq1OeYrFDyoeasc69rf2RoHl3GiBVvn0yOIeJgxFdZ',
  },
];

export const collectionsHandlers = [
  http.get('/api/collections', () => {
    return HttpResponse.json(collections);
  }),
];
