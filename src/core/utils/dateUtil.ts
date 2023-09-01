import { DEFAULT_EMPTY } from "@/core/constants/app";
import dayjs, { ConfigType } from "dayjs";
import "dayjs/locale/ja";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.locale("ja");
dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

export const ValidFormatDate = ["YYYYMMDDHHmmss", "YYYYMMDDHHmm", "YYYYMMDD", "YYYY/MM/DD", "YYYY/MM", "YYYYMM"];

/**
 * ## Formats a date to a string.
 * @param value The date needs formatting.
 * Default format: YYYY.MM.DD hh:mm
 */
export const formatDate = (date?: ConfigType, format = "YYYY.MM.DD hh:mm"): string => {
  const mDate = dayjs(date ?? "", ValidFormatDate, true);
  if (mDate.isValid()) {
    return mDate.tz("Asia/Tokyo").format(format);
  }

  return DEFAULT_EMPTY;
};
