"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { MapPin, Mail, FileText, CheckCircle } from "lucide-react"

export default function CheckoutPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    prescriptionFile: null as File | null,
  })
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, prescriptionFile: e.target.files![0] }))
    }
  }

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields")
      return
    }

    if (!formData.address || !formData.city || !formData.state || !formData.zipCode) {
      alert("Please fill in complete address")
      return
    }

    if (!formData.prescriptionFile) {
      alert("Please upload a prescription")
      return
    }

    // Simulate order placement
    setOrderPlaced(true)
    setTimeout(() => {
      router.push("/order-confirmation")
    }, 2000)
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-foreground mb-2">Order Placed Successfully!</h1>
          <p className="text-muted-foreground mb-6">Redirecting to confirmation page...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-foreground">Checkout</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handlePlaceOrder} className="space-y-8">
              {/* Delivery Address */}
              <div className="bg-white rounded-xl border border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Delivery Address</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground"
                  />
                </div>

                <textarea
                  name="address"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground mb-4"
                />

                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl border border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground"
                  />
                </div>
              </div>

              {/* Prescription Upload */}
              <div className="bg-white rounded-xl border border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Upload Prescription</h2>
                </div>

                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="hidden"
                    id="prescription-upload"
                  />
                  <label htmlFor="prescription-upload" className="cursor-pointer">
                    <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
                    <p className="font-semibold text-foreground mb-1">
                      {formData.prescriptionFile ? formData.prescriptionFile.name : "Click to upload prescription"}
                    </p>
                    <p className="text-sm text-muted-foreground">PDF, JPG, or PNG (Max 5MB)</p>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-border p-6 sticky top-24 space-y-4">
              <h3 className="font-bold text-lg text-foreground">Order Summary</h3>

              <div className="space-y-3 border-b border-border pb-4">
                <div className="flex justify-between text-foreground">
                  <span>Subtotal</span>
                  <span>₹330</span>
                </div>
                <div className="flex justify-between text-foreground">
                  <span>Tax (5%)</span>
                  <span>₹17</span>
                </div>
                <div className="flex justify-between text-green-600 font-semibold">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xl font-bold text-foreground">
                <span>Total</span>
                <span className="text-primary">₹347</span>
              </div>

              {/* Order Items */}
              <div className="border-t border-border pt-4 space-y-3">
                <h4 className="font-semibold text-foreground">Items</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-foreground">
                    <span>Paracetamol 500mg x2</span>
                    <span>₹90</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Azithromycin 500mg x1</span>
                    <span>₹120</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
