import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import BaseLayout from "@/containers/BaseLayout";
import ErrorPage from "@/views/error-page";
import AboutPage from "@/views/about";
import HomePage from "@/views/home";
import LoginPage from "@/views/login";

import PrivateRouter from "./privateRouter";
import { TAnyType } from "@/core/interfaces";
import { ROUTER_PATH } from "./routerPath";
import NotFoundPage from "@/views/not-found";
import ProductPage from "@/views/product";

/**
 * ## Wraps the given component element with the component's page props.
 *
 * @param {TAnyType} Component - The component to be wrapped.
 * @return {ReactElement} The component element with the page props.
 */
const wrapperElement = (Component: TAnyType) => {
  return <Component {...Component.pageProps} />;
};

/**
 * ## Renders the AppRouter component.
 *
 * @return {JSX.Element} The rendered React component.
 */
function AppRouter() {
  const router = useRoutes([
    {
      path: ROUTER_PATH.ROOT,
      element: <BaseLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: ROUTER_PATH.HOME,
          element: wrapperElement(HomePage),
        },
        { path: ROUTER_PATH.ABOUT, element: <PrivateRouter>{wrapperElement(AboutPage)}</PrivateRouter> },
        { path: ROUTER_PATH.PRODUCT, element: wrapperElement(ProductPage) },
      ],
    },
    { path: ROUTER_PATH.LOGIN, element: wrapperElement(LoginPage) },
    { path: ROUTER_PATH.NOT_FOUND, element: wrapperElement(NotFoundPage) },
  ]);

  return <Suspense fallback={<div>Loading...</div>}>{router}</Suspense>;
}

export default AppRouter;
