import { delay, http, HttpResponse } from 'msw';

import { Env } from '@/libs/Env';
import type { CollectionDTO, MetaCollection } from '@/services/api/dto/Collection/Collection.dto';

import { LANDSCAPE_IMAGES, PORTRAIT_IMAGES } from '../../uploadThingFiles';

export const collections: CollectionDTO[] = [
  {
    id: 'g-shock',
    title: 'G-Shock',
    slug: 'g-shock',
    slogan: 'Toughness meets bold style',
    description: 'Inspired by the past, built for the present — explore Vintage designs made with premium materials and cutting-edge innovation.',
    imageWide: LANDSCAPE_IMAGES[7],
  },
  {
    id: 'baby-g',
    title: 'Baby-G',
    slug: 'baby-g',
    slogan: 'Tough, stylish, and colorful',
    description: 'From classic to modern, these watches are the perfect gift for your loved ones.',
    image: PORTRAIT_IMAGES[10],
    imageWide: LANDSCAPE_IMAGES[2],
    images: [
      PORTRAIT_IMAGES[10],
      PORTRAIT_IMAGES[8],
    ],
  },
  {
    id: 'edifice',
    title: 'Edifice',
    slug: 'edifice',
    slogan: 'Speed and intelligence',
    description: 'Discover the perfect balance between speed and intelligence in the Edifice collection.',
    image: PORTRAIT_IMAGES[9],
    imageWide: LANDSCAPE_IMAGES[3],
    images: [
      PORTRAIT_IMAGES[9],
      PORTRAIT_IMAGES[4],
    ],
  },
  {
    id: 'pro-trek',
    title: 'Pro Trek',
    slug: 'pro-trek',
    slogan: 'Toughness for the great outdoors',
    description: 'Experience the thrill of adventure in the Pro Trek collection. Designed for outdoor enthusiasts, these watches offer advanced outdoor tracking and environmental sensing capabilities.',
    image: PORTRAIT_IMAGES[8],
    imageWide: LANDSCAPE_IMAGES[4],
    images: [
      PORTRAIT_IMAGES[1],
      PORTRAIT_IMAGES[8],
    ],
  },
  {
    id: 'oceanus',
    title: 'Oceanus',
    slug: 'oceanus',
    slogan: 'High-precision timepieces',
    description: 'Discover the pinnacle of precision in the Oceanus collection.',
    image: PORTRAIT_IMAGES[7],
    imageWide: LANDSCAPE_IMAGES[5],
    images: [
      PORTRAIT_IMAGES[7],
      PORTRAIT_IMAGES[2],
    ],
  },
  {
    id: 'sheen',
    title: 'Sheen',
    slug: 'sheen',
    slogan: 'Elegance and sophistication',
    description: 'Discover the perfect blend of elegance and sophistication in the Sheen collection. Crafted from premium materials and featuring intricate details, these watches are a statement of luxury and sophistication.',
    image: PORTRAIT_IMAGES[6],
    imageWide: LANDSCAPE_IMAGES[6],
    images: [
      PORTRAIT_IMAGES[6],
      PORTRAIT_IMAGES[8],
    ],
  },
] as const;

export const metaCollections: Record<MetaCollection, CollectionDTO[]> = {
  'all': collections,
  'for-men': collections.slice(0, 4),
  'for-women': collections.slice(2, 5),
  'new': [collections[0], collections[1]] as CollectionDTO[],
  'best-sellers': [collections[2], collections[3]] as CollectionDTO[],
  'sale': [collections[4], collections[5]] as CollectionDTO[],
};

export const collectionsHandlers = [
  http.get(`${Env.NEXT_PUBLIC_API_URL}/api/collections`, async ({ request }) => {
    await delay();

    const url = new URL(request.url);
    const type = url.searchParams.get('type') || 'all';

    const collections = metaCollections[type as MetaCollection];

    return HttpResponse.json(collections);
  }),
];
