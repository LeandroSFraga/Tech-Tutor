import { PARADIGMA_ORIENTADO_A_OBJETOS } from '../utils/options.js';

import {
  CLASSES_CONCEPT,
  CLASSES_EXAMPLE,
} from '../utils/paradiga-orientado-objetos/classes.js';

import {
  OBJETOS_CONCEPT,
  OBJETOS_EXAMPLE,
} from '../utils/paradiga-orientado-objetos/objetos.js';

import {
  CONSTRUTORES_CONCEPT,
  CONSTRUTORES_EXAMPLE,
} from '../utils/paradiga-orientado-objetos/construtores.js';

import {
  ATRIBUTOS_CONCEPT,
  ATRIBUTOS_EXAMPLE,
} from '../utils/paradiga-orientado-objetos/atributos.js';

import {
  METODOS_CONCEPT,
  METODOS_EXAMPLE,
} from '../utils/paradiga-orientado-objetos/metodos.js';

import {
  ENCAPSULAMENTO_CONCEPT,
  ENCAPSULAMENTO_EXAMPLE,
} from '../utils/paradiga-orientado-objetos/encapsulamento.js';

import {
  HERANCA_CONCEPT,
  HERANCA_EXAMPLE,
} from '../utils/paradiga-orientado-objetos/heranca.js';

import {
  POLIMORFISMO_CONCEPT,
  POLIMORFISMO_EXAMPLE,
} from '../utils/paradiga-orientado-objetos/polimorfismo.js';

import {
  CLASSE_ABSTRATA_CONCEPT,
  CLASSE_ABSTRATA_EXAMPLE,
} from '../utils/paradiga-orientado-objetos/classe-abstrata.js';

import {
  INTERFACE_CONCEPT,
  INTERFACE_EXAMPLE,
} from '../utils/paradiga-orientado-objetos/interface.js';

import {
  EXCESSOES_CONCEPT,
  EXCESSOES_EXAMPLE,
} from '../utils/paradiga-orientado-objetos/excessoes.js';

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

const ObjetosController = (ctx, ObjetosCont) => {
  ctx.reply(OBJETOS_CONCEPT[ObjetosCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploObjetos',
          },
        ],
      ],
    },
  });
};

const ConstrutoresController = (ctx, ConstrutoresCont) => {
  ctx.reply(CONSTRUTORES_CONCEPT[ConstrutoresCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploConstrutores',
          },
        ],
      ],
    },
  });
};

const AtributosController = (ctx, AtributosCont) => {
  ctx.reply(ATRIBUTOS_CONCEPT[AtributosCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploAtributos',
          },
        ],
      ],
    },
  });
};

const MetodosController = (ctx, MetodosCont) => {
  ctx.reply(METODOS_CONCEPT[MetodosCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploMetodos',
          },
        ],
      ],
    },
  });
};

const EncapsulamentoController = (ctx, EncapsulamentoCont) => {
  ctx.reply(ENCAPSULAMENTO_CONCEPT[EncapsulamentoCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploEncapsulamento',
          },
        ],
      ],
    },
  });
};

const HerancaController = (ctx, HerancaCont) => {
  ctx.reply(HERANCA_CONCEPT[HerancaCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploHeranca',
          },
        ],
      ],
    },
  });
};

const PolimorfismoController = (ctx, PolimorfismoCont) => {
  ctx.reply(POLIMORFISMO_CONCEPT[PolimorfismoCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploPolimorfismo',
          },
        ],
      ],
    },
  });
};

const ClasseAbstrataController = (ctx, ClasseAbstrataCont) => {
  ctx.reply(CLASSE_ABSTRATA_CONCEPT[ClasseAbstrataCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploClasseAbstrata',
          },
        ],
      ],
    },
  });
};

const InterfaceController = (ctx, InterfaceCont) => {
  ctx.reply(INTERFACE_CONCEPT[InterfaceCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploInterface',
          },
        ],
      ],
    },
  });
};

const ExcessoesController = (ctx, ExcessoesCont) => {
  ctx.reply(EXCESSOES_CONCEPT[ExcessoesCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploExcessoes',
          },
        ],
      ],
    },
  });
};

const ClassesController = (ctx, ClassesCont) => {
  ctx.reply(CLASSES_CONCEPT[ClassesCont], {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Exemplo',
            callback_data: '/ExemploClasses',
          },
        ],
      ],
    },
  });
};

const ClassesExemploController = (ctx, ClassesCont) => {
  const codeMessage = CLASSES_EXAMPLE[ClassesCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploClasses',
          },
        ],
      ],
    },
  });
};

const ObjetosExemploController = (ctx, ObjetosCont) => {
  const codeMessage = OBJETOS_EXAMPLE[ObjetosCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploObjetos',
          },
        ],
      ],
    },
  });
};

const ConstrutoresExemploController = (ctx, ConstrutoresCont) => {
  const codeMessage = CONSTRUTORES_EXAMPLE[ConstrutoresCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploConstrutores',
          },
        ],
      ],
    },
  });
};

const AtributosExemploController = (ctx, AtributosCont) => {
  const codeMessage = ATRIBUTOS_EXAMPLE[AtributosCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploAtributos',
          },
        ],
      ],
    },
  });
};

const MetodosExemploController = (ctx, MetodosCont) => {
  const codeMessage = METODOS_EXAMPLE[MetodosCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploMetodos',
          },
        ],
      ],
    },
  });
};

const EncapsulamentoExemploController = (ctx, EncapsulamentoCont) => {
  const codeMessage = ENCAPSULAMENTO_EXAMPLE[EncapsulamentoCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploEncapsulamento',
          },
        ],
      ],
    },
  });
};

const HerancaExemploController = (ctx, HerancaCont) => {
  const codeMessage = HERANCA_EXAMPLE[HerancaCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploHeranca',
          },
        ],
      ],
    },
  });
};

const PolimorfismoExemploController = (ctx, PolimorfismoCont) => {
  const codeMessage = POLIMORFISMO_EXAMPLE[PolimorfismoCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploPolimorfismo',
          },
        ],
      ],
    },
  });
};

const ClasseAbstrataExemploController = (ctx, ClasseAbstrataCont) => {
  const codeMessage = CLASSE_ABSTRATA_EXAMPLE[ClasseAbstrataCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploClasseAbstrata',
          },
        ],
      ],
    },
  });
};

const InterfaceExemploController = (ctx, InterfaceCont) => {
  const codeMessage = INTERFACE_EXAMPLE[InterfaceCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploInterface',
          },
        ],
      ],
    },
  });
};

const ExcessoesExemploController = (ctx, ExcessoesCont) => {
  const codeMessage = EXCESSOES_EXAMPLE[ExcessoesCont];
  ctx.replyWithMarkdown(codeMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Explorar mais exemplos',
            callback_data: '/ExemploExcessoes',
          },
        ],
      ],
    },
  });
};

export {
  ParadigmaOrientadoAObjetosController,
  AtributosController,
  ClasseAbstrataController,
  ClassesController,
  ConstrutoresController,
  EncapsulamentoController,
  ExcessoesController,
  HerancaController,
  InterfaceController,
  MetodosController,
  ObjetosController,
  PolimorfismoController,
  AtributosExemploController,
  ClasseAbstrataExemploController,
  ClassesExemploController,
  ConstrutoresExemploController,
  EncapsulamentoExemploController,
  ExcessoesExemploController,
  HerancaExemploController,
  InterfaceExemploController,
  MetodosExemploController,
  ObjetosExemploController,
  PolimorfismoExemploController,
};
