import {createJSONStorage, persist} from "zustand/middleware";
import {create} from "zustand/react";

interface Store {
  page: string;
  setPage: (page: string) => void;
}

export const useAppStore = create<Store>()(
    persist(
        (set) => ({
          page: '',
          setPage: ((page) => set({page})),
        }),
        {
          name: "app-key",
          storage: createJSONStorage(() => localStorage),
        }
    )
)