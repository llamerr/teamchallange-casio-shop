import { QueryClient } from '@tanstack/react-query';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { Breadcrumbs } from '@/blocks/Breadcrumbs/Breadcrumbs';
import { HeroProduct } from '@/blocks/HeroProduct/HeroProduct';
import { KeyFeatures } from '@/blocks/KeyFeatures/KeyFeatures';
import { ProductGallery } from '@/blocks/ProductGallery/ProductGallery';
import { ProductTabs } from '@/blocks/ProductTabs/ProductTabs';
import { SimilarProducts } from '@/blocks/SimilarProducts/SimilarProducts';
import { fetchKeyFeatures } from '@/services/api/dto/KeyFeature/KeyFeature.query';
import { fetchProduct } from '@/services/api/dto/Product/Product.query';

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

export default async function Index(props: IIndexProps) {
  const { slug, locale } = await props.params;
  setRequestLocale(locale);

  const queryClient = new QueryClient();

  const product = await queryClient.fetchQuery({
    queryKey: ['product', slug],
    queryFn: () => fetchProduct(slug),
  });

  const features = await queryClient.fetchQuery({
    queryKey: ['features'],
    queryFn: () => fetchKeyFeatures(),
  });

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <>
      <HeroProduct image={product.image} />
      <div className="container mx-auto px-4 py-6">
        <Breadcrumbs links={[
          { href: '/collections/', label: 'Collections' },
          { href: `/collections/${product.collectionSlug}`, label: product.collection },
          { href: `/product/${product.slug}`, label: product.title },
        ]}
        />
        <div className="mt-8">
          <ProductTabs data={product} />
        </div>
        {product.images.length > 0 && <ProductGallery images={product.images} />}
        <KeyFeatures features={features} />
        <SimilarProducts />
      </div>
    </>
  );
};
