import { RootState } from "@/stores/store";
import { useDispatch, useSelector } from "react-redux";

/**
 * ## Custom hook get store from redux. (useSelector)
 *
 * @param {T} selector - The selector to get the store.
 * @return {T} The store.
 * @example
 * const { loading } = useReduxSelector("appStore");
 **/
const useReduxSelector = <T extends keyof RootState>(selector: T) => {
  const store = useSelector((state: RootState) => state[selector]);

  return store;
};

/**
 * ## Custom hook dispatch action to redux. (useDispatch)
 */
const useReduxDispatch = () => {
  const dispatch = useDispatch();

  return dispatch;
};

export { useReduxSelector, useReduxDispatch };
