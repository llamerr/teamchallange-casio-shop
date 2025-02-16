import { QueryClient } from '@tanstack/react-query';
import { getTranslations } from 'next-intl/server';

import { fetchNews } from '@/services/api/dto/News/News.query';

type IIndexProps = {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
};

export async function generateMetadata(props: IIndexProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function NewsArticle(props: IIndexProps) {
  const { slug } = await props.params;

  const queryClient = new QueryClient();

  const article = await queryClient.fetchQuery({
    queryKey: ['news', slug],
    queryFn: () => fetchNews(slug),
  });

  return (
    <article className="container mx-auto px-4 py-12">
      <h2 className="mb-4 text-2xl font-bold">{article.title}</h2>
      <p className="mb-4 text-gray-600">{article.date}</p>
      <div className="prose max-w-none">
        <p>{article.content}</p>
      </div>
    </article>
  );
}
