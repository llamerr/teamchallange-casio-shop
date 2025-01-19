import { http, HttpResponse } from 'msw';

import { Env } from '@/libs/Env';
import type { CollectionDTO } from '@/services/api/dto/Collection.dto';

import { PORTRAIT_IMAGES } from '../uploadThingFiles';

export const collections: CollectionDTO[] = [
  {
    id: 'g-shock',
    title: 'G-Shock',
    slug: 'g-shock',
    description: 'Toughness meets bold style',
  },
  {
    id: 'baby-g',
    title: 'Baby-G',
    slug: 'baby-g',
    description: 'Tough, stylish, and colorful',
    image: PORTRAIT_IMAGES[10],
  },
  {
    id: 'edifice',
    title: 'Edifice',
    slug: 'edifice',
    description: 'Speed and intelligence',
    image: PORTRAIT_IMAGES[9],
  },
  {
    id: 'pro-trek',
    title: 'Pro Trek',
    slug: 'pro-trek',
    description: 'Toughness for the great outdoors',
    image: PORTRAIT_IMAGES[8],
  },
  {
    id: 'oceanus',
    title: 'Oceanus',
    slug: 'oceanus',
    description: 'High-precision timepieces',
    image: PORTRAIT_IMAGES[7],
  },
  {
    id: 'sheen',
    title: 'Sheen',
    slug: 'sheen',
    description: 'Elegance and sophistication',
    image: PORTRAIT_IMAGES[6],
  },
];

export const collectionsHandlers = [
  http.get(`${Env.NEXT_PUBLIC_API_URL}/api/collections`, () => {
    return HttpResponse.json(collections);
  }),
];
