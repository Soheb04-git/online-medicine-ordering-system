"use client"

import { useState } from "react"
import Link from "next/link"
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight } from "lucide-react"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  dosage: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Paracetamol 500mg",
      price: 45,
      quantity: 2,
      image: "/paracetamol-medicine-bottle.jpg",
      dosage: "10 tablets",
    },
    {
      id: 2,
      name: "Azithromycin 500mg",
      price: 120,
      quantity: 1,
      image: "/azithromycin-medicine-bottle.jpg",
      dosage: "6 tablets",
    },
  ])
  const [couponCode, setCouponCode] = useState("")
  const [discount, setDiscount] = useState(0)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = Math.round(subtotal * 0.05)
  const shipping = subtotal > 500 ? 0 : 50
  const total = subtotal + tax + shipping - discount

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
      return
    }
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const applyCoupon = () => {
    if (couponCode === "SAVE10") {
      setDiscount(Math.round(subtotal * 0.1))
    } else if (couponCode === "SAVE20") {
      setDiscount(Math.round(subtotal * 0.2))
    } else {
      alert("Invalid coupon code")
      setDiscount(0)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {cartItems.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl border border-border p-6 flex gap-6">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.dosage}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-2 text-foreground hover:bg-background transition"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 font-semibold text-foreground">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-2 text-foreground hover:bg-background transition"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="ml-auto text-right">
                        <p className="text-2xl font-bold text-primary">₹{item.price * item.quantity}</p>
                        <p className="text-sm text-muted-foreground">₹{item.price} each</p>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Coupon Section */}
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-4">Apply Coupon Code</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground"
                  />
                  <button
                    onClick={applyCoupon}
                    className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition"
                  >
                    Apply
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Try: SAVE10 or SAVE20</p>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-border p-6 sticky top-24 space-y-4">
                <h3 className="font-bold text-lg text-foreground">Order Summary</h3>

                <div className="space-y-3 border-b border-border pb-4">
                  <div className="flex justify-between text-foreground">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Tax (5%)</span>
                    <span>₹{tax}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-green-600 font-semibold" : ""}>
                      {shipping === 0 ? "FREE" : `₹${shipping}`}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600 font-semibold">
                      <span>Discount</span>
                      <span>-₹{discount}</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center text-xl font-bold text-foreground">
                  <span>Total</span>
                  <span className="text-primary">₹{total}</span>
                </div>

                <Link
                  href="/checkout"
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/medicines"
                  className="w-full border-2 border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary/5 transition text-center"
                >
                  Continue Shopping
                </Link>

                {subtotal < 500 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
                    Add ₹{500 - subtotal} more for free shipping!
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Add some medicines to get started</p>
            <Link
              href="/medicines"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Shop Now
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
