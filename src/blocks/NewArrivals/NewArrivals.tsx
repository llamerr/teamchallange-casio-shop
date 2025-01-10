'use client';

import React from 'react';

import { ProductCard } from '@/blocks/ProductCard/ProductCard';
import { ProductCardSkeleton } from '@/blocks/ProductCard/ProductCardSkeleton';
import { Section } from '@/components/Section/Section';
import { useNewProducts } from '@/services/api/dto/Product.query';

export function NewArrivals() {
  const { data, error, isLoading } = useNewProducts();

  if (isLoading) {
    return (
      <Section title="New Arrivals" link={{ href: '/watches', label: 'View all' }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </Section>
    );
  }

  if (error instanceof Error) {
    return (
      <Section title="New Arrivals" link={{ href: '/watches', label: 'View all' }}>
        <p>{error.message}</p>
      </Section>
    );
  }

  return (
    <Section title="New Arrivals" link={{ href: '/watches', label: 'View all' }}>
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
