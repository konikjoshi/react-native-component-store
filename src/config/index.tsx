// src/config/index.ts
export interface LibraryConfig {
  app: 'gotv' | 'mydstv';
}

const config = {
  current: {
    app: 'mydstv',
  } as LibraryConfig,
};

export const setLibraryConfig = (newConfig: LibraryConfig) => {
  config.current = newConfig;
};

export const getLibraryConfig = (): LibraryConfig => {
  return config.current;
};
