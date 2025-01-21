import { http, HttpResponse } from 'msw';

import { Env } from '@/libs/Env';

import { PORTRAIT_IMAGES } from '../../uploadThingFiles';
import type { KeyFeatureDTO } from './KeyFeature.dto';

export const KeyFeatures: KeyFeatureDTO[] = [
  {
    id: 'water-resistant',
    title: 'Water Resistant',
    slug: 'water-resistant',
    description: 'Enjoy peace of mind knowing your watch is built to withstand everyday splashes and brief water exposure.',
  },
  {
    id: 'self-adjustable-strap',
    title: 'Self-Adjustable Strap',
    slug: 'self-adjustable-strap',
    description: 'Designed for maximum comfort, the self-adjustable strap ensures a perfect fit, adapting easily to your wrist.',
    image: PORTRAIT_IMAGES[10],
  },
  {
    id: 'premium-polished-metal',
    title: 'Premium Polished Metal',
    slug: 'premium-polished-metal',
    description: 'Crafted from high-quality polished metal, this watch exudes elegance and sophistication, making it a stylish addition to any outfit.',
    image: PORTRAIT_IMAGES[9],
  },
  {
    id: 'luxury-watchmaking',
    title: 'Luxury Watchmaking',
    slug: 'luxury-watchmaking',
    description: 'Discover the craftsmanship and precision that goes into creating a high-quality timepiece.',
    image: PORTRAIT_IMAGES[8],
  },
  {
    id: 'sustainable-materials',
    slug: 'sustainable-materials',
    title: 'Sustainable Materials',
    description: 'Crafted with eco-friendly materials, this watch is a testament to our commitment to sustainability.',
    image: PORTRAIT_IMAGES[7],
  },
];

export const keyFeaturesHandlers = [
  http.get(`${Env.NEXT_PUBLIC_API_URL}/api/features`, () => {
    return HttpResponse.json(KeyFeatures);
  }),
];
