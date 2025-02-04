import { redirect } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';

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

export default async function Index(props: IIndexProps) {
  const { slug = DEFAULT_SLUG, locale } = await props.params;
  setRequestLocale(locale);

  redirect(`/collections/${slug}`);
};
