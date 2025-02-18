'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';
import { useMachine } from '@xstate/react';
import { isEqual } from 'lodash';
import { RefreshCw } from 'lucide-react';
import { useParams, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { ProductCard } from '@/blocks/ProductCard/ProductCard';
import { ProductCardSkeleton } from '@/blocks/ProductCard/ProductCardSkeleton';
import { Button } from '@/components/ui/button';
import { cn } from '@/libs/utils';
import { useProducts } from '@/services/api/dto/Product/Product.query';
import { type ColorOptions, type FeaturesOptions, filterMachine, type FilterState, type GenderOptions, type MovementOptions, type PriceOptions } from '@/state/FilterMachine';

import { ProductFilters } from './ProductFilters';

export function FilteredProductsList() {
  const { slug } = useParams<{ slug: string }>();
  const searchParams = useSearchParams();

  const [activeFilters, setActiveFilters] = useState<FilterState>({
    price: searchParams.getAll('price') as PriceOptions[] || [],
    features: searchParams.getAll('features') as FeaturesOptions[] || [],
    gender: searchParams.getAll('gender') as GenderOptions[] || [],
    color: searchParams.getAll('color') as ColorOptions[] || [],
    movement: searchParams.getAll('movement') as MovementOptions[] || [],
  });

  // TODO: add zod validation of params

  // get initial values from search params
  const [state, send, actor] = useMachine(filterMachine, { input: activeFilters });

  useEffect(() => {
    const subscription = actor.subscribe((event) => {
      if (event.value === 'filtering') {
        setActiveFilters(event.context);
      }
    });

    return () => subscription.unsubscribe();
  }, [actor]);

  // maintain state on search params change
  useEffect(() => {
    if (!isEqual(state.context.price, searchParams.getAll('price'))) {
      send({ type: 'UPDATE_PRICE', payload: searchParams.getAll('price') as PriceOptions[] });
    }
    if (!isEqual(state.context.features, searchParams.getAll('features'))) {
      send({ type: 'UPDATE_FEATURES', payload: searchParams.getAll('features') as FeaturesOptions[] });
    }
    if (!isEqual(state.context.gender, searchParams.getAll('gender'))) {
      send({ type: 'UPDATE_GENDER', payload: searchParams.getAll('gender') as GenderOptions[] });
    }
    if (!isEqual(state.context.color, searchParams.getAll('color'))) {
      send({ type: 'UPDATE_COLOR', payload: searchParams.getAll('color') as ColorOptions[] });
    }
    if (!isEqual(state.context.movement, searchParams.getAll('movement'))) {
      send({ type: 'UPDATE_MOVEMENT', payload: searchParams.getAll('movement') as MovementOptions[] });
    }
  }, [searchParams, state.context, send]);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useProducts({ collection: slug, filters: activeFilters });

  const [showFilters, setShowFilters] = useLocalStorage('show-filters', true);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 p-4">
        <div className="mx-auto flex items-center justify-between">
          <Button variant="ghost" onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? 'Hide' : 'Show'}
            {' '}
            Filter
          </Button>
          <div className="flex items-center gap-4">
            <span>58 results</span>
            <Select defaultValue="featured">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sorting By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      <div className="mx-auto p-4">
        <div className="flex gap-8">
          <div className={cn('w-64 transition-all duration-300', !showFilters && '-ml-80 hidden')}>
            <ProductFilters state={state} sendAction={send} />
          </div>

          <div className="flex-1">
            {error instanceof Error && <p>{error.message}</p>}
            <div
              className={cn('grid grid-cols-1 md:grid-cols-2 gap-4', showFilters ? 'lg:grid-cols-3' : 'lg:grid-cols-4')}
            >
              {isFetching && Array.from({ length: 4 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
              {data && data.pages.map((group, i) => (
                <React.Fragment key={i}>
                  {group.products.map(product => (
                    <ProductCard
                      key={product.id}
                      {...product}
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>

            {data && (
              <div className="mt-8 text-center">
                <div className="mb-4 text-sm text-gray-400">
                  Showing
                  {' '}
                  {data.pages.reduce((p, c) => p + c.products.length, 0)}
                  {' '}
                  of
                  {' '}
                  {data.pages[0]?.totalCount}
                  {' '}
                  results
                </div>
                <Button variant="outline" onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage} className="min-w-[140px]">
                  {isFetchingNextPage
                    ? (
                        <>
                          <RefreshCw className="mr-2 size-4 animate-spin" />
                          Loading...
                        </>
                      )
                    : hasNextPage
                      ? 'Load More'
                      : 'Nothing more to load'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
