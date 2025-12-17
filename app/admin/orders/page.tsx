"use client"

import { useState } from "react"
import { Search, Eye, CheckCircle, Clock, Truck } from "lucide-react"

const orders = [
  {
    id: "ORD-ABC123",
    customer: "John Doe",
    items: 3,
    total: 347,
    status: "delivered",
    date: "2024-01-15",
  },
  {
    id: "ORD-DEF456",
    customer: "Jane Smith",
    items: 2,
    total: 215,
    status: "in-transit",
    date: "2024-01-14",
  },
  {
    id: "ORD-GHI789",
    customer: "Bob Johnson",
    items: 1,
    total: 120,
    status: "processing",
    date: "2024-01-13",
  },
]

const statusConfig: Record<string, { icon: any; color: string }> = {
  delivered: { icon: CheckCircle, color: "text-green-600" },
  "in-transit": { icon: Truck, color: "text-blue-600" },
  processing: { icon: Clock, color: "text-yellow-600" },
}

export default function AdminOrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-foreground">Manage Orders</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder-muted-foreground"
            />
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-xl border border-border overflow-hidden">
          <table className="w-full">
            <thead className="bg-background border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Order ID</th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Customer</th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Items</th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Total</th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Status</th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Date</th>
                <th className="px-6 py-4 text-left font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                const statusInfo = statusConfig[order.status]
                const StatusIcon = statusInfo.icon

                return (
                  <tr key={order.id} className="border-b border-border hover:bg-background transition">
                    <td className="px-6 py-4 font-semibold text-foreground">{order.id}</td>
                    <td className="px-6 py-4 text-foreground">{order.customer}</td>
                    <td className="px-6 py-4 text-foreground">{order.items}</td>
                    <td className="px-6 py-4 font-semibold text-foreground">₹{order.total}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <StatusIcon className={`w-4 h-4 ${statusInfo.color}`} />
                        <span className={`font-semibold ${statusInfo.color}`}>{order.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-foreground">{new Date(order.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4">
                      <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition">
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
