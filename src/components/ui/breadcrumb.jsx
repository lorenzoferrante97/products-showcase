/** biome-ignore-all lint/a11y/useSemanticElements: current page */

import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

function Breadcrumb({ ...props }) {
  return <nav aria-label='breadcrumb' data-slot='breadcrumb' {...props} />
}

function BreadcrumbList({ className, ...props }) {
  return (
    <ol
      className={cn(
        "text-on-base-alt flex flex-wrap items-center gap-1 font-body-xs break-words md:gap-2",
        className
      )}
      data-slot='breadcrumb-list'
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }) {
  return (
    <li
      className={cn("inline-flex items-center gap-1", className)}
      data-slot='breadcrumb-item'
      {...props}
    />
  )
}

function BreadcrumbLink({ asChild, className, ...props }) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      className={cn(
        "underline underline-offset-2 hover:underline-offset-4 hover:text-on-base transition-colors",
        className
      )}
      data-slot='breadcrumb-link'
      {...props}
    />
  )
}

function BreadcrumbPage({ className, ...props }) {
  return (
    <a
      aria-current='page'
      aria-disabled='true'
      className={cn("text-on-base font-body-xs-bold", className)}
      data-slot='breadcrumb-page'
      role='link'
      {...props}
    />
  )
}

function BreadcrumbSeparator({ children, className, ...props }) {
  return (
    <li
      aria-hidden='true'
      className={cn("", className)}
      data-slot='breadcrumb-separator'
      role='presentation'
      {...props}>
      {children ?? <ChevronRight className='size-3 shrink-0' strokeWidth={2} />}
    </li>
  )
}

function BreadcrumbMore({ className, ...props }) {
  return (
    <span
      aria-hidden='true'
      className={cn("perfect-center", className)}
      data-slot='breadcrumb-ellipsis'
      role='presentation'
      {...props}>
      <MoreHorizontal className='size-3 shrink-0' strokeWidth={2} />
      <span className='sr-only'>Altro</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbMore,
}
