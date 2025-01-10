import { useQuery } from '@tanstack/react-query';

import type { ProductDTO } from './Product.dto';

export const fetchProduct = async (productId: string) => {
  const response = await fetch(`/api/products/${productId}`);
  const data = (await response.json()) as ProductDTO;

  return data;
};

export const fetchProducts = async () => {
  const response = await fetch(`/api/products`);
  const data = (await response.json()) as ProductDTO[];

  return data;
};
export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};

export const fetchSimilarProducts = async () => {
  const response = await fetch(`/api/products/similar`);
  const data = (await response.json()) as ProductDTO[];

  return data;
};
export const useSimilarProducts = () => {
  return useQuery({
    queryKey: ['products', 'similar'],
    queryFn: fetchSimilarProducts,
  });
};

export const fetchNewProducts = async () => {
  const response = await fetch(`/api/products/new`);
  const data = (await response.json()) as ProductDTO[];

  return data;
};
export const useNewProducts = () => {
  return useQuery({
    queryKey: ['products', 'new'],
    queryFn: fetchNewProducts,
  });
};
