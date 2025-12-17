"use client"


import { useRouter } from "next/navigation"
import Link from "next/link"
import { LogOut, Package, Heart, FileText, User, Settings } from "lucide-react"


export default function DashboardPage() {
  const router = useRouter()


  const handleLogout = () => {
  router.push("/login")
}


  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back!</p>
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Profile Card */}
          <div className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Profile</h3>
                <p className="text-sm text-muted-foreground">Manage your account</p>
              </div>
            </div>
            <Link href="/dashboard/profile" className="text-primary font-semibold hover:text-primary/80 transition">
              View Profile →
            </Link>
          </div>

          {/* Orders Card */}
          <div className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Orders</h3>
                <p className="text-sm text-muted-foreground">Track your orders</p>
              </div>
            </div>
            <Link href="/dashboard/orders" className="text-primary font-semibold hover:text-primary/80 transition">
              View Orders →
            </Link>
          </div>

          {/* Wishlist Card */}
          <div className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Wishlist</h3>
                <p className="text-sm text-muted-foreground">Saved medicines</p>
              </div>
            </div>
            <Link href="/dashboard/wishlist" className="text-primary font-semibold hover:text-primary/80 transition">
              View Wishlist →
            </Link>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Prescriptions */}
          <div className="bg-white rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Prescriptions</h3>
            </div>
            <p className="text-muted-foreground mb-4">Upload and manage your medical prescriptions</p>
            <Link
              href="/dashboard/prescriptions"
              className="inline-block bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Manage Prescriptions
            </Link>
          </div>

          {/* Settings */}
          <div className="bg-white rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Settings</h3>
            </div>
            <p className="text-muted-foreground mb-4">Update your account settings and preferences</p>
            <Link
              href="/dashboard/settings"
              className="inline-block bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Go to Settings
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-6">Your Activity</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary">0</div>
              <p className="text-muted-foreground">Total Orders</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">₹0</div>
              <p className="text-muted-foreground">Total Spent</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">0</div>
              <p className="text-muted-foreground">Saved Items</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">0</div>
              <p className="text-muted-foreground">Prescriptions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
