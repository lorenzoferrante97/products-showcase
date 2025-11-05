import * as SwitchPrimitive from "@radix-ui/react-switch"

// import * as React from "react"

import { popIn } from "@/animations/animations"
import { cn } from "@/lib/utils"
// import useStore from "@/stores/store"
import MotionWrapper from "../MotionWrapper"

function Switch({ className, ...props }) {
  // const key = useStore((s) => s.key)

  return (
    <MotionWrapper animation={popIn}>
      <SwitchPrimitive.Root
        className={cn(
          "peer focus-state inline-flex shrink-0 items-center transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50",
          // NOTE - root
          "h-7 w-12 lg:h-6 lg:w-10 data-[state=checked]:bg-muted data-[state=unchecked]:bg-base-300 data-[state=unchecked]:border-on-base/10 border data-[state=checked]:border-base-300 rounded-full",
          className
        )}
        data-slot='switch'
        {...props}>
        <SwitchPrimitive.Thumb
          className={cn(
            "pointer-events-none block transition-transform data-[state=checked]:translate-x-[calc(100%+2px)] data-[state=unchecked]:translate-x-[4px]",
            // NOTE - Thumb
            "bg-white size-5 lg:size-4 rounded-full data-[state=unchecked]:not-dark:shadow-xs data-[state=unchecked]:not-dark:shadow-on-base/20"
          )}
          data-slot='switch-thumb'
        />
      </SwitchPrimitive.Root>
    </MotionWrapper>
  )
}

export { Switch }
