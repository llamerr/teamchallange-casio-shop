'use client';

import { ImageIcon } from 'lucide-react';
import Image from 'next/image';

type HeroCollectionProps = {
  image?: string;
  title: string;
  collection?: string;
  description: string;
};

export function HeroCollection({ image, title, collection, description }: HeroCollectionProps) {
  return (
    <section className="relative flex aspect-[4.8/1] w-full items-center overflow-hidden bg-black">
      <div className="absolute flex size-full items-center justify-center">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}
        {!image && (
          <ImageIcon className="size-8" />
        )}
      </div>
      <div className="container relative z-10 m-20 flex flex-col gap-4">
        <h1 className="text-3xl text-zinc-400">{title}</h1>
        <h2 className="text-5xl tracking-tight text-white">{collection}</h2>
        <p className="text-3xl text-zinc-400">{description}</p>
      </div>
    </section>
  );
}
