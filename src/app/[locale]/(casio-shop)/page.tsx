import { getTranslations, setRequestLocale } from 'next-intl/server';

import { HeroBanner } from '@/blocks/HeroBanner/HeroBanner';
import ProductCollections from '@/blocks/ProductCollections/ProductCollections';
import { SimilarProducts } from '@/blocks/SimilarProducts/SimilarProducts';

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

  return (
    <>
      <HeroBanner />
      <div className="container mx-auto px-4 py-6">
        <ProductCollections />
        <SimilarProducts />
      </div>
    </>
  );
};
