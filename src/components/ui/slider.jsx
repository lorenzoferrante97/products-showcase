import * as SliderPrimitive from "@radix-ui/react-slider"
// import * as React from "react"
import { createContext, useMemo, useState } from "react"

import { cn } from "@/lib/utils"

// - slider context ----------------------------------------------------------------
const SliderContext = createContext()

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  onValueChange,
  children,
  ...props
}) {
  const isControlled = value !== undefined
  const [_value, setValue] = useState(defaultValue)
  const actualValue = isControlled ? value : _value

  const handleChange = (val) => {
    if (!isControlled) setValue(val)
    if (onValueChange) onValueChange(val)
  }

  const _values = useMemo(
    () => (Array.isArray(actualValue) ? actualValue : [min, max]),
    [actualValue, min, max]
  )

  const context = useMemo(
    () => ({
      value: actualValue,
      setValue: handleChange, // da usare come onValueChange nelle primitive
      min,
      max,
    }),
    [actualValue, min, max]
  )

  return (
    <SliderContext.Provider value={context}>
      <div className='w-full flex items-center gap-2'>
        {/* ANCHOR - MIN MAX LABEL ------------------------------------------------------------ */}

        {/* ANCHOR - MIN LABEL ------------------------------------------------- */}
        <span className='font-body-s text-on-base-alt select-none'>{min}</span>

        <SliderPrimitive.Root
          className={cn(
            "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
            // NOTE - Root
            "h-fit",
            className
          )}
          data-slot='slider'
          defaultValue={defaultValue}
          max={max}
          min={min}
          onValueChange={handleChange}
          type='popup'
          value={actualValue}
          {...props}>
          <SliderPrimitive.Track
            className={cn(
              "relative grow overflow-hidden data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
              // NOTE - track
              "data-[orientation=horizontal]:h-2 bg-base-300 rounded-full data-[orientation=horizontal]:w-full"
            )}
            data-slot='slider-track'>
            <SliderPrimitive.Range
              className={cn(
                "absolute data-[orientation=vertical]:w-full",
                // NOTE - Range
                "bg-muted data-[orientation=horizontal]:h-full"
              )}
              data-slot='slider-range'
            />
          </SliderPrimitive.Track>
          {Array.from({ length: _values.length }, (_, index) => (
            <SliderPrimitive.Thumb
              className={cn(
                "block shrink-0 transition-colors focus-state focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50",
                // NOTE - Thumb
                "bg-white outline-[3px] outline-muted size-4 rounded-full hover:scale-110"
              )}
              data-slot='slider-thumb'
              // biome-ignore lint/suspicious/noArrayIndexKey: no id
              key={index}>
              {/* NOTE - Thumb label */}
              <span className='absolute -top-8 left-1/2 -translate-x-1/2 bg-muted text-on-muted rounded-md px-2 py-1 font-body-s pointer-events-none select-none'>
                {_values[index]}
              </span>
            </SliderPrimitive.Thumb>
          ))}
        </SliderPrimitive.Root>

        {/* ANCHOR - MAX LABEL ------------------------------------------------- */}
        <span className='font-body-s text-on-base-alt select-none'>{max}</span>
      </div>
    </SliderContext.Provider>
  )
}

export { Slider }
