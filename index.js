import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { Telegraf } from 'telegraf';
import {
  welcomeController,
  selectOptionController,
  FundamentosDeProgramacaoController,
  helpController,
  AlgoritmoController,
  AlgoritmoExemploController,
} from './src/controllers/botController.js';
import { FUNDAMENTOS_DE_PROGRAMACAO } from './src/utils/options.js';
import { ALGORITMO_CONCEPT, ALGORITMO_EXAMPLE } from './src/utils/messages.js';

const bot = new Telegraf(process.env.BOT_TOKEN);
// bot.telegram.sendMessage(process.env.CHAT_ID, 'Hello Telegram!');
let AlgoritmoCont = 0;
let AlgoritmoExemploCont = 0;

bot.start(welcomeController);
bot.help(helpController);
bot.command('disciplinas', selectOptionController);

bot.on('callback_query', (ctx) => {
  const selectedOption = ctx.callbackQuery.data;

  switch (selectedOption) {
    case '/Comecar':
      selectOptionController(ctx);
      break;
    case '/FundamentosDeProgramacao':
      FundamentosDeProgramacaoController(ctx);
      break;
    case FUNDAMENTOS_DE_PROGRAMACAO.Algoritmos.callback:
      AlgoritmoController(ctx, AlgoritmoCont);
      AlgoritmoCont = (AlgoritmoCont + 1) % ALGORITMO_CONCEPT.length;
      break;
    case '/ExemploAlgoritmo':
      AlgoritmoExemploController(ctx, AlgoritmoExemploCont);
      AlgoritmoExemploCont =
        (AlgoritmoExemploCont + 1) % ALGORITMO_EXAMPLE.length;

    // case '/ParadigmaOrientadoAObjetos':
    //   ctx.reply(selectedOption);
    // case '/EstruturaDeDadosI':
    //   ctx.reply(selectedOption);
    // case '/EstruturaDeDadosII':
    //   ctx.reply(selectedOption);
  }
});

bot.launch();

// // Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'));
// process.once('SIGTERM', () => bot.stop('SIGTERM'));
