'use client';

import { ChevronRight, Pause, Play } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { useVideoPlayer } from '@/hooks/useVideoPlayer';
import { VIDEOS } from '@/services/api/uploadThingFiles';

export function HeroBanner() {
  const { videoRef, togglePlay, isPlaying } = useVideoPlayer();

  return (
    <section className="relative flex aspect-[2.13/1] w-full items-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="absolute inset-0 size-full object-cover"
      >
        <source src={VIDEOS[0]} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full max-w-3xl flex-col items-start justify-center px-12 text-3xl text-gray-300">
        <p className="">Hurry, offers end soon!</p>
        <h1 className="mt-4 text-5xl tracking-tight text-white">
          Black Friday 30% Off
        </h1>
        <p className="mt-4">
          Unlock exclusive discounts with promo code BLACKFRIDAY.
        </p>
        <div className="mt-8 flex items-end gap-5">
          {/* Play/Pause Button */}
          <Button
            variant="outline"
            size="lg"
            onClick={togglePlay}
            className="bg-transparent px-3 text-white"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? <Pause /> : <Play />}
          </Button>
          {/* Shop Now Button */}
          <Link href="/collections">
            <Button
              variant="outline"
              size="lg"
              className="w-64 justify-between bg-white px-4 text-black"
            >
              Shop Now
              <ChevronRight className="ml-2 size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
