export type ProductDTO = {
  id: string;
  badges: string[];
  image?: string;
  title: string;
  slug: string;
  collection: string;
  collectionSlug: string;
  size: string;
  colors: number;
  price: number;
  originalPrice?: number;
};
