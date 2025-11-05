"use client"

import * as LabelPrimitive from "@radix-ui/react-label"
import { slideInLeft } from "@/animations/animations"
import { cn } from "@/lib/utils"
// import useStore from "@/stores/store"
import MotionWrapper from "../MotionWrapper"

function Label({ className, direction = "horizontal", ...props }) {
  // const key = useStore((s) => s.key)

  return (
    <MotionWrapper animation={slideInLeft}>
      <LabelPrimitive.Root
        className={cn(
          "w-fit select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 max-lg:min-h-11",
          "font-body-base text-on-base",
          direction === "horizontal" ? "flex items-center gap-2" : "flex flex-col gap-3",
          className
        )}
        data-slot='label'
        {...props}
      />
    </MotionWrapper>
  )
}

export { Label }
