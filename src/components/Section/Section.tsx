import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/libs/utils';

type SectionProps = {
  title: string;
  link?: {
    href: string;
    label: string;
  };
  children: React.ReactNode;
  className?: string;
};

export const Section: React.FC<SectionProps> = function Section({ title, link, children, className }) {
  return (
    <section className={cn('py-8', className)}>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-medium uppercase">{title}</h2>
        {link && (
          <Link
            href={link.href}
            className="inline-flex items-center gap-1 text-base underline hover:text-slate-700"
          >
            {link.label}
            <ArrowRight className="size-4" />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
};
