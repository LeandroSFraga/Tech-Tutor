import {
  ORDENACAO_CONCEPT,
  ORDENACAO_EXAMPLE,
} from '../utils/estrutura-de-dados-I/algoritmos-ordenacao.js';
import {
  FILAS_CONCEPT,
  FILAS_EXAMPLE,
} from '../utils/estrutura-de-dados-I/filas.js';
import {
  LISTAS_CONCEPT,
  LISTAS_EXAMPLE,
} from '../utils/estrutura-de-dados-I/listas.js';
import {
  LISTAS_ENCADEADAS_CONCEPT,
  LISTAS_ENCADEADAS_EXAMPLE,
} from '../utils/estrutura-de-dados-I/listas-encadeadas.js';
import {
  PILHAS_CONCEPT,
  PILHAS_EXAMPLE,
} from '../utils/estrutura-de-dados-I/pilhas.js';
import {
  RECURSIVIDADE_CONCEPT,
  RECURSIVIDADE_EXAMPLE,
} from '../utils/estrutura-de-dados-I/recursividade.js';
import { ESTRUTURA_DE_DADOS_I } from '../utils/options.js';

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

const RecursividadeController = (ctx, RecursividadeCont) => {
  ctx.reply(RECURSIVIDADE_CONCEPT[RecursividadeCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploRecursividade',
          },
        ],
      ],
    },
  });
};

const ListasController = (ctx, ListasCont) => {
  ctx.reply(LISTAS_CONCEPT[ListasCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploListas',
          },
        ],
      ],
    },
  });
};

const ListasEncadeadasController = (ctx, ListasEncadeadasCont) => {
  ctx.reply(LISTAS_ENCADEADAS_CONCEPT[ListasEncadeadasCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploListasEncadeadas',
          },
        ],
      ],
    },
  });
};

const PilhasController = (ctx, PilhasCont) => {
  ctx.reply(PILHAS_CONCEPT[PilhasCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploPilhas',
          },
        ],
      ],
    },
  });
};

const FilasController = (ctx, FilasCont) => {
  ctx.reply(FILAS_CONCEPT[FilasCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploFilas',
          },
        ],
      ],
    },
  });
};

const AlgoritmosOrdenacaoController = (ctx, AlgoritmosOrdenacaoCont) => {
  ctx.reply(ORDENACAO_CONCEPT[AlgoritmosOrdenacaoCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploAlgoritmosOrdenacao',
          },
        ],
      ],
    },
  });
};

const RecursividadeExemploController = (ctx, RecursividadeCont) => {
  const codeMessage = RECURSIVIDADE_EXAMPLE[RecursividadeCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploRecursividade',
          },
        ],
      ],
    },
  });
};

const ListasExemploController = (ctx, ListasCont) => {
  const codeMessage = LISTAS_EXAMPLE[ListasCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploListas',
          },
        ],
      ],
    },
  });
};

const ListasEncadeadasExemploController = (ctx, ListasEncadeadasCont) => {
  const codeMessage = LISTAS_ENCADEADAS_EXAMPLE[ListasEncadeadasCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploListasEncadeadas',
          },
        ],
      ],
    },
  });
};

const PilhasExemploController = (ctx, PilhasCont) => {
  const codeMessage = PILHAS_EXAMPLE[PilhasCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploPilhas',
          },
        ],
      ],
    },
  });
};

const FilasExemploController = (ctx, FilasCont) => {
  const codeMessage = FILAS_EXAMPLE[FilasCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploFilas',
          },
        ],
      ],
    },
  });
};

const AlgoritmosOrdenacaoExemploController = (ctx, AlgoritmosOrdenacaoCont) => {
  const codeMessage = ORDENACAO_EXAMPLE[AlgoritmosOrdenacaoCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploAlgoritmosOrdenacao',
          },
        ],
      ],
    },
  });
};

export {
  EstruturaDeDadosIController,
  AlgoritmosOrdenacaoController,
  AlgoritmosOrdenacaoExemploController,
  FilasExemploController,
  FilasController,
  ListasEncadeadasController,
  ListasEncadeadasExemploController,
  ListasController,
  ListasExemploController,
  PilhasController,
  PilhasExemploController,
  RecursividadeController,
  RecursividadeExemploController,
};
