import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

// import * as React from "react"

import { slideInLeft } from "@/animations/animations"
import { cn } from "@/lib/utils"
// import useStore from "@/stores/store"
import MotionWrapper from "../MotionWrapper"

function RadioGroup({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      data-slot='radio-group'
      {...props}
    />
  )
}

function RadioGroupItem({ className, ...props }) {
  // const key = useStore((s) => s.key)

  return (
    <MotionWrapper animation={slideInLeft}>
      <RadioGroupPrimitive.Item
        className={cn(
          "aria-invalid:ring-error-destructive aria-invalid:border-error aspect-square shrink-0 rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-50",
          // NOTE - item
          "font-body-base text-on-base bg-white border border-on-base-alt/40 ring-4 ring-base-300/40 size-4 data-[state=checked]:bg-muted data-[state=checked]:border-transparent focus-state",
          className
        )}
        data-slot='radio-group-item'
        {...props}>
        <RadioGroupPrimitive.Indicator
          className='relative perfect-center'
          data-slot='radio-group-indicator'>
          <Circle className='fill-white text-white' size={8} />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    </MotionWrapper>
  )
}

export { RadioGroup, RadioGroupItem }
