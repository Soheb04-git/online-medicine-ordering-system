"use client"

import Link from "next/link"
import { Pill, Heart, Stethoscope, Leaf } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Medicines",
    icon: Pill,
    description: "Prescription & OTC medicines",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    name: "Healthcare Products",
    icon: Heart,
    description: "Health monitoring devices",
    color: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    id: 3,
    name: "Medical Equipment",
    icon: Stethoscope,
    description: "Professional equipment",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    id: 4,
    name: "Supplements",
    icon: Leaf,
    description: "Vitamins & supplements",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
]

export default function CategoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground">Find exactly what you need from our wide range of products</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.id} href={`/medicines?category=${category.name.toLowerCase()}`} className="group">
                <div
                  className={`${category.color} p-8 rounded-xl text-center hover:shadow-lg transition duration-300 cursor-pointer`}
                >
                  <Icon className={`${category.iconColor} w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition`} />
                  <h3 className="font-bold text-lg text-foreground mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
