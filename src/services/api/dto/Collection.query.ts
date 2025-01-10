import { useQuery } from '@tanstack/react-query';

import type { CollectionDTO } from './Collection.dto';

export const fetchCollection = async (collectionId: string) => {
  const response = await fetch(`/api/collections/${collectionId}`);
  const data = (await response.json()) as CollectionDTO;

  return data;
};

export const fetchCollections = async () => {
  const response = await fetch(`/api/collections`);
  const data = (await response.json()) as CollectionDTO[];

  return data;
};

export const useCollections = () => {
  return useQuery({
    queryKey: ['collections'],
    queryFn: fetchCollections,
  });
};
