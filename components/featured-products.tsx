"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Heart } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    price: 45,
    originalPrice: 60,
    dosage: "10 tablets",
    category: "Pain Relief",
    rating: 4.5,
    reviews: 128,
    image: "/paracetamol-medicine-bottle.jpg",
  },
  {
    id: 2,
    name: "Azithromycin 500mg",
    price: 120,
    originalPrice: 150,
    dosage: "6 tablets",
    category: "Antibiotics",
    rating: 4.8,
    reviews: 95,
    image: "/azithromycin-medicine-bottle.jpg",
  },
  {
    id: 3,
    name: "Vitamin C 1000mg",
    price: 85,
    originalPrice: 110,
    dosage: "30 tablets",
    category: "Supplements",
    rating: 4.6,
    reviews: 203,
    image: "/vitamin-c-supplement-bottle.jpg",
  },
  {
    id: 4,
    name: "Ibuprofen 400mg",
    price: 55,
    originalPrice: 75,
    dosage: "15 tablets",
    category: "Pain Relief",
    rating: 4.7,
    reviews: 156,
    image: "/ibuprofen-medicine-bottle.jpg",
  },
]

export default function FeaturedProducts() {
  const [wishlist, setWishlist] = useState<number[]>([])

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Featured Products</h2>
            <p className="text-lg text-muted-foreground">Handpicked medicines and health products</p>
          </div>
          <Link href="/medicines" className="text-primary font-semibold hover:text-primary/80 transition">
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gray-100 overflow-hidden group">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"
                    }`}
                  />
                </button>
                {product.originalPrice > product.price && (
                  <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">{product.category}</p>
                <h3 className="font-bold text-foreground mb-1 line-clamp-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{product.dosage}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < Math.floor(product.rating) ? "★" : "☆"}</span>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-primary">₹{product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
