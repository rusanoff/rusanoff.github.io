import { localStorageService } from '../../../shared/lib/localStorageService.ts';

export const getInitialTheme = () => {
  const storedTheme = localStorageService.get('theme');

  if (storedTheme) {
    return storedTheme === 'dark';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};
