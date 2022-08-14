import { Prisma } from "@prisma/client";
import { prisma } from "@bot/prisma";

// TODO: Create a function that creates an order
export const createOrder = async (data: Prisma.OrderCreateInput) => {
  return prisma.order.create({
    data,
  });
};

// TODO: Create a function to update an order
export const updateOrderByTelegramId = async (
  orderId: number,
  data: Prisma.OrderUpdateInput
) => {
  return prisma.order.updateMany({
    where: {
      id: orderId,
    },
    data,
  });
};

// TODO: Create a function that gets open orders
export const getOpenOrders = async () => {
  return prisma.order.findMany({
    where: {
      status: "OPEN",
    },
  });
};
