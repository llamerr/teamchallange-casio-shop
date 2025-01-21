import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import type { KeyFeatureDTO } from '@/services/api/dto/KeyFeature/KeyFeature.dto';

type KeyFeaturesCardProps = Omit<KeyFeatureDTO, 'id'> & {
};

export const KeyFeaturesCard: React.FC<KeyFeaturesCardProps> = function KeyFeaturesCard({
  title,
  description,
  image,
  slug,
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
        href={`/collections/${slug}`}
        className="z-10 flex size-full flex-col items-start justify-end p-16 text-white transition-colors sm:p-4"
      >
        <div className="w-10/12 space-y-2">
          <h3 className="w-10/12 truncate text-3xl font-semibold transition-colors group-hover:text-gray-300">
            {title}
          </h3>
          <p className="truncate text-xl text-gray-400">{description}</p>
        </div>
      </Link>
    </div>
  );
};
