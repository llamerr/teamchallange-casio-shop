import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

type ProductCardProps = {
  badges?: string[];
  image: string;
  title: string;
  category: string;
  size: string;
  colors: number;
  price: number;
  originalPrice?: number;
  productId: string;
};

export function ProductCard({
  badges,
  image,
  title,
  category,
  size,
  colors,
  price,
  originalPrice,
  productId,
}: ProductCardProps) {
  return (
    <div className="group relative rounded-lg bg-slate-50 p-4 transition-all hover:shadow-lg">
      {/* Product ID */}
      <div className="absolute right-0 top-20 origin-right -rotate-90 text-sm text-slate-400">
        {productId}
      </div>

      {/* Badges */}
      {badges && badges.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {badges.map(badge => (
            <Badge
              key={badge}
              variant="secondary"
              className="bg-white/80 text-slate-700 hover:bg-white"
            >
              {badge}
            </Badge>
          ))}
        </div>
      )}

      {/* Product Image */}
      <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-sm uppercase text-slate-600">{category}</div>
        <div className="text-sm text-slate-600">
          {size}
          {' '}
          |
          {colors}
          {' '}
          Colors
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold">
            $
            {price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-red-500 line-through">
              $
              {originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
