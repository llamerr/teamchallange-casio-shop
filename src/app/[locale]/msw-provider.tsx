'use client';

import { Suspense, use } from 'react';

import { Env } from '@/libs/Env';
import { mockHandlers } from '@/services/api/mockHandlers';

const mockingEnabledPromise
  = typeof window !== 'undefined'
    ? import('@/mocks/browser').then(async ({ worker }) => {
      await worker.start({
        onUnhandledRequest(request, print) {
          if (Env.NEXT_PUBLIC_API_URL && request.url.startsWith(Env.NEXT_PUBLIC_API_URL)) {
            print.warning();
          }
        },
      });
      worker.use(...mockHandlers);

      // eslint-disable-next-line no-console
      console.log(worker.listHandlers());
    })
    : Promise.resolve();

export function MSWProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // If MSW is enabled, we need to wait for the worker to start,
  // so we wrap the children in a Suspense boundary until it's ready.
  return (
    <Suspense fallback={null}>
      <MSWProviderWrapper>{children}</MSWProviderWrapper>
    </Suspense>
  );
}

function MSWProviderWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  use(mockingEnabledPromise);
  return children;
}
