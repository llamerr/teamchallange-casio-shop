'use client';

import { Grid } from '@/components/Grid/Grid';
import { Section } from '@/components/Section/Section';
import { cn } from '@/libs/utils';
import { useNewsList } from '@/services/api/dto/News/News.query';

import { NewsCard } from './NewsCard';
import { NewsCardSkeleton } from './NewsCardSkeleton';

type NewsBlockProps = {
  className?: string;
};

export function NewsBlock({ className }: NewsBlockProps) {
  const { data, error, isLoading } = useNewsList();

  return (
    <Section title="Our News" link={{ href: '/news', label: 'View all' }} className={cn('text-black', className)}>
      {error instanceof Error
        ? <p>{error.message}</p>
        : (
            <Grid
              isLoading={isLoading}
              renderSkeleton={key => <NewsCardSkeleton key={key} />}
              skeletonCount={4}
              className="gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
            >
              {data && data.map(news => (
                <NewsCard
                  key={news.id}
                  image={news.image}
                  title={news.title}
                  description={news.description}
                  href={`/news/${news.href}`}
                />
              ))}
            </Grid>
          )}
    </Section>
  );
}
