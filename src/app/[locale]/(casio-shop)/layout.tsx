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
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </ShopTemplate>
  );
}
