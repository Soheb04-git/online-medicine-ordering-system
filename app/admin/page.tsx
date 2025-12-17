"use client"
import Link from "next/link"
import { BarChart3, Package, ShoppingCart, Users, TrendingUp, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AdminDashboard() {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn")
    router.push("/admin/login")
  }

  const stats = [
    { label: "Total Orders", value: "1,234", icon: ShoppingCart, color: "bg-blue-50", iconColor: "text-blue-600" },
    { label: "Total Revenue", value: "₹4,28,500", icon: TrendingUp, color: "bg-green-50", iconColor: "text-green-600" },
    { label: "Total Medicines", value: "856", icon: Package, color: "bg-purple-50", iconColor: "text-purple-600" },
    { label: "Active Users", value: "2,456", icon: Users, color: "bg-orange-50", iconColor: "text-orange-600" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="font-bold text-lg text-foreground">MediCare Admin</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition font-semibold"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className={`${stat.color} rounded-xl p-6 border border-border`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">{stat.label}</h3>
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              </div>
            )
          })}
        </div>

        {/* Management Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Medicines Management */}
          <Link href="/admin/medicines">
            <div className="bg-white rounded-xl border border-border p-8 hover:shadow-lg transition cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Manage Medicines</h2>
              </div>
              <p className="text-muted-foreground mb-4">Add, update, or delete medicines from inventory</p>
              <div className="text-primary font-semibold hover:text-primary/80 transition">Go to Medicines →</div>
            </div>
          </Link>

          {/* Orders Management */}
          <Link href="/admin/orders">
            <div className="bg-white rounded-xl border border-border p-8 hover:shadow-lg transition cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Manage Orders</h2>
              </div>
              <p className="text-muted-foreground mb-4">View and manage customer orders and shipments</p>
              <div className="text-primary font-semibold hover:text-primary/80 transition">Go to Orders →</div>
            </div>
          </Link>

          {/* Analytics */}
          <Link href="/admin/analytics">
            <div className="bg-white rounded-xl border border-border p-8 hover:shadow-lg transition cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Analytics</h2>
              </div>
              <p className="text-muted-foreground mb-4">View sales analytics and business insights</p>
              <div className="text-primary font-semibold hover:text-primary/80 transition">View Analytics →</div>
            </div>
          </Link>

          {/* Users Management */}
          <Link href="/admin/users">
            <div className="bg-white rounded-xl border border-border p-8 hover:shadow-lg transition cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Manage Users</h2>
              </div>
              <p className="text-muted-foreground mb-4">View and manage customer accounts</p>
              <div className="text-primary font-semibold hover:text-primary/80 transition">Go to Users →</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
