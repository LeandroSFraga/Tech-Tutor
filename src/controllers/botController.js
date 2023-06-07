import {
  ALGORITMO_CONCEPT,
  ALGORITMO_EXAMPLE,
  HELP_MESSAGE,
  SELECT_OPTION_MESSAGE,
  WELCOME_MESSAGE,
} from '../utils/messages.js';
import { DISCIPLINAS, FUNDAMENTOS_DE_PROGRAMACAO } from '../utils/options.js';

const welcomeController = async (ctx) => {
  try {
    await ctx.reply(WELCOME_MESSAGE, {
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Vamos começar', callback_data: '/Comecar' }],
        ],
      },
    });
    await ctx.replyWithSticker(
      'CAACAgEAAxkBAAEJJsxkdT2HTzuccaiMkYlTclwjKOEW1AACBgADWqoJTIJu85usx4gqLwQ'
    );
  } catch (error) {
    console.log(error);
  }
};

const helpController = (ctx) => {
  ctx.reply(HELP_MESSAGE, {
    parse_mode: 'HTML',
  });
};

const selectOptionController = (ctx) => {
  ctx.reply(SELECT_OPTION_MESSAGE, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: DISCIPLINAS.FundamentosDeProgramacao.text,
            callback_data: DISCIPLINAS.FundamentosDeProgramacao.callback,
          },
        ],
        [
          {
            text: DISCIPLINAS.ParadigmaOrientadoAObjetos.text,
            callback_data: DISCIPLINAS.ParadigmaOrientadoAObjetos.callback,
          },
        ],
        [
          {
            text: DISCIPLINAS.EstruturaDeDadosI.text,
            callback_data: DISCIPLINAS.EstruturaDeDadosI.callback,
          },
        ],
        [
          {
            text: DISCIPLINAS.EstruturaDeDadosII.text,
            callback_data: DISCIPLINAS.EstruturaDeDadosII.callback,
          },
        ],
      ],
    },
  });
};

const FundamentosDeProgramacaoController = (ctx) => {
  ctx.reply(FUNDAMENTOS_DE_PROGRAMACAO.MensagemPrincipal, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: FUNDAMENTOS_DE_PROGRAMACAO.Algoritmos.text,
            callback_data: FUNDAMENTOS_DE_PROGRAMACAO.Algoritmos.callback,
          },
        ],
      ],
    },
    parse_mode: 'HTML',
  });
};

const AlgoritmoController = (ctx, AlgoritmoCont) => {
  ctx.reply(ALGORITMO_CONCEPT[AlgoritmoCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Outra Resposta',
            callback_data: FUNDAMENTOS_DE_PROGRAMACAO.Algoritmos.callback,
          },
        ],
        [
          {
            text: 'Resposta gerada por IA',
            callback_data: '/IAAlgoritmo',
          },
        ],
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploAlgoritmo',
          },
        ],
      ],
    },
  });
};

const AlgoritmoExemploController = (ctx, AlgoritmoExemploCont) => {
  const codeMessage =
    'Exemplo de Algoritmo:\n```\n' +
    ALGORITMO_EXAMPLE[AlgoritmoExemploCont] +
    '\n```';
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Outra Resposta',
            callback_data: FUNDAMENTOS_DE_PROGRAMACAO.Algoritmos.callback,
          },
        ],
        [
          {
            text: 'Resposta gerada por IA',
            callback_data: '/IAAlgoritmo',
          },
        ],
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploAlgoritmo',
          },
        ],
      ],
    },
  });
};

export {
  welcomeController,
  selectOptionController,
  FundamentosDeProgramacaoController,
  helpController,
  AlgoritmoController,
  AlgoritmoExemploController,
};
