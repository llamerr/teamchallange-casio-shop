import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { ProductCard } from '@/blocks/ProductCard/ProductCard';

const similarProducts = [
  {
    badges: ['Limited', 'Bluetooth'],
    image: '/placeholder.svg',
    title: 'Casio is dedicated to environmental',
    category: 'ATOMIC TIMEKEEPING',
    size: '40 mm',
    colors: 3,
    price: 95.00,
    originalPrice: 120.00,
    productId: 'JY8146-54E',
  },
  {
    badges: ['Bestsellers', 'New'],
    image: '/placeholder.svg',
    title: 'Casio is dedicated to environmental',
    category: 'ATOMIC TIMEKEEPING',
    size: '40 mm',
    colors: 3,
    price: 95.00,
    originalPrice: 120.00,
    productId: 'JY8146-54E',
  },
  {
    badges: ['Touch Solar'],
    image: '/placeholder.svg',
    title: 'Casio is dedicated to environmental',
    category: 'ATOMIC TIMEKEEPING',
    size: '40 mm',
    colors: 3,
    price: 95.00,
    originalPrice: 120.00,
    productId: 'JY8146-54E',
  },
];

export function SimilarProducts() {
  return (
    <section className="py-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">SIMILAR WATCHES</h2>
        <Link
          href="/watches"
          className="inline-flex items-center gap-1 text-sm font-medium hover:text-slate-700"
        >
          View all
          <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {similarProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}
