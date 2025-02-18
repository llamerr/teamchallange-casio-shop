import { QueryClient } from '@tanstack/react-query';

import { NewsCard } from '@/blocks/NewsBlock/NewsCard';
import { Grid } from '@/components/Grid/Grid';
import { fetchNewsList } from '@/services/api/dto/News/News.query';

export default async function HomePage() {
  const queryClient = new QueryClient();

  const data = await queryClient.fetchQuery({
    queryKey: ['news'],
    queryFn: fetchNewsList,
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-12 text-center text-4xl font-bold">Casio Innovation Hub</h1>

      <Grid className="gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
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
    </div>
  );
}
