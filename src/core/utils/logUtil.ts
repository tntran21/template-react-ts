import { TAnyType } from "@/core/interfaces";

/**
 * ## LogsUtil: only show log in development mode
 * @param {string} message
 * @type {function} log - console.log
 * @type {function} error - console.error
 * @type {function} warn - console.warn
 */
const LogsUtil = {
  log: (...args: TAnyType[]) => {
    if (process.env.NODE_ENV === "development") {
      console.log(...args);
    }
  },
  error: (...args: TAnyType[]) => {
    if (process.env.NODE_ENV === "development") {
      console.error(...args);
    }
  },
  warn: (...args: TAnyType[]) => {
    if (process.env.NODE_ENV === "development") {
      console.warn(...args);
    }
  },
};

export default LogsUtil;
