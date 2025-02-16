import Image from 'next/image';
import Link from 'next/link';

import ImgDark from './dark.png';
import ImgLight from './light.png';

export type LogoProps = {
  variant?: 'dark' | 'light';
};

export const Logo: React.FC<LogoProps> = function Logo({ variant = 'dark' }) {
  return (
    <Link href="/" className="mr-8 shrink-0">
      <Image
        src={variant === 'dark' ? ImgDark : ImgLight}
        alt="Casio"
        width={256}
        height={48}
        className="h-6 w-auto"
      />
    </Link>
  );
};
