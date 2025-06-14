import { localStorageService } from '../../../shared/lib/localStorageService.ts';

export const updateTheme = (type: 'dark' | 'light', callback?: () => void) => {
  if (type === 'dark') {
    document.documentElement.classList.remove('is-light');
    document.documentElement.classList.add('is-dark');
  } else {
    document.documentElement.classList.remove('is-dark');
    document.documentElement.classList.add('is-light');
  }

  localStorageService.set('theme', type);
  callback?.();
};
