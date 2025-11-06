// published

import { useEffect } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import usePersistStore from "@/stores/persist/store"
import AppLayout from "./layout/AppLayout"
import Home from "./pages/Home"

function App() {
  const initializeTheme = usePersistStore((s) => s.initializeTheme)

  useEffect(() => initializeTheme(), [])

  return (
    <Router>
      <Routes>
        {/* ANCHOR LOGIN / REGISTER ------------------------------------------ */}

        {/* ANCHOR ROUTES PUBBLICHE ------------------------------------------ */}
        <Route element={<AppLayout />}>
          <Route element={<Home />} index />
        </Route>

        {/* ANCHOR ROUTES PRIVATE ------------------------------------------ */}
      </Routes>
    </Router>
  )
}

export default App
