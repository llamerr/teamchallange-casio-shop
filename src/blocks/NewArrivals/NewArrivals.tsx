'use client';

import React from 'react';

import { ProductCard } from '@/blocks/ProductCard/ProductCard';
import { ProductCardSkeleton } from '@/blocks/ProductCard/ProductCardSkeleton';
import { Section } from '@/components/Section/Section';
import { useNewProducts } from '@/services/api/dto/Product/Product.query';

type NewArrivalsProps = {
  className?: string;
};

export function NewArrivals({ className }: NewArrivalsProps) {
  const { data, error, isLoading } = useNewProducts();

  return (
    <Section title="New Arrivals" link={{ href: '/watches', label: 'View all' }} className={className}>
      {error instanceof Error && <p>{error.message}</p>}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading && Array.from({ length: 4 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
        {data && data.products.map(product => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </Section>
  );
}
