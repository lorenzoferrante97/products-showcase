import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

// - HOVER CARD ROOT -------------------------------------------------------------
function HoverCard({ ...props }) {
  return <HoverCardPrimitive.Root data-slot='hover-card' {...props} />
}

// - HOVER CARD TRIGGER -------------------------------------------------------------
function HoverCardTrigger({ ...props }) {
  return <HoverCardPrimitive.Trigger className='w-fit' data-slot='hover-card-trigger' {...props} />
}

// - HOVER CARD CONTENT -------------------------------------------------------------
function HoverCardContent({ className, align = "center", sideOffset = 4, ...props }) {
  return (
    <HoverCardPrimitive.Portal data-slot='hover-card-portal'>
      <HoverCardPrimitive.Content
        align={align}
        className={cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 origin-(--radix-hover-card-content-transform-origin) outline-0",
          // NOTE - hover card content
          "bg-base-inverse text-on-base-inverse font-body-s min-w-36 rounded-md p-2",
          className
        )}
        data-slot='hover-card-content'
        side='top'
        sideOffset={sideOffset}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
