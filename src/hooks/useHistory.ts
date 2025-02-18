'use client';

import { useEffect, useState } from 'react';

export const useHistory = () => {
  const history = typeof window !== 'undefined'
    ? window.history
    : {
        length: 0,
        push: () => {},
        replace: () => {},
        go: () => {},
        pushState: () => {},
        back: () => {},
        replaceState: () => {},
        forward: () => {},
      };
  const [currentPosition, setCurrentPosition] = useState(history.length);

  useEffect(() => {
    const handlePopstate = () => {
      setCurrentPosition(history.length);
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  const back = () => {
    if (currentPosition > 1) {
      history.back();
      setCurrentPosition(currentPosition - 1);
    }
  };

  const forward = () => {
    if (currentPosition < history.length) {
      history.forward();
      setCurrentPosition(currentPosition + 1);
    }
  };

  const go = (step: number) => {
    history.go(step);
    setCurrentPosition(currentPosition + step);
  };

  const push = (path: string) => {
    history.pushState(null, '', path);
    setCurrentPosition(currentPosition + 1);
  };

  const replace = (path: string) => {
    history.replaceState(null, '', path);
  };

  return { back, forward, go, push, replace, currentPosition, numberOfPages: history.length };
};
