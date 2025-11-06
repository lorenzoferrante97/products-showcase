import { Outlet } from "react-router-dom"
import Header from "@/components/layout/Header"
import { Toaster } from "@/components/ui/sonner"

export default function AppLayout() {
  return (
    <div className='container-full'>
      {/* HEADER ----------------------------- */}
      <Header />

      {/* MAIN ---------------------------- */}
      <main data-id='main'>
        <Outlet />
      </main>

      <Toaster duration={7000} expand={false} position='top-center' visibleToasts={7} />
    </div>
  )
}
