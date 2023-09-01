import { ProductDto } from "@/core/dto/productDto";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type StateLocalStore = {
  product: ProductDto;
};

type ActionLocalStore = {
  saveFormCreate: (form: ProductDto) => void;
};

const initLocalState: StateLocalStore = {
  product: new ProductDto(),
};

const useProductLocalStore = create(
  persist<StateLocalStore & ActionLocalStore>(
    (set) => ({
      ...initLocalState,
      saveFormCreate: (form) => {
        set({ product: form });
      },
    }),
    {
      name: "product-store",
      getStorage: () => localStorage,
    }
  )
);

export { useProductLocalStore };
