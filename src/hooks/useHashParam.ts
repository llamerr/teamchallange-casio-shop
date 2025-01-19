'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useHashParam = () => {
  const pathname = usePathname();
  const [hashParam, setHashParam] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (window.location.hash) {
      setHashParam(window.location.hash.substring(1));
    }
    setIsLoading(false);
  }, [pathname]);

  return { hashParam, isLoading };
};

export default useHashParam;
