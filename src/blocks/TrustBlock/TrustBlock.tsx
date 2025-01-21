import { cn } from '@/libs/utils';

type TrustBlockProps = {
  title: string;
  description: string;
  variant?: 'light' | 'dark';
  className?: string;
};

export function TrustBlock({ title, description, variant, className }: TrustBlockProps) {
  return (
    <section className={cn('py-8', className)}>
      <div className="container mx-auto text-center">
        <h2 className={cn('mb-2 text-2xl font-medium', variant === 'light' ? 'text-[#F3F3F3]' : 'text-gray-900')}>{title}</h2>
        <p className={cn('text-gray-600', variant === 'light' && 'text-[#B1B7CB]')}>{description}</p>
      </div>
    </section>
  );
}
