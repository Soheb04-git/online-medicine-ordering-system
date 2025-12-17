"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CreditCard, Lock, CheckCircle } from "lucide-react"

export default function PaymentPage() {
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  })
  const [processing, setProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let formattedValue = value

    if (name === "cardNumber") {
      formattedValue = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
    } else if (name === "expiryDate") {
      formattedValue = value.replace(/\D/g, "").replace(/(\d{2})(\d{0,2})/, "$1/$2")
    } else if (name === "cvv") {
      formattedValue = value.replace(/\D/g, "").slice(0, 3)
    }

    setCardData((prev) => ({ ...prev, [name]: formattedValue }))
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Validate card data
      if (!cardData.cardNumber || !cardData.cardHolder || !cardData.expiryDate || !cardData.cvv) {
        alert("Please fill in all card details")
        return
      }

      setPaymentSuccess(true)
      setTimeout(() => {
        router.push("/order-confirmation")
      }, 2000)
    } catch (error) {
      alert("Payment failed. Please try again.")
    } finally {
      setProcessing(false)
    }
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-foreground mb-2">Payment Successful!</h1>
          <p className="text-muted-foreground mb-6">Your order is being processed...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-foreground">Payment</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handlePayment} className="space-y-8">
              {/* Payment Method Selection */}
              <div className="bg-white rounded-xl border border-border p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Select Payment Method</h2>

                <div className="space-y-4">
                  {[
                    { id: "card", label: "Credit/Debit Card", icon: "💳" },
                    { id: "upi", label: "UPI", icon: "📱" },
                    { id: "netbanking", label: "Net Banking", icon: "🏦" },
                    { id: "wallet", label: "Digital Wallet", icon: "👛" },
                  ].map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition ${
                        paymentMethod === method.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="text-2xl">{method.icon}</span>
                      <span className="font-semibold text-foreground">{method.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Card Payment Form */}
              {paymentMethod === "card" && (
                <div className="bg-white rounded-xl border border-border p-8 space-y-6">
                  <h3 className="text-xl font-bold text-foreground">Card Details</h3>

                  {/* Card Number */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Card Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={cardData.cardNumber}
                        onChange={handleCardChange}
                        maxLength={19}
                        className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground"
                      />
                    </div>
                  </div>

                  {/* Card Holder */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Card Holder Name</label>
                    <input
                      type="text"
                      name="cardHolder"
                      placeholder="John Doe"
                      value={cardData.cardHolder}
                      onChange={handleCardChange}
                      className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground"
                    />
                  </div>

                  {/* Expiry & CVV */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Expiry Date</label>
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={cardData.expiryDate}
                        onChange={handleCardChange}
                        maxLength={5}
                        className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">CVV</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          name="cvv"
                          placeholder="123"
                          value={cardData.cvv}
                          onChange={handleCardChange}
                          maxLength={3}
                          className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Security Notice */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                    <Lock className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-green-900">Secure Payment</p>
                      <p className="text-sm text-green-800">Your payment information is encrypted and secure</p>
                    </div>
                  </div>
                </div>
              )}

              {/* UPI Payment */}
              {paymentMethod === "upi" && (
                <div className="bg-white rounded-xl border border-border p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">UPI Payment</h3>
                  <input
                    type="text"
                    placeholder="Enter UPI ID (e.g., user@upi)"
                    className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground"
                  />
                </div>
              )}

              {/* Net Banking */}
              {paymentMethod === "netbanking" && (
                <div className="bg-white rounded-xl border border-border p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Select Your Bank</h3>
                  <select className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground">
                    <option>Select a bank</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>Axis Bank</option>
                    <option>SBI</option>
                  </select>
                </div>
              )}

              {/* Pay Button */}
              <button
                type="submit"
                disabled={processing}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {processing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    Pay ₹347
                  </>
                )}
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

              {/* Payment Methods Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
                <p className="font-semibold mb-2">Test Card Numbers:</p>
                <p>Visa: 4111 1111 1111 1111</p>
                <p>Mastercard: 5555 5555 5555 4444</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
