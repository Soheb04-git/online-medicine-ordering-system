"use client"

import { useState, useMemo } from "react"
import { Search, Filter, X } from "lucide-react"
import MedicineCard from "@/components/medicine-card"

const allMedicines = [
  {
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
  },
  {
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
  },
  {
    id: 3,
    name: "Vitamin C 1000mg",
    price: 85,
    originalPrice: 110,
    dosage: "30 tablets",
    category: "Supplements",
    brand: "Generic",
    rating: 4.6,
    reviews: 203,
    image: "/vitamin-c-supplement-bottle.jpg",
    description: "Immune system booster",
  },
  {
    id: 4,
    name: "Ibuprofen 400mg",
    price: 55,
    originalPrice: 75,
    dosage: "15 tablets",
    category: "Pain Relief",
    brand: "Generic",
    rating: 4.7,
    reviews: 156,
    image: "/ibuprofen-medicine-bottle.jpg",
    description: "Anti-inflammatory pain reliever",
  },
  {
    id: 5,
    name: "Amoxicillin 500mg",
    price: 95,
    originalPrice: 120,
    dosage: "10 capsules",
    category: "Antibiotics",
    brand: "Generic",
    rating: 4.4,
    reviews: 87,
    image: "/placeholder.svg?key=amox",
    description: "Penicillin-type antibiotic",
  },
  {
    id: 6,
    name: "Vitamin D3 1000IU",
    price: 75,
    originalPrice: 95,
    dosage: "60 tablets",
    category: "Supplements",
    brand: "Generic",
    rating: 4.7,
    reviews: 142,
    image: "/placeholder.svg?key=vitd",
    description: "Bone health and calcium absorption",
  },
  {
    id: 7,
    name: "Aspirin 75mg",
    price: 35,
    originalPrice: 50,
    dosage: "30 tablets",
    category: "Pain Relief",
    brand: "Generic",
    rating: 4.3,
    reviews: 98,
    image: "/placeholder.svg?key=aspir",
    description: "Cardiovascular health support",
  },
  {
    id: 8,
    name: "Metformin 500mg",
    price: 65,
    originalPrice: 85,
    dosage: "30 tablets",
    category: "Diabetes",
    brand: "Generic",
    rating: 4.6,
    reviews: 176,
    image: "/placeholder.svg?key=metf",
    description: "Blood sugar management",
  },
  {
    id: 9,
    name: "Omeprazole 20mg",
    price: 55,
    originalPrice: 70,
    dosage: "14 capsules",
    category: "Digestive",
    brand: "Generic",
    rating: 4.5,
    reviews: 134,
    image: "/placeholder.svg?key=omep",
    description: "Acid reflux and heartburn relief",
  },
  {
    id: 10,
    name: "Cetirizine 10mg",
    price: 45,
    originalPrice: 60,
    dosage: "10 tablets",
    category: "Allergy",
    brand: "Generic",
    rating: 4.4,
    reviews: 112,
    image: "/placeholder.svg?key=cet",
    description: "Allergy and hay fever relief",
  },
  {
    id: 11,
    name: "Lisinopril 10mg",
    price: 85,
    originalPrice: 110,
    dosage: "30 tablets",
    category: "Blood Pressure",
    brand: "Generic",
    rating: 4.7,
    reviews: 198,
    image: "/placeholder.svg?key=lis",
    description: "Blood pressure management",
  },
  {
    id: 12,
    name: "Atorvastatin 20mg",
    price: 95,
    originalPrice: 125,
    dosage: "30 tablets",
    category: "Cholesterol",
    brand: "Generic",
    rating: 4.6,
    reviews: 167,
    image: "/placeholder.svg?key=ator",
    description: "Cholesterol reduction",
  },
]

const categories = [
  "All",
  "Pain Relief",
  "Antibiotics",
  "Supplements",
  "Diabetes",
  "Digestive",
  "Allergy",
  "Blood Pressure",
  "Cholesterol",
]
const brands = ["All", "Generic"]

export default function MedicinesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedBrand, setSelectedBrand] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 150])
  const [showFilters, setShowFilters] = useState(false)
  const [wishlist, setWishlist] = useState<number[]>([])

  const filteredMedicines = useMemo(() => {
    return allMedicines.filter((medicine) => {
      const matchesSearch =
        medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        medicine.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "All" || medicine.category === selectedCategory
      const matchesBrand = selectedBrand === "All" || medicine.brand === selectedBrand
      const matchesPrice = medicine.price >= priceRange[0] && medicine.price <= priceRange[1]

      return matchesSearch && matchesCategory && matchesBrand && matchesPrice
    })
  }, [searchQuery, selectedCategory, selectedBrand, priceRange])

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-foreground mb-4">Shop Medicines</h1>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search medicines, brands, or conditions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl border border-border p-6 sticky top-24">
              <h3 className="font-bold text-lg text-foreground mb-4">Filters</h3>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="w-4 h-4 rounded border-border"
                      />
                      <span className="text-foreground">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Brand</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="brand"
                        checked={selectedBrand === brand}
                        onChange={() => setSelectedBrand(brand)}
                        className="w-4 h-4 rounded border-border"
                      />
                      <span className="text-foreground">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Price Range</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="150"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 bg-white border border-border px-4 py-2 rounded-lg font-semibold text-foreground hover:bg-background transition mb-4"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex items-end">
              <div className="bg-white w-full rounded-t-2xl p-6 max-h-96 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg text-foreground">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-6 h-6 text-foreground" />
                  </button>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <label key={cat} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === cat}
                          onChange={() => {
                            setSelectedCategory(cat)
                            setShowFilters(false)
                          }}
                          className="w-4 h-4 rounded border-border"
                        />
                        <span className="text-foreground">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Showing {filteredMedicines.length} of {allMedicines.length} medicines
              </p>
              <select className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>

            {filteredMedicines.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMedicines.map((medicine) => (
                  <MedicineCard
                    key={medicine.id}
                    medicine={medicine}
                    isWishlisted={wishlist.includes(medicine.id)}
                    onWishlistToggle={() => toggleWishlist(medicine.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No medicines found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
