"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const ToastContext = React.createContext<{
  toast: (props: ToastProps) => void
}>({
  toast: () => {},
})

export function useToast() {
  return React.useContext(ToastContext)
}

export interface ToastProps {
  title?: string
  description?: string
  duration?: number
  action?: React.ReactNode
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<(ToastProps & { id: string })[]>([])

  const toast = React.useCallback((props: ToastProps) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { ...props, id }])

    if (props.duration !== 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
      }, props.duration || 3000)
    }
  }, [])

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-0 right-0 z-50 p-4 flex flex-col gap-2">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

interface ToastComponentProps extends ToastProps {
  onClose: () => void
}

function Toast({ title, description, action, onClose }: ToastComponentProps) {
  return (
    <div className={cn("bg-white rounded-lg shadow-lg p-4 w-72 animate-in slide-in-from-right-5")}>
      <div className="flex justify-between items-start">
        <div className="flex-1">
          {title && <div className="font-medium">{title}</div>}
          {description && <div className="text-sm text-gray-500 mt-1">{description}</div>}
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
          <X className="h-4 w-4" />
        </button>
      </div>
      {action && <div className="mt-2">{action}</div>}
    </div>
  )
}

