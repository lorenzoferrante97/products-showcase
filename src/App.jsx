// published

import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Routes>
        {/* ANCHOR LOGIN / REGISTER ------------------------------------------ */}

        {/* ANCHOR ROUTES PUBBLICHE ------------------------------------------ */}
        <Route element={<AppLayout />} path='/'>
          <Route element={<Home />} index />
        </Route>

        {/* ANCHOR ROUTES PRIVATE ------------------------------------------ */}
      </Routes>
    </Router>
  )
}

export default App
