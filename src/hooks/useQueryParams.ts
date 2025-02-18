'use client';

import { useHistory } from './useHistory';

export const useQueryParams = () => {
  const history = useHistory();

  const location = typeof window !== 'undefined'
    ? window.location
    : {
        search: '',
        pathname: '',
      };

  const urlParams = new URLSearchParams(location.search);

  const get = (param: string) => {
    for (const [key, value] of urlParams) {
      if (param === key) {
        return value;
      }
    }

    return undefined;
  };

  const getAll = () => {
    const keys = new Map();

    for (const [key, value] of urlParams) {
      keys.set(key, value);
    }

    return keys;
  };

  const set = (key: string, value: string | number | string[] | number[]) => {
    const isFound = getAll().has(key);

    if (isFound) {
      if (Array.isArray(value) && value.length === 0) {
        urlParams.delete(key);
      } else if (Array.isArray(value)) {
        value.forEach((v, i) => i === 0 ? urlParams.set(key, v as string) : urlParams.append(key, v as string));
      } else {
        urlParams.set(key, value as string);
      }
    } else {
      if (Array.isArray(value)) {
        value.forEach(v => urlParams.append(key, v as string));
      } else {
        urlParams.append(key, value as string);
      }
    }

    const newRelativePathQuery = `${location.pathname}?${urlParams.toString()}`;

    history.push(newRelativePathQuery);
  };

  const setEncoded = (obj: { [s: string]: string | number } | ArrayLike<string>) => {
    const encodedParams = new URLSearchParams();

    for (const [key, value] of Object.entries(obj)) {
      encodedParams.append(key, value as string);
    }

    const newRelativePathQuery = `${location.pathname}?${encodedParams.toString()}`;

    history.push(newRelativePathQuery);
  };

  return { urlParams: getAll(), get, set, setEncoded };
};
