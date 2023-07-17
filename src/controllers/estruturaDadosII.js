import { ARVORE_CONCEPT } from '../utils/estrutura-de-dados-II/arvore.js';
import {
  ARVORE_AVL_CONCEPT,
  ARVORE_AVL_EXAMPLE,
} from '../utils/estrutura-de-dados-II/arvore-avl.js';
import {
  ARVORE_B_CONCEPT,
  ARVORE_B_EXAMPLE,
} from '../utils/estrutura-de-dados-II/arvore-b.js';
import {
  ARVORE_BINARIA_BUSCA_CONCEPT,
  ARVORE_BINARIA_BUSCA_EXAMPLE,
} from '../utils/estrutura-de-dados-II/arvore-binaria-busca.js';
import {
  ARVORE_VERMELHO_PRETO_CONCEPT,
  ARVORE_VERMELHO_PRETO_EXAMPLE,
} from '../utils/estrutura-de-dados-II/arvore-vermelho-preto.js';
import {
  HEAP_CONCEPT,
  HEAP_EXAMPLE,
} from '../utils/estrutura-de-dados-II/heap.js';
import {
  TABELAS_HASH_CONCEPT,
  TABELAS_HASH_EXAMPLE,
} from '../utils/estrutura-de-dados-II/tabela-hash.js';
import { ESTRUTURA_DE_DADOS_II } from '../utils/options.js';

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
            text: ESTRUTURA_DE_DADOS_II.ArvoreVermelhoPreto.text,
            callback_data: ESTRUTURA_DE_DADOS_II.ArvoreVermelhoPreto.callback,
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

const ArvoreController = (ctx, ArvoreCont) => {
  ctx.reply(ARVORE_CONCEPT[ArvoreCont]);
};

const ArvoreBinariaBuscaController = (ctx, ArvoreBinariaBuscaCont) => {
  ctx.reply(ARVORE_BINARIA_BUSCA_CONCEPT[ArvoreBinariaBuscaCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploArvoreBinariaBusca',
          },
        ],
      ],
    },
  });
};

const ArvoreAVLController = (ctx, ArvoreAVLCont) => {
  ctx.reply(ARVORE_AVL_CONCEPT[ArvoreAVLCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploArvoreAVL',
          },
        ],
      ],
    },
  });
};

const ArvoreVermelhoPretoController = (ctx, ArvoreVermelhoPretoCont) => {
  ctx.reply(ARVORE_VERMELHO_PRETO_CONCEPT[ArvoreVermelhoPretoCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploArvoreVermelhoPreto',
          },
        ],
      ],
    },
  });
};

const ArvoreBController = (ctx, ArvoreBCont) => {
  ctx.reply(ARVORE_B_CONCEPT[ArvoreBCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploArvoreB',
          },
        ],
      ],
    },
  });
};

const HeapController = (ctx, HeapCont) => {
  ctx.reply(HEAP_CONCEPT[HeapCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploHeap',
          },
        ],
      ],
    },
  });
};

const TabelaHashController = (ctx, TabelaHashCont) => {
  ctx.reply(TABELAS_HASH_CONCEPT[TabelaHashCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploTabelaHash',
          },
        ],
      ],
    },
  });
};

const ArvoreBinariaBuscaExemploController = (ctx, ArvoreBinariaBuscaCont) => {
  const codeMessage = ARVORE_BINARIA_BUSCA_EXAMPLE[ArvoreBinariaBuscaCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploArvoreBinariaBusca',
          },
        ],
      ],
    },
  });
};

const ArvoreAVLExemploController = (ctx, ArvoreAVLCont) => {
  const codeMessage = ARVORE_AVL_EXAMPLE[ArvoreAVLCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploArvoreAVL',
          },
        ],
      ],
    },
  });
};

const ArvoreVermelhoPretoExemploController = (ctx, ArvoreVermelhoPretoCont) => {
  const codeMessage = ARVORE_VERMELHO_PRETO_EXAMPLE[ArvoreVermelhoPretoCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploArvoreVermelhoPreto',
          },
        ],
      ],
    },
  });
};

const ArvoreBExemploController = (ctx, ArvoreBCont) => {
  const codeMessage = ARVORE_B_EXAMPLE[ArvoreBCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploArvoreB',
          },
        ],
      ],
    },
  });
};

const HeapExemploController = (ctx, HeapCont) => {
  const codeMessage = HEAP_EXAMPLE[HeapCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploHeap',
          },
        ],
      ],
    },
  });
};

const TabelaHashExemploController = (ctx, TabelaHashCont) => {
  const codeMessage = TABELAS_HASH_EXAMPLE[TabelaHashCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploTabelaHash',
          },
        ],
      ],
    },
  });
};
export {
  EstruturaDeDadosIIController,
  ArvoreAVLController,
  ArvoreAVLExemploController,
  ArvoreBController,
  ArvoreBExemploController,
  ArvoreBinariaBuscaController,
  ArvoreBinariaBuscaExemploController,
  ArvoreController,
  ArvoreVermelhoPretoController,
  ArvoreVermelhoPretoExemploController,
  HeapController,
  HeapExemploController,
  TabelaHashController,
  TabelaHashExemploController,
};
