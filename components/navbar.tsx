// "use client"

// import { useEffect, useState } from "react"
// import Link from "next/link"
// import { Search, ShoppingCart, Menu, X, User } from "lucide-react"
// import { useRouter } from "next/navigation"

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState("")
//   const [isLoggedIn, setIsLoggedIn] = useState(false)

//   const router = useRouter()

//   useEffect(() => {
//     const loggedIn = localStorage.getItem("isLoggedIn")
//     setIsLoggedIn(!!loggedIn)
//   }, [])


//   return (
//     <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-lg">M</span>
//             </div>
//             <span className="font-bold text-lg text-foreground hidden sm:inline">
//               MediCare
//             </span>
//           </Link>

//           {/* Search - Desktop */}
//           <div className="hidden md:flex flex-1 max-w-md mx-8">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 placeholder="Search medicines..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//               />
//               <Search className="absolute right-3 top-2.5 w-5 h-5 text-muted-foreground" />
//             </div>
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex items-center gap-6">
//             <Link href="/medicines" className="hover:text-primary">
//               Medicines
//             </Link>
//             <Link href="/about" className="hover:text-primary">
//               About
//             </Link>
//             <Link href="/contact" className="hover:text-primary">
//               Contact
//             </Link>

//             {!isLoggedIn ? (
//               <Link href="/login" className="hover:text-primary">
//                 Login
//               </Link>
//             ) : (
//               <button
//                 onClick={() => router.push("/dashboard")}
//                 className="flex items-center gap-2 hover:text-primary"
//               >
//                 <User className="w-6 h-6" />
//               </button>
//             )}

//             <Link href="/cart" className="relative">
//               <ShoppingCart className="w-6 h-6 hover:text-primary" />
//               <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 0
//               </span>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2"
//           >
//             {isMenuOpen ? <X /> : <Menu />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden pb-4 border-t border-border">
//             <input
//               type="text"
//               placeholder="Search medicines..."
//               className="w-full mt-4 px-4 py-2 rounded-lg border"
//             />

//             <Link href="/medicines" className="block py-2">
//               Medicines
//             </Link>
//             <Link href="/about" className="block py-2">
//               About
//             </Link>
//             <Link href="/contact" className="block py-2">
//               Contact
//             </Link>

//             {!isLoggedIn ? (
//               <Link href="/login" className="block py-2">
//                 Login
//               </Link>
//             ) : (
//               <Link href="/dashboard" className="block py-2">
//                 Dashboard
//               </Link>
//             )}

//             <Link href="/cart" className="block py-2">
//               Cart
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// "use client"

// import { useEffect, useState } from "react"
// import Link from "next/link"
// import { Search, ShoppingCart, Menu, X, User } from "lucide-react"
// import { useRouter } from "next/navigation"

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState("")
//   const [isLoggedIn, setIsLoggedIn] = useState(false)

//   const router = useRouter()

//   useEffect(() => {
//     const loggedIn = localStorage.getItem("isLoggedIn")
//     setIsLoggedIn(loggedIn === "true")
//   }, [])

//   const handleProfileClick = () => {
//     router.push("/dashboard")
//   }

//   return (
//     <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-lg">M</span>
//             </div>
//             <span className="font-bold text-lg text-foreground hidden sm:inline">
//               MediCare
//             </span>
//           </Link>

//           {/* Search Bar - Desktop */}
//           <div className="hidden md:flex flex-1 max-w-md mx-8">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 placeholder="Search medicines..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//               />
//               <Search className="absolute right-3 top-2.5 w-5 h-5 text-muted-foreground" />
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-6">
//             <Link href="/" className="text-foreground hover:text-primary transition">
//               Home
//             </Link>

//             <Link href="/medicines" className="text-foreground hover:text-primary transition">
//               Medicines
//             </Link>

//             <Link href="/about" className="text-foreground hover:text-primary transition">
//               About
//             </Link>

//             <Link href="/contact" className="text-foreground hover:text-primary transition">
//               Contact
//             </Link>

//             {isLoggedIn ? (
//               <button
//                 onClick={handleProfileClick}
//                 className="flex items-center gap-2 text-foreground hover:text-primary transition"
//               >
//                 <User className="w-5 h-5" />
//                 Profile
//               </button>
//             ) : (
//               <Link href="/login" className="text-foreground hover:text-primary transition">
//                 Login
//               </Link>
//             )}

//             <Link href="/cart" className="relative">
//               <ShoppingCart className="w-6 h-6 text-foreground hover:text-primary transition" />
//               <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 0
//               </span>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2"
//           >
//             {isMenuOpen ? (
//               <X className="w-6 h-6 text-foreground" />
//             ) : (
//               <Menu className="w-6 h-6 text-foreground" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden pb-4 border-t border-border">
//             <div className="py-4">
//               <input
//                 type="text"
//                 placeholder="Search medicines..."
//                 className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary mb-4"
//               />
//             </div>

//             <Link href="/" className="block py-2 text-foreground hover:text-primary">
//               Home
//             </Link>

//             <Link href="/medicines" className="block py-2 text-foreground hover:text-primary">
//               Medicines
//             </Link>

//             <Link href="/about" className="block py-2 text-foreground hover:text-primary">
//               About
//             </Link>

//             <Link href="/contact" className="block py-2 text-foreground hover:text-primary">
//               Contact
//             </Link>

//             {isLoggedIn ? (
//               <button
//                 onClick={handleProfileClick}
//                 className="block py-2 text-left text-foreground hover:text-primary w-full"
//               >
//                 Profile
//               </button>
//             ) : (
//               <Link href="/login" className="block py-2 text-foreground hover:text-primary">
//                 Login
//               </Link>
//             )}

//             <Link href="/cart" className="block py-2 text-foreground hover:text-primary">
//               Cart
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Menu, X, User } from "lucide-react"
import { useRouter, usePathname } from "next/navigation" // 🔴 CHANGED

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const router = useRouter()
  const pathname = usePathname() // 🔴 ADDED

  // 🔴 CHANGED: re-check login state on every route change
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn")
    setIsLoggedIn(loggedIn === "true")
  }, [pathname])

  const handleProfileClick = () => {
    router.push("/dashboard")
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">
              MediCare
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search medicines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-muted-foreground" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>

            <Link href="/medicines" className="text-foreground hover:text-primary transition">
              Medicines
            </Link>

            <Link href="/about" className="text-foreground hover:text-primary transition">
              About
            </Link>

            <Link href="/contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>

            {/* 🔴 LOGIN ↔ PROFILE SWITCH */}
            {isLoggedIn ? (
              <button
                onClick={handleProfileClick}
                className="flex items-center gap-2 text-foreground hover:text-primary transition"
              >
                <User className="w-5 h-5" />
                Profile
              </button>
            ) : (
              <Link href="/login" className="text-foreground hover:text-primary transition">
                Login
              </Link>
            )}

            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-foreground hover:text-primary transition" />
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="py-4">
              <input
                type="text"
                placeholder="Search medicines..."
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary mb-4"
              />
            </div>

            <Link href="/" className="block py-2 text-foreground hover:text-primary">
              Home
            </Link>

            <Link href="/medicines" className="block py-2 text-foreground hover:text-primary">
              Medicines
            </Link>

            <Link href="/about" className="block py-2 text-foreground hover:text-primary">
              About
            </Link>

            <Link href="/contact" className="block py-2 text-foreground hover:text-primary">
              Contact
            </Link>

            {isLoggedIn ? (
              <button
                onClick={handleProfileClick}
                className="block py-2 text-left text-foreground hover:text-primary w-full"
              >
                Profile
              </button>
            ) : (
              <Link href="/login" className="block py-2 text-foreground hover:text-primary">
                Login
              </Link>
            )}

            <Link href="/cart" className="block py-2 text-foreground hover:text-primary">
              Cart
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
