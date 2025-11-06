import ThemeDropdown from "../ui/theme-dropdown"

export default function Header() {
  return (
    <header className='w-full h-[16vh] flex items-center justify-between'>
      {/* ANCHOR LOGO -------------------------------------------- */}
      <div>
        <span className='font-heading text-2xl text-primary'>FakeShop</span>
      </div>

      {/* ANCHOR NAV CONTENT -------------------------------------------- */}

      {/* NOTE - theme dropdown */}
      <ThemeDropdown />
    </header>
  )
}
