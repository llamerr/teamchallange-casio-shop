export type NewsDTO = {
  id: string;
  image?: string;
  title: string;
  description: string;
  href: string;
};

export type NewsListDTO = {
  news: NewsDTO[];
  nextPage?: number;
  totalCount: number;
};

export type NewsDetailsDTO = NewsDTO & {
  content: string;
  date: string;
};
