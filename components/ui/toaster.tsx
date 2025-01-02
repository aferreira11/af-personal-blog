'use client'

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { BorderTrail } from "@/components/ui/border-trail"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="relative overflow-hidden border-none">
            <div className="absolute inset-0">
            <BorderTrail 
                className="bg-gradient-to-r from-blue-500/50 to-blue-700/50 blur-[2px] opacity-100 transition-opacity"
                size={30}
              />
            </div>
            <div className="relative z-20 grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="z-20 absolute top-2 right-2" />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
} 