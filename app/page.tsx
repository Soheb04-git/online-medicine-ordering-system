"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Menu, X } from "lucide-react"
import HeroSection from "@/components/hero-section"
import CategoriesSection from "@/components/categories-section"
import FeaturedProducts from "@/components/featured-products"
import Footer from "@/components/footer"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedProducts />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
