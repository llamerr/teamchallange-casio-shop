import React from 'react';

import { cn } from '@/lib/utils';

import { GenderCard } from './GenderCard';

type GenderBlockProps = {
  className?: string;
};
export function GenderBlock({ className }: GenderBlockProps) {
  return (
    <section className={cn('max-w-full', className)}>
      <div className="mx-auto my-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <GenderCard
          title="Men's Watches"
          description="Hurry, offers end soon!"
          buttonText="Shop Now"
          buttonLink="/collections/mens-watches"
        />
        <GenderCard
          title="Women's Watches"
          description="Hurry, offers end soon!"
          buttonText="Shop Now"
          buttonLink="/collections/womens-watches"
          image="https://utfs.io/f/oM0zaDGq1OeY7vfEW4R3RYPkQxf4wdIXz20t9irnvEDTl5bH"
        />
      </div>
    </section>
  );
}
