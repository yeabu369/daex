import { Composer } from "grammy";
import { isPrivate } from "grammy-guard";

import { Context } from "@bot/types";
import { logCommandHandle } from "@bot/helpers/logging";

import { selectActionListKeyboard } from "@bot/keyboards";

export const composer = new Composer<Context>();

const feature = composer.filter(isPrivate);

feature.command("start", logCommandHandle, async (ctx) => {
  await ctx.replyWithChatAction("typing");
  await ctx.reply(ctx.t("welcome"));
  await ctx.reply(ctx.t("action"), {
    reply_markup: selectActionListKeyboard,
  });
});
