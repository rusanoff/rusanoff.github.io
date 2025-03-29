export declare global {
  declare module '*.png';
  declare module '*.svg';
  declare module '*.jpg';
  declare module '*.jpeg';
  declare module '*.webp';

  type Nullable<T> = T | null;
}
