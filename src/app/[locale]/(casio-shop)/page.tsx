import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { GenderBlock } from '@/blocks/GenderBlock/GenderBlock';
import { HeroBanner } from '@/blocks/HeroBanner/HeroBanner';
import { NewArrivals } from '@/blocks/NewArrivals/NewArrivals';
import { ProductCollections } from '@/blocks/ProductCollections/ProductCollections';
import { TrustBlock } from '@/blocks/TrustBlock/TrustBlock';
import { fetchCollections } from '@/services/api/dto/Collection.query';
import { fetchNewProducts } from '@/services/api/dto/Product.query';

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
    queryKey: ['products', 'new'],
    queryFn: fetchNewProducts,
  });

  queryClient.prefetchQuery({
    queryKey: ['collections'],
    queryFn: fetchCollections,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HeroBanner />
      <div className="container mx-auto max-w-full px-20 py-12">
        <TrustBlock />
        <GenderBlock />
        <ProductCollections />
        <NewArrivals />
      </div>
    </HydrationBoundary>
  );
};
