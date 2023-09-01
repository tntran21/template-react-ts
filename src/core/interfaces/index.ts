// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
type TAnyType = any;

/**
 * ### Error for response object.
 */
interface IError {
  code: number;
  message: string;
}

/**
 * ### Interface for response object.
 * @param T - Generic type for data.
 */
interface IResponse<T> {
  data?: T;
  status: number;
  message?: string;
  error?: IError;
}

/**
 * ### Interface for error object.
 * @param type - Error type.
 * @param message - Error message.
 */
interface IMessageError {
  type: number;
  message: string;
}

/**
 * ### Interface for form error object.
 */
type TFormError<T> = {
  [key in keyof T]?: IMessageError;
};

export type { TAnyType, IResponse, IError, IMessageError, TFormError };
