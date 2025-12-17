"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-accent/10 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Your Health, Our Priority
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Quality Medicines at Your Doorstep
            </h1>
            <p className="text-lg text-muted-foreground">
              Order prescription and over-the-counter medicines online with fast delivery and expert guidance from
              licensed pharmacists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/medicines"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                Shop Now
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition"
              >
                Learn More
              </Link>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-primary">10K+</div>
                <p className="text-sm text-muted-foreground">Medicines Available</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <p className="text-sm text-muted-foreground">Customer Support</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">Fast</div>
                <p className="text-sm text-muted-foreground">Same Day Delivery</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full">
            <img src="/pharmacy-medicines-bottles-healthcare.jpg" alt="Medicines" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
