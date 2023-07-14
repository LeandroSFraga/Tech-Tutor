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
  EntradaSaidaController,
  EntradaSaidaExemploController,
  EstruturaControleController,
  EstruturaControleExemploController,
  FundamentosDeProgramacaoController,
  MatrizesController,
  MatrizesExemploController,
  OperadoresController,
  OperadoresExemploController,
  VariaveisController,
  VariaveisExemploController,
  VetoresController,
  VetoresExemploController,
} from './src/controllers/fundamentosProgramacao.js';
import {
  FUNDAMENTOS_DE_PROGRAMACAO,
  PARADIGMA_ORIENTADO_A_OBJETOS,
} from './src/utils/options.js';
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
import {
  ENTRADA_SAIDA_CONCEPT,
  ENTRADA_SAIDA_EXAMPLE,
} from './src/utils/fundamentos-programacao/entradaSaida.js';
import {
  ESTRUTURA_CONTROLE_CONCEPT,
  ESTRUTURA_CONTROLE_EXAMPLE,
} from './src/utils/fundamentos-programacao/estruturaControle.js';
import {
  VETORES_CONCEPT,
  VETORES_EXAMPLE,
} from './src/utils/fundamentos-programacao/vetores.js';
import {
  MATRIZES_CONCEPT,
  MATRIZES_EXAMPLE,
} from './src/utils/fundamentos-programacao/matrizes.js';
import {
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
  ParadigmaOrientadoAObjetosController,
} from './src/controllers/paradigmaOrientadoObjetos.js';
import {
  CLASSES_CONCEPT,
  CLASSES_EXAMPLE,
} from './src/utils/paradiga-orientado-objetos/classes.js';

import {
  OBJETOS_CONCEPT,
  OBJETOS_EXAMPLE,
} from './src/utils/paradiga-orientado-objetos/objetos.js';

import {
  CONSTRUTORES_CONCEPT,
  CONSTRUTORES_EXAMPLE,
} from './src/utils/paradiga-orientado-objetos/construtores.js';

import {
  ATRIBUTOS_CONCEPT,
  ATRIBUTOS_EXAMPLE,
} from './src/utils/paradiga-orientado-objetos/atributos.js';

import {
  METODOS_CONCEPT,
  METODOS_EXAMPLE,
} from './src/utils/paradiga-orientado-objetos/metodos.js';

import {
  ENCAPSULAMENTO_CONCEPT,
  ENCAPSULAMENTO_EXAMPLE,
} from './src/utils/paradiga-orientado-objetos/encapsulamento.js';

import {
  HERANCA_CONCEPT,
  HERANCA_EXAMPLE,
} from './src/utils/paradiga-orientado-objetos/heranca.js';

import {
  POLIMORFISMO_CONCEPT,
  POLIMORFISMO_EXAMPLE,
} from './src/utils/paradiga-orientado-objetos/polimorfismo.js';

import {
  CLASSE_ABSTRATA_CONCEPT,
  CLASSE_ABSTRATA_EXAMPLE,
} from './src/utils/paradiga-orientado-objetos/classe-abstrata.js';

import {
  INTERFACE_CONCEPT,
  INTERFACE_EXAMPLE,
} from './src/utils/paradiga-orientado-objetos/interface.js';

import {
  EXCESSOES_CONCEPT,
  EXCESSOES_EXAMPLE,
} from './src/utils/paradiga-orientado-objetos/excessoes.js';

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
let EntradaSaidaCont = 0;
let EntradaSaidaExemploCont = 0;
let EstruturaControleCont = 0;
let EstruturaControleExemploCont = 0;
let VetoresCont = 0;
let VetoresExemploCont = 0;
let MatrizesCont = 0;
let MatrizesExemploCont = 0;

let ClassesCont = 0;
let ClassesExemploCont = 0;
let ObjetosCont = 0;
let ObjetosExemploCont = 0;
let ConstrutoresCont = 0;
let ConstrutoresExemploCont = 0;
let AtributosCont = 0;
let AtributosExemploCont = 0;
let MetodosCont = 0;
let MetodosExemploCont = 0;
let EncapsulamentoCont = 0;
let EncapsulamentoExemploCont = 0;
let HerancaCont = 0;
let HerancaExemploCont = 0;
let PolimorfismoCont = 0;
let PolimorfismoExemploCont = 0;
let ClasseAbstrataCont = 0;
let ClasseAbstrataExemploCont = 0;
let InterfaceCont = 0;
let InterfaceExemploCont = 0;
let ExcessoesCont = 0;
let ExcessoesExemploCont = 0;

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

bot.command('Disciplinas', selectFirstOptionsController);
bot.command('FundamentosDeProgramacao', FundamentosDeProgramacaoController);

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
    case '/ParadigmaOrientadoAObjetos':
      ParadigmaOrientadoAObjetosController(ctx);
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
    case FUNDAMENTOS_DE_PROGRAMACAO.ComandosEntradaSaida.callback:
      EntradaSaidaController(ctx, EntradaSaidaCont);
      EntradaSaidaCont = (EntradaSaidaCont + 1) % ENTRADA_SAIDA_CONCEPT.length;
      break;
    case FUNDAMENTOS_DE_PROGRAMACAO.EstruturaControle.callback:
      EstruturaControleController(ctx, EstruturaControleCont);
      EstruturaControleCont =
        (EstruturaControleCont + 1) % ESTRUTURA_CONTROLE_CONCEPT.length;
      break;
    case FUNDAMENTOS_DE_PROGRAMACAO.Vetores.callback:
      VetoresController(ctx, VetoresCont);
      VetoresCont = (VetoresCont + 1) % VETORES_CONCEPT.length;
      break;
    case FUNDAMENTOS_DE_PROGRAMACAO.Matrizes.callback:
      MatrizesController(ctx, MatrizesCont);
      MatrizesCont = (MatrizesCont + 1) % MATRIZES_CONCEPT.length;
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
    case '/ExemploEntradaSaida':
      EntradaSaidaExemploController(ctx, EntradaSaidaExemploCont);
      EntradaSaidaExemploCont =
        (EntradaSaidaExemploCont + 1) % ENTRADA_SAIDA_EXAMPLE.length;
      break;
    case '/ExemploEstruturaControle':
      EstruturaControleExemploController(ctx, EstruturaControleExemploCont);
      EstruturaControleExemploCont =
        (EstruturaControleExemploCont + 1) % ESTRUTURA_CONTROLE_EXAMPLE.length;
      break;
    case '/ExemploVetores':
      VetoresExemploController(ctx, VetoresExemploCont);
      VetoresExemploCont = (VetoresExemploCont + 1) % VETORES_EXAMPLE.length;
      break;
    case '/ExemploMatrizes':
      MatrizesExemploController(ctx, MatrizesExemploCont);
      MatrizesExemploCont = (MatrizesExemploCont + 1) % MATRIZES_EXAMPLE.length;
      break;

    case PARADIGMA_ORIENTADO_A_OBJETOS.Classes.callback:
      ClassesController(ctx, ClassesCont);
      ClassesCont = (ClassesCont + 1) % CLASSES_CONCEPT.length;
      break;

    case PARADIGMA_ORIENTADO_A_OBJETOS.Objetos.callback:
      ObjetosController(ctx, ObjetosCont);
      ObjetosCont = (ObjetosCont + 1) % OBJETOS_CONCEPT.length;
      break;

    case PARADIGMA_ORIENTADO_A_OBJETOS.Construtores.callback:
      ConstrutoresController(ctx, ConstrutoresCont);
      ConstrutoresCont = (ConstrutoresCont + 1) % CONSTRUTORES_CONCEPT.length;
      break;

    case PARADIGMA_ORIENTADO_A_OBJETOS.Atributos.callback:
      AtributosController(ctx, AtributosCont);
      AtributosCont = (AtributosCont + 1) % ATRIBUTOS_CONCEPT.length;
      break;

    case PARADIGMA_ORIENTADO_A_OBJETOS.Metodos.callback:
      MetodosController(ctx, MetodosCont);
      MetodosCont = (MetodosCont + 1) % METODOS_CONCEPT.length;
      break;

    case PARADIGMA_ORIENTADO_A_OBJETOS.Encapsulamento.callback:
      EncapsulamentoController(ctx, EncapsulamentoCont);
      EncapsulamentoCont =
        (EncapsulamentoCont + 1) % ENCAPSULAMENTO_CONCEPT.length;
      break;

    case PARADIGMA_ORIENTADO_A_OBJETOS.Heranca.callback:
      HerancaController(ctx, HerancaCont);
      HerancaCont = (HerancaCont + 1) % HERANCA_CONCEPT.length;
      break;

    case PARADIGMA_ORIENTADO_A_OBJETOS.Polimorfismo.callback:
      PolimorfismoController(ctx, PolimorfismoCont);
      PolimorfismoCont = (PolimorfismoCont + 1) % POLIMORFISMO_CONCEPT.length;
      break;

    case PARADIGMA_ORIENTADO_A_OBJETOS.ClasseAbstrata.callback:
      ClasseAbstrataController(ctx, ClasseAbstrataCont);
      ClasseAbstrataCont =
        (ClasseAbstrataCont + 1) % CLASSE_ABSTRATA_CONCEPT.length;
      break;

    case PARADIGMA_ORIENTADO_A_OBJETOS.Interface.callback:
      InterfaceController(ctx, InterfaceCont);
      InterfaceCont = (InterfaceCont + 1) % INTERFACE_CONCEPT.length;
      break;

    case PARADIGMA_ORIENTADO_A_OBJETOS.Excessoes.callback:
      ExcessoesController(ctx, ExcessoesCont);
      ExcessoesCont = (ExcessoesCont + 1) % EXCESSOES_CONCEPT.length;
      break;

    case '/ExemploClasses':
      ClassesExemploController(ctx, ClassesExemploCont);
      ClassesExemploCont = (ClassesExemploCont + 1) % CLASSES_EXAMPLE.length;
      break;

    case '/ExemploObjetos':
      ObjetosExemploController(ctx, ObjetosExemploCont);
      ObjetosExemploCont = (ObjetosExemploCont + 1) % OBJETOS_EXAMPLE.length;
      break;

    case '/ExemploConstrutores':
      ConstrutoresExemploController(ctx, ConstrutoresExemploCont);
      ConstrutoresExemploCont =
        (ConstrutoresExemploCont + 1) % CONSTRUTORES_EXAMPLE.length;
      break;

    case '/ExemploAtributos':
      AtributosExemploController(ctx, AtributosExemploCont);
      AtributosExemploCont =
        (AtributosExemploCont + 1) % ATRIBUTOS_EXAMPLE.length;
      break;

    case '/ExemploMetodos':
      MetodosExemploController(ctx, MetodosExemploCont);
      MetodosExemploCont = (MetodosExemploCont + 1) % METODOS_EXAMPLE.length;
      break;

    case '/ExemploEncapsulamento':
      EncapsulamentoExemploController(ctx, EncapsulamentoExemploCont);
      EncapsulamentoExemploCont =
        (EncapsulamentoExemploCont + 1) % ENCAPSULAMENTO_EXAMPLE.length;
      break;

    case '/ExemploHeranca':
      HerancaExemploController(ctx, HerancaExemploCont);
      HerancaExemploCont = (HerancaExemploCont + 1) % HERANCA_EXAMPLE.length;
      break;

    case '/ExemploPolimorfismo':
      PolimorfismoExemploController(ctx, PolimorfismoExemploCont);
      PolimorfismoExemploCont =
        (PolimorfismoExemploCont + 1) % POLIMORFISMO_EXAMPLE.length;
      break;

    case '/ExemploClasseAbstrata':
      ClasseAbstrataExemploController(ctx, ClasseAbstrataExemploCont);
      ClasseAbstrataExemploCont =
        (ClasseAbstrataExemploCont + 1) % CLASSE_ABSTRATA_EXAMPLE.length;
      break;

    case '/ExemploInterface':
      InterfaceExemploController(ctx, InterfaceExemploCont);
      InterfaceExemploCont =
        (InterfaceExemploCont + 1) % INTERFACE_EXAMPLE.length;
      break;

    case '/ExemploExcessoes':
      ExcessoesExemploController(ctx, ExcessoesExemploCont);
      ExcessoesExemploCont =
        (ExcessoesExemploCont + 1) % EXCESSOES_EXAMPLE.length;
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
