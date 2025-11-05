import { slideInLeft } from "@/animations/animations"
import { cn } from "@/lib/utils"
// import useStore from "@/stores/store"
import MotionWrapper from "../MotionWrapper"

function Input({ className, type, placeholder = "default placeholder...", ...props }) {
  // const key = useStore((s) => s.key)

  return (
    <MotionWrapper animation={slideInLeft}>
      <input
        className={cn(
          `transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50`,
          "aria-invalid:ring-error-destructive aria-invalid:border-error",
          // NOTE - input
          "flex w-full min-w-64 min-h-11 placeholder:font-body-s placeholder:text-on-base-alt/80 selection:bg-muted-alt selection:text-on-muted-alt bg-white ring-4 ring-base-300/40 rounded-full px-3 font-body-base text-on-base focus-state border border-transparent focus-visible:border-on-base",
          className
        )}
        data-slot='input'
        placeholder={placeholder}
        type={type}
        {...props}
      />
    </MotionWrapper>
  )
}

export { Input }
