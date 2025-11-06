import { create } from "zustand"
import { persist } from "zustand/middleware"

import createThemeSlice from "./slices/themeSlice"

const usePersistStore = create(
  persist(
    (set, get) => ({
      ...createThemeSlice(set, get),
    }),
    {
      name: "persistStore",
      partialize: (state) => ({
        theme: {
          ...state.theme,
          active: state.activeTheme,
        },
      }),
    }
  )
)

export default usePersistStore
