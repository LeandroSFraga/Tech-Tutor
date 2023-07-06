import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { Telegraf } from 'telegraf';
import {
  welcomeController,
  selectFirstOptionsController,
  helpController,
} from './src/controllers/botController.js';
import { ERROR_MESSAGE } from './src/utils/messages.js';
import { manager } from './src/services/manager.js';
import {
  ALGORITMO_CONCEPT,
  ALGORITMO_EXAMPLE,
} from './src/utils/fundamentos-programacao/algoritmo.js';
import {
  AlgoritmoController,
  AlgoritmoExemploController,
  ConstantesController,
  ConstantesExemploController,
  FundamentosDeProgramacaoController,
  OperadoresController,
  OperadoresExemploController,
  VariaveisController,
  VariaveisExemploController,
} from './src/controllers/fundamentosProgramacao.js';
import { FUNDAMENTOS_DE_PROGRAMACAO } from './src/utils/options.js';
import {
  CONSTANTES_CONCEPT,
  CONSTANTES_EXAMPLE,
} from './src/utils/fundamentos-programacao/constantes.js';
import {
  VARIAVEIS_CONCEPT,
  VARIAVEIS_EXAMPLE,
} from './src/utils/fundamentos-programacao/variaveis.js';
import {
  OPERADORES_CONCEPT,
  OPERADORES_EXAMPLE,
} from './src/utils/fundamentos-programacao/operadores.js';

const bot = new Telegraf(process.env.BOT_TOKEN);

// bot.telegram.sendMessage(process.env.CHAT_ID, 'Hello Telegram!');
let AlgoritmoCont = 0;
let AlgoritmoExemploCont = 0;
let ConstantesCont = 0;
let ConstantesExemploCont = 0;
let VariaveisCont = 0;
let VariaveisExemploCont = 0;
let OperadoresCont = 0;
let OperadoresExemploCont = 0;

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
    case FUNDAMENTOS_DE_PROGRAMACAO.Constantes.callback:
      ConstantesController(ctx, ConstantesCont);
      ConstantesCont = (ConstantesCont + 1) % CONSTANTES_CONCEPT.length;
      break;
    case FUNDAMENTOS_DE_PROGRAMACAO.Variaveis.callback:
      VariaveisController(ctx, VariaveisCont);
      VariaveisCont = (VariaveisCont + 1) % VARIAVEIS_CONCEPT.length;
      break;
    case FUNDAMENTOS_DE_PROGRAMACAO.Operadores.callback:
      OperadoresController(ctx, OperadoresCont);
      OperadoresCont = (OperadoresCont + 1) % OPERADORES_CONCEPT.length;
      break;
    case '/ExemploAlgoritmo':
      AlgoritmoExemploController(ctx, AlgoritmoExemploCont);
      AlgoritmoExemploCont =
        (AlgoritmoExemploCont + 1) % ALGORITMO_EXAMPLE.length;
      break;
    case '/ExemploConstantes':
      ConstantesExemploController(ctx, ConstantesExemploCont);
      ConstantesExemploCont =
        (ConstantesExemploCont + 1) % CONSTANTES_EXAMPLE.length;
      break;
    case '/ExemploConstantes':
      ConstantesExemploController(ctx, ConstantesExemploCont);
      ConstantesExemploCont =
        (ConstantesExemploCont + 1) % CONSTANTES_EXAMPLE.length;
      break;
    case '/ExemploVariaveis':
      VariaveisExemploController(ctx, VariaveisExemploCont);
      VariaveisExemploCont =
        (VariaveisExemploCont + 1) % VARIAVEIS_EXAMPLE.length;
      break;
    case '/ExemploOperadores':
      OperadoresExemploController(ctx, OperadoresExemploCont);
      OperadoresExemploCont =
        (OperadoresExemploCont + 1) % OPERADORES_EXAMPLE.length;
      break;

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
