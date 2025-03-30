import path from 'path';
import fs from 'fs';

import type { Plugin } from 'vite';

import { getHashedFileName } from './utils/getHashedFileName.ts';

const hashFilesRecursively = (directory: string) => {
  const entries = fs.readdirSync(directory, { withFileTypes: true });

  entries.forEach((entry) => {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      hashFilesRecursively(entryPath);
    } else if (entry.isFile()) {
      const newFileName = getHashedFileName()(entryPath);
      const dirName = path.dirname(entryPath);
      const newFilePath = path.join(dirName, newFileName);

      fs.renameSync(entryPath, newFilePath);
    }
  });
};

export const HashPublicIcons = (): Plugin => {
  return {
    name: 'HashPublicIcons',
    closeBundle: () => {
      const iconsDir = path.resolve(__dirname, 'dist', 'icons');

      if (fs.existsSync(iconsDir)) {
        hashFilesRecursively(iconsDir);
      } else {
        console.error(`Директория не найдена: ${iconsDir}`);
      }
    },
  };
};
