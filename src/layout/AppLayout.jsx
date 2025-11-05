import { Outlet } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"

export default function AppLayout() {
  return (
    <div className='container-full'>
      {/* MAIN ---------------------------- */}
      <main data-id='main'>
        <Outlet />
      </main>

      <Toaster duration={7000} expand={false} position='top-center' visibleToasts={7} />
    </div>
  )
}
