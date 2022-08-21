import prisma from "@prisma/client";

export interface SessionData {
  languageCode?: string;
  order?: prisma.Order;
}
