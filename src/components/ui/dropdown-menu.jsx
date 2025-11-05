import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { cn } from "@/lib/utils"

// - component --------------

// - DROPDOWN ROOT --------------------------------------------------------------------
function DropdownMenu({ ...props }) {
  return <DropdownMenuPrimitive.Root data-slot='dropdown-menu' {...props} />
}

// - DROPDOWN PORTAL --------------------------------------------------------------------
function DropdownMenuPortal({ ...props }) {
  return <DropdownMenuPrimitive.Portal data-slot='dropdown-menu-portal' {...props} />
}

// - DROPDOWN TRIGGER --------------------------------------------------------------------
function DropdownMenuTrigger({ ...props }) {
  return (
    <DropdownMenuPrimitive.Trigger
      className='focus-state w-fit'
      data-slot='dropdown-menu-trigger'
      {...props}
    />
  )
}

// - DROPDOWN CONTENT --------------------------------------------------------------------
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        className={cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto",
          // NOTE - menu content
          "min-w-52 p-2 bg-white text-on-base rounded-lg not-dark:shadow-md not-dark:shadow-on-base/10 ring-4 ring-base-300/30",
          className
        )}
        data-slot='dropdown-menu-content'
        sideOffset={sideOffset}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

// - DROPDOWN MENU GROUP --------------------------------------------------------------------
function DropdownMenuGroup({ ...props }) {
  return (
    <DropdownMenuPrimitive.Group
      // NOTE - menu group
      className='not-last:mb-1 *:last:bg-base-200 *:last:p-2 *:last:rounded-md'
      data-slot='dropdown-menu-group'
      {...props}
    />
  )
}

// - DROPDOWN MENU ITEM --------------------------------------------------------------------
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        "data-[variant=destructive]:text-error-destructive data-[variant=destructive]:focus:bg-error-destructve data-[variant=destructive]:focus:text-on-error-destructive data-[variant=destructive]:*:[svg]:!text-destructive relative hover:cursor-pointer outline-0 select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        // NOTE - menu item
        "w-full max-lg:min-h-11 flex items-center gap-2 px-2 py-1 transition-colors rounded-sm font-body-base data-[inset]:pl-8 focus-visible:bg-muted-alt/40 focus-visible:text-on-muted-alt",
        className
      )}
      data-inset={inset}
      data-slot='dropdown-menu-item'
      data-variant={variant}
      {...props}
    />
  )
}

// - DROPDOWN LABEL --------------------------------------------------------------------
function DropdownMenuLabel({ className, inset, ...props }) {
  return (
    <DropdownMenuPrimitive.Label
      // NOTE - menu label
      className={cn("p-2 data-[inset]:pl-8", "font-body-s text-on-base-alt", className)}
      data-inset={inset}
      data-slot='dropdown-menu-label'
      {...props}
    />
  )
}

// - DROPDOWN SEPARATOR --------------------------------------------------------------------
function DropdownMenuSeparator({ className, ...props }) {
  return (
    <DropdownMenuPrimitive.Separator
      // NOTE - menu separator
      className={cn("bg-base-300 h-px", className)}
      data-slot='dropdown-menu-separator'
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
}
