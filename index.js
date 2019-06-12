'use strict';

const TelegramBot = require('node-telegram-bot-api');
const token = '861338210:AAGkophdlKbg7BJkoPy5EFyEETAQLUTYgOk';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/work/, msg => {
  bot.sendMessage(msg.chat.id, 'works');
});
