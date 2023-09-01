import { Suspense } from "react";

import { TAnyType } from "@/core/interfaces";

const LoadingScreen = () => {
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

const SuspenseLoading = (Component: TAnyType) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...Component.props} />
    </Suspense>
  );
};

export default SuspenseLoading;
