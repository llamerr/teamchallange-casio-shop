import { http, HttpResponse } from 'msw';

import { Env } from '@/libs/Env';
import type { ProductDTO } from '@/services/api/dto/Product.dto';

export const products: ProductDTO[] = [
  {
    badges: ['Limited', 'Bluetooth', 'Touch Solar', 'Water Resistant'],
    image: '',
    title: 'Casio G-Shock Frogman',
    collection: 'ATOMIC TIMEKEEPING',
    collectionSlug: 'atomic-timekeeping',
    size: '40 mm',
    colors: 3,
    price: 95.00,
    originalPrice: 120.00,
    id: 'JY8146-54A',
    slug: 'casio-g-shock-frogman-jy8146-54a',
  },
  {
    badges: ['Bestsellers', 'New', 'Water Resistant'],
    image: 'https://qujblijcjy.ufs.sh/f/oM0zaDGq1OeYGkWs1dI08fdOtvRu97WAj52QYbrI6VEZSXek',
    title: 'Casio G-Shock GB5600',
    collection: 'ATOMIC TIMEKEEPING',
    collectionSlug: 'atomic-timekeeping',
    size: '40 mm',
    colors: 3,
    price: 95.00,
    originalPrice: 120.00,
    id: 'JY8146-54B',
    slug: 'casio-g-shock-gb5600-jy8146-54b',
  },
  {
    badges: ['Touch Solar', 'Water Resistant', 'Limited', 'Bluetooth'],
    image: 'https://qujblijcjy.ufs.sh/f/oM0zaDGq1OeYeUSprUVwfRYkBsbaEu4no9jiThQlW2rM1xK0',
    title: 'Casio G-Shock GB5600',
    collection: 'ATOMIC TIMEKEEPING',
    collectionSlug: 'atomic-timekeeping',
    size: '40 mm',
    colors: 3,
    price: 95.00,
    originalPrice: 120.00,
    id: 'JY8146-54E',
    slug: 'casio-g-shock-gb5600-jy8146-54e',
  },
  {
    badges: [],
    image: 'https://qujblijcjy.ufs.sh/f/oM0zaDGq1OeYr2bvTWasc69rf2RoHl3GiBVvn0yOIeJgxFdZ',
    title: 'Casio G-Shock GA-100',
    collection: 'SOLAR POWERED',
    collectionSlug: 'solar-powered',
    size: '42 mm',
    colors: 5,
    price: 110.00,
    originalPrice: 150.00,
    id: 'AB1234-XY',
    slug: 'casio-g-shock-ga-100-ab1234-xy',
  },
];

export const similarProducts: ProductDTO[] = [
  {
    badges: ['Limited', 'Bluetooth'],
    image: '',
    title: 'Seiko 5 Sports',
    collection: 'ATOMIC TIMEKEEPING',
    collectionSlug: 'atomic-timekeeping',
    size: '40 mm',
    colors: 3,
    price: 95.00,
    originalPrice: 120.00,
    id: 'JY8146-54A',
    slug: 'seiko-5-sports-jy8146-54a',
  },
  {
    badges: ['Bestsellers', 'New'],
    image: 'https://utfs.io/f/oM0zaDGq1OeYQXqXB8ERPTdmhn5pFKZ0NGAEofaYbw8VCzrU',
    title: 'Casio G-Shock GB5600',
    collection: 'ATOMIC TIMEKEEPING',
    collectionSlug: 'atomic-timekeeping',
    size: '40 mm',
    colors: 3,
    price: 95.00,
    originalPrice: 120.00,
    id: 'JY8146-54B',
    slug: 'casio-g-shock-gb5600-jy8146-54b',
  },
  {
    badges: ['Touch Solar'],
    image: 'https://utfs.io/f/oM0zaDGq1OeY7vfEW4R3RYPkQxf4wdIXz20t9irnvEDTl5bH',
    title: 'Casio G-Shock GA-100',
    collection: 'SOLAR POWERED',
    collectionSlug: 'solar-powered',
    size: '42 mm',
    colors: 5,
    price: 110.00,
    originalPrice: 150.00,
    id: 'AB1234-XY',
    slug: 'casio-g-shock-ga-100-ab1234-xy',
  },
  {
    badges: ['Children', 'Water Resistant', 'Lightweight'],
    image: 'https://utfs.io/f/oM0zaDGq1OeYK04ip5nKnbafmVTZY97tOiHq5x0u8WSsvDNJ',
    title: 'Casio Baby-G BA-110',
    collection: 'SOLAR POWERED',
    collectionSlug: 'solar-powered',
    size: '42 mm',
    colors: 5,
    price: 110.00,
    originalPrice: 150.00,
    id: 'AB1234-XY',
    slug: 'casio-baby-g-ba-110-ab1234-xy',
  },
];

export const newProducts: ProductDTO[] = [
  {
    badges: ['Limited', 'Bluetooth'],
    image: '',
    title: 'Casio G-Shock GA-100',
    collection: 'ATOMIC TIMEKEEPING',
    collectionSlug: 'atomic-timekeeping',
    size: '45 mm',
    colors: 3,
    price: 99.00,
    originalPrice: 139.00,
    id: 'GA100-1A',
    slug: 'casio-g-shock-ga-100-ga100-1a',
  },
  {
    badges: ['Bestsellers', 'New'],
    image: 'https://utfs.io/f/oM0zaDGq1OeYuVvZ45OwsazxZgkH7CmI6byMJqi5WTXrdcl1',
    title: 'Casio G-Shock GA-2100',
    collection: 'ATOMIC TIMEKEEPING',
    collectionSlug: 'atomic-timekeeping',
    size: '45 mm',
    colors: 3,
    price: 99.00,
    originalPrice: 139.00,
    id: 'GA2100-1A',
    slug: 'casio-g-shock-ga-2100-ga2100-1a',
  },
  {
    badges: ['Touch Solar'],
    image: 'https://utfs.io/f/oM0zaDGq1OeY7vfEW4R3RYPkQxf4wdIXz20t9irnvEDTl5bH',
    title: 'Casio G-Shock GB-5600',
    collection: 'ATOMIC TIMEKEEPING',
    collectionSlug: 'atomic-timekeeping',
    size: '43 mm',
    colors: 3,
    price: 99.00,
    originalPrice: 139.00,
    id: 'GB5600-1',
    slug: 'casio-g-shock-gb-5600-gb5600-1',
  },
  {
    badges: [],
    image: 'https://utfs.io/f/oM0zaDGq1OeYGWNaQ8I08fdOtvRu97WAj52QYbrI6VEZSXek',
    title: 'Casio Baby-G BA-110',
    collection: 'SOLAR POWERED',
    collectionSlug: 'solar-powered',
    size: '43 mm',
    colors: 5,
    price: 69.00,
    originalPrice: 89.00,
    id: 'BA110-1A',
    slug: 'casio-baby-g-ba-110-ba110-1a',
  },
];

export const productHandlers = [
  http.get(`${Env.NEXT_PUBLIC_API_URL}/api/products`, () => {
    return HttpResponse.json(products);
  }),
  http.get(`${Env.NEXT_PUBLIC_API_URL}/api/products/:slug`, ({ params }) => {
    return HttpResponse.json(
      [...products, ...newProducts, ...similarProducts]
        .find((product: ProductDTO) => product.slug === params.slug),
    );
  }),
  http.get(`${Env.NEXT_PUBLIC_API_URL}/api/products/similar`, () => {
    return HttpResponse.json(similarProducts);
  }),
  http.get(`${Env.NEXT_PUBLIC_API_URL}/api/products/new`, () => {
    return HttpResponse.json(newProducts);
  }),
];
