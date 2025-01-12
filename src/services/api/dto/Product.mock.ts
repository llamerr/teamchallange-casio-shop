import { http, HttpResponse } from 'msw';

import type { ProductDTO } from '@/services/api/dto/Product.dto';

export const products: ProductDTO[] = [
  {
    badges: ['Limited', 'Bluetooth', 'Touch Solar', 'Water Resistant'],
    image: '',
    title: 'Casio is dedicated to environmental',
    collection: 'ATOMIC TIMEKEEPING',
    size: '40 mm',
    colors: 3,
    price: 95.00,
    originalPrice: 120.00,
    productId: 'JY8146-54A',
  },
  {
    badges: ['Bestsellers', 'New', 'Water Resistant'],
    image: 'https://qujblijcjy.ufs.sh/f/oM0zaDGq1OeYGkWs1dI08fdOtvRu97WAj52QYbrI6VEZSXek',
    title: 'Casio is dedicated to environmental',
    collection: 'ATOMIC TIMEKEEPING',
    size: '40 mm',
    colors: 3,
    price: 95.00,
    originalPrice: 120.00,
    productId: 'JY8146-54B',
  },
  {
    badges: ['Touch Solar', 'Water Resistant', 'Limited', 'Bluetooth'],
    image: 'https://qujblijcjy.ufs.sh/f/oM0zaDGq1OeYeUSprUVwfRYkBsbaEu4no9jiThQlW2rM1xK0',
    title: 'Casio is dedicated to environmental',
    collection: 'ATOMIC TIMEKEEPING',
    size: '40 mm',
    colors: 3,
    price: 95.00,
    originalPrice: 120.00,
    productId: 'JY8146-54E',
  },
  {
    badges: [],
    image: 'https://qujblijcjy.ufs.sh/f/oM0zaDGq1OeYr2bvTWasc69rf2RoHl3GiBVvn0yOIeJgxFdZ',
    title: 'Casio - Innovation Meets Style',
    collection: 'SOLAR POWERED',
    size: '42 mm',
    colors: 5,
    price: 110.00,
    originalPrice: 150.00,
    productId: 'AB1234-XY',
  },
];

export const similarProducts: ProductDTO[] = [
  {
    badges: ['Limited', 'Bluetooth'],
    image: '',
    title: 'Casio is dedicated to environmental',
    collection: 'ATOMIC TIMEKEEPING',
    size: '40 mm',
    colors: 3,
    price: 95.00,
    originalPrice: 120.00,
    productId: 'JY8146-54A',
  },
  {
    badges: ['Bestsellers', 'New'],
    image: 'https://utfs.io/f/oM0zaDGq1OeYQXqXB8ERPTdmhn5pFKZ0NGAEofaYbw8VCzrU',
    title: 'Casio is dedicated to environmental',
    collection: 'ATOMIC TIMEKEEPING',
    size: '40 mm',
    colors: 3,
    price: 95.00,
    originalPrice: 120.00,
    productId: 'JY8146-54B',
  },
  {
    badges: ['Touch Solar'],
    image: 'https://utfs.io/f/oM0zaDGq1OeY7vfEW4R3RYPkQxf4wdIXz20t9irnvEDTl5bH',
    title: 'Casio is dedicated to environmental',
    collection: 'ATOMIC TIMEKEEPING',
    size: '40 mm',
    colors: 3,
    price: 95.00,
    originalPrice: 120.00,
    productId: 'JY8146-54E',
  },
  {
    badges: [],
    image: 'https://utfs.io/f/oM0zaDGq1OeYK04ip5nKnbafmVTZY97tOiHq5x0u8WSsvDNJ',
    title: 'Casio - Innovation Meets Style',
    collection: 'SOLAR POWERED',
    size: '42 mm',
    colors: 5,
    price: 110.00,
    originalPrice: 150.00,
    productId: 'AB1234-XY',
  },
];

export const newProducts: ProductDTO[] = [
  {
    badges: ['Limited', 'Bluetooth'],
    image: '',
    title: 'Casio G-Shock GA-100',
    collection: 'ATOMIC TIMEKEEPING',
    size: '45 mm',
    colors: 3,
    price: 99.00,
    originalPrice: 139.00,
    productId: 'GA100-1A',
  },
  {
    badges: ['Bestsellers', 'New'],
    image: 'https://utfs.io/f/oM0zaDGq1OeYuVvZ45OwsazxZgkH7CmI6byMJqi5WTXrdcl1',
    title: 'Casio G-Shock GA-2100',
    collection: 'ATOMIC TIMEKEEPING',
    size: '45 mm',
    colors: 3,
    price: 99.00,
    originalPrice: 139.00,
    productId: 'GA2100-1A',
  },
  {
    badges: ['Touch Solar'],
    image: 'https://utfs.io/f/oM0zaDGq1OeY7vfEW4R3RYPkQxf4wdIXz20t9irnvEDTl5bH',
    title: 'Casio G-Shock GB-5600',
    collection: 'ATOMIC TIMEKEEPING',
    size: '43 mm',
    colors: 3,
    price: 99.00,
    originalPrice: 139.00,
    productId: 'GB5600-1',
  },
  {
    badges: [],
    image: 'https://utfs.io/f/oM0zaDGq1OeYGWNaQ8I08fdOtvRu97WAj52QYbrI6VEZSXek',
    title: 'Casio Baby-G BA-110',
    collection: 'SOLAR POWERED',
    size: '43 mm',
    colors: 5,
    price: 69.00,
    originalPrice: 89.00,
    productId: 'BA110-1A',
  },
];

export const productHandlers = [
  http.get('/api/products', () => {
    return HttpResponse.json(products);
  }),
  http.get('/api/products/similar', () => {
    return HttpResponse.json(similarProducts);
  }),
  http.get('/api/products/new', () => {
    return HttpResponse.json(newProducts);
  }),
];
