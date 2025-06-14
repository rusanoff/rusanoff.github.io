import { tsParticles } from '@tsparticles/engine';
import { loadAll } from '@tsparticles/all';
import configs from '@tsparticles/configs';

export const setParticles = async () => {
  await loadAll(tsParticles);

  const options = configs.basic;
  const element = document.getElementById('js-particles');

  if (!element) {
    throw new ReferenceError('Элемент "#js-particles" не найден.');
  }

  const container = await tsParticles.load({
    element,
    options: {
      ...options,
      fullScreen: false,
      background: {
        ...options.background,
        color: {
          value: '',
        },
      },
      interactivity: {},
      particles: {
        ...options.particles,
        color: {
          value: getComputedStyle(document.documentElement)
            .getPropertyValue('--color-particle-circle')
            .trim(),
          animation: {
            enable: true,
            speed: 100,
            sync: true,
          },
        },
        links: {
          color: getComputedStyle(document.documentElement)
            .getPropertyValue('--color-particle-line')
            .trim(),
          distance: 50,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          ...options.particles?.move,
          speed: 0.2,
          distance: 100,
          warp: false,
        },
        number: {
          value: 150,
        },
        opacity: {
          value: 0.3,
        },
      },
    },
  });

  return container;
};
