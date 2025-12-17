"use client"

import Link from "next/link"
import { Package, Truck, CheckCircle, Clock, ChevronRight } from "lucide-react"

const orders = [
  {
    id: "ORD-ABC123",
    date: "2024-01-15",
    items: 3,
    total: 347,
    status: "delivered",
    estimatedDelivery: "2024-01-17",
  },
  {
    id: "ORD-DEF456",
    date: "2024-01-10",
    items: 2,
    total: 215,
    status: "in-transit",
    estimatedDelivery: "2024-01-12",
  },
  {
    id: "ORD-GHI789",
    date: "2024-01-05",
    items: 1,
    total: 120,
    status: "processing",
    estimatedDelivery: "2024-01-08",
  },
]

const statusConfig: Record<string, { icon: any; color: string; label: string }> = {
  delivered: { icon: CheckCircle, color: "text-green-600", label: "Delivered" },
  "in-transit": { icon: Truck, color: "text-blue-600", label: "In Transit" },
  processing: { icon: Clock, color: "text-yellow-600", label: "Processing" },
  pending: { icon: Package, color: "text-gray-600", label: "Pending" },
}

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-foreground">My Orders</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {orders.length > 0 ? (
          <div className="space-y-4">
            {orders.map((order) => {
              const statusInfo = statusConfig[order.status]
              const StatusIcon = statusInfo.icon

              return (
                <div key={order.id} className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1">{order.id}</h3>
                      <p className="text-sm text-muted-foreground">
                        Ordered on {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <StatusIcon className={`w-6 h-6 ${statusInfo.color}`} />
                      <span className={`font-semibold ${statusInfo.color}`}>{statusInfo.label}</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-4 mb-4 pb-4 border-b border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Items</p>
                      <p className="font-semibold text-foreground">{order.items}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total</p>
                      <p className="font-semibold text-foreground">₹{order.total}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Est. Delivery</p>
                      <p className="font-semibold text-foreground">
                        {new Date(order.estimatedDelivery).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-end">
                      <Link
                        href={`/dashboard/orders/${order.id}`}
                        className="text-primary font-semibold hover:text-primary/80 transition flex items-center gap-1"
                      >
                        View Details
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Order Progress */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{
                          width: order.status === "delivered" ? "100%" : order.status === "in-transit" ? "66%" : "33%",
                        }}
                      ></div>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {order.status === "delivered" ? "100%" : order.status === "in-transit" ? "66%" : "33%"}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h2 className="text-2xl font-bold text-foreground mb-2">No orders yet</h2>
            <p className="text-muted-foreground mb-6">Start shopping to place your first order</p>
            <Link
              href="/medicines"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Shop Now
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
