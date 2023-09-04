import { Outlet } from "react-router-dom";

import BaseHeader from "@/components/molecules/BaseHeader";
import { StyledBaseLayout, StyledMain } from "./styles";
import usePageProps from "@/core/hooks/usePageProps";
import LogsUtil from "@/core/utils/logUtil";

const HEADER_NAV = [
  { path: "/", name: "Home" },
  { path: "/product", name: "Product" },
  { path: "/about?name=af&age=10", name: "About" },
];

/**
 * ## BaseLayout
 * Use for layout of all pages
 */
const BaseLayout = () => {
  const { title } = usePageProps();
  LogsUtil.log("BaseLayout", title);

  return (
    <StyledBaseLayout className="base-layout">
      <BaseHeader headerRoutes={HEADER_NAV} />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledBaseLayout>
  );
};

export default BaseLayout;
