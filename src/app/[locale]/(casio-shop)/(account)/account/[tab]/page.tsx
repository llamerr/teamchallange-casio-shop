import { getTranslations, setRequestLocale } from 'next-intl/server';

import { AccountSettings } from '@/blocks/AccountSettings/AccountSettings';
import { Breadcrumbs } from '@/blocks/Breadcrumbs/Breadcrumbs';
import { HeroAccount } from '@/blocks/HeroAccount/HeroAccount';

type IIndexProps = {
  params: Promise<{
    tab: string;
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
  const { tab, locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <HeroAccount />
      <div className="px-20 py-12">
        <Breadcrumbs links={[
          { href: '/account', label: 'Your Account' },
          { href: `/product/${tab}`, label: tab },
        ]}
        />
        <div className="mt-10 flex flex-row gap-8">
          <AccountSettings />
        </div>
      </div>
    </>
  );
}
