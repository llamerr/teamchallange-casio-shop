'use client';

import { Pause, Play } from 'lucide-react';

import { ProductCard } from '@/blocks/ProductCard/ProductCard';
import { ProductCardSkeleton } from '@/blocks/ProductCard/ProductCardSkeleton';
import { TrustBlock } from '@/blocks/TrustBlock/TrustBlock';
import { Section } from '@/components/Section/Section';
import { Button } from '@/components/ui/button';
import { useVideoPlayer } from '@/hooks/useVideoPlayer';
import { cn } from '@/lib/utils';
import { useProducts } from '@/services/api/dto/Product.query';

type SolarBlockProps = {
  className?: string;
};

export function SolarBlock({ className }: SolarBlockProps) {
  const { data, error, isLoading } = useProducts();

  const { videoRef, togglePlay, isPlaying } = useVideoPlayer();

  return (
    <section className={cn('w-full bg-[#111321]', className)}>
      <TrustBlock
        title="Over 10 million batteries saved helping to reduce electronic waste."
        description="So, thanks to Touch Solar, Casio would have saved approximately $30 million by reducing battery usage over time."
        variant="light"
        className="mx-20"
      />

      <Section title="Touch Solar Watches" link={{ href: '/watches', label: 'View all' }} className="mx-20">
        {error instanceof Error && <p>{error.message}</p>}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {isLoading && Array.from({ length: 4 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
          {data && data.map(product => (
            <ProductCard
              key={product.id}
              variant="dark"
              {...product}
            />
          ))}
        </div>
      </Section>

      <section className="relative flex aspect-[2.13/1] w-full items-center overflow-hidden">
        <video
          ref={videoRef}
          autoPlay={isPlaying}
          muted
          loop
          className="absolute inset-0 size-full object-cover"
        >
          <source src="https://qujblijcjy.ufs.sh/f/oM0zaDGq1OeYS3D3VS72g8PDJxedV9OtiFHvB3soClSIaY40" type="video/mp4" />
        </video>
        <Button
          variant="outline"
          size="lg"
          onClick={togglePlay}
          className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-transparent px-3 text-white transition-colors hover:bg-gray-100"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause /> : <Play />}
        </Button>
      </section>
    </section>
  );
}
