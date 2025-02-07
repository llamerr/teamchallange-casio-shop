import { getTranslations } from 'next-intl/server';

import { Section } from '@/components/Section/Section';

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
    namespace: 'PrivacyPolicy',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'PrivacyPolicy',
  });

  return (
    <Section className="text-black" title={t('title')}>
      <p>{t('description')}</p>
    </Section>
  );
};
