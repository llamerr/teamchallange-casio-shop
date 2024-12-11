'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';

type Collection = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const collections: Collection[] = [
  {
    id: 'g-shock',
    title: 'G-Shock',
    description: 'Toughness meets bold style',
    image: '/placeholder.svg',
  },
  {
    id: 'edifice',
    title: 'Edifice',
    description: 'Timeless style, modern innovation',
    image: '/placeholder.svg',
  },
  {
    id: 'vintage',
    title: 'Vintage',
    description: 'Timeless style, modern innovation',
    image: '/placeholder.svg',
  },
  {
    id: 'pro-trek',
    title: 'Pro Trek',
    description: 'Adventure-ready, built to endure',
    image: '/placeholder.svg',
  },
  {
    id: 'baby-g',
    title: 'Baby G',
    description: 'Timeless style, modern innovation',
    image: '/placeholder.svg',
  },
  {
    id: 'sport',
    title: 'Sport',
    description: 'Timeless style, modern innovation',
    image: '/placeholder.svg',
  },
  {
    id: 'oceanus',
    title: 'Oceanus',
    description: 'Elegance meets precision',
    image: '/placeholder.svg',
  },
  {
    id: 'g-ms',
    title: 'G-MS',
    description: 'Sophisticated toughness for her',
    image: '/placeholder.svg',
  },
  {
    id: 'sheen',
    title: 'Sheen',
    description: 'Elegant timepieces for women',
    image: '/placeholder.svg',
  },
  {
    id: 'wave-ceptor',
    title: 'Wave Ceptor',
    description: 'Accurate time, always',
    image: '/placeholder.svg',
  },
  {
    id: 'databank',
    title: 'Databank',
    description: 'Digital convenience at your wrist',
    image: '/placeholder.svg',
  },
  {
    id: 'classic',
    title: 'Classic',
    description: 'Timeless designs for everyday wear',
    image: '/placeholder.svg',
  },
];

export default function ProductCollections() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setScrollPosition(scrollLeft);
      setMaxScroll(scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -scrollRef.current.clientWidth : scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full bg-black py-8 text-white">
      <div className="container px-4">
        <h2 className="mb-6 text-2xl font-bold">COLLECTIONS</h2>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden"
            style={{ scrollSnapType: 'x mandatory' }}
            onScroll={checkScroll}
          >
            {[...Array.from({ length: Math.ceil(collections.length / 6) })].map((_, pageIndex) => (
              <div key={pageIndex} className="scroll-snap-align-start grid w-full flex-none grid-cols-3 grid-rows-2 gap-4">
                {collections.slice(pageIndex * 6, (pageIndex + 1) * 6).map(collection => (
                  <Link
                    key={collection.id}
                    href={`/collections/${collection.id}`}
                    className="group flex w-full flex-col gap-4 bg-[#1a1b26] p-8"
                  >
                    <div className="relative size-16">
                      <Image
                        src={collection.image}
                        alt={collection.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold transition-colors group-hover:text-gray-300">
                        {collection.title}
                      </h3>
                      <p className="text-gray-400">{collection.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white p-6 text-black hover:bg-gray-200"
            onClick={() => scroll('left')}
            disabled={scrollPosition === 0}
          >
            <ChevronLeft className="size-8" />
            <span className="sr-only">Scroll left</span>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white p-6 text-black hover:bg-gray-200"
            onClick={() => scroll('right')}
            disabled={scrollPosition >= maxScroll}
          >
            <ChevronRight className="size-8" />
            <span className="sr-only">Scroll right</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
