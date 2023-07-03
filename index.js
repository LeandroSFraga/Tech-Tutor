import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { Telegraf } from 'telegraf';
import {
  welcomeController,
  selectFirstOptionsController,
  FundamentosDeProgramacaoController,
  helpController,
  AlgoritmoController,
  AlgoritmoExemploController,
} from './src/controllers/botController.js';
import { FUNDAMENTOS_DE_PROGRAMACAO } from './src/utils/options.js';
import {
  ALGORITMO_CONCEPT,
  ALGORITMO_EXAMPLE,
  ERROR_MESSAGE,
} from './src/utils/messages.js';
import { manager } from './src/services/manager.js';

const bot = new Telegraf(process.env.BOT_TOKEN);

// bot.telegram.sendMessage(process.env.CHAT_ID, 'Hello Telegram!');
let AlgoritmoCont = 0;
let AlgoritmoExemploCont = 0;

manager.train();
manager.save();

async function manageMessage(message) {
  try {
    const response = await manager.process('pt', message);
    return response;
  } catch (error) {
    console.log('Ocorreu um erro:', error);
  }
}

bot.start(welcomeController);
bot.help(helpController);

bot.command('disciplinas', selectFirstOptionsController);

bot.on('text', async (ctx) => {
  const message = ctx.update.message.text;
  try {
    const resposta = await manageMessage(message);
    if (resposta.answer) {
      ctx.reply(resposta.answer, {
        parse_mode: 'HTML',
      });
    } else {
      ctx.reply(ERROR_MESSAGE, {
        parse_mode: 'HTML',
      });
    }
  } catch (error) {
    console.log('Ocorreu um erro:', error);
  }
});

bot.on('callback_query', (ctx) => {
  const selectedOption = ctx.callbackQuery.data;

  switch (selectedOption) {
    case '/Comecar':
      selectFirstOptionsController(ctx);
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
