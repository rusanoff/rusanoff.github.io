import path from 'path';
import fs from 'fs';

import type { Plugin } from 'vite';

import { getHashedFileName } from './utils/getHashedFileName.ts';

export const HashPublicIcons = (): Plugin => {
  return {
    name: 'HashPublicIcons',
    closeBundle: () => {
      const iconsDir = path.resolve(__dirname, 'dist', 'icons');
      const files = fs.readdirSync(iconsDir);

      files.forEach((file) => {
        const filePath = path.resolve(iconsDir, file);
        const newFileName = getHashedFileName()(filePath);
        const newFilePath = path.resolve(iconsDir, newFileName);

        fs.renameSync(filePath, newFilePath);
      });
    },
  };
};
