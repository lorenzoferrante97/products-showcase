import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex perfect-center rounded-full max-lg:[a&]:min-h-11 max-lg:[a&]:px-4 px-2 py-1 font-body-s w-fit whitespace-nowrap shrink-0 gap-1 [&>svg]:pointer-events-none [a&]:focus-state [a&]:hover:cursor-pointer aria-invalid:ring-error-destructive transition-colors overflow-hidden border border-transparent",
  {
    variants: {
      variant: {
        default: "bg-muted-alt text-on-muted-alt [a&]:hover:border-on-muted-alt",
        primary: "bg-primary-alt text-on-primary-alt [a&]:hover:border-on-primary-alt",
        error: "bg-error text-on-error [a&]:hover:border-on-error",
        success: "bg-success text-on-success [a&]:hover:border-on-success",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "span"

  return <Comp className={cn(badgeVariants({ variant }), className)} data-slot='badge' {...props} />
}

export { Badge, badgeVariants }
