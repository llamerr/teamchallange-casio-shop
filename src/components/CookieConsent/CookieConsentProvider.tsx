import { cookies } from 'next/headers';

import { CookieConsent } from './CookieConsent';

export async function CookieConsentProvider() {
  const cookieStore = await cookies();
  const isContentShown = cookieStore.get('consent.set')?.value || 'false';

  return (
    <CookieConsent initialState={isContentShown} />
  );
}
