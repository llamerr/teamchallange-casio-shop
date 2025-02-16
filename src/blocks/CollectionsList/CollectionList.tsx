'use client';

import { useParams } from 'next/navigation';
import React from 'react';

import { useCollections } from '@/services/api/dto/Collection/Collection.query';

import { SmallCollectionCard } from './SmallCollectionCard';

export function CollectionList() {
  const { data, error } = useCollections();
  const { slug } = useParams();

  return (
    <div className="my-12 flex flex-row gap-4">
      {error instanceof Error && <p>{error.message}</p>}
      {data && data.map(collection => (
        <SmallCollectionCard
          key={collection.id}
          title={collection.title}
          href={`/collections/${collection.id}`}
          image={collection.imageWide || collection.image}
          isActive={collection.id === slug}
        />
      ))}
    </div>
  );
}
