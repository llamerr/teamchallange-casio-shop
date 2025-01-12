import { useQuery } from '@tanstack/react-query';

import type { NewsDTO } from './News.dto';

export const fetchNews = async (newsId: string) => {
  const response = await fetch(`/api/news/${newsId}`);
  const data = (await response.json()) as NewsDTO;

  return data;
};

export const fetchNewsList = async () => {
  const response = await fetch(`/api/news`);
  const data = (await response.json()) as NewsDTO[];

  return data;
};
export const useNewsList = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: fetchNewsList,
  });
};
