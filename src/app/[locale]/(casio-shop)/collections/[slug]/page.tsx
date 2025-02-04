import { QueryClient } from '@tanstack/react-query';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { Breadcrumbs } from '@/blocks/Breadcrumbs/Breadcrumbs';
import { CollectionList } from '@/blocks/CollectionsList/CollectionList';
import { FilteredProductsList } from '@/blocks/FilteredProductsList/FilteredProductsList';
import { HeroCollection } from '@/blocks/HeroCollection/HeroCollection';
import { fetchCollections } from '@/services/api/dto/Collection/Collection.query';

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

// always try to find default slug, even if one is not provided
const DEFAULT_SLUG = 'g-shock';
// but if we unable to find a slug, use default value and empty filters
// isntead of just showing 404 or some error
const DEFAULT_DESCRIPTION = 'Choose Casio. Discover the perfect timepiece for you.';

export default async function Index(props: IIndexProps) {
  const { slug = DEFAULT_SLUG, locale } = await props.params;
  setRequestLocale(locale);

  const queryClient = new QueryClient();

  const collections = await queryClient.fetchQuery({
    queryKey: ['collections'],
    queryFn: () => fetchCollections(),
  });

  // TODO: replace with state inside child component to keep static collections SSG and updated SSR
  const activeCollection = collections.find(collection => collection.slug === slug);

  const breadcrumbs = [
    { href: '/collections/', label: 'Collections' },
  ];
  if (activeCollection?.title) {
    breadcrumbs.push({ href: `/collections/${slug}`, label: activeCollection?.title });
  }

  return (
    <>
      <HeroCollection
        image={activeCollection?.imageWide || activeCollection?.image}
        title="Shop All"
        collection={activeCollection?.title}
        description={activeCollection?.description || DEFAULT_DESCRIPTION}
      />
      <div className="container mx-auto px-4 py-6">
        <Breadcrumbs links={breadcrumbs} />
        <CollectionList />
        <FilteredProductsList />
      </div>
    </>
  );
};
