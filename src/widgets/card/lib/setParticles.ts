import { tsParticles } from '@tsparticles/engine';
import { loadAll } from '@tsparticles/all';
import configs from '@tsparticles/configs';

export const setParticles = async () => {
  await loadAll(tsParticles);

  const options = configs.basic;

  await tsParticles.load({
    element: document.getElementById('js-particles')!,
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
          value: '#aaa',
          animation: {
            enable: true,
            speed: 100,
            sync: true,
          },
        },
        links: {
          color: '#999',
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
};
