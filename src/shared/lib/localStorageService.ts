type LocalStorageData = {
  theme: 'light' | 'dark';
};

export const localStorageService = {
  get<T extends keyof LocalStorageData>(key: T): Nullable<LocalStorageData[T]> {
    return JSON.parse(localStorage.getItem(key) as string) as Nullable<LocalStorageData[T]>;
  },

  set<T extends keyof LocalStorageData>(key: T, payload: LocalStorageData[T]) {
    const serializedData = JSON.stringify(payload);

    localStorage.setItem(key, serializedData);
  },

  remove<T extends keyof LocalStorageData>(key: T) {
    localStorage.removeItem(key);
  },
};
