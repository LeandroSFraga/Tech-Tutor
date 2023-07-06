import { PARADIGMA_ORIENTADO_A_OBJETOS } from '../utils/options';

const ParadigmaOrientadoAObjetosController = (ctx) => {
  ctx.reply(PARADIGMA_ORIENTADO_A_OBJETOS.MensagemPrincipal, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: PARADIGMA_ORIENTADO_A_OBJETOS.Classes.text,
            callback_data: PARADIGMA_ORIENTADO_A_OBJETOS.Classes.callback,
          },
        ],
        [
          {
            text: PARADIGMA_ORIENTADO_A_OBJETOS.Objetos.text,
            callback_data: PARADIGMA_ORIENTADO_A_OBJETOS.Objetos.callback,
          },
        ],
        [
          {
            text: PARADIGMA_ORIENTADO_A_OBJETOS.Construtores.text,
            callback_data: PARADIGMA_ORIENTADO_A_OBJETOS.Construtores.callback,
          },
        ],
        [
          {
            text: PARADIGMA_ORIENTADO_A_OBJETOS.Atributos.text,
            callback_data: PARADIGMA_ORIENTADO_A_OBJETOS.Atributos.callback,
          },
        ],
        [
          {
            text: PARADIGMA_ORIENTADO_A_OBJETOS.Metodos.text,
            callback_data: PARADIGMA_ORIENTADO_A_OBJETOS.Metodos.callback,
          },
        ],
        [
          {
            text: PARADIGMA_ORIENTADO_A_OBJETOS.Encapsulamento.text,
            callback_data:
              PARADIGMA_ORIENTADO_A_OBJETOS.Encapsulamento.callback,
          },
        ],
        [
          {
            text: PARADIGMA_ORIENTADO_A_OBJETOS.Heranca.text,
            callback_data: PARADIGMA_ORIENTADO_A_OBJETOS.Heranca.callback,
          },
        ],
        [
          {
            text: PARADIGMA_ORIENTADO_A_OBJETOS.Polimorfismo.text,
            callback_data: PARADIGMA_ORIENTADO_A_OBJETOS.Polimorfismo.callback,
          },
        ],
        [
          {
            text: PARADIGMA_ORIENTADO_A_OBJETOS.ClasseAbstrata.text,
            callback_data:
              PARADIGMA_ORIENTADO_A_OBJETOS.ClasseAbstrata.callback,
          },
        ],
        [
          {
            text: PARADIGMA_ORIENTADO_A_OBJETOS.Interface.text,
            callback_data: PARADIGMA_ORIENTADO_A_OBJETOS.Interface.callback,
          },
        ],
        [
          {
            text: PARADIGMA_ORIENTADO_A_OBJETOS.Excessoes.text,
            callback_data: PARADIGMA_ORIENTADO_A_OBJETOS.Excessoes.callback,
          },
        ],
      ],
    },
    parse_mode: 'HTML',
  });
};

export { ParadigmaOrientadoAObjetosController };
