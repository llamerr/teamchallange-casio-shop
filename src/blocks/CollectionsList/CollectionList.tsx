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
          href={`/collections/${collection.id}`}
          {...collection}
          isActive={collection.id === slug}
        />
      ))}
    </div>
  );
}
