import { keepPreviousData, useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { Env } from '@/libs/Env';

import type { ProductDetailsDTO, ProductsListDTO } from './Product.dto';

export const fetchProduct = async (productSlug: string) => {
  const response = await fetch(`${Env.NEXT_PUBLIC_API_URL}/api/product/${productSlug}`);
  const data = (await response.json()) as ProductDetailsDTO;

  return data;
};
export const useProduct = (productSlug: string) => {
  return useQuery({
    queryKey: ['product', productSlug],
    queryFn: () => fetchProduct(productSlug),
  });
};

export const fetchProducts = async ({ pageParam = 0, collection }: { pageParam: number; collection?: string }) => {
  const response = await fetch(`${Env.NEXT_PUBLIC_API_URL}/api/products?page=${pageParam}&collection=${collection}`);
  const data = (await response.json()) as ProductsListDTO;

  return data;
};
export const useProducts = ({ collection }: { collection?: string }) => {
  return useInfiniteQuery({
    queryKey: ['products', collection],
    queryFn: ({ pageParam, queryKey }) => fetchProducts({ pageParam, collection: queryKey[1] }),
    initialPageParam: 0,
    getNextPageParam: lastPage => lastPage.nextPage,
    placeholderData: keepPreviousData,
  });
};

export const fetchSimilarProducts = async () => {
  const response = await fetch(`${Env.NEXT_PUBLIC_API_URL}/api/products/similar`);
  const data = (await response.json()) as ProductsListDTO;

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
  const data = (await response.json()) as ProductsListDTO;

  return data;
};
export const useNewProducts = () => {
  return useQuery({
    queryKey: ['products', 'new'],
    queryFn: fetchNewProducts,
  });
};
