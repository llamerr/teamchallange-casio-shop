'use client';

import React from 'react';

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
      <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:grid-cols-3">
        {error instanceof Error && (
          <p>{error.message}</p>
        )}
        {isLoading && Array.from({ length: 3 }).map((_, i) => (
          <CollectionCardSkeleton key={i} />
        ))}
        {data && data.map(collection => (
          <CollectionCard
            key={collection.id}
            href={`/collections/${collection.id}`}
            title={collection.title}
            description={collection.description}
            image={collection.image}
          />
        ))}
      </div>
    </Section>
  );
}
