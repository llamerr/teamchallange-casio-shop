'use client';

import React from 'react';

import { ProductCard } from '@/blocks/ProductCard/ProductCard';
import { ProductCardSkeleton } from '@/blocks/ProductCard/ProductCardSkeleton';
import { Section } from '@/components/Section/Section';
import { useSimilarProducts } from '@/services/api/dto/Product.query';

export function SimilarProducts() {
  const { data, error, isLoading } = useSimilarProducts();

  if (isLoading) {
    return (
      <Section title="Similar Watches" link={{ href: '/watches', label: 'View all' }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </Section>
    );
  }

  if (error instanceof Error) {
    return (
      <Section title="Similar Watches">
        <p>{error.message}</p>
      </Section>
    );
  }

  return (
    <Section title="Similar Watches" link={{ href: '/watches', label: 'View all' }}>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data && data.map(product => (
          <ProductCard
            key={product.productId}
            badges={product.badges}
            image={product.image}
            title={product.title}
            collection={product.collection}
            size={product.size}
            colors={product.colors}
            price={product.price}
            originalPrice={product.originalPrice}
          />
        ))}
      </div>
    </Section>
  );
}
