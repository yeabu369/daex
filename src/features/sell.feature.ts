import { Composer } from "grammy";
import { isPrivate } from "grammy-guard";

import { Context } from "@bot/types";

import { selectCryptoKeyboard } from "@bot/keyboards";

export const composer = new Composer<Context>();

const feature = composer.filter(isPrivate);

feature.hears(["Sell", "sell", "S", "s"], async (ctx) => {
  await ctx.replyWithChatAction("typing");
  await ctx.reply(ctx.t("sell"), {
    reply_markup: selectCryptoKeyboard,
  });
});

feature.command("sell", async (ctx) => {
  await ctx.replyWithChatAction("typing");
  await ctx.reply(ctx.t("sell"), {
    reply_markup: selectCryptoKeyboard,
  });
});
