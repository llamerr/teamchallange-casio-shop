'use client';

import React from 'react';

import { Grid } from '@/components/Grid/Grid';
import { Section } from '@/components/Section/Section';
import { useCollections } from '@/services/api/dto/Collection.query';

import { CollectionCard } from './CollectionCard';
import { CollectionCardSkeleton } from './CollectionCardSkeleton';

type ProductCollectionsProps = {
  className?: string;
};

export function ProductCollections({ className }: ProductCollectionsProps) {
  const { data, error, isLoading } = useCollections();

  return (
    <Section title="Collections" className={className}>
      {error instanceof Error
        ? <p>{error.message}</p>
        : (
            <Grid
              isLoading={isLoading}
              renderSkeleton={key => <CollectionCardSkeleton key={key} />}
              skeletonCount={3}
              className="grid-cols-2 grid-rows-2 gap-4 lg:grid-cols-3"
            >
              {data && data.map(collection => (
                <CollectionCard
                  key={collection.id}
                  href={`/collections/${collection.id}`}
                  {...collection}
                />
              ))}
            </Grid>
          )}
    </Section>
  );
}
