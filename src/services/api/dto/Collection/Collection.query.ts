import { useQuery } from '@tanstack/react-query';

import { Env } from '@/libs/Env';

import type { CollectionDTO } from './Collection.dto';

export const fetchCollection = async (collectionId: string) => {
  const response = await fetch(`${Env.NEXT_PUBLIC_API_URL}/api/collections/${collectionId}`);
  const data = (await response.json()) as CollectionDTO;

  return data;
};

export const fetchCollections = async () => {
  const response = await fetch(`${Env.NEXT_PUBLIC_API_URL}/api/collections`);
  const data = (await response.json()) as CollectionDTO[];

  return data;
};

export const useCollections = () => {
  return useQuery({
    queryKey: ['collections'],
    queryFn: fetchCollections,
  });
};
