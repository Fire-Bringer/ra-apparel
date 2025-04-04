import { Loader2 } from "lucide-react"

export default function CheckoutLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <Loader2 className="h-12 w-12 animate-spin text-gray-400" />
        <p className="mt-4 text-gray-500">Loading checkout...</p>
      </div>
    </div>
  )
}

