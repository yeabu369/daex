import { Composer } from "grammy";
import { isPrivate } from "grammy-guard";

import { Context } from "@bot/types";
import { selectOrderSideKeyboard } from "@bot/keyboards";

export const composer = new Composer<Context>();

const feature = composer.filter(isPrivate);

feature.hears("Place Order", async (ctx) => {
  await ctx.replyWithChatAction("typing");
  await ctx.reply(ctx.t("order"), {
    reply_markup: selectOrderSideKeyboard,
  });
});
