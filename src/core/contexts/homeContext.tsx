import { ReactNode, createContext, useContext, useReducer } from "react";
import { IHomeContextState, homeReducer } from "@/core/reducers/homeReducer";

interface HomeProviderProps {
  children: ReactNode;
}

const defaultHomeContextState: IHomeContextState = {
  title: "Home",
  isPrimary: false,
};

export const HomeContext = createContext<IHomeContextState>(defaultHomeContextState);

export const useHomeContext = () => useContext(HomeContext);

const HomeProvider = ({ children }: HomeProviderProps) => {
  const [homeContextState, dispatchHomeAction] = useReducer(homeReducer, defaultHomeContextState);

  const onChangeTitle = (title: string) => {
    dispatchHomeAction({ type: "CHANGE_TITLE", payload: { ...homeContextState, title } });
  };

  const onTogglePrimary = () => {
    dispatchHomeAction({
      type: "TOGGLE_PRIMARY",
      payload: { ...homeContextState, isPrimary: !homeContextState.isPrimary },
    });
  };

  const homeDynamic = { ...homeContextState, onChangeTitle, onTogglePrimary };

  return <HomeContext.Provider value={homeDynamic}>{children}</HomeContext.Provider>;
};

export default HomeProvider;
