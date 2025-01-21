import { useQuery } from '@tanstack/react-query';

import { Env } from '@/libs/Env';

import type { KeyFeatureDTO } from './KeyFeature.dto';

export const fetchKeyFeature = async (KeyFeatureId: string) => {
  const response = await fetch(`${Env.NEXT_PUBLIC_API_URL}/api/feature/${KeyFeatureId}`);
  const data = (await response.json()) as KeyFeatureDTO;

  return data;
};

export const fetchKeyFeatures = async () => {
  const response = await fetch(`${Env.NEXT_PUBLIC_API_URL}/api/features`);
  const data = (await response.json()) as KeyFeatureDTO[];

  return data;
};

export const useKeyFeatures = () => {
  return useQuery({
    queryKey: ['features'],
    queryFn: fetchKeyFeatures,
  });
};
