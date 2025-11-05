import { cn } from "@/lib/utils"

// - CARD ROOT -------------------------------------------------------------------
function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "flex flex-col items-stretch",
        // NOTE - card
        "px-2 py-4 bg-white text-on-base-alt rounded-lg not-dark:shadow-sm not-dark:shadow-on-base/5 gap-2",
        className
      )}
      data-slot='card'
      {...props}
    />
  )
}

// - CARD HEADER -------------------------------------------------------------------
function CardHeader({ className, ...props }) {
  return (
    <div
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start has-data-[slot=card-action]:grid-cols-[1fr_auto]",
        "gap-0",
        className
      )}
      data-slot='card-header'
      {...props}
    />
  )
}

// - CARD TITLE -------------------------------------------------------------------
function CardTitle({ className, ...props }) {
  return (
    <div
      className={cn("font-body-m-bold text-on-base", className)}
      data-slot='card-title'
      {...props}
    />
  )
}

// - CARD DESCRIPTION -------------------------------------------------------------------
function CardDescription({ className, ...props }) {
  return <div className={cn("font-body-s", className)} data-slot='card-description' {...props} />
}

// - CARD ACTION -------------------------------------------------------------------
function CardAction({ className, ...props }) {
  return (
    <div
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      data-slot='card-action'
      {...props}
    />
  )
}

// - CARD CONTENT -------------------------------------------------------------------
function CardContent({ className, ...props }) {
  return <div className={cn("", className)} data-slot='card-content' {...props} />
}

// - CARD FOOTER -------------------------------------------------------------------
function CardFooter({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-row-reverse items-center p-2", className)}
      data-slot='card-footer'
      {...props}
    />
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent }
