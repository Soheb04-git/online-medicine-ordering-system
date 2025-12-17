"use client"

import Link from "next/link"
import { ShoppingCart, Heart } from "lucide-react"

interface Medicine {
  id: number
  name: string
  price: number
  originalPrice: number
  dosage: string
  category: string
  rating: number
  reviews: number
  image: string
}

interface MedicineCardProps {
  medicine: Medicine
  isWishlisted: boolean
  onWishlistToggle: () => void
}

export default function MedicineCard({ medicine, isWishlisted, onWishlistToggle }: MedicineCardProps) {
  const discount = Math.round(((medicine.originalPrice - medicine.price) / medicine.originalPrice) * 100)

  return (
    <Link href={`/medicines/${medicine.id}`}>
      <div className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer h-full flex flex-col">
        {/* Product Image */}
        <div className="relative h-48 bg-gray-100 overflow-hidden group">
          <img
            src={medicine.image || "/placeholder.svg"}
            alt={medicine.name}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              onWishlistToggle()
            }}
            className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
          >
            <Heart className={`w-5 h-5 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
          </button>
          {discount > 0 && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {discount}% OFF
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col flex-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">{medicine.category}</p>
          <h3 className="font-bold text-foreground mb-1 line-clamp-2 flex-1">{medicine.name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{medicine.dosage}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < Math.floor(medicine.rating) ? "★" : "☆"}</span>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({medicine.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-primary">₹{medicine.price}</span>
            {medicine.originalPrice > medicine.price && (
              <span className="text-sm text-muted-foreground line-through">₹{medicine.originalPrice}</span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
            }}
            className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  )
}
