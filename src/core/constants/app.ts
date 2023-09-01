const DEFAULT_EMPTY = "-";

/**
 * ENV_CONFIG is an object that contains environment configuration values.
 * It is created using the `Object.freeze()` method to prevent modification of its properties.
 */
const ENV_CONFIG = Object.freeze({
  API_URL: import.meta.env.VITE_REACT_APP_API_PATH,
  IV_ENCRYP: import.meta.env.VITE_REACT_APP_IV_ENCRYP,
  KEY_ENCRYP: import.meta.env.VITE_REACT_APP_KEY_ENCRYP,
});

export { DEFAULT_EMPTY, ENV_CONFIG };
