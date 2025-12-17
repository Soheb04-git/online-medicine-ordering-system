"use client"

import Link from "next/link"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"

const wishlistItems = [
  {
    id: 1,
    name: "Vitamin B12 1000mcg",
    price: 65,
    originalPrice: 85,
    dosage: "30 tablets",
    image: "/placeholder.svg?key=vitb12",
  },
  {
    id: 2,
    name: "Multivitamin Complex",
    price: 120,
    originalPrice: 150,
    dosage: "60 tablets",
    image: "/placeholder.svg?key=multi",
  },
]

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-foreground">My Wishlist</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {wishlistItems.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative h-48 bg-gray-100">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
                  <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition">
                    <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-1 line-clamp-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.dosage}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-primary">₹{item.price}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{item.originalPrice}</span>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                    <button className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">Add medicines to your wishlist to save them for later</p>
            <Link
              href="/medicines"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Browse Medicines
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
