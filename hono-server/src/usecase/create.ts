import { newOrderItem } from "../domain/valueObjects/orderItem"

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

export const create = async (input: CreateInput): Promise<CreateOutput> => {
  console.log('create input', input)
  const orderItems = createOrderItemsValueObject(input)
  console.log('orderItems', orderItems)

	// STEP: 注文作成コマンドを生成
	// STEP: 注文の集約を生成
	// STEP: 集約にコマンドを渡して実行することで、集約の状態が変化する
	// STEP: 集約を永続化
  return {
    id: '111111',
  }
}

const createOrderItemsValueObject = (createInput: CreateInput): OrderItem[] => {
  const orderItems = createInput.orderItems.map((orderItem) => {
    const { itemName, price, quantity } = orderItem
    const orderItemValueObject = newOrderItem(itemName, price, quantity)
    return orderItemValueObject
  })
  return orderItems
}
