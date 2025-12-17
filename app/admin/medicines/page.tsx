"use client"

import { useState } from "react"
import { Plus, Edit2, Trash2, Search } from "lucide-react"

const medicines = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "Pain Relief",
    price: 45,
    stock: 150,
    status: "active",
  },
  {
    id: 2,
    name: "Azithromycin 500mg",
    category: "Antibiotics",
    price: 120,
    stock: 85,
    status: "active",
  },
  {
    id: 3,
    name: "Vitamin C 1000mg",
    category: "Supplements",
    price: 85,
    stock: 200,
    status: "active",
  },
]

export default function AdminMedicinesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddForm, setShowAddForm] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-foreground">Manage Medicines</h1>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              <Plus className="w-4 h-4" />
              Add Medicine
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Add Medicine Form */}
        {showAddForm && (
          <div className="bg-white rounded-xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Add New Medicine</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Medicine Name"
                className="px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground"
              />
              <input
                type="text"
                placeholder="Category"
                className="px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground"
              />
              <input
                type="number"
                placeholder="Price"
                className="px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground"
              />
              <input
                type="number"
                placeholder="Stock"
                className="px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-primary text-white py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition">
                Add Medicine
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="flex-1 border-2 border-border text-foreground py-2.5 rounded-lg font-semibold hover:bg-background transition"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search medicines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground"
            />
          </div>
        </div>

        {/* Medicines Table */}
        <div className="bg-white rounded-xl border border-border overflow-hidden">
          <table className="w-full">
            <thead className="bg-background border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Medicine Name</th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Category</th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Price</th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Stock</th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Status</th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((medicine) => (
                <tr key={medicine.id} className="border-b border-border hover:bg-background transition">
                  <td className="px-6 py-4 font-semibold text-foreground">{medicine.name}</td>
                  <td className="px-6 py-4 text-foreground">{medicine.category}</td>
                  <td className="px-6 py-4 text-foreground">₹{medicine.price}</td>
                  <td className="px-6 py-4 text-foreground">{medicine.stock}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {medicine.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
