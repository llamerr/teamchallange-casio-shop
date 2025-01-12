import { ChevronRight, ImageIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type GenderCardProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image?: string;
};

export const GenderCard: React.FC<GenderCardProps> = function GenderCard({
  title,
  description,
  buttonText,
  buttonLink,
  image,
}) {
  return (
    <div className="relative flex aspect-[1.08/1] flex-col items-center justify-center border-none bg-darkBackground text-white">
      <div className="absolute z-0 flex size-full items-center justify-center opacity-50">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            sizes="50vw"
            className="object-cover"
          />
        )}
        {!image && (
          <ImageIcon className="size-16" />
        )}
      </div>
      <Card className="z-10 flex size-full flex-col items-start justify-end bg-[rgba(20,22,26,0.3)] p-16 text-white">
        <div className="my-6 space-y-2">
          <h2 className="text-3xl">{title}</h2>
          <p className="text-xl text-gray-400">{description}</p>
        </div>
        <Link href={buttonLink}>
          <Button
            variant="outline"
            size="lg"
            className="w-64 justify-between bg-white px-4 text-black"
          >
            {buttonText}
            <ChevronRight className="ml-2 size-4" />
          </Button>
        </Link>
      </Card>
    </div>
  );
};
