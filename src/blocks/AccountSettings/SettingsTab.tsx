'use client';

import { useHover } from '@uidotdev/usehooks';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

type SettingsTabProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function SettingsTab({ className, href, children }: SettingsTabProps) {
  const [ref, isHovered] = useHover();

  const isHighlighted = (usePathname() === href) || isHovered;

  return (
    <li
      ref={ref}
      className={cn(
        `min-h-14 w-full flex border-b border-[#7983A7]
      text-base text-[#3F4664] font-medium
      ${isHighlighted ? 'bg-[#E4E6EB] underline' : 'bg-inherit'}`,
        className,
      )}
    >
      <Link href={href} className="flex size-full flex-row justify-between px-6 py-4">
        {children}
        {isHighlighted && <ChevronRight className="size-6"></ChevronRight>}
      </Link>
    </li>
  );
}
