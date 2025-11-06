import { cn } from "@/lib/utils"

export default function MaskImage({
  className = "",
  mask = "circle",
  src = "https://placehold.co/1024",
  alt = "alt text",
  borderSize = "p-3",
}) {
  const maskClass = `mask-custom-${mask}`

  return (
    <figure className={cn("relative", className)}>
      <div className={cn("bg-white mask", maskClass, borderSize)}>
        <img alt={alt} className={cn("img-responsive mask", maskClass)} src={src} />
      </div>
    </figure>
  )
}
