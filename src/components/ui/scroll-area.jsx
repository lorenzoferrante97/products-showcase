import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

// import * as React from "react"

import { cn } from "@/lib/utils"

function ScrollArea({ className, children, thumbClasses, direction = "vertical", ...props }) {
  return (
    <ScrollAreaPrimitive.Root
      className={cn("relative overflow-hidden", className)}
      data-slot='scroll-area'
      {...props}>
      <ScrollAreaPrimitive.Viewport
        className={cn("focus-state *:h-full size-full transition-colors outline-none")}
        data-slot='scroll-area-viewport'>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar orientation={direction} thumbClasses={thumbClasses} />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({ className, thumbClasses, orientation, ...props }) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" && "h-full w-2 border-l border-l-transparent",
        orientation === "horizontal" && "h-2 w-full flex-col border-t border-t-transparent",
        className
      )}
      data-slot='scroll-area-scrollbar'
      orientation={orientation}
      {...props}>
      <ScrollAreaPrimitive.ScrollAreaThumb
        className={cn("relative flex-1 rounded-full bg-base-300", thumbClasses)}
        data-slot='scroll-area-thumb'
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }
