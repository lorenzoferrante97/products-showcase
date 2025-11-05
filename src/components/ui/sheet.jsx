import * as SheetPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

function Sheet({ ...props }) {
  return <SheetPrimitive.Root data-slot='sheet' {...props} />
}

function SheetTrigger({ ...props }) {
  return <SheetPrimitive.Trigger data-slot='sheet-trigger' {...props} />
}

function SheetClose({ ...props }) {
  return <SheetPrimitive.Close data-slot='sheet-close' {...props} />
}

function SheetPortal({ ...props }) {
  return <SheetPrimitive.Portal data-slot='sheet-portal' {...props} />
}

function SheetOverlay({ className, ...props }) {
  return (
    <SheetPrimitive.Overlay
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50",
        // NOTE - Overlay
        "bg-on-base/80 dark:bg-base-300/80 backdrop-blur-xs",
        className
      )}
      data-slot='sheet-overlay'
      {...props}
    />
  )
}

function SheetContent({ className, children, side = "right", ...props }) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        className={cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col items-stretch transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 lg:right-4 h-full lg:h-[96%] my-auto max-w-11/12 sm:max-w-6/8 md:max-w-1/2 lg:max-w-1/3 lg:rounded-lg rounded-tl-lg rounded-bl-lg",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 lg:left-4 h-full lg:h-[96%] my-auto max-w-11/12 sm:max-w-6/8 md:max-w-1/2 lg:max-w-1/3 lg:rounded-lg rounded-tr-lg rounded-br-lg",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 lg:top-4 h-auto mx-auto w-[96%] lg:rounded-lg rounded-bl-lg rounded-br-lg",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 lg:bottom-4 h-auto mx-auto w-[96%] lg:rounded-lg rounded-tl-lg rounded-tr-lg",
          // NOTE - Content
          "bg-base-100 gap-4",
          className
        )}
        data-slot='sheet-content'
        {...props}>
        {children}
        <SheetPrimitive.Close
          className={cn(
            "focus-state absolute top-4 right-4 disabled:pointer-events-none",
            // NOTE - Close
            "bg-base-300 text-on-base-alt hover:bg-muted-alt hover:text-on-muted-alt rounded-md p-2 transition-colors"
          )}>
          <X className='size-4' strokeWidth={2} />
          <span className='sr-only'>Chiudi</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col gap-1 p-4 mt-4", className)}
      data-slot='sheet-header'
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }) {
  return (
    <div
      className={cn("mt-2 flex flex-col gap-1 p-4", className)}
      data-slot='sheet-footer'
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }) {
  return (
    <SheetPrimitive.Title
      // NOTE - Title
      className={cn("font-body-m-bold text-on-base", className)}
      data-slot='sheet-title'
      {...props}
    />
  )
}

function SheetDescription({ className, ...props }) {
  return (
    <SheetPrimitive.Description
      className={cn("font-body-s text-on-base-alt", className)}
      data-slot='sheet-description'
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
