import { Heart, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function HeroBanner() {
  return (
    <div className="bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square">
            <Image
              src="/placeholder.svg"
              alt="Casio Unisex Watch"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-white/10">Bestsellers</Badge>
              <Badge variant="outline" className="bg-white/10">Limited</Badge>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Heart className="size-5" />
              </Button>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Casio Unisex Watches</h1>
              <div className="uppercase text-slate-400">VINTAGE</div>
              <div className="flex items-center gap-2">
                <span>39×38×7 mm</span>
                <button className="text-slate-400 hover:text-white" type="button">
                  <span className="sr-only">Dimensions information</span>
                  ⓘ
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <div>3 colors: Gold</div>
              <div className="flex gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="size-12 overflow-hidden rounded-lg bg-white/10">
                    <Image
                      src="/placeholder.svg"
                      alt={`Color variant ${i}`}
                      width={48}
                      height={48}
                      className="size-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-red-500 line-through">$120</span>
                <span className="text-2xl font-bold">$95.00</span>
              </div>
              <Button className="group w-full" variant="outline">
                Compare
                <ShoppingBag className="ml-2 size-4 opacity-70 group-hover:opacity-100" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
