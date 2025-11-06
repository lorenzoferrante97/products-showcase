import { Outlet } from "react-router-dom"
import Header from "@/components/layout/Header"
import { Toaster } from "@/components/ui/sonner"

export default function AppLayout() {
  return (
    <div className='container-full min-h-screen bg-[radial-gradient(#E7E5E4_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#292524_1px,transparent_1px)] bg-fixed'>
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
