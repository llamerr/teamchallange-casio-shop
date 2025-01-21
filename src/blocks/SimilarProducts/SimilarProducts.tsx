'use client';

import React from 'react';

import { ProductCard } from '@/blocks/ProductCard/ProductCard';
import { ProductCardSkeleton } from '@/blocks/ProductCard/ProductCardSkeleton';
import { Section } from '@/components/Section/Section';
import { useSimilarProducts } from '@/services/api/dto/Product/Product.query';

export function SimilarProducts() {
  const { data, error, isLoading } = useSimilarProducts();

  return (
    <Section title="Similar Watches" link={{ href: '/watches', label: 'View all' }}>
      {error instanceof Error && <p>{error.message}</p>}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading && Array.from({ length: 4 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
        {data && data.map(product => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </Section>
  );
}
