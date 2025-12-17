"use client"

import Link from "next/link"
import { CheckCircle, Package, Truck, Mail } from "lucide-react"

export default function OrderConfirmationPage() {
  const orderId = "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-foreground">Order Confirmation</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Message */}
        <div className="bg-white rounded-xl border border-border p-8 text-center mb-8">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-2">Order Placed Successfully!</h2>
          <p className="text-lg text-muted-foreground mb-4">Thank you for your order</p>
          <p className="text-2xl font-bold text-primary">{orderId}</p>
        </div>

        {/* Order Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Delivery Info */}
          <div className="bg-white rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="w-6 h-6 text-primary" />
              <h3 className="font-bold text-lg text-foreground">Delivery Information</h3>
            </div>
            <div className="space-y-3 text-foreground">
              <div>
                <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                <p className="font-semibold">2-3 Business Days</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Delivery Address</p>
                <p className="font-semibold">123 Main Street, City, State 12345</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-primary" />
              <h3 className="font-bold text-lg text-foreground">Contact Information</h3>
            </div>
            <div className="space-y-3 text-foreground">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold">user@example.com</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-semibold">+1 (555) 000-0000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-xl border border-border p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-6 h-6 text-primary" />
            <h3 className="font-bold text-lg text-foreground">Order Items</h3>
          </div>

          <div className="space-y-4">
            {[
              { name: "Paracetamol 500mg", dosage: "10 tablets", qty: 2, price: 45 },
              { name: "Azithromycin 500mg", dosage: "6 tablets", qty: 1, price: 120 },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center pb-4 border-b border-border last:border-b-0">
                <div>
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.dosage}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">₹{item.price * item.qty}</p>
                  <p className="text-sm text-muted-foreground">Qty: {item.qty}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-border space-y-2">
            <div className="flex justify-between text-foreground">
              <span>Subtotal</span>
              <span>₹330</span>
            </div>
            <div className="flex justify-between text-foreground">
              <span>Tax</span>
              <span>₹17</span>
            </div>
            <div className="flex justify-between text-green-600 font-semibold">
              <span>Shipping</span>
              <span>FREE</span>
            </div>
            <div className="flex justify-between text-xl font-bold text-foreground pt-4 border-t border-border">
              <span>Total</span>
              <span className="text-primary">₹347</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-lg text-foreground mb-4">What's Next?</h3>
          <ul className="space-y-3 text-foreground">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">1.</span>
              <span>You'll receive a confirmation email shortly with tracking details</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">2.</span>
              <span>Our pharmacist will verify your prescription within 2 hours</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">3.</span>
              <span>Your order will be dispatched and you can track it in real-time</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/dashboard/orders"
            className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition text-center"
          >
            View Order Status
          </Link>
          <Link
            href="/medicines"
            className="flex-1 border-2 border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary/5 transition text-center"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
