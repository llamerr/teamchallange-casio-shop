import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import type { CollectionDTO } from '@/services/api/dto/Collection/Collection.dto';

type CollectionCardProps = Omit<CollectionDTO, 'id' | 'description'> & {
  href: string;
};

export const CollectionCard: React.FC<CollectionCardProps> = function CollectionCard({
  title,
  slogan,
  href,
  image,
}) {
  return (
    <div className="relative flex aspect-[1.262/1] flex-col items-center justify-center overflow-hidden border-none bg-darkBackground text-white">
      <div className="absolute z-0 flex size-full items-center justify-center opacity-50">
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
      <Link
        href={href}
        className="z-10 flex size-full flex-col items-start justify-end p-16 text-white transition-colors sm:p-4"
      >
        <div className="w-10/12 space-y-2">
          <h3 className="w-10/12 truncate text-3xl font-semibold transition-colors group-hover:text-gray-300">
            {title}
          </h3>
          <p className="truncate text-xl text-gray-400">{slogan}</p>
        </div>
      </Link>
    </div>
  );
};
