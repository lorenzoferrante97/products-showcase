/** biome-ignore-all lint/a11y/useSemanticElements: CAROUSEL DIV */
"use client"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// import useStore from "@/stores/store"

const CarouselContext = createContext(null)

function useCarousel() {
  const context = useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

// - CAROUSEL ROOT -------------------------------------------------------------------
function Carousel({
  orientation = "horizontal",
  ar,
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback((api) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  )

  useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    }
  }, [api, onSelect])

  // const key = useStore((s) => s.key)

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        ar,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}>
      <div
        aria-roledescription='carousel'
        className={cn("relative", className)}
        data-slot='carousel'
        onKeyDownCapture={handleKeyDown}
        role='region'
        {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

// - CAROUSEL CONTENT -------------------------------------------------------------------
function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div className='overflow-hidden w-full' data-slot='carousel-content' ref={carouselRef}>
      <div
        className={cn(
          "flex min-w-0",
          orientation === "horizontal" ? "-px-4 w-full" : "-py-4 flex-col h-full",
          className
        )}
        {...props}
      />
    </div>
  )
}

// - CAROUSEL ITEM -------------------------------------------------------------------
function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel()

  return (
    <div
      aria-roledescription='slide'
      className={cn(
        "overflow-hidden shrink-0 grow-0 perfect-center",
        "basis-full sm:basis-[94%] lg:basis-[96%]", // basis-full -> 1 slide visibile --- basis-1/2 -> 2 slide visibili
        orientation === "horizontal" ? "px-1" : "py-1",
        className
      )}
      data-slot='carousel-item'
      role='group'
      {...props}
    />
  )
}

function CarouselPrevious({ className, variant = "ghost", size = "icon-sm", ...props }) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      data-slot='carousel-previous'
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      size={size}
      variant={variant}
      {...props}
      className={cn(
        "",
        orientation === "vertical" && "rotate-90",

        className
      )}>
      <ArrowLeft className='size-5 shrink-0' strokeWidth={2} />
      <span className='sr-only'>Previous slide</span>
    </Button>
  )
}

function CarouselNext({ className, variant = "ghost", size = "icon-sm", ...props }) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      data-slot='carousel-previous'
      disabled={!canScrollNext}
      onClick={scrollNext}
      size={size}
      variant={variant}
      {...props}
      className={cn("", orientation === "vertical" && "rotate-90", className)}>
      <ArrowRight className='size-5 shrink-0' strokeWidth={2} />
      <span className='sr-only'>Next slide</span>
    </Button>
  )
}

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }
