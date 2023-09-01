import { create } from "zustand";
import { persist } from "zustand/middleware";

import { UserDto } from "@/core/dto/userDto";

type TStateStore = {
  username: string | null;
};
type TStoreActions = {
  updateUserName: (name: string) => void;
};

/**
 * Initial state
 */
const initState: TStateStore = {
  username: null,
};

/**
 * User store
 */
const useUserStore = create<TStateStore & TStoreActions>((set) => ({
  ...initState,
  updateUserName: (name) => set({ username: name }),
}));

/**
 * ----------------- User store with local storage --------------------
 * This store will be persisted in local storage
 */

type TStateLocalStore = {
  createForm: UserDto;
};

type TLocalStoreActions = {
  updateFormCreate?: (form: UserDto) => void;
};

const initStateLocalStore: TStateLocalStore = {
  createForm: new UserDto(),
};

const useUserLocalStore = create(
  persist<TStateLocalStore & TLocalStoreActions>(
    (set) => ({
      ...initStateLocalStore,
      updateFormCreate: (payload: UserDto) => set({ createForm: payload }),
    }),
    {
      name: "user-storage", // unique name
      getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
  )
);

export { useUserStore, useUserLocalStore };
