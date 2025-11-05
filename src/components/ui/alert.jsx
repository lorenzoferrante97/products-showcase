import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg px-4 py-3 grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current ring-4",
  {
    variants: {
      variant: {
        default: "bg-base-300 ring-base-300/40 text-on-base",
        error: "text-on-error bg-error ring-error/40 *:data-[slot=alert-description]:text-on-error",
        success:
          "text-on-success bg-success ring-success/40 *:data-[slot=alert-description]:text-on-success",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

// - ALERT ROOT --------------------------------------------------------------------
function Alert({ className, variant, ...props }) {
  return (
    <div
      className={cn(alertVariants({ variant }), className)}
      data-slot='alert'
      role='alert'
      {...props}
    />
  )
}

// - ALERT TITLE --------------------------------------------------------------------
function AlertTitle({ className, ...props }) {
  return (
    <div
      className={cn("col-start-2 line-clamp-1 font-body-base-bold", className)}
      data-slot='alert-title'
      {...props}
    />
  )
}

// - ALERT DESCRIPTION --------------------------------------------------------------------
function AlertDescription({ className, ...props }) {
  return (
    <div
      className={cn("col-start-2 grid justify-items-start gap-1 font-body-s", className)}
      data-slot='alert-description'
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
