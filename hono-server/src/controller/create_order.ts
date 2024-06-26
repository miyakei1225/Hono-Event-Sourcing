import type { Context } from 'hono';
import { create, type CreateInput } from '../usecase/create';

// let foodMenus = [
//   {
//     id: '1',
//     name: 'ラーメン',
//     content: 'ほうれん草マシがおすすめです',
//   },
//   {
//     id: '2',
//     name: 'カレー',
//     content: 'キーマカレーが好きです',
//   },
//   {
//     id: '3',
//     name: '焼肉',
//     content: 'やっぱり牛タンだよね！',
//   },
// ]

export const handleCreateOrder = async (c: Context) => {
  const input: CreateInput = await c.req.json();
  const output = await create(input);
  console.log('output', output)
  return c.json(output);
};
