'use client';

import React from 'react';

import { ProductCard } from '@/blocks/ProductCard/ProductCard';
import { ProductCardSkeleton } from '@/blocks/ProductCard/ProductCardSkeleton';
import { Grid } from '@/components/Grid/Grid';
import { Section } from '@/components/Section/Section';
import { useNewProducts } from '@/services/api/dto/Product.query';

type NewArrivalsProps = {
  className?: string;
};

export function NewArrivals({ className }: NewArrivalsProps) {
  const { data, error, isLoading } = useNewProducts();

  return (
    <Section title="New Arrivals" link={{ href: '/watches', label: 'View all' }} className={className}>
      {error instanceof Error
        ? <p>{error.message}</p>
        : (
            <Grid
              isLoading={isLoading}
              renderSkeleton={key => <ProductCardSkeleton key={key} />}
              skeletonCount={4}
              className="gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              {data && data.map(product => (
                <ProductCard
                  key={product.id}
                  {...product}
                />
              ))}
            </Grid>
          )}
    </Section>
  );
}
