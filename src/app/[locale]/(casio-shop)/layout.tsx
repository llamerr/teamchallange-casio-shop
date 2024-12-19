import { setRequestLocale } from 'next-intl/server';

import { ShopTemplate } from '@/templates/ShopTemplate';

export default async function ProductLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <ShopTemplate>
      {props.children}
    </ShopTemplate>
  );
}
