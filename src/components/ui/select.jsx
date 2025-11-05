"use client"

import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
// import * as React from "react"

import { cn } from "@/lib/utils"

function Select({ ...props }) {
  return <SelectPrimitive.Root data-slot='select' {...props} />
}

function SelectGroup({ ...props }) {
  return <SelectPrimitive.Group className='not-last:mb-2' data-slot='select-group' {...props} />
}

function SelectValue({ ...props }) {
  return <SelectPrimitive.Value data-slot='select-value' {...props} />
}

function SelectTrigger({ className, size = "default", children, ...props }) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        "focus-state aria-invalid:ring-error-destructive aria-invalid:border-error flex whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        // NOTE - Trigger
        "w-fit items-center justify-between px-3 py-1 border border-base-300 data-[placeholder]:text-on-base-alt/80 bg-white hover:border-on-base transition-colors rounded-md max-lg:min-h-11 data-[size=default]:h-10 data-[size=sm]:h-8 font-body-base not-dark:shadow-xs not-dark:shadow-on-base/10 focus-visible:border-on-base",
        className
      )}
      data-size={size}
      data-slot='select-trigger'
      {...props}>
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className='text-on-base-alt' size={16} strokeWidth={2} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({ className, children, position = "popper", ...props }) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          // NOTE - Content
          "bg-white text-on-base min-w-32 rounded-md not-dark:shadow-sm not-dark:shadow-on-base/10 ring-4 ring-base-300/30",
          className
        )}
        data-slot='select-content'
        position={position}
        {...props}>
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}>
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({ className, ...props }) {
  return (
    <SelectPrimitive.Label
      className={cn(
        "px-2 py-1",
        // NOTE - Label
        "font-body-s text-on-base-alt rounded-sm",
        className
      )}
      data-slot='select-label'
      {...props}
    />
  )
}

function SelectItem({ className, children, ...props }) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "relative flex w-full cursor-default hover:cursor-pointer items-center justify-between outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        // NOTE - Item
        "focus:bg-muted-alt/40 focus:text-on-muted-alt gap-2 rounded-sm px-2 py-1 font-body-base max-lg:min-h-11 transition-colors",
        className
      )}
      data-slot='select-item'
      {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <span className=''>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className='size-4' strokeWidth={2} />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({ className, ...props }) {
  return (
    <SelectPrimitive.Separator
      className={cn("pointer-events-none -mx-1 my-1 h-px bg-base-300", className)}
      data-slot='select-separator'
      {...props}
    />
  )
}

function SelectScrollUpButton({ className, ...props }) {
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn("perfect-center cursor-default py-1", className)}
      data-slot='select-scroll-up-button'
      {...props}>
      <ChevronUpIcon size={16} />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({ className, ...props }) {
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn("perfect-center cursor-default py-1", className)}
      data-slot='select-scroll-down-button'
      {...props}>
      <ChevronDownIcon size={16} />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
