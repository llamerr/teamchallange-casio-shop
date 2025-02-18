import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import type { NewsDTO } from '@/services/api/dto/News/News.dto';

type NewsCardProps = Omit<NewsDTO, 'id'> & {
  href: string;
};

export const NewsCard: React.FC<NewsCardProps> = function NewsCard({
  title,
  description,
  href,
  image,
}) {
  return (
    <div className="relative flex aspect-[0.75/1] flex-col items-center justify-center overflow-hidden border-none bg-darkBackground text-white">
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
      <div className="absolute bottom-0 w-full bg-slate-200/60">
        <Link
          href={href}
          className="z-10 flex size-full flex-col items-start justify-end p-16 text-[#111321] transition-colors sm:p-4"
        >
          <div className="w-10/12 space-y-2">
            <h3 className="w-10/12 truncate text-xl font-medium transition-colors">
              {title}
            </h3>
            <p className="line-clamp-3 text-base font-medium text-[#7983A7]">{description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
