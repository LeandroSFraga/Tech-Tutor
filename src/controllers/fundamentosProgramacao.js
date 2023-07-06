import {
  ALGORITMO_CONCEPT,
  ALGORITMO_EXAMPLE,
} from '../utils/fundamentos-programacao/algoritmo.js';
import {
  CONSTANTES_CONCEPT,
  CONSTANTES_EXAMPLE,
} from '../utils/fundamentos-programacao/constantes.js';
import {
  OPERADORES_CONCEPT,
  OPERADORES_EXAMPLE,
} from '../utils/fundamentos-programacao/operadores.js';
import {
  VARIAVEIS_CONCEPT,
  VARIAVEIS_EXAMPLE,
} from '../utils/fundamentos-programacao/variaveis.js';
import { FUNDAMENTOS_DE_PROGRAMACAO } from '../utils/options.js';

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
        [
          {
            text: FUNDAMENTOS_DE_PROGRAMACAO.Constantes.text,
            callback_data: FUNDAMENTOS_DE_PROGRAMACAO.Constantes.callback,
          },
        ],
        [
          {
            text: FUNDAMENTOS_DE_PROGRAMACAO.Variaveis.text,
            callback_data: FUNDAMENTOS_DE_PROGRAMACAO.Variaveis.callback,
          },
        ],
        [
          {
            text: FUNDAMENTOS_DE_PROGRAMACAO.Operadores.text,
            callback_data: FUNDAMENTOS_DE_PROGRAMACAO.Operadores.callback,
          },
        ],
        [
          {
            text: FUNDAMENTOS_DE_PROGRAMACAO.Expressoes.text,
            callback_data: FUNDAMENTOS_DE_PROGRAMACAO.Expressoes.callback,
          },
        ],
        [
          {
            text: FUNDAMENTOS_DE_PROGRAMACAO.ComandosEntradaSaida.text,
            callback_data:
              FUNDAMENTOS_DE_PROGRAMACAO.ComandosEntradaSaida.callback,
          },
        ],
        [
          {
            text: FUNDAMENTOS_DE_PROGRAMACAO.EstruturaControle.text,
            callback_data:
              FUNDAMENTOS_DE_PROGRAMACAO.EstruturaControle.callback,
          },
        ],
        [
          {
            text: FUNDAMENTOS_DE_PROGRAMACAO.Vetores.text,
            callback_data: FUNDAMENTOS_DE_PROGRAMACAO.Vetores.callback,
          },
        ],
        [
          {
            text: FUNDAMENTOS_DE_PROGRAMACAO.Matrizes.text,
            callback_data: FUNDAMENTOS_DE_PROGRAMACAO.Matrizes.callback,
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
            text: 'Exemplo',
            callback_data: '/ExemploAlgoritmo',
          },
        ],
      ],
    },
  });
};
const ConstantesController = (ctx, ConstantesCont) => {
  ctx.reply(CONSTANTES_CONCEPT[ConstantesCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploConstantes',
          },
        ],
      ],
    },
  });
};
const VariaveisController = (ctx, VariaveisCont) => {
  ctx.reply(VARIAVEIS_CONCEPT[VariaveisCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploVariaveis',
          },
        ],
      ],
    },
  });
};
const OperadoresController = (ctx, OperadoresCont) => {
  ctx.reply(OPERADORES_CONCEPT[OperadoresCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploOperadores',
          },
        ],
      ],
    },
  });
};

const AlgoritmoExemploController = (ctx, AlgoritmoExemploCont) => {
  const codeMessage = ALGORITMO_EXAMPLE[AlgoritmoExemploCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploAlgoritmo',
          },
        ],
      ],
    },
  });
};
const ConstantesExemploController = (ctx, ConstantesExemploCont) => {
  const codeMessage = CONSTANTES_EXAMPLE[ConstantesExemploCont];
  ctx.reply(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploConstantes',
          },
        ],
      ],
    },
  });
};
const VariaveisExemploController = (ctx, VariaveisExemploCont) => {
  const codeMessage = VARIAVEIS_EXAMPLE[VariaveisExemploCont];
  ctx.reply(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploVariaveis',
          },
        ],
      ],
    },
  });
};
const OperadoresExemploController = (ctx, OperadoresExemploCont) => {
  const codeMessage = OPERADORES_EXAMPLE[OperadoresExemploCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploOperadores',
          },
        ],
      ],
    },
  });
};

export {
  FundamentosDeProgramacaoController,
  AlgoritmoController,
  AlgoritmoExemploController,
  ConstantesController,
  ConstantesExemploController,
  VariaveisController,
  VariaveisExemploController,
  OperadoresController,
  OperadoresExemploController,
};
