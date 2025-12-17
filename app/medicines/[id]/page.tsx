"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ShoppingCart, Heart, Star, ChevronLeft, Pill, AlertCircle } from "lucide-react"

const medicinesData: Record<string, any> = {
  "1": {
    id: 1,
    name: "Paracetamol 500mg",
    price: 45,
    originalPrice: 60,
    dosage: "10 tablets",
    category: "Pain Relief",
    brand: "Generic",
    rating: 4.5,
    reviews: 128,
    image: "/paracetamol-medicine-bottle.jpg",
    description: "Effective pain reliever and fever reducer",
    fullDescription:
      "Paracetamol is a widely used over-the-counter pain reliever and fever reducer. It is commonly used to treat mild to moderate pain and reduce fever associated with colds, flu, and other conditions.",
    uses: ["Headaches and migraines", "Muscle aches", "Fever reduction", "Toothaches", "Menstrual cramps"],
    sideEffects: ["Nausea", "Dizziness", "Allergic reactions (rare)"],
    dosageInfo: "Take 1-2 tablets every 4-6 hours, not exceeding 8 tablets in 24 hours",
    precautions: [
      "Do not exceed recommended dose",
      "Avoid alcohol consumption",
      "Consult doctor if pregnant or nursing",
      "Not suitable for children under 6 years",
    ],
  },
  "2": {
    id: 2,
    name: "Azithromycin 500mg",
    price: 120,
    originalPrice: 150,
    dosage: "6 tablets",
    category: "Antibiotics",
    brand: "Generic",
    rating: 4.8,
    reviews: 95,
    image: "/azithromycin-medicine-bottle.jpg",
    description: "Broad-spectrum antibiotic for infections",
    fullDescription:
      "Azithromycin is a macrolide antibiotic used to treat various bacterial infections. It works by stopping the growth of bacteria.",
    uses: ["Respiratory tract infections", "Skin infections", "Ear infections", "Sexually transmitted infections"],
    sideEffects: ["Nausea and vomiting", "Diarrhea", "Abdominal pain"],
    dosageInfo: "Take as prescribed by your doctor, typically 500mg once daily",
    precautions: [
      "Requires prescription",
      "Complete full course",
      "May interact with other medications",
      "Not for viral infections",
    ],
  },
}

export default function ProductDetailsPage() {
  const params = useParams()
  const id = params.id as string
  const medicine = medicinesData[id] || medicinesData["1"]

  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [activeTab, setActiveTab] = useState("details")

  const discount = Math.round(((medicine.originalPrice - medicine.price) / medicine.originalPrice) * 100)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/medicines"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Medicines
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-white rounded-xl border border-border p-8">
            <img
              src={medicine.image || "/placeholder.svg"}
              alt={medicine.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">{medicine.category}</p>
              <h1 className="text-4xl font-bold text-foreground mb-2">{medicine.name}</h1>
              <p className="text-lg text-muted-foreground">{medicine.dosage}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(medicine.rating) ? "fill-yellow-400" : ""}`} />
                ))}
              </div>
              <span className="text-foreground font-semibold">
                {medicine.rating} ({medicine.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-primary">₹{medicine.price}</span>
                <span className="text-2xl text-muted-foreground line-through">₹{medicine.originalPrice}</span>
                <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full font-semibold">{discount}% OFF</span>
              </div>
              <p className="text-sm text-green-600 font-semibold">
                You save ₹{medicine.originalPrice - medicine.price}
              </p>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-semibold text-foreground">Quantity:</label>
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-foreground hover:bg-background transition"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 font-semibold text-foreground">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-foreground hover:bg-background transition"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`px-6 py-3 rounded-lg font-semibold transition border-2 ${
                    isWishlisted
                      ? "bg-red-50 border-red-500 text-red-600"
                      : "border-border text-foreground hover:bg-background"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-red-500" : ""}`} />
                </button>
              </div>
            </div>

            {/* Key Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
              <div className="flex items-start gap-3">
                <Pill className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Prescription Required</p>
                  <p className="text-sm text-muted-foreground">Please upload a valid prescription before checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-border overflow-hidden">
          <div className="flex border-b border-border">
            {["details", "uses", "sideEffects", "precautions"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 font-semibold transition ${
                  activeTab === tab
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === "details" && "Details"}
                {tab === "uses" && "Uses"}
                {tab === "sideEffects" && "Side Effects"}
                {tab === "precautions" && "Precautions"}
              </button>
            ))}
          </div>

          <div className="p-8">
            {activeTab === "details" && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-foreground mb-2">Description</h3>
                  <p className="text-muted-foreground">{medicine.fullDescription}</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Dosage Information</h3>
                  <p className="text-muted-foreground">{medicine.dosageInfo}</p>
                </div>
              </div>
            )}

            {activeTab === "uses" && (
              <ul className="space-y-2">
                {medicine.uses.map((use: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-foreground">{use}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === "sideEffects" && (
              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-yellow-800">Consult a healthcare professional if side effects persist</p>
                </div>
                <ul className="space-y-2">
                  {medicine.sideEffects.map((effect: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-red-500 font-bold mt-1">•</span>
                      <span className="text-foreground">{effect}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "precautions" && (
              <ul className="space-y-2">
                {medicine.precautions.map((precaution: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-foreground">{precaution}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12 bg-white rounded-xl border border-border p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Customer Reviews</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b border-border pb-6 last:border-b-0">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-semibold text-foreground">John Doe</p>
                    <p className="text-sm text-muted-foreground">Verified Purchase</p>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-foreground">
                  Great product! Fast delivery and excellent quality. Highly recommended.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
