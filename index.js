import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { Telegraf } from 'telegraf';
import {
  welcomeController,
  selectFirstOptionsController,
  helpController,
  topicosController,
  referecesController,
  conteudosController,
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
  ESTRUTURA_DE_DADOS_I,
  ESTRUTURA_DE_DADOS_II,
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
import {
  RECURSIVIDADE_CONCEPT,
  RECURSIVIDADE_EXAMPLE,
} from './src/utils/estrutura-de-dados-I/recursividade.js';
import {
  LISTAS_CONCEPT,
  LISTAS_EXAMPLE,
} from './src/utils/estrutura-de-dados-I/listas.js';
import {
  LISTAS_ENCADEADAS_CONCEPT,
  LISTAS_ENCADEADAS_EXAMPLE,
} from './src/utils/estrutura-de-dados-I/listas-encadeadas.js';
import {
  PILHAS_CONCEPT,
  PILHAS_EXAMPLE,
} from './src/utils/estrutura-de-dados-I/pilhas.js';
import {
  FILAS_CONCEPT,
  FILAS_EXAMPLE,
} from './src/utils/estrutura-de-dados-I/filas.js';
import { ORDENACAO_EXAMPLE } from './src/utils/estrutura-de-dados-I/algoritmos-ordenacao.js';
import {
  EstruturaDeDadosIController,
  ListasController,
  RecursividadeController,
  AlgoritmosOrdenacaoController,
  AlgoritmosOrdenacaoExemploController,
  FilasController,
  FilasExemploController,
  ListasEncadeadasController,
  ListasEncadeadasExemploController,
  ListasExemploController,
  PilhasController,
  PilhasExemploController,
  RecursividadeExemploController,
} from './src/controllers/estruturaDadosI.js';
import {
  ArvoreAVLController,
  ArvoreAVLExemploController,
  ArvoreBController,
  ArvoreBExemploController,
  ArvoreBinariaBuscaController,
  ArvoreBinariaBuscaExemploController,
  ArvoreController,
  ArvoreVermelhoPretoController,
  ArvoreVermelhoPretoExemploController,
  EstruturaDeDadosIIController,
  HeapController,
  HeapExemploController,
  TabelaHashController,
  TabelaHashExemploController,
} from './src/controllers/estruturaDadosII.js';
import { ARVORE_CONCEPT } from './src/utils/estrutura-de-dados-II/arvore.js';
import {
  ARVORE_BINARIA_BUSCA_CONCEPT,
  ARVORE_BINARIA_BUSCA_EXAMPLE,
} from './src/utils/estrutura-de-dados-II/arvore-binaria-busca.js';
import {
  ARVORE_AVL_CONCEPT,
  ARVORE_AVL_EXAMPLE,
} from './src/utils/estrutura-de-dados-II/arvore-avl.js';
import {
  ARVORE_VERMELHO_PRETO_CONCEPT,
  ARVORE_VERMELHO_PRETO_EXAMPLE,
} from './src/utils/estrutura-de-dados-II/arvore-vermelho-preto.js';
import {
  ARVORE_B_CONCEPT,
  ARVORE_B_EXAMPLE,
} from './src/utils/estrutura-de-dados-II/arvore-b.js';
import {
  HEAP_CONCEPT,
  HEAP_EXAMPLE,
} from './src/utils/estrutura-de-dados-II/heap.js';
import {
  TABELAS_HASH_CONCEPT,
  TABELAS_HASH_EXAMPLE,
} from './src/utils/estrutura-de-dados-II/tabela-hash.js';

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

let RecursividadeCont = 0;
let RecursividadeExemploCont = 0;
let ListasCont = 0;
let ListasExemploCont = 0;
let ListasEncadeadasCont = 0;
let ListasEncadeadasExemploCont = 0;
let PilhasCont = 0;
let PilhasExemploCont = 0;
let FilasCont = 0;
let FilasExemploCont = 0;
let AlgoritmosOrdenacaoCont = 0;
let AlgoritmosOrdenacaoExemploCont = 0;

let ArvoresCont = 0;
let ArvoreBinariaBuscaCont = 0;
let ArvoreBinariaBuscaExemploCont = 0;
let ArvoreAVLCont = 0;
let ArvoreAVLExemploCont = 0;
let ArvoreVermelhoPretoCont = 0;
let ArvoreVermelhoPretoExemploCont = 0;
let ArvoreBCont = 0;
let ArvoreBExemploCont = 0;
let HeapCont = 0;
let HeapExemploCont = 0;
let TabelaHashCont = 0;
let TabelaHashExemploCont = 0;

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

const handleMessageNLP = async (ctx) => {
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
};

bot.command('modulos', selectFirstOptionsController);
bot.command('conteudos', conteudosController);

bot.command('FundamentosDeProgramacao', FundamentosDeProgramacaoController);
bot.command('ParadigmaOrientadoAObjetos', FundamentosDeProgramacaoController);
bot.command('EstruturaDeDadosI', EstruturaDeDadosIController);
bot.command('EstruturaDeDadosII', EstruturaDeDadosIIController);

bot.command('topicos', topicosController);
bot.command('referencias', referecesController);

bot.command('Algoritmo', (ctx) => AlgoritmoController(ctx, AlgoritmoCont));
bot.command('Constantes', (ctx) => ConstantesController(ctx, ConstantesCont));
bot.command('Variaveis', (ctx) => VariaveisController(ctx, VariaveisCont));
bot.command('Operadores', (ctx) => OperadoresController(ctx, OperadoresCont));
bot.command('ComandosES', (ctx) =>
  EntradaSaidaController(ctx, EntradaSaidaCont)
);
bot.command('EstruturasControle', (ctx) =>
  EstruturaControleController(ctx, EstruturaControleCont)
);
bot.command('Vetores', (ctx) => VetoresController(ctx, VetoresCont));
bot.command('Matrizes', (ctx) => MatrizesController(ctx, MatrizesCont));
bot.command('Classes', (ctx) => ClassesController(ctx, ClassesCont));
bot.command('Objetos', (ctx) => ObjetosController(ctx, ObjetosCont));
bot.command('Construtores', (ctx) =>
  ConstrutoresController(ctx, ConstrutoresCont)
);
bot.command('Atributos', (ctx) => AtributosController(ctx, AtributosCont));
bot.command('Metodos', (ctx) => MetodosController(ctx, MetodosCont));
bot.command('Encapsulamento', (ctx) =>
  EncapsulamentoController(ctx, EncapsulamentoCont)
);
bot.command('Heranca', (ctx) => HerancaController(ctx, HerancaCont));
bot.command('Polimorfismo', (ctx) =>
  PolimorfismoController(ctx, PolimorfismoCont)
);
bot.command('ClasseAbstrata', (ctx) =>
  ClasseAbstrataController(ctx, ClasseAbstrataCont)
);
bot.command('Interface', (ctx) => InterfaceController(ctx, InterfaceCont));
bot.command('TratamentoExcecao', (ctx) =>
  ExcessoesController(ctx, ExcessoesCont)
);
bot.command('Recursividade', (ctx) =>
  RecursividadeController(ctx, RecursividadeCont)
);
bot.command('ListasLineares', (ctx) => ListasController(ctx, ListasCont));
bot.command('ListasEncadeadas', (ctx) =>
  ListasEncadeadasController(ctx, ListasEncadeadasCont)
);
bot.command('Pilha', (ctx) => PilhasController(ctx, PilhasCont));
bot.command('Fila', (ctx) => FilasController(ctx, FilasCont));
bot.command('AlgoritmosOrdenacao', (ctx) =>
  AlgoritmosOrdenacaoController(ctx, AlgoritmosOrdenacaoCont)
);
bot.command('Arvore', (ctx) => ArvoreController(ctx, ArvoresCont));
bot.command('ArvoreBinariaBusca', (ctx) =>
  ArvoreBinariaBuscaController(ctx, ArvoreBinariaBuscaCont)
);
bot.command('ArvoreAVL', (ctx) => ArvoreAVLController(ctx, ArvoreAVLCont));
bot.command('ArvoreVermelhoPreto', (ctx) =>
  ArvoreVermelhoPretoController(ctx, ArvoreVermelhoPretoCont)
);
bot.command('ArvoreB', (ctx) => ArvoreBController(ctx, ArvoreBCont));
bot.command('Heap', (ctx) => HeapController(ctx, HeapCont));
bot.command('TabelaHash', (ctx) => TabelaHashController(ctx, TabelaHashCont));

bot.command('RegrasBiblioteca', (ctx) => handleMessageNLP(ctx));
bot.command('CadastroBiblioteca', (ctx) => handleMessageNLP(ctx));
bot.command('Pearson', (ctx) => handleMessageNLP(ctx));
bot.command('Pergamum', (ctx) => handleMessageNLP(ctx));
bot.command('Discente', (ctx) => handleMessageNLP(ctx));
bot.command('DireitosDiscentes', (ctx) => handleMessageNLP(ctx));
bot.command('Monitoria', (ctx) => handleMessageNLP(ctx));
bot.command('InformacoesMonitoria', (ctx) => handleMessageNLP(ctx));
bot.command('RequisitosAprovacao', (ctx) => handleMessageNLP(ctx));
bot.command('MediaFrequencia', (ctx) => handleMessageNLP(ctx));
bot.command('Jubilamento', (ctx) => handleMessageNLP(ctx));
bot.command('InformacoesJubilamento', (ctx) => handleMessageNLP(ctx));
bot.command('Enade', (ctx) => handleMessageNLP(ctx));
bot.command('InformacoesEnade', (ctx) => handleMessageNLP(ctx));
bot.command('EmpresaJunior', (ctx) => handleMessageNLP(ctx));
bot.command('InformacoesEmpresaJunior', (ctx) => handleMessageNLP(ctx));
bot.command('Docente', (ctx) => handleMessageNLP(ctx));
bot.command('ListaDocentes', (ctx) => handleMessageNLP(ctx));
bot.command('DireitosDocentes', (ctx) => handleMessageNLP(ctx));
bot.command('Coordenacao', (ctx) => handleMessageNLP(ctx));
bot.command('HistoriaIFS', (ctx) => handleMessageNLP(ctx));
bot.command('HistoriaCampusLagarto', (ctx) => handleMessageNLP(ctx));
bot.command('SistemasInformacao', (ctx) => handleMessageNLP(ctx));
bot.command('IRA', (ctx) => handleMessageNLP(ctx));
bot.command('MEC', (ctx) => handleMessageNLP(ctx));
bot.command('ROD', (ctx) => handleMessageNLP(ctx));
bot.command('PPC', (ctx) => handleMessageNLP(ctx));
bot.command('SIGAA', (ctx) => handleMessageNLP(ctx));
bot.command('AvaliacaoInstitucional', (ctx) => handleMessageNLP(ctx));
bot.command('DisciplinasOptativas', (ctx) => handleMessageNLP(ctx));
bot.command('TCC', (ctx) => handleMessageNLP(ctx));
bot.command('Estagio', (ctx) => handleMessageNLP(ctx));
bot.command('AtividadesComplementares', (ctx) => handleMessageNLP(ctx));
bot.command('MatrizCurricular', (ctx) => handleMessageNLP(ctx));
bot.command('AlteracoesPPC', (ctx) => handleMessageNLP(ctx));

bot.on('text', (ctx) => handleMessageNLP(ctx));

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
    case '/EstruturaDeDadosI':
      EstruturaDeDadosIController(ctx);
      break;
    case '/EstruturaDeDadosII':
      EstruturaDeDadosIIController(ctx);
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

    case ESTRUTURA_DE_DADOS_I.Recursividade.callback:
      RecursividadeController(ctx, RecursividadeCont);
      RecursividadeCont =
        (RecursividadeCont + 1) % RECURSIVIDADE_CONCEPT.length;
      break;

    case ESTRUTURA_DE_DADOS_I.Listas.callback:
      ListasController(ctx, ListasCont);
      ListasCont = (ListasCont + 1) % LISTAS_CONCEPT.length;
      break;

    case ESTRUTURA_DE_DADOS_I.ListasEncadeadas.callback:
      ListasEncadeadasController(ctx, ListasEncadeadasCont);
      ListasEncadeadasCont =
        (ListasEncadeadasCont + 1) % LISTAS_ENCADEADAS_CONCEPT.length;
      break;

    case ESTRUTURA_DE_DADOS_I.Pilhas.callback:
      PilhasController(ctx, PilhasCont);
      PilhasCont = (PilhasCont + 1) % PILHAS_CONCEPT.length;
      break;

    case ESTRUTURA_DE_DADOS_I.Filas.callback:
      FilasController(ctx, FilasCont);
      FilasCont = (FilasCont + 1) % FILAS_CONCEPT.length;
      break;

    case ESTRUTURA_DE_DADOS_I.AlgoritmosOrdenacao.callback:
      AlgoritmosOrdenacaoController(ctx, AlgoritmosOrdenacaoCont);
      AlgoritmosOrdenacaoCont =
        (AlgoritmosOrdenacaoCont + 1) % OBJETOS_CONCEPT.length;
      break;

    case '/ExemploRecursividade':
      RecursividadeExemploController(ctx, RecursividadeExemploCont);
      RecursividadeExemploCont =
        (RecursividadeExemploCont + 1) % RECURSIVIDADE_EXAMPLE.length;
      break;

    case '/ExemploListas':
      ListasExemploController(ctx, ListasExemploCont);
      ListasExemploCont = (ListasExemploCont + 1) % LISTAS_EXAMPLE.length;
      break;

    case '/ExemploListasEncadeadas':
      ListasEncadeadasExemploController(ctx, ListasEncadeadasExemploCont);
      ListasEncadeadasExemploCont =
        (ListasEncadeadasExemploCont + 1) % LISTAS_ENCADEADAS_EXAMPLE.length;
      break;

    case '/ExemploPilhas':
      PilhasExemploController(ctx, PilhasExemploCont);
      PilhasExemploCont = (PilhasExemploCont + 1) % PILHAS_EXAMPLE.length;
      break;

    case '/ExemploFilas':
      FilasExemploController(ctx, FilasExemploCont);
      FilasExemploCont = (FilasExemploCont + 1) % FILAS_EXAMPLE.length;
      break;

    case '/ExemploAlgoritmosOrdenacao':
      AlgoritmosOrdenacaoExemploController(ctx, AlgoritmosOrdenacaoExemploCont);
      AlgoritmosOrdenacaoExemploCont =
        (AlgoritmosOrdenacaoExemploCont + 1) % ORDENACAO_EXAMPLE.length;
      break;

    case ESTRUTURA_DE_DADOS_II.Arvore.callback:
      ArvoreController(ctx, ArvoresCont);
      ArvoresCont = (ArvoresCont + 1) % ARVORE_CONCEPT.length;
      break;

    case ESTRUTURA_DE_DADOS_II.ArvoreBinariaBusca.callback:
      ArvoreBinariaBuscaController(ctx, ArvoreBinariaBuscaCont);
      ArvoreBinariaBuscaCont =
        (ArvoreBinariaBuscaCont + 1) % ARVORE_BINARIA_BUSCA_CONCEPT.length;
      break;

    case ESTRUTURA_DE_DADOS_II.ArvoreAVL.callback:
      ArvoreAVLController(ctx, ArvoreAVLCont);
      ArvoreAVLCont = (ArvoreAVLCont + 1) % ARVORE_AVL_CONCEPT.length;
      break;

    case ESTRUTURA_DE_DADOS_II.ArvoreVermelhoPreto.callback:
      ArvoreVermelhoPretoController(ctx, ArvoreVermelhoPretoCont);
      ArvoreVermelhoPretoCont =
        (ArvoreVermelhoPretoCont + 1) % ARVORE_VERMELHO_PRETO_CONCEPT.length;
      break;

    case ESTRUTURA_DE_DADOS_II.ArvoreB.callback:
      ArvoreBController(ctx, ArvoreBCont);
      ArvoreBCont = (ArvoreBCont + 1) % ARVORE_B_CONCEPT.length;
      break;

    case ESTRUTURA_DE_DADOS_II.Heap.callback:
      HeapController(ctx, HeapCont);
      HeapCont = (HeapCont + 1) % HEAP_CONCEPT.length;
      break;

    case ESTRUTURA_DE_DADOS_II.TabelaHash.callback:
      TabelaHashController(ctx, TabelaHashCont);
      TabelaHashCont = (TabelaHashCont + 1) % TABELAS_HASH_CONCEPT.length;
      break;
    case '/ExemploArvoreBinariaBusca':
      ArvoreBinariaBuscaExemploController(ctx, ArvoreBinariaBuscaExemploCont);
      ArvoreBinariaBuscaExemploCont =
        (ArvoreBinariaBuscaExemploCont + 1) %
        ARVORE_BINARIA_BUSCA_EXAMPLE.length;
      break;

    case '/ExemploArvoreAVL':
      ArvoreAVLExemploController(ctx, ArvoreAVLExemploCont);
      ArvoreAVLExemploCont =
        (ArvoreAVLExemploCont + 1) % ARVORE_AVL_EXAMPLE.length;
      break;

    case '/ExemploArvoreVermelhoPreto':
      ArvoreVermelhoPretoExemploController(ctx, ArvoreVermelhoPretoExemploCont);
      ArvoreVermelhoPretoExemploCont =
        (ArvoreVermelhoPretoExemploCont + 1) %
        ARVORE_VERMELHO_PRETO_EXAMPLE.length;
      break;

    case '/ExemploArvoreB':
      ArvoreBExemploController(ctx, ArvoreBExemploCont);
      ArvoreBExemploCont = (ArvoreBExemploCont + 1) % ARVORE_B_EXAMPLE.length;
      break;

    case '/ExemploHeap':
      HeapExemploController(ctx, HeapExemploCont);
      HeapExemploCont = (HeapExemploCont + 1) % HEAP_EXAMPLE.length;
      break;

    case '/ExemploTabelaHash':
      TabelaHashExemploController(ctx, TabelaHashExemploCont);
      TabelaHashExemploCont =
        (TabelaHashExemploCont + 1) % TABELAS_HASH_EXAMPLE.length;
      break;
  }
});

bot.launch();
