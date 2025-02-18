'use client';

import { ChevronRight, ImageIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/libs/utils';
import type { CollectionDTO } from '@/services/api/dto/Collection/Collection.dto';
import { useCollections } from '@/services/api/dto/Collection/Collection.query';

export default function CollectionsContent() {
  const { data: collections } = useCollections();
  const [activeTab, setActiveTab] = useState<CollectionDTO>();

  useEffect(() => {
    setActiveTab(collections?.[0]);
  }, [collections]);

  const getContent = (collection: CollectionDTO) => (
    <div className="grid size-full grid-cols-2 gap-8 bg-white p-8">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-[#111321]">{collection.title}</h2>
        <p className="mb-6 mt-2 text-lg font-normal text-[#3F4664]">{collection.description}</p>
        <Link
          href={`/collections/${collection.slug}`}
          className="group bg-zinc-950 text-white hover:bg-zinc-800"
        >
          <Button variant="outline" className="h-[48px] w-[272px]">
            View Collection
            <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
      <div className="ml-6 flex flex-row gap-6">
        {collection.images?.slice(0, 2).map((image, index) => (
          <div key={index} className="relative aspect-[3/4] w-full border border-[#7983A7] bg-zinc-950">
            {image && (
              <Image
                src={image}
                alt={collection.title}
                fill
                sizes="25vw"
                className="object-cover"
              />
            )}
            {!image && (
              <ImageIcon className="size-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex">
      {/* Sidebar Navigation */}
      <nav className="w-64 border-r">
        <Tabs
          value={activeTab?.slug}
          onValueChange={slug => setActiveTab(collections?.find(collection => collection.slug === slug))}
          orientation="vertical"
          className="h-full"
        >
          <TabsList className="flex size-full flex-col items-stretch justify-start">
            {collections?.map(collection => (
              <TabsTrigger
                key={collection.id}
                value={collection.id}
                onMouseOver={() => setActiveTab(collection)}
                className="relative justify-start text-left font-medium"
              >
                {collection.title}
                <ChevronRight
                  className={cn(activeTab?.id === collection.id ? 'visible' : 'hidden', 'absolute right-0 mr-4')}
                  aria-hidden="true"
                />
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </nav>

      {/* Main Content */}
      <main className="min-h-[318px] flex-1">
        {activeTab && getContent(activeTab)}
      </main>
    </div>
  );
}
