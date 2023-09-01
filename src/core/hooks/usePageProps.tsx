import { useOutlet } from "react-router-dom";

interface Props {
  isMask?: boolean;
  title?: string;
}

const initProps: Props = {
  isMask: false,
  title: "",
};

/**
 * ## Create a hook to get page props
 * @return {Props} The page props
 *
 */
const usePageProps = () => {
  const ol = useOutlet();
  let propsOl = ol?.props;
  while (propsOl?.children) {
    propsOl = {
      ...initProps,
      ...propsOl?.children?.props,
    };
  }
  return {
    ...propsOl,
  };
};

export default usePageProps;
