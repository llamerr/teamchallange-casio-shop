import React from 'react';

import { cn } from '@/libs/utils';
import { PORTRAIT_IMAGES } from '@/services/api/uploadThingFiles';

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
          image={PORTRAIT_IMAGES[0]}
        />
      </div>
    </section>
  );
}
