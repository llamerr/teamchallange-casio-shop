import { http, HttpResponse } from 'msw';

import type { NewsDTO } from './News.dto';

export const news: NewsDTO[] = [
  {
    id: '1',
    image: 'https://picsum.photos/536/354',
    title: 'The art of watchmaking',
    description: 'Discover the craftsmanship and precision that goes into creating a high-quality timepiece.',
    href: 'the-art-of-watchmaking',
  },
  {
    id: '2',
    image: 'https://picsum.photos/536/355',
    title: 'The evolution of watches',
    description: 'From pocket watches to smartwatches, learn about the history and development of timepieces.',
    href: 'the-evolution-of-watches',
  },
  {
    id: '3',
    image: 'https://picsum.photos/536/356',
    title: 'The beauty of mechanical watches',
    description: 'Explore the intricate mechanics and stunning designs of mechanical timepieces.',
    href: 'the-beauty-of-mechanical-watches',
  },
  {
    id: '4',
    image: 'https://picsum.photos/536/357',
    title: 'The importance of watch maintenance',
    description: 'Learn about the importance of regular maintenance and how to keep your watch in top condition.',
    href: 'the-importance-of-watch-maintenance',
  },
  {
    id: '5',
    image: 'https://picsum.photos/536/358',
    title: 'The art of watch collecting',
    description: 'Discover the world of watch collecting and learn about the rarest and most valuable timepieces.',
    href: 'the-art-of-watch-collecting',
  },
  {
    id: '6',
    image: 'https://picsum.photos/536/359',
    title: 'The future of watches',
    description: 'Explore the latest trends and innovations in the world of watchmaking.',
    href: 'the-future-of-watches',
  },
];

export const newsHandlers = [
  http.get('/api/news', () => {
    return HttpResponse.json(news);
  }),
];
