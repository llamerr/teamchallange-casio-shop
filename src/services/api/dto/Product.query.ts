import { useQuery } from '@tanstack/react-query';

import { Env } from '@/libs/Env';

import type { ProductDTO } from './Product.dto';

export const fetchProduct = async (productSlug: string) => {
  const response = await fetch(`${Env.NEXT_PUBLIC_API_URL}/api/products/${productSlug}`);
  const data = (await response.json()) as ProductDTO;

  return data;
};

export const useProduct = (productSlug: string) => {
  return useQuery({
    queryKey: ['product', productSlug],
    queryFn: () => fetchProduct(productSlug),
  });
};

export const fetchProducts = async () => {
  const response = await fetch(`${Env.NEXT_PUBLIC_API_URL}/api/products`);
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
  const response = await fetch(`${Env.NEXT_PUBLIC_API_URL}/api/products/similar`);
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
  const response = await fetch(`${Env.NEXT_PUBLIC_API_URL}/api/products/new`);
  const data = (await response.json()) as ProductDTO[];

  return data;
};
export const useNewProducts = () => {
  return useQuery({
    queryKey: ['products', 'new'],
    queryFn: fetchNewProducts,
  });
};
