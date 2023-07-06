import { ESTRUTURA_DE_DADOS_I } from '../utils/options';

const EstruturaDeDadosIController = (ctx) => {
  ctx.reply(ESTRUTURA_DE_DADOS_I.MensagemPrincipal, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: ESTRUTURA_DE_DADOS_I.Recursividade.text,
            callback_data: ESTRUTURA_DE_DADOS_I.Recursividade.callback,
          },
        ],
        [
          {
            text: ESTRUTURA_DE_DADOS_I.Listas.text,
            callback_data: ESTRUTURA_DE_DADOS_I.Listas.callback,
          },
        ],
        [
          {
            text: ESTRUTURA_DE_DADOS_I.ListasEncadeadas.text,
            callback_data: ESTRUTURA_DE_DADOS_I.ListasEncadeadas.callback,
          },
        ],
        [
          {
            text: ESTRUTURA_DE_DADOS_I.Pilhas.text,
            callback_data: ESTRUTURA_DE_DADOS_I.Pilhas.callback,
          },
        ],
        [
          {
            text: ESTRUTURA_DE_DADOS_I.Filas.text,
            callback_data: ESTRUTURA_DE_DADOS_I.Filas.callback,
          },
        ],
        [
          {
            text: ESTRUTURA_DE_DADOS_I.AlgoritmosOrdenacao.text,
            callback_data: ESTRUTURA_DE_DADOS_I.AlgoritmosOrdenacao.callback,
          },
        ],
      ],
    },
    parse_mode: 'HTML',
  });
};

export { EstruturaDeDadosIController };
