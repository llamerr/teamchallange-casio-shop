import { useQuery } from '@tanstack/react-query';

import { Env } from '@/libs/Env';

import type { NewsDetailsDTO, NewsDTO } from './News.dto';

export const fetchNews = async (newsId: string) => {
  const response = await fetch(`${Env.NEXT_PUBLIC_API_URL}/api/news/${newsId}`);
  const data = (await response.json()) as NewsDetailsDTO;

  return data;
};

export const fetchNewsList = async () => {
  const response = await fetch(`${Env.NEXT_PUBLIC_API_URL}/api/news`);
  const data = (await response.json()) as NewsDTO[];

  return data;
};
export const useNewsList = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: fetchNewsList,
  });
};
