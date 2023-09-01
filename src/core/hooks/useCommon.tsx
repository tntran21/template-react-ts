import { useLocation, useNavigate, createSearchParams, useParams, generatePath } from "react-router-dom";
import { useMemo } from "react";
import { TAnyType } from "@/core/interfaces";

const useGetParams = () => {
  const params = useParams();
  return useMemo(() => params, [params]);
};

const usePath = () => {
  const { pathname } = useLocation();
  return useMemo(() => pathname, [pathname]);
};

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

/**
 * Generates a custom hook that provides a push function for navigating to a new route using React Router's useNavigate hook.
 *
 * @returns {Object} An object containing two functions: push and pushGeneratePath.
 * @param {string} pathname - The path of the new route.
 * @param {TAnyType} query - (optional) Query parameters for the new route.
 * @param {boolean} replace - (optional) Whether to replace the current route in the history stack.
 * @param {string} payload - (optional) Additional payload for generating the path.
 * @returns {void}
 */
const useRouterPush = () => {
  const navigate = useNavigate();

  const push = (pathname: string, query?: TAnyType, replace?: boolean) => {
    const path = {
      pathname,
      ...(query && { search: createSearchParams(query).toString() }),
    };
    return navigate(path, { replace });
  };

  const pushGeneratePath = (pathname: string, payload: TAnyType) => {
    navigate(generatePath(pathname, payload));
  };
  return { push, pushGeneratePath };
};

const useCommon = () => {
  const { push, pushGeneratePath } = useRouterPush();
  const query = useQuery();
  const path = usePath();
  const params = useGetParams();
  return { push, pushGeneratePath, query, path, params };
};

export { useCommon };
