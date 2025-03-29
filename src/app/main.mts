/// <reference types="vite/client" />

import { setParticles } from '../widgets/card/lib/setParticles.ts';
import { setFooterYear } from '../widgets/footer/lib/setFooterYear.mts';

setParticles()
  .catch(console.error);

setFooterYear();
