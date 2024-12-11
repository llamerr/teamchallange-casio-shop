'use client';

import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';

export function ProductCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`relative w-[300px] rounded-none border border-gray-200 shadow-none transition-colors
        dark:border-gray-800 dark:bg-[#1F1F1F] ${isHovered ? 'dark:bg-[#0F0F0F]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-4">
        <div className="mb-4 flex flex-wrap gap-2">
          {['Bestsellers', 'Limited', 'Touch Solar', 'Bluetooth', 'New'].map(badge => (
            <span
              key={badge}
              className="border border-gray-300 bg-white px-2 py-1 text-xs
                dark:bg-white dark:text-black"
            >
              {badge}
            </span>
          ))}
        </div>
        <div className="relative mb-4 aspect-square bg-muted dark:bg-gray-800">
          <Image
            src="/placeholder.svg"
            alt="Product image"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-medium leading-tight dark:text-white">
            <Link href="/product/124">
              Casio is dedicated to environmental
            </Link>
          </h3>
          <div className="text-sm text-muted-foreground dark:text-gray-400">
            ATOMIC TIMEKEEPING
          </div>
          <div className="text-sm text-muted-foreground dark:text-gray-400">
            40 mm | 3 Colors
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold dark:text-white">$95.00</span>
          <span className="text-sm text-red-500 line-through dark:text-red-400">$120</span>
        </div>
        {isHovered && (
          <div className="flex gap-2">
            <button className="border border-gray-300 bg-white px-4 py-2 text-sm text-black
              dark:border-white"
            >
              Compare
            </button>
            <button className="bg-black p-2 text-white dark:bg-white dark:text-black">
              <Mail className="size-4" />
            </button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
