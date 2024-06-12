
// OrderItem - ひとつの注文商品を表す値オブジェクト
export type OrderItem = {
    itemName: string
    price: number
    quantity: number
}

export const newOrderItem = (itemName: string, price: number, quantity: number): OrderItem => {
    if (itemName === "") {
        throw new Error("商品名が空です")
    }
    if (price <= 0) {
        throw new Error("価格が0以下です")
    }
    if (quantity === 0) {
        throw new Error("数量が0です")
    }
    // 
    return { itemName, price, quantity }
}
