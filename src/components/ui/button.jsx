"use client"

import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { slideInUp } from "@/animations/animations"
import MotionWrapper from "@/components/MotionWrapper"
import { cn } from "@/lib/utils"

// import useStore from "@/stores/store"

const buttonVariants = cva(
  "w-fit max-w-72 perfect-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-state aria-invalid:ring-error-destructive aria-invalid:border-error max-lg:min-h-11 hover:scale-105 active:scale-95 hover:cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "rounded-full gradient-muted text-on-muted hover:bg-muted/80 not-dark:shadow-sm not-dark:shadow-muted/30 not-dark:hover:shadow-md not-dark:hover:shadow-muted/20 not-dark:active:shadow-sm not-dark:active:shadow-muted/40 ring-4 ring-muted/10",
        primary:
          "rounded-full gradient-primary text-on-primary hover:bg-primary/80 not-dark:shadow-sm not-dark:shadow-primary/30 not-dark:hover:shadow-md not-dark:hover:shadow-primary/20 not-dark:active:shadow-sm not-dark:active:shadow-primary/40 ring-4 ring-primary/10",
        secondary: "rounded-full bg-muted-alt text-on-muted-alt hover:bg-muted-alt/80",
        outline: "border border-muted text-on-base rounded-full",
        ghost: "text-on-base hover:underline hover:underline-offset-2",
        link: "underline underline-offset-2 text-on-base hover:underline-offset-4",
      },
      size: {
        default: "px-5 py-3 font-body-base-bold",
        sm: "py-2 px-3 max-sm:w-fit max-lg:min-h-0 font-body-s-bold",
        lg: "px-7 py-4 font-body-m-bold",
        "icon-sm": "aspect-square p-2 max-w-11",
        "icon-lg": "aspect-square p-4 max-w-20",
        link: "w-fit h-fit px-0 py-0 font-body-base-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({ className, variant, size, color, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button"

  // const key = useStore((s) => s.key)

  return (
    <MotionWrapper animation={slideInUp}>
      <Comp
        className={cn(buttonVariants({ variant, size }), "", className)}
        data-slot='button'
        {...props}
      />
    </MotionWrapper>
  )
}

export { Button, buttonVariants }
