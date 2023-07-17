import {
  HELP_MESSAGE,
  FIRST_OPTIONS_MESSAGE,
  WELCOME_MESSAGE,
  TOPICOS_MESSAGE,
  REFERENCES_MESSAGE,
  CONTEUDOS_MESSAGE,
} from '../utils/messages.js';
import { DISCIPLINAS } from '../utils/options.js';

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

const topicosController = (ctx) => {
  ctx.reply(TOPICOS_MESSAGE, {
    parse_mode: 'HTML',
  });
};

const referecesController = (ctx) => {
  ctx.reply(REFERENCES_MESSAGE, {
    parse_mode: 'HTML',
  });
};

const conteudosController = (ctx) => {
  ctx.reply(CONTEUDOS_MESSAGE, {
    parse_mode: 'HTML',
  });
};

const selectFirstOptionsController = (ctx) => {
  ctx.reply(FIRST_OPTIONS_MESSAGE, {
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

export {
  welcomeController,
  selectFirstOptionsController,
  helpController,
  topicosController,
  referecesController,
  conteudosController,
};
