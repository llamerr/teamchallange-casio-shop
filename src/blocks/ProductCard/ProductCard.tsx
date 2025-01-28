'use client';

import { useHover } from '@uidotdev/usehooks';
import { ImageIcon, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import type { ProductDTO } from '@/services/api/dto/Product.dto';

type ProductCardProps = Omit<ProductDTO, 'id'> & {
  variant?: 'light' | 'dark';
};

export const ProductCard: React.FC<ProductCardProps> = function ProductCard({
  variant = 'light',
  badges,
  image,
  title,
  slug,
  collection,
  size,
  colors,
  price,
  originalPrice,
}) {
  const [ref, isHovered] = useHover();

  return (
    <Card
      className={`relative aspect-[0.660/1] rounded-none border border-[#7983A7] shadow-none transition-colors
        ${variant === 'dark' ? 'bg-[#111321]' : 'bg-[#F0F0F1]'}
      `}
      ref={ref}
    >
      <CardContent className="relative mb-4 aspect-square">
        <div className={`absolute inset-0 flex items-center justify-center ${
          isHovered ? 'bg-[#111321] text-[#F0F0F1]' : 'bg-[#F0F0F1] text-[#111321]'
        }`}
        >
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              sizes="33vw"
              className="object-cover"
            />
          )}
          {!image && (
            <ImageIcon className="size-8" />
          )}
        </div>
        <div className="absolute mb-4 flex flex-wrap gap-1.5 p-3">
          {badges.map(badge => (
            <span
              key={badge}
              className="border border-[#7983A7] bg-[#F3F3F3] p-1 text-xs text-[#111321]"
            >
              {badge}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex aspect-[1/0.5] flex-col justify-between p-3 pt-0">
        <h3 className={`${variant === 'dark' ? 'text-[#F3F3F3]' : 'text-[#111321]'} font-medium leading-tight`}>
          <Link href={`/product/${slug}`}>
            {title}
          </Link>
        </h3>
        <div>
          <div className={`text-sm ${variant === 'dark' ? 'text-[#B1B7CB]' : 'text-[#7983A7]'}`}>
            {collection}
          </div>
          <div className={`text-sm ${variant === 'dark' ? 'text-[#B1B7CB]' : 'text-[#7983A7]'}`}>
            {size}
            {' '}
            |
            {' '}
            {colors}
            {' '}
            Colors
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-2">
            <span className={`text-xl ${variant === 'dark' ? 'text-[#F3F3F3]' : 'text-[#111321]'} font-bold`}>
              {price}
            </span>
            {originalPrice && (
              <span className="text-sm text-[#B3261E] line-through">
                {originalPrice}
              </span>
            )}
          </div>
          <div className={`flex ${isHovered ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
            <button
              type="button"
              className={`border px-4 py-2 text-sm ${
                variant === 'dark'
                  ? 'border-[#F3F3F3] bg-[#111321] text-[#F3F3F3]'
                  : 'border-[#111321] bg-[#F3F3F3] text-[#111321]'}
            `}
            >
              Compare
            </button>
            <button type="button" className={`${variant === 'dark' ? 'bg-[#F3F3F3] text-[#111321]' : 'bg-[#111321] text-[#F3F3F3]'} px-[9px] py-1`}>
              <ShoppingBag className="size-5" />
            </button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
