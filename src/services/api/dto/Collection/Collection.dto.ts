export type MetaCollection = 'all' | 'for-men' | 'for-women' | 'new' | 'best-sellers' | 'sale';
export type CollectionDTO = {
  id: string;
  title: string;
  slug: string;
  slogan: string;
  description: string;
  image?: string;
  imageWide?: string;
  images?: string[];
};
