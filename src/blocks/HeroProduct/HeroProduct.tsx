'use client';

import { ImageIcon } from 'lucide-react';
import Image from 'next/image';

type HeroProductProps = {
  image?: string;
  title?: string;
};

export function HeroProduct({ image, title }: HeroProductProps) {
  return (
    <section className="relative flex aspect-[3.84/1] w-full items-center overflow-hidden">
      {image && (
        <Image
          src={image}
          alt={title ?? 'Product Image'}
          fill
          sizes="33vw"
          className="object-cover"
        />
      )}
      {!image && (
        <ImageIcon className="size-8" />
      )}
    </section>
  );
}
