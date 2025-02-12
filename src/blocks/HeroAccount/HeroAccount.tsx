import { ImageIcon } from 'lucide-react';
import Image from 'next/image';

type HeroAccountProps = {
  image?: string;
};

export function HeroAccount({ image }: HeroAccountProps) {
  return (
    <section className="relative aspect-[12.46/1]">
      <div className="absolute flex size-full items-center justify-center bg-[#111321]">
        {
          image
            ? (
                <Image
                  src={image}
                  alt="Account Image"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              )
            : <ImageIcon className="size-10" />
        }
      </div>
      <div className="absolute flex h-full items-center pl-12">
        <p className="text-5xl">Your Account</p>
      </div>
    </section>
  );
}
