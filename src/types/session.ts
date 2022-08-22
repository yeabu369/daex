import { Order, Prisma } from "@prisma/client";

export interface SessionData {
  languageCode?: string;
  order?: Omit<Order, "id" | "userId"> | { userId: number };
}
