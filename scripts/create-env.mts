import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const createEnv = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const envExamplePath = resolve(__dirname, '../.env.example');
  const envFilePath = resolve(__dirname, '../.env');

  if (existsSync(envFilePath)) {
    console.log('Файл `.env` уже существует.');

    return;
  }

  if (existsSync(envExamplePath)) {
    const envContent = readFileSync(envExamplePath, 'utf8');
    writeFileSync(envFilePath, envContent, 'utf8');
    console.log('Файл `.env` был успешно создан по примеру `.env.example`!');

    return;
  }

  writeFileSync(envExamplePath, '', 'utf8');
  writeFileSync(envFilePath, '', 'utf8');

  console.log('⚠️ Файл `.env.example` не был найден. Созданные файлы `.env` и `.env.example` необходимо заполнить вручную.');
};

createEnv();
