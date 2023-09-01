import CryptoJS from "crypto-js";

import { ENV_CONFIG } from "@/core/constants/app";
import { TAnyType } from "@/core/interfaces";

/**
 * ## Delays the execution of a code block for a specified number of milliseconds.
 *
 * @param {number} ms - The number of milliseconds to delay the execution.
 * @return {Promise<void>} - A promise that resolves after the delay.
 */
export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
// Check value is not exists
export const isNullOrEmpty = (value?: number | string | null): value is null | undefined => {
  return (value ?? "") === "";
};

/**
 * # Checks if the given parameters are valid.
 *
 * @param {object} params - An optional object containing key-value pairs.
 * @param {string[]} notRequired - An optional array of strings.
 * @return {boolean} Returns true if the parameters are valid, otherwise false.
 */
export const validParams = (params?: { [key: string]: TAnyType }, notRequired?: string[]) => {
  if (params) {
    const objClone = { ...params };
    notRequired?.map((p) => {
      delete objClone[p];
    });
    const notOk = Object.values(objClone).some((d) => (typeof d === "number" && isNaN(d)) || isNullOrEmpty(d));
    if (!notOk) {
      return true;
    }
  }

  return false;
};

export const isMatchPattern = (str: string | null | undefined, pattern: RegExp): boolean => {
  if (str == null) {
    return false;
  }
  return pattern.test(str);
};

export const isFullStringMatchPattern = (str: string | null | undefined, pattern: RegExp): boolean => {
  if (!str) {
    return false;
  }
  const result = str.match(pattern);

  return result ? result[0] == str : false;
};

/**
 * ## Checks if the given value is null, undefined, or an empty string.
 *
 * @param {number | string | null} value - The value to check.
 * @return {boolean} - Returns true if the value is null, undefined, or an empty string, otherwise returns false.
 */
export const isNaNOrNull = (val: number | null | undefined): boolean => {
  return val == null || Number.isNaN(val);
};

export const toNumberNullOrEmptyToZero = (data: string | number | null | undefined): number => {
  if (data == null) return 0;
  return Number(data);
};

export const isHalfWidthNumeric = (str: string | null | undefined): boolean => {
  return isMatchPattern(str, /^-?[0-9]+(\.[0-9]+)?$/);
};

/**
 * ## Replaces placeholders in a string with provided arguments.
 *
 * @param {string} str - The string with placeholders.
 * @param {...string} args - The arguments to replace the placeholders.
 * @return {string} - The formatted string.
 */
export const StringFormat = (str: string, ...args: string[]) =>
  str.replace(/{(\d+)}/g, (_match, index) => args[index] || "");

/**
 * ## Removes duplicates from an array.
 *
 * @param {T[]} arr - The array to remove duplicates from.
 * @return {T[]} - The array without duplicates.
 */
export const removeDuplicates = <T = string | number>(arr: T[]) => {
  const s = new Set(arr);
  const it = s.values();

  return Array.from(it);
};

export const isTel = (str: string | null | undefined): boolean => {
  // type tel
  const kakkoPtrn = new RegExp("\\([\\d*#]+\\)", "g"); // numbers in brackets (e.g. (0123))
  const hihunPtrn = new RegExp("([\\d\\*#]+\\-)*[\\d\\*#]+"); // numbers with hyphens (e.g. 0123-456-789)

  let tel = str;

  // If the input is null, not empty string
  if (str) {
    // remove phone numbers in brackets
    const result = str.match(kakkoPtrn);
    if (result && result.length == 1) {
      tel = str.replace(result[0], "");
    }

    // Is the string without parentheses in the form of half-width digits + hyphen phone number?
    return isFullStringMatchPattern(tel, hihunPtrn);

    // if the input is null or an empty string
  } else {
    return false;
  }
};

export const downloadFile = (url: string, filename: string) => {
  const objXML = new XMLHttpRequest();
  objXML.open("GET", url, true);
  objXML.responseType = "blob";
  objXML.onload = function () {
    const objBlob = objXML.response;
    if ((window as TAnyType).navigator.msSaveBlob) {
      (window as TAnyType).navigator.msSaveBlob(objBlob, filename);
    } else {
      const objURL = window.URL.createObjectURL(objBlob);
      const objLink = document.createElement("a");
      document.body.appendChild(objLink);
      objLink.href = objURL;
      objLink.download = filename;
      objLink.click();
    }
  };
  objXML.send();
};

export const convertFileToBase64 = (file: File, callback: (base64: string | null) => void) => {
  const reader = new FileReader();
  reader.onload = () => {
    const _bs64 = reader.result;
    callback(_bs64 as string);
  };
  reader.onerror = () => {
    callback(null);
  };
  reader.readAsDataURL(file);
};

export const scrollToTop = (): void => {
  window.scrollTo(0, 0);
};

/**
 * Block handle encrypt/decrypt
 */

export const getEncryptedCode = (data: string) => {
  const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(ENV_CONFIG.KEY_ENCRYP), {
    iv: CryptoJS.enc.Utf8.parse(ENV_CONFIG.IV_ENCRYP),
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  });
  return cipher.toString();
};

export const getDecryptedData = (encryptedData: string) => {
  const cipher = CryptoJS.AES.decrypt(encryptedData, CryptoJS.enc.Utf8.parse(ENV_CONFIG.KEY_ENCRYP), {
    iv: CryptoJS.enc.Utf8.parse(ENV_CONFIG.IV_ENCRYP),
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  });
  return cipher.toString(CryptoJS.enc.Utf8);
};

/**
 * # Formats a number for display.
 *
 * @param {number} inputNum - The number to format.
 * @param {number} precision - The number of decimal places to include (default: 0).
 * @param {string} sign - The sign to use for negative numbers (default: '-').
 * @return {string} The formatted number as a string.
 */
export const formatToDisplayNumber = (inputNum: number, precision = 0, sign = "-"): string => {
  const array = String(inputNum).split(".");
  let upper: string = array[0];
  let lower = "";
  const point = ".";
  if (Number.isNaN(inputNum)) {
    return "";
  }
  if (array.length == 2) {
    lower = array[1];
  }

  upper = upper.replace("-", sign); // Replace sign if negative number
  upper = upper.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // comma edit

  if (precision > 0 || array.length == 2) {
    if (lower.length > precision) {
      lower = precision > 0 ? point + lower.substring(0, precision) : ""; // Truncate after decimal point
    } else {
      for (let i = lower.length; i < precision; i++) {
        lower += "0"; // Increase the number of digits after the decimal point to the specified number of digits
      }
      lower = point + lower;
    }
  }
  return upper + lower;
};

/**
 * Clear empty properties from an object.
 *
 * @param {object} obj - The object to clear empty properties from.
 * @return {object} The object with empty properties removed.
 */
export const clearEmptyProperties = (obj: { [key: string]: TAnyType }) => {
  const clearedObj: { [key: string]: TAnyType } = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];

      if (value !== null && value !== undefined && value !== "") {
        clearedObj[key] = value;
      }
    }
  }

  return clearedObj;
};
