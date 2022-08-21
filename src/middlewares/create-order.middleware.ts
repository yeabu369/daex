import { NextFunction } from "grammy";

import { Context } from "@bot/types";
import { ordersService } from "@bot/services";
import { logger } from "@bot/logger";

export const middleware = () => async (ctx: Context, next: NextFunction) => {
  if (ctx.from?.is_bot === false) {
    logger.info({
      msg: "Receved an order",
      user: ctx.from,
    });

    const { id: telegramId } = ctx.from;

    ctx.session.order = await ordersService.createOrder(telegramId);
  }

  return next();
};
