import { CheckCircle, X, XCircle } from "lucide-react"
import { toast } from "sonner"

export default function handleToast(
  type = "message",
  title = "This is a toast message",
  description = "This is the message description"
) {
  const toastOptions = {
    error: {
      className:
        "!bg-error **:!bg-error !border-transparent **:!text-on-error !ring-4 !ring-error/40",
      icon: <XCircle className='size-4' />,
    },
    success: {
      className:
        "!bg-success **:!bg-success !border-transparent **:!text-on-success !ring-4 !ring-success/40",
      icon: <CheckCircle className='size-4' />,
    },
    message: {
      className:
        "!bg-base-200 **:!bg-base-200 !border-transparent **:!text-on-base !ring-4 !ring-base-300/60",
      icon: undefined,
    },
  }

  const showToast = toast[type] || toast.message

  showToast(title, {
    description,
    cancel: {
      label: <X className='size-4' />,
    },
    ...toastOptions[type],
  })
}
