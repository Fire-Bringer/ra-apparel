"use client"

import Image from "next/image"
import { Minus, Plus, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CartItemProps {
  id: string
  name: string
  price: number
  color: string
  image?: string
  quantity: number
  onRemove: (id: string) => void
  onUpdateQuantity: (id: string, quantity: number) => void
}

export default function CartItem({
  id,
  name,
  price,
  color,
  image,
  quantity,
  onRemove,
  onUpdateQuantity,
}: CartItemProps) {
  return (
    <div className="py-6 first:pt-0 border-b border-gray-200 last:border-0">
      <div className="flex items-start">
        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded bg-gray-100 flex items-center justify-center">
          {image ? (
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          ) : (
            <ShoppingBag className="h-8 w-8 text-gray-400" />
          )}
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div className="flex justify-between">
            <div>
              <h3 className="text-base font-medium">{name}</h3>
              <p className="mt-1 text-sm text-gray-500">Color: {color}</p>
            </div>
            <p className="text-base font-medium">${price.toFixed(2)}</p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center border border-gray-200 rounded-md">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none"
                onClick={() => onUpdateQuantity(id, Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-3 w-3" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none"
                onClick={() => onUpdateQuantity(id, quantity + 1)}
              >
                <Plus className="h-3 w-3" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
            <Button variant="ghost" size="icon" onClick={() => onRemove(id)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Remove item</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

