import { useQuery } from '@tanstack/react-query';

import { Env } from '@/libs/Env';

import type { CollectionDTO, MetaCollection } from './Collection.dto';

export const fetchCollection = async (collectionId: string) => {
  const response = await fetch(`${Env.NEXT_PUBLIC_API_URL}/api/collections/${collectionId}`);
  const data = (await response.json()) as CollectionDTO;

  return data;
};

type CollectionsParams = {
  type?: MetaCollection;
};
export const fetchCollections = async ({ type }: CollectionsParams) => {
  const response = await fetch(`${Env.NEXT_PUBLIC_API_URL}/api/collections?type=${type || ''}`);
  const data = (await response.json()) as CollectionDTO[];

  return data;
};

export const useCollections = ({ type }: CollectionsParams = { type: 'all' }) => {
  return useQuery({
    queryKey: ['collections', type],
    queryFn: () => fetchCollections({ type }),
  });
};
