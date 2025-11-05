import { OTPInput, OTPInputContext } from "input-otp"
import { Minus } from "lucide-react"
import { useContext } from "react"
import { popIn } from "@/animations/animations"
import { cn } from "@/lib/utils"
// import useStore from "@/stores/store"
import MotionWrapper from "../MotionWrapper"

// - INPUT OTP ROOT ------------------------------------------------------
function InputOTP({ className, containerClassName, ...props }) {
  // const key = useStore((s) => s.key)

  return (
    <MotionWrapper animation={popIn}>
      <OTPInput
        className={cn("disabled:cursor-not-allowed", className)}
        containerClassName={cn(
          "flex items-center gap-2 has-disabled:opacity-50",
          containerClassName
        )}
        data-slot='input-otp'
        {...props}
      />
    </MotionWrapper>
  )
}

// - INPUT OTP GROUP ------------------------------------------------------
function InputOTPGroup({ className, ...props }) {
  return (
    <div
      // NOTE - group
      className={cn("p-2 rounded-lg bg-base-200 perfect-center gap-1", className)}
      data-slot='input-otp-group'
      {...props}
    />
  )
}

// - INPUT OTP SLOT ------------------------------------------------------
function InputOTPSlot({ index, className, ...props }) {
  const inputOTPContext = useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      className={cn(
        "data-[active=true]:aria-invalid:ring-error-destructive aria-invalid:border-error-destructive data-[active=true]:aria-invalid:border-error relative perfect-center transition-all outline-none data-[active=true]:z-10",
        // NOTE - slot
        "data-[active=true]:border-2 data-[active=true]:border-on-base data-[active=true]:not-dark:shadow-md data-[active=true]:not-dark:shadow-on-base/10 bg-white dark:bg-base-300 border border-base-300 min-w-11 aspect-square font-body-l rounded-md text-on-base-alt",
        className
      )}
      data-active={isActive}
      data-slot='input-otp-slot'
      {...props}>
      {char}
      {hasFakeCaret && (
        <div className='pointer-events-none absolute inset-0 perfect-center'>
          <div
            className={cn(
              "animate-caret-blink duration-1000",
              // NOTE - fake caret
              "bg-base-300 rounded-full h-4 w-[2px]"
            )}
          />
        </div>
      )}
    </div>
  )
}

// - INPUT OTP SEPARATOR ------------------------------------------------------
function InputOTPSeparator({ ...props }) {
  return (
    // biome-ignore lint/a11y/useFocusableInteractive: separator
    // biome-ignore lint/a11y/useSemanticElements: custom separator
    // biome-ignore lint/a11y/useAriaPropsForRole: custom separator
    <div data-slot='input-otp-separator' role='separator' {...props}>
      <Minus className='text-on-base-alt size-4 shrink-0' strokeWidth={2} />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
