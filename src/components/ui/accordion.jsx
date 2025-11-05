"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { slideInUp } from "@/animations/animations"
// import useStore from "@/stores/store"
import MotionWrapper from "@/components/MotionWrapper"
import { cn } from "@/lib/utils"

// - component --------------

// - ACCORDION ROOT --------------------------------------------------------------------
function Accordion({ className, ...props }) {
  // const key = useStore((s) => s.key)

  return (
    <MotionWrapper animation={slideInUp}>
      <AccordionPrimitive.Root
        className={cn(
          "w-full bg-base-200 rounded-lg md:rounded-xl p-2 md:p-4 flex flex-col gap-1",
          className
        )}
        data-slot='accordion'
        {...props}
      />
    </MotionWrapper>
  )
}

// - ACCORDION ITEM --------------------------------------------------------------------
function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      className={cn(
        "data-[state=closed]:not-last:border-b data-[state=closed]:not-last:border-base-300 data-[state=open]:bg-white dark:data-[state=open]:bg-black data-[state=open]:rounded-md md:data-[state=open]:rounded-lg transition-colors p-1",
        className
      )}
      data-slot='accordion-item'
      {...props}
    />
  )
}

// - ACCORDION TRIGGER --------------------------------------------------------------------
function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        className={cn(
          `flex flex-1 items-center justify-between gap-4 text-left transition-all outline-none disabled:pointer-events-none disabled:opacity-50`,
          "[&[data-state=open]>svg]:rotate-180",
          // NOTE - trigger style
          "text-on-base font-body-m max-lg:min-h-11 px-2 py-1 lg:py-3 focus-state hover:underline hover:translate-x-2 border-b border-transparent data-[state=open]:border-base-300",
          className
        )}
        data-slot='accordion-trigger'
        {...props}>
        {children}

        <ChevronDown className='size-4 shrink-0' strokeWidth={2} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

// - ACCORDION CONTENT --------------------------------------------------------------------
function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden",
        // NOTE - content style
        "text-on-base-alt font-body-base px-2 py-4 pb-0"
      )}
      data-slot='accordion-content'
      {...props}>
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
