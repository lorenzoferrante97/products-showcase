import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
// import { scaleIn } from "@/animations/animations"
import { cn } from "@/lib/utils"

// import useStore from "@/stores/store"

// - DIALOG ROOT --------------------------------------------------------------------------
function Dialog({ ...props }) {
  return <DialogPrimitive.Root data-slot='dialog' {...props} />
}

// - DIALOG TRIGGER --------------------------------------------------------------------------
function DialogTrigger({ ...props }) {
  return <DialogPrimitive.Trigger data-slot='dialog-trigger' {...props} />
}

// - DIALOG PORTAL --------------------------------------------------------------------------
function DialogPortal({ ...props }) {
  return <DialogPrimitive.Portal data-slot='dialog-portal' {...props} />
}

// - DIALOG CLOSE --------------------------------------------------------------------------
function DialogClose({ ...props }) {
  return <DialogPrimitive.Close data-slot='dialog-close' {...props} />
}

// - DIALOG OVERLAY --------------------------------------------------------------------------
function DialogOverlay({ className, ...props }) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50",
        // NOTE - overlay
        "bg-on-base/80 dark:bg-base-300/80 backdrop-blur-sm",
        className
      )}
      data-slot='dialog-overlay'
      {...props}
    />
  )
}

// - DIALOG CONTENT --------------------------------------------------------------------------
function DialogContent({ className, children, showCloseButton = true, ...props }) {
  return (
    <DialogPortal data-slot='dialog-portal'>
      <DialogOverlay />

      <DialogPrimitive.Content
        className={cn(
          "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 duration-200",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          // NOTE - content
          "bg-base-100 rounded-md md:rounded-lg p-4 not-dark:shadow-lg sm:max-w-[80%] md:max-w-[68%] lg:max-w-[50%]",
          className
        )}
        data-slot='dialog-content'
        {...props}>
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            className={cn(
              "absolute top-2 right-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 perfect-center",
              // NOTE - close icon
              "max-lg:min-h-11 aspect-square text-on-base-alt focus-state rounded-full hover:bg-base-300 p-2 hover:text-on-base transition-colors hover:cursor-pointer"
            )}
            data-slot='dialog-close'>
            <X className='size-4 shrink-0' strokeWidth={2} />
            <span className='sr-only'>Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

// - DIALOG HEADER --------------------------------------------------------------------------
function DialogHeader({ className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-1", className)} data-slot='dialog-header' {...props} />
  )
}

// - DIALOG FOOTER --------------------------------------------------------------------------
function DialogFooter({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-row-reverse gap-1", className)}
      data-slot='dialog-footer'
      {...props}
    />
  )
}

// - DIALOG TITLE --------------------------------------------------------------------------
function DialogTitle({ className, ...props }) {
  return (
    <DialogPrimitive.Title
      className={cn("font-body-base-bold text-on-base", className)}
      data-slot='dialog-title'
      {...props}
    />
  )
}

// - DIALOG DESCRIPTION --------------------------------------------------------------------------
function DialogDescription({ className, ...props }) {
  return (
    <DialogPrimitive.Description
      className={cn("font-body-s text-on-base-alt", className)}
      data-slot='dialog-description'
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
