import { getInitialTheme } from './getInitialTheme.ts';
import { updateTheme } from './updateTheme.ts';

type Params = {
  onThemeUpdate?: () => void;
};

export const initThemeSwitcher = (params: Params = {}) => {
  const { onThemeUpdate } = params;

  const themeSwitcherInput = document.getElementById('js-theme-switcher') as HTMLInputElement;
  const themeSwitcherLabel = themeSwitcherInput.parentNode as HTMLLabelElement;

  let isDark = getInitialTheme();

  if (isDark) {
    themeSwitcherInput.checked = true;
  }

  themeSwitcherLabel.addEventListener('click', (event) => {
    if (event.target === themeSwitcherInput) {
      return;
    }

    if (!document.startViewTransition) {
      isDark = !isDark;

      updateTheme(isDark ? 'dark' : 'light', () => {
        themeSwitcherInput.checked = isDark;
        onThemeUpdate?.();
      });

      return;
    }

    const x = event.clientX;
    const y = event.clientY;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(() => {
      isDark = !isDark;

      updateTheme(isDark ? 'dark' : 'light', () => {
        themeSwitcherInput.checked = isDark;
        onThemeUpdate?.();
      });
    });

    void transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: isDark ? clipPath : [...clipPath].reverse(),
        },
        {
          duration: 400,
          easing: 'ease-in-out',
          pseudoElement: isDark
            ? '::view-transition-new(root)'
            : '::view-transition-old(root)',
        },
      );
    });
  });
};
