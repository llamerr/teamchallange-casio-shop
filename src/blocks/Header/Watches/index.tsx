'use client';

import { useQueryClient } from '@tanstack/react-query';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/libs/utils';
import type { MetaCollection } from '@/services/api/dto/Collection/Collection.dto';
import { fetchCollections, useCollections } from '@/services/api/dto/Collection/Collection.query';
import { PORTRAIT_IMAGES } from '@/services/api/uploadThingFiles';
import { FILTERS as PRODUCT_FILTERS } from '@/state/FilterMachine';

const FILTERS: Partial<Record<MetaCollection, { title: string; image: string }>> = {
  'for-men': {
    title: 'For Man',
    image: PORTRAIT_IMAGES[13],
  },
  'for-women': {
    title: 'For Woman',
    image: PORTRAIT_IMAGES[14],
  },
  'new': {
    title: 'New',
    image: PORTRAIT_IMAGES[15],
  },
  'best-sellers': {
    title: 'Best Sellers',
    image: PORTRAIT_IMAGES[16],
  },
  'sale': {
    title: 'Sale',
    image: PORTRAIT_IMAGES[17],
  },
};

type MegaMenuItem = {
  title: string;
  value: string;
};

const features: MegaMenuItem[] = Object.entries(PRODUCT_FILTERS.features.options).map(([value, title]) => ({
  title,
  value,
}));

const prices: MegaMenuItem[] = Object.entries(PRODUCT_FILTERS.price.options).map(([value, title]) => ({
  title,
  value,
}));

export default function WatchesContent() {
  const [activeTab, setActiveTab] = useState<MetaCollection>('for-men');

  const queryClient = useQueryClient();
  useEffect(() => {
    for (const key in FILTERS) {
      queryClient.prefetchQuery({
        queryKey: ['collections', key],
        queryFn: () => fetchCollections({ type: key as MetaCollection }),
      });
    }
  });

  const { data: collections } = useCollections({ type: activeTab });

  const getContent = () => (
    <div className="flex gap-8 p-8">
      <div className="grow">
        <div className="flex justify-around gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium text-gray-900">Collection</h3>
            <nav className="flex flex-col gap-3">
              {collections && collections.map(collection => (
                <Link
                  key={collection.id}
                  href={`/collections/${activeTab}/${collection.slug}`}
                  className="font-medium text-gray-600 transition-colors hover:text-gray-900"
                >
                  {collection.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium text-gray-900">Featured</h3>
            <nav className="flex flex-col gap-3">
              {features.map(item => (
                <Link
                  key={item.title}
                  href={`/collections/${activeTab}?feature=${item.value}`}
                  className="font-medium text-gray-600 transition-colors hover:text-gray-900"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium text-gray-900">Price</h3>
            <nav className="flex flex-col gap-3">
              {prices.map(item => (
                <Link
                  key={item.value}
                  href={`/collections/${activeTab}?price=${item.value}`}
                  className="font-medium text-gray-600 transition-colors hover:text-gray-900"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex justify-end border-gray-200">
          <Link
            href={`/collections/${activeTab}`}
            className="inline-flex items-center gap-2 text-base font-normal text-gray-900 underline transition-colors hover:text-gray-600"
          >
            View All
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
      <div className="relative aspect-[3/4] h-[276px] border border-[#7983A7] bg-zinc-950">
        {FILTERS[activeTab]?.image && (
          <Image
            src={FILTERS[activeTab]?.image}
            alt="Featured watch collection"
            fill
            sizes="25vw"
            className="object-cover"
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="flex w-full">
      {/* Sidebar Navigation */}
      <nav className="w-64 border-r">
        <Tabs
          value={activeTab}
          onValueChange={activeTab => setActiveTab(activeTab as MetaCollection)}
          orientation="vertical"
          className="h-full"
        >
          <TabsList className="flex size-full flex-col items-stretch justify-start">
            {Object.entries(FILTERS).map(([id, { title }]) => (
              <TabsTrigger
                key={id}
                value={id}
                onMouseOver={() => setActiveTab(id as MetaCollection)}
                className="relative justify-start text-left font-medium"
              >
                {title}
                <ChevronRight
                  className={cn(activeTab === id ? 'visible' : 'hidden', 'absolute right-0 mr-4')}
                  aria-hidden="true"
                />
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </nav>

      {/* Main Content */}
      <main className="min-h-[318px] flex-1">
        {activeTab && getContent()}
      </main>
    </div>
  );
}
