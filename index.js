'use strict';

const TelegramBot = require('node-telegram-bot-api');
const token = '861338210:AAGkophdlKbg7BJkoPy5EFyEETAQLUTYgOk';
// const BOT_TOKEN = process.env.GB_STATUS_BOT_TOKEN;
const bot = new TelegramBot(token,{polling:true});
// const bot = new TelegramBot(BOT_TOKEN, { polling: true });

bot.onText(/\/work/, msg => {
    bot.sendMessage(msg.chat.id, 'works');
});
