"use client"

import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { swingIn } from "@/animations/animations"
// import useStore from "@/stores/store";
import MotionWrapper from "@/components/MotionWrapper"
import { cn } from "@/lib/utils"

function Avatar({ className, ...props }) {
  // const key = useStore((s) => s.key);

  return (
    <MotionWrapper animation={swingIn}>
      <AvatarPrimitive.Root
        className={cn("relative perfect-center shrink-0 overflow-hidden rounded-full", className)}
        data-slot='avatar'
        {...props}
      />
    </MotionWrapper>
  )
}

function AvatarImage({ className, ...props }) {
  return (
    <AvatarPrimitive.Image
      className={cn("img-responsive", className)}
      data-slot='avatar-image'
      {...props}
    />
  )
}

function AvatarFallback({ className, ...props }) {
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        "bg-base-300 text-on-base-alt flex size-full aspect-square perfect-center rounded-full",
        className
      )}
      data-slot='avatar-fallback'
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
