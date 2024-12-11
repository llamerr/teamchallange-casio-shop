import { getTranslations, setRequestLocale } from 'next-intl/server';

import { Breadcrumbs } from '@/blocks/Breadcrumbs/Breadcrumbs';
import { HeroBanner } from '@/blocks/HeroBanner/HeroBanner';
import { KeyFeatures } from '@/blocks/KeyFeatures/KeyFeatures';
import { ProductGallery } from '@/blocks/ProductGallery/ProductGallery';
import { ProductTabs } from '@/blocks/ProductTabs/ProductTabs';
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
        <Breadcrumbs />
        <div className="mt-8">
          <ProductTabs />
        </div>
        <ProductGallery />
        <KeyFeatures />
        <SimilarProducts />
      </div>
    </>
  );
};
