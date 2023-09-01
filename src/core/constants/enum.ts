/**
 * ## Enumeration of sort orders.
 * @enum {string}
 * @readonly
 * @property {string} ASC - Ascending order.
 * @property {string} DESC - Descending order.
 */
enum ESortOrder {
  ASC = "asc",
  DESC = "desc",
}

/**
 * ## HTTP status codes enumeration.
 */
enum EStatusCode {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export { ESortOrder, EStatusCode };
