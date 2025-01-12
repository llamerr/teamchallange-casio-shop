'use client';

import { useHover } from '@uidotdev/usehooks';
import { ImageIcon, Mail } from 'lucide-react';
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
      className={`relative aspect-[0.660/1] rounded-none border border-gray-200 shadow-none transition-colors
        ${variant === 'dark' ? 'bg-[#1F1F1F]' : 'bg-white'}
        ${isHovered ? (variant === 'dark' ? 'bg-[#0F0F0F]' : 'bg-gray-100') : ''}
      `}
      ref={ref}
    >
      <CardContent className="p-4">
        <div className="mb-4 flex flex-wrap gap-2">
          {badges.map(badge => (
            <span
              key={badge}
              className={`border- border${variant === 'dark' ? 'gray-700' : 'gray-300'} bg-${variant === 'dark' ? 'gray-800' : 'white'} px-2 py-1 text-xs
                ${variant === 'dark' ? 'text-white' : 'text-black'}
              `}
            >
              {badge}
            </span>
          ))}
        </div>
        <div className="relative mb-4 flex aspect-square items-center justify-center bg-muted dark:bg-gray-800">
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
        <div className="space-y-2">
          <h3 className="text-xl font-medium leading-tight">
            <Link href={`/product/${slug}`}>
              {title}
            </Link>
          </h3>
          <div className={`text-sm ${variant === 'dark' ? 'text-gray-400' : 'text-muted-foreground'}`}>
            {collection}
          </div>
          <div className={`text-sm ${variant === 'dark' ? 'text-gray-400' : 'text-muted-foreground'}`}>
            {size}
            {' '}
            |
            {colors}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">
            {price}
          </span>
          {originalPrice && <span className={`text-sm ${variant === 'dark' ? 'text-red-400' : 'text-red-500'} line-through`}>{originalPrice}</span>}
        </div>
        {isHovered && (
          <div className="flex gap-2">
            <button className={`border- border${variant === 'dark' ? 'gray-700' : 'gray-300'} bg-${variant === 'dark' ? 'gray-800' : 'white'} px-4 py-2 text-sm
              ${variant === 'dark' ? 'text-white' : 'text-black'}
            `}
            >
              Compare
            </button>
            <button className={`bg-${variant === 'dark' ? 'white' : 'black'} text- p-2${variant === 'dark' ? 'black' : 'white'}`}>
              <Mail className="size-4" />
            </button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
