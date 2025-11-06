const createThemeSlice = (set, get) => ({
  // NOTE - states ----------------------------
  activeTheme: null,

  // NOTE - functions ----------------------------
  setTheme: (activeTheme) => set({ activeTheme }),
  initializeTheme: () => {
    const persistStore = localStorage.getItem("persistStore")
    const parsedStore = persistStore ? JSON.parse(persistStore) : null
    const initialTheme = parsedStore?.state?.theme?.activeTheme

    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const detectedTheme = initialTheme || (systemPrefersDark ? "dark" : "light")

    set({ activeTheme: detectedTheme })
    document.documentElement.classList.toggle("dark", detectedTheme === "dark")
  },
})

export default createThemeSlice
