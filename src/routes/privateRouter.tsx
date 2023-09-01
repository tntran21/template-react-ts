import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";

import { useUserStore } from "@/stores/client/userStore";

interface Props {
  children: ReactNode;
}

const PrivateRouter = ({ children }: Props) => {
  const { pathname } = useLocation();
  const { username } = useUserStore((state) => state);

  // Implement your own logic here
  if (!username) {
    return <Navigate to={`/login?redirectFrom=${pathname}`} replace />;
  }

  return children;
};

export default PrivateRouter;
