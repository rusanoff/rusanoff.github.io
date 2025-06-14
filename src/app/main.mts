/// <reference types="vite/client" />

import type { Container, ParticlesOptions } from '@tsparticles/engine';

import { setParticles } from '../widgets/card/lib/setParticles.ts';
import { setFooterYear } from '../widgets/footer/lib/setFooterYear.mts';
import { initThemeSwitcher } from '../widgets/themeSwitcher/lib/initThemeSwitcher.ts';

const tsParticlesEngineRef: { current: Nullable<Container> } = {
  current: null,
};

setParticles()
  .then((tsParticles) => {
    tsParticlesEngineRef.current = tsParticles || null;
  })
  .catch(console.error);

setFooterYear();

initThemeSwitcher({
  onThemeUpdate: () => {
    if (!tsParticlesEngineRef.current) {
      return;
    }

    tsParticlesEngineRef.current.options.particles.color.value = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-particle-circle')
      .trim();

    (tsParticlesEngineRef.current.options.particles.links as ParticlesOptions).color.value =
      getComputedStyle(document.documentElement)
        .getPropertyValue('--color-particle-circle')
        .trim();

    void tsParticlesEngineRef.current.refresh();
  },
});
