'use client';

import { Section } from '@/components/Section/Section';
import { useNewsList } from '@/services/api/dto/News/News.query';

import { NewsCard } from './NewsCard';
import { NewsCardSkeleton } from './NewsCardSkeleton';

type NewsBlockProps = {
  className?: string;
};

export function NewsBlock({ className }: NewsBlockProps) {
  const { data, error, isLoading } = useNewsList();

  return (
    <Section title="Our News" link={{ href: '/news', label: 'View all' }} className={className}>
      {error instanceof Error && <p>{error.message}</p>}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading && Array.from({ length: 4 }).map((_, i) => (
          <NewsCardSkeleton key={i} />
        ))}
        {data && data.map(news => (
          <NewsCard
            key={news.id}
            image={news.image}
            title={news.title}
            description={news.description}
            href={`/news/${news.href}`}
          />
        ))}
      </div>
    </Section>
  );
}
