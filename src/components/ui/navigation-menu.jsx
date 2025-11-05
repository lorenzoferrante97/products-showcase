import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
// import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

// - NAV MENU ROOT ------------------------------------------------------------
function NavigationMenu({ className, children, viewport = false, ...props }) {
  return (
    <NavigationMenuPrimitive.Root
      className={cn("group/navigation-menu flex-1 relative perfect-center *:w-full", className)}
      data-slot='navigation-menu'
      data-viewport={viewport}
      {...props}>
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

// - NAV MENU LIST ------------------------------------------------------------
function NavigationMenuList({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.List
      className={cn(
        "group flex-1 max-lg:flex-col list-none perfect-center gap-1 w-full",
        className
      )}
      data-slot='navigation-menu-list'
      {...props}
    />
  )
}

// - NAV MENU ITEM ------------------------------------------------------------
function NavigationMenuItem({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Item
      className={cn("relative max-lg:w-full", className)}
      data-slot='navigation-menu-item'
      {...props}
    />
  )
}

// - NAV MENU TRIGGER ------------------------------------------------------------
function NavigationMenuTrigger({ className, children, ...props }) {
  return (
    <NavigationMenuPrimitive.Trigger
      className={cn(
        "data-[state=open]:bg-muted-alt/40 data-[state=open]:text-on-muted-alt transition-colors",
        "group",
        // NOTE - trigger
        "rounded-full px-3 py-1 text-on-base font-body-base perfect-center gap-1 max-lg:min-h-11 h-fit w-fit disabled:pointer-events-none disabled:opacity-50 outline-none focus-state",
        className
      )}
      data-slot='navigation-menu-trigger'
      {...props}>
      {children}
      <ChevronDown
        aria-hidden='true'
        className='size-4 shrink-0 relative transition duration-300 group-data-[state=open]:rotate-180'
        strokeWidth={2}
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

// - NAV MENU CONTENT ------------------------------------------------------------
function NavigationMenuContent({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Content
      className={cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-20 data-[motion=from-start]:slide-in-from-left-20 data-[motion=to-end]:slide-out-to-right-20 data-[motion=to-start]:slide-out-to-left-20 top-0 left-0 lg:absolute lg:w-fit lg:min-w-36 max-lg:w-full",
        "group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-2 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:outline-none",
        // NOTE - content
        "w-full bg-white p-2 group-data-[viewport=false]/navigation-menu:rounded-lg group-data-[viewport=false]/navigation-menu:not-dark:shadow-sm group-data-[viewport=false]/navigation-menu:not-dark:shadow-on-base/10 **:data-[slot=navigation-menu-link]:focus-state ring-4 ring-base-300/30",
        className
      )}
      data-slot='navigation-menu-content'
      {...props}
    />
  )
}

// - NAV MENU VIEWPORT ------------------------------------------------------------
function NavigationMenuViewport({ className, ...props }) {
  return (
    <div className={cn("absolute top-full left-0 isolate z-50 flex justify-center")}>
      <NavigationMenuPrimitive.Viewport
        className={cn(
          "origin-top-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden md:w-[var(--radix-navigation-menu-viewport-width)]",
          // NOTE - viewport
          "bg-base-200 mt-1 rounded-md not-dark:shadow-sm not-dark:shadow-base-content/10",
          className
        )}
        data-slot='navigation-menu-viewport'
        {...props}
      />
    </div>
  )
}

// - NAV MENU LINK ------------------------------------------------------------
function NavigationMenuLink({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Link
      className={cn(
        "[&_svg:not([class*='text-'])]:text-on-base transition-all outline-none [&_svg:not([class*='size-'])]:size-4",
        // NOTE - link
        "flex items-center gap-2 rounded-full px-3 py-1 font-body-base max-lg:min-h-11 data-[active=true]:bg-muted-alt/40 hover:bg-muted-alt/40 hover:text-on-muted-alt hover:cursor-pointer",
        className
      )}
      data-slot='navigation-menu-link'
      {...props}
    />
  )
}

// - NAV MENU INDICATOR ------------------------------------------------------------
function NavigationMenuIndicator({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Indicator
      className={cn(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1 items-end justify-center overflow-hidden",
        className
      )}
      data-slot='navigation-menu-indicator'
      {...props}>
      <div className='bg-base-300 relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md' />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
