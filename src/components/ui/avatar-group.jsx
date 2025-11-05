import { cn } from "@/lib/utils"

export default function AvatarGroup({ className, children, ...props }) {
  return (
    <div className={cn("inline-flex", className)} {...props}>
      {children}
    </div>
  )
}
