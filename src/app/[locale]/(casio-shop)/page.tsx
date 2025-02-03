import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { GenderBlock } from '@/blocks/GenderBlock/GenderBlock';
import { HeroBanner } from '@/blocks/HeroBanner/HeroBanner';
import { NewArrivals } from '@/blocks/NewArrivals/NewArrivals';
import { NewsBlock } from '@/blocks/NewsBlock/NewsBlock';
import { ProductCollections } from '@/blocks/ProductCollections/ProductCollections';
import { SolarBlock } from '@/blocks/SolarBlock/SolarBlock';
import { TrustBlock } from '@/blocks/TrustBlock/TrustBlock';
import { fetchCollections } from '@/services/api/dto/Collection/Collection.query';
import { fetchNewsList } from '@/services/api/dto/News/News.query';
import { fetchNewProducts, fetchProducts } from '@/services/api/dto/Product/Product.query';

type IIndexProps = {
  params: Promise<{ locale: string }>;
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

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ['collections'],
    queryFn: fetchCollections,
  });

  queryClient.prefetchQuery({
    queryKey: ['products', 'new'],
    queryFn: fetchNewProducts,
  });

  queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts,
  });

  queryClient.prefetchQuery({
    queryKey: ['news'],
    queryFn: fetchNewsList,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HeroBanner />
      <div className="container mx-auto max-w-full py-12">
        <TrustBlock
          title="We are the Official Dealer Casio in Ukraine."
          description="Guaranteed quality and service you can trust."
          className="mx-20"
        />
        <GenderBlock className="mx-20" />
        <ProductCollections className="mx-20" />
        <NewArrivals className="mx-20" />
        <SolarBlock />
        <NewsBlock className="mx-20" />
      </div>
    </HydrationBoundary>
  );
};
