"use client"

import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"
import { slideInLeft } from "@/animations/animations"
import { cn } from "@/lib/utils"
// import useStore from "@/stores/store"
import MotionWrapper from "../MotionWrapper"

function Checkbox({ className, ...props }) {
  // const key = useStore((s) => s.key)

  return (
    <MotionWrapper animation={slideInLeft}>
      <CheckboxPrimitive.Root
        className={cn(
          "peer focus-state aria-invalid:ring-error-destructive aria-invalid:border-error shrink-0 transition-all outline-[3px] outline-base-300 disabled:cursor-not-allowed disabled:opacity-50",
          "border border-on-base-alt/80 data-[state=checked]:bg-muted data-[state=checked]:text-on-muted data-[state=checked]:border-muted data-[state=checked]:outline-muted-alt size-4 rounded-sm",
          className
        )}
        data-slot='checkbox'
        {...props}>
        <CheckboxPrimitive.Indicator
          className='perfect-center text-current transition-none'
          data-slot='checkbox-indicator'>
          <CheckIcon className='size-3' strokeWidth={3} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </MotionWrapper>
  )
}

export { Checkbox }
