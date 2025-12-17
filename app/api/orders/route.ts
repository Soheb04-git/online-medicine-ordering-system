import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, items, totalAmount, deliveryAddress, prescriptionFile } = body

    // Validate order data
    if (!userId || !items || !totalAmount || !deliveryAddress) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create order in database (mock)
    const orderId = "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase()

    const order = {
      orderId,
      userId,
      items,
      totalAmount,
      deliveryAddress,
      prescriptionFile,
      status: "pending",
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
    }

    return NextResponse.json(order, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Order creation failed" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const userId = request.nextUrl.searchParams.get("userId")

    if (!userId) {
      return NextResponse.json({ error: "User ID required" }, { status: 400 })
    }

    // Mock orders data
    const orders = [
      {
        orderId: "ORD-ABC123",
        userId,
        items: [
          { name: "Paracetamol 500mg", quantity: 2, price: 45 },
          { name: "Azithromycin 500mg", quantity: 1, price: 120 },
        ],
        totalAmount: 347,
        status: "delivered",
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ]

    return NextResponse.json(orders)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}
