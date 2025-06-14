import crypto from 'crypto';

/**
 * Возвращает функцию генерации хэша
 * @param stringForHash — строка, используемая для генерации хэша
 */
export const getHashedFileName = (stringForHash = new Date().toString()) => {
  /**
   * Возвращает новое имя файла, содержащее хэш
   * @param filePath — путь к файлу
   */
  return (filePath: string) => {
    const hash = crypto.createHash('sha256').update(stringForHash)
      .digest('hex')
      .substring(0, 8);
    const fileName = filePath.split('/').at(-1)!;

    return `${fileName.split('.')[0]}.${hash}.${fileName.split('.').at(-1)}`;
  };
};
