import { OrderItem } from "../valueObjects/orderItem";

// Order - 一度の注文を表すモデル
export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export const newOrder = (
  id: string,
  items: OrderItem[],
  contact: string,
  createdAt: Date
): Order => {
  if (items.length === 0) {
    throw new Error("商品が空です");
  }
  validateOrderPrice(items);
  if (contact === "") {
    throw new Error("連絡先が空です");
  }
  return { id, createdAt, updatedAt: createdAt };
};

const validateOrderPrice = (items: OrderItem[]): void => {
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  if (totalPrice === 0) {
    throw new Error("合計金額が0です");
  }
  // TODO: 金額の上限を設ける
};
