export type CreateInput = {
  orderItems: OrderItem[]
  contact: string
}

export type OrderItem = {
  itemName: string
  price: number
  quantity: number
}

export type CreateOutput = {
  id: string
}
