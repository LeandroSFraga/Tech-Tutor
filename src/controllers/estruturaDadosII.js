import { ESTRUTURA_DE_DADOS_II } from '../utils/options';

const EstruturaDeDadosIIController = (ctx) => {
  ctx.reply(ESTRUTURA_DE_DADOS_II.MensagemPrincipal, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: ESTRUTURA_DE_DADOS_II.Arvore.text,
            callback_data: ESTRUTURA_DE_DADOS_II.Arvore.callback,
          },
        ],
        [
          {
            text: ESTRUTURA_DE_DADOS_II.ArvoreBinariaBusca.text,
            callback_data: ESTRUTURA_DE_DADOS_II.ArvoreBinariaBusca.callback,
          },
        ],
        [
          {
            text: ESTRUTURA_DE_DADOS_II.ArvoreAVL.text,
            callback_data: ESTRUTURA_DE_DADOS_II.ArvoreAVL.callback,
          },
        ],
        [
          {
            text: ESTRUTURA_DE_DADOS_II.ArvoreVeremelhoPreto.text,
            callback_data: ESTRUTURA_DE_DADOS_II.ArvoreVeremelhoPreto.callback,
          },
        ],
        [
          {
            text: ESTRUTURA_DE_DADOS_II.ArvoreB.text,
            callback_data: ESTRUTURA_DE_DADOS_II.ArvoreB.callback,
          },
        ],
        [
          {
            text: ESTRUTURA_DE_DADOS_II.Heap.text,
            callback_data: ESTRUTURA_DE_DADOS_II.Heap.callback,
          },
        ],
        [
          {
            text: ESTRUTURA_DE_DADOS_II.TabelaHash.text,
            callback_data: ESTRUTURA_DE_DADOS_II.TabelaHash.callback,
          },
        ],
      ],
    },
    parse_mode: 'HTML',
  });
};
export { EstruturaDeDadosIIController };
