'use client';

import React from 'react';

import { ProductCard } from '@/blocks/ProductCard/ProductCard';
import { ProductCardSkeleton } from '@/blocks/ProductCard/ProductCardSkeleton';
import { Grid } from '@/components/Grid/Grid';
import { Section } from '@/components/Section/Section';
import { useSimilarProducts } from '@/services/api/dto/Product/Product.query';

export function SimilarProducts() {
  const { data, error, isLoading } = useSimilarProducts();

  return (
    <Section title="Similar Watches" link={{ href: '/watches', label: 'View all' }}>
      {error instanceof Error
        ? <p>{error.message}</p>
        : (
            <Grid
              isLoading={isLoading}
              renderSkeleton={key => <ProductCardSkeleton key={key} />}
              skeletonCount={4}
              className="gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              {data && data.products.map(product => (
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
