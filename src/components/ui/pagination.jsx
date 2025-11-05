"use client"

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { Link } from "react-router-dom"
import { slideInUp } from "@/animations/animations"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import MotionWrapper from "../MotionWrapper"

function Pagination({ className, ...props }) {
  return (
    <MotionWrapper animation={slideInUp}>
      <nav
        aria-label='pagination'
        className={cn("w-full perfect-center", className)}
        data-slot='pagination'
        {...props}
      />
    </MotionWrapper>
  )
}

function PaginationContent({ className, ...props }) {
  return (
    <ul
      className={cn("w-fit perfect-center gap-1", className)}
      data-slot='pagination-content'
      {...props}
    />
  )
}

function PaginationItem({ ...props }) {
  return <li className='perfect-center' data-slot='pagination-item' {...props} />
}

function PaginationLink({
  className,
  isActive,
  size = "icon",
  variant = "ghost",
  as = "link",
  ...props
}) {
  if (as === "button") {
    return (
      <Button
        aria-current={isActive ? "page" : undefined}
        className={className}
        data-active={isActive}
        data-slot='pagination-link'
        {...props}
        size={size === "icon" ? "icon-sm" : "default"}
        variant={variant}
      />
    )
  }

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={cn(
        `w-fit font-body-base text-on-base-alt hover:bg-muted-alt/40 perfect-center max-lg:min-w-11 min-w-5 gap-1 ${
          size === "icon" ? "aspect-square p-2 rounded-md" : ""
        }`,
        className
      )}
      data-active={isActive}
      data-slot='pagination-link'
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  as = "link",
  variant = "outline",
  hasLabel = false,
  ...props
}) {
  return (
    <PaginationLink
      aria-label='Pagina precedente'
      as={as}
      className={cn(
        as === "link"
          ? "max-lg:min-h-11 sm:px-3 sm:py-2 bg-base-300 rounded-full disabled:opacity-50 hover:bg-muted-alt hover:text-on-muted-alt transition-colors mx-2 focus-state"
          : "",
        hasLabel ? "" : "aspect-square",
        className
      )}
      size={hasLabel ? "default" : "icon"}
      variant={variant}
      {...props}>
      <ChevronLeft className='size-4 shrink-0' strokeWidth={2} />
      <span className={cn("hidden", hasLabel ? "sm:block" : "")}>Indietro</span>
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  as = "link",
  variant = "outline",
  hasLabel = false,
  ...props
}) {
  return (
    <PaginationLink
      aria-label='Pagina successiva'
      as={as}
      className={cn(
        as === "link"
          ? "max-lg:min-h-11 sm:px-3 sm:py-2 bg-base-300 rounded-full disabled:opacity-50 hover:bg-muted-alt hover:text-on-muted-alt transition-colors mx-2 focus-state"
          : "",
        hasLabel ? "" : "aspect-square",
        className
      )}
      size={hasLabel ? "default" : "icon"}
      variant={variant}
      {...props}>
      <span className={cn("hidden", hasLabel ? "sm:block" : "")}>Avanti</span>
      <ChevronRight className='size-4 shrink-0' strokeWidth={2} />
    </PaginationLink>
  )
}

function PaginationEllipsis({ className, ...props }) {
  return (
    <span
      aria-hidden
      className={cn(
        "perfect-center inline-flex w-fit max-lg:min-w-10 min-w-5 p-2 aspect-square",
        className
      )}
      data-slot='pagination-ellipsis'
      {...props}>
      <MoreHorizontal size={16} />
      <span className='sr-only'>Altre pagine</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
