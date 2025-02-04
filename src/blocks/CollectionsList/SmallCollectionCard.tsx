import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import type { CollectionDTO } from '@/services/api/dto/Collection/Collection.dto';

type SmallCollectionCardProps = Omit<CollectionDTO, 'id'> & {
  href: string;
  isActive?: boolean;
};

export const SmallCollectionCard: React.FC<SmallCollectionCardProps> = function SmallCollectionCard({
  title,
  href,
  image,
  isActive = false,
}) {
  return (
    <div className="relative flex aspect-[3.7/1] h-[72px] flex-col items-center justify-center overflow-hidden border-none bg-darkBackground text-white">
      {isActive && <div className="absolute z-10 flex size-full items-center justify-center bg-overlayGray" />}
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
        className="z-10 flex size-full flex-col items-center justify-center p-16 text-white transition-colors sm:p-4"
      >
        <h3 className="w-10/12 truncate text-center text-3xl transition-colors group-hover:text-gray-300">
          {title}
        </h3>
      </Link>
    </div>
  );
};
