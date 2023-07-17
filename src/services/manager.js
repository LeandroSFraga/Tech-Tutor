import { NlpManager } from 'node-nlp';
import {
  BIBLIOTECA_CADASTRO_MESSAGE,
  BIBLIOTECA_REGRAS_MESSAGE,
  PEARSON_MESSAGE,
  PERGAMUM_MESSAGE,
} from '../utils/biblitoeca.js';
import {
  APROVACAO_MESSAGE,
  DISCENTE_DIREITOS_MESSAGE,
  DISCENTE_MESSAGE,
  EMPRESA_JUNIOR_INFO_MESSAGE,
  EMPRESA_JUNIOR_MESSAGE,
  ENADE_INFO_MESSAGE,
  ENADE_MESSAGE,
  FREQUENCIA_MESSAGE,
  JUBILAMENTO_MESSAGE,
  JUBILEMENTO_INFO_MESSAGE,
  MONITORIA_INFOS_MESSAGE,
  MONITORIA_MESSAGE,
} from '../utils/discente.js';
import {
  COORDENACAO_MESSAGE,
  DIREITOS_DEVERES_DOCENTE_MESSAGE,
  DOCENTE_MESSAGE,
  QUEM_SAO_DOCENTE_MESSAGE,
} from '../utils/docente.js';
import {
  HISTORIA_CAMPUS_LAGARTO_MESSAGE,
  HISTORIA_IFS_MESSAGE,
  SISTEMAS_DE_INFORMACAO_MESSAGE,
} from '../utils/historia.js';
import {
  ATIVIDADES_COMPLEMENTARES_MESSAGE,
  AVALIACAO_MEC_MESSAGE,
  ESTAGIO_MESSAGE,
  IRA_MESSAGE,
  MATRIZ_CURRICuLAR_MESSAGE,
  MEC_MESSAGE,
  OPTATIVAS_MESSAGE,
  PPC_ALTERACOES_MESSAGE,
  PPC_MESSAGE,
  ROD_MESSAGE,
  SIGAA_MESSAGE,
  TCC_MESSAGE,
} from '../utils/termos.js';

const manager = new NlpManager({ languages: ['pt'], forceNER: true });

(async () => {
  manager.addDocument('pt', '/BibliotecaRegras', 'biblioteca.regras');
  manager.addDocument('pt', '/BibliotecaCadastro', 'biblioteca.cadastro');
  manager.addDocument('pt', '/Pearson', 'biblioteca.pearson');
  manager.addDocument('pt', '/Pergamum', 'pergamum');
  manager.addDocument('pt', '/Discente', 'conceito.discente');
  manager.addDocument('pt', '/DireitosDiscentes', 'info.direitos.discente');
  manager.addDocument('pt', '/Monitoria', 'conceito.monitoria');
  manager.addDocument('pt', '/InformacoesMonitoria', 'info.monitoria');
  manager.addDocument('pt', '/RequisitosAprovacao', 'requisitos.aprovacao');
  manager.addDocument('pt', '/MediaFrequencia', 'info.media.frequencia');
  manager.addDocument('pt', '/Jubilamento', 'conceito.jubilamento');
  manager.addDocument('pt', '/InformacoesJubilamento', 'info.jubilamento');
  manager.addDocument('pt', '/Enade', 'conceito.enade');
  manager.addDocument('pt', '/InformacoesEnade', 'info.enade');
  manager.addDocument('pt', '/EmpresaJunior', 'conceito.empresa.junior');
  manager.addDocument('pt', '/InformacoesEmpresaJunior', 'info.empresa.junior');
  manager.addDocument('pt', '/Docente', 'definicao.docente');
  manager.addDocument('pt', '/ListaDocentes', 'quem.sao.docentes');
  manager.addDocument('pt', '/DireitosDocentes', 'direitos.deveres.docentes');
  manager.addDocument('pt', '/Coordenacao', 'definicao.coordenacao');
  manager.addDocument('pt', '/HistoriaIFS', 'historia.ifs');
  manager.addDocument(
    'pt',
    '/HistoriaCampusLagarto',
    'historia.campus.lagarto'
  );
  manager.addDocument(
    'pt',
    '/SistemasInformacao',
    'definicao.sistemas.informacao'
  );
  manager.addDocument('pt', '/IRA', 'definicao.ira');
  manager.addDocument('pt', '/MEC', 'definicao.mec');
  manager.addDocument('pt', '/ROD', 'definicao.rod');
  manager.addDocument('pt', '/PPC', 'definicao.ppc');
  manager.addDocument('pt', '/SIGAA', 'definicao.sigaa');
  manager.addDocument(
    'pt',
    '/AvaliacaoInstitucional',
    'avaliacao.instituicoes'
  );
  manager.addDocument('pt', '/DisciplinasOptativas', 'definicao.optativas');
  manager.addDocument('pt', '/TCC', 'definicao.tcc');
  manager.addDocument('pt', '/Estagio', 'definicao.estagio');
  manager.addDocument(
    'pt',
    '/AtividadesComplementares',
    'definicao.atividades.complementares'
  );
  manager.addDocument('pt', '/MatrizCurricular', 'definicao.matriz.curricular');
  manager.addDocument('pt', '/AlteracoesPPC', 'definicao.ppc.alteracoes');
})();

// SAUDAÇÕES

manager.addDocument('pt', 'tchau', 'greetings.bye');
manager.addDocument('pt', 'se cuida', 'greetings.bye');
manager.addDocument('pt', 'vejo você depois', 'greetings.bye');
manager.addDocument('pt', 'eu deveria ir', 'greetings.bye');
manager.addDocument('pt', 'olá', 'greetings.hello');
manager.addDocument('pt', 'oi', 'greetings.hello');
manager.addDocument('pt', 'Hey', 'greetings.hello');

// BIBLIOTECA

manager.addDocument(
  'pt',
  'Como faço cadastro na biblioteca?',
  'biblioteca.cadastro'
);
manager.addDocument(
  'pt',
  'Quais documentos são necessários para o cadastro na biblioteca?',
  'biblioteca.cadastro'
);
manager.addDocument(
  'pt',
  'Qual é o procedimento para fazer o cadastro na biblioteca?',
  'biblioteca.cadastro'
);
manager.addDocument(
  'pt',
  'Quais são as regras para empréstimo de livros na biblioteca?',
  'biblioteca.regras'
);
manager.addDocument(
  'pt',
  'Qual é o prazo para devolução de livros na biblioteca?',
  'biblioteca.regras'
);
manager.addDocument(
  'pt',
  'Posso renovar um livro na biblioteca? Quantas vezes?',
  'biblioteca.regras'
);
manager.addDocument(
  'pt',
  'Como fazer reserva de livros na biblioteca?',
  'biblioteca.regras'
);

//BIBLIOTECAS VIRTUAIS

manager.addDocument('pt', 'O que é PERGAMUM?', 'pergamum');
manager.addDocument('pt', 'Qual a função do PERGAMUM?', 'pergamum');
manager.addDocument(
  'pt',
  'O que é Biblioteca Virtual Pearson?',
  'biblioteca.pearson'
);
manager.addDocument('pt', 'Biblioteca Virtual Pearson?', 'biblioteca.pearson');
manager.addDocument(
  'pt',
  'Onde posso acessar a Biblioteca Virtual Pearson?',
  'biblioteca.pearson'
);

// DISCENTES

manager.addDocument(
  'pt',
  'Qual o conceito de "discente"?',
  'conceito.discente'
);
manager.addDocument('pt', 'O que é um discente?', 'conceito.discente');
manager.addDocument('pt', 'Definição de discente', 'conceito.discente');

//DIREITOS DISCENTE

manager.addDocument(
  'pt',
  'Onde posso encontrar mais informações sobre os direitos e deveres do discente?',
  'info.direitos.discente'
);
manager.addDocument(
  'pt',
  'Informações sobre direitos e deveres do discente',
  'info.direitos.discente'
);

//MONITORIA

manager.addDocument('pt', 'O que é monitoria?', 'conceito.monitoria');
manager.addDocument('pt', 'O que significa ser monitor?', 'conceito.monitoria');
manager.addDocument('pt', 'Definição de monitoria', 'conceito.monitoria');
manager.addDocument(
  'pt',
  'Onde posso obter mais informações sobre a monitoria?',
  'info.monitoria'
);
manager.addDocument(
  'pt',
  'Como saber mais sobre a monitoria?',
  'info.monitoria'
);
manager.addDocument('pt', 'Informações sobre monitoria', 'info.monitoria');

//APROVACAO

manager.addDocument(
  'pt',
  'Qual é a média mínima e a frequência necessária para ser aprovado?',
  'requisitos.aprovacao'
);
manager.addDocument(
  'pt',
  'Quais são os requisitos para ser aprovado?',
  'requisitos.aprovacao'
);
manager.addDocument(
  'pt',
  'O que é necessário para ser aprovado?',
  'requisitos.aprovacao'
);
manager.addDocument(
  'pt',
  'Como saber mais sobre média e frequência?',
  'info.media.frequencia'
);
manager.addDocument(
  'pt',
  'Informações sobre média e frequência',
  'info.media.frequencia'
);

//JUBILAMENTO

manager.addDocument('pt', 'O que é o jubilamento?', 'conceito.jubilamento');
manager.addDocument('pt', 'Definição de jubilamento', 'conceito.jubilamento');
manager.addDocument(
  'pt',
  'Como saber mais sobre o jubilamento?',
  'info.jubilamento'
);
manager.addDocument('pt', 'Informações sobre jubilamento', 'info.jubilamento');

// ENADE

manager.addDocument(
  'pt',
  'O que é o Exame Nacional de Desempenho de Estudantes (Enade)?',
  'conceito.enade'
);
manager.addDocument('pt', 'Qual é o objetivo do Enade?', 'conceito.enade');
manager.addDocument('pt', 'Definição de Enade', 'conceito.enade');
manager.addDocument('pt', 'Como saber mais sobre o Enade?', 'info.enade');
manager.addDocument('pt', 'Informações sobre o Enade', 'info.enade');

//EMPRESA JUNIOR

manager.addDocument(
  'pt',
  'O que é uma Empresa Júnior?',
  'conceito.empresa.junior'
);
manager.addDocument(
  'pt',
  'Qual é o propósito de uma Empresa Júnior?',
  'conceito.empresa.junior'
);
manager.addDocument(
  'pt',
  'Definição de Empresa Júnior',
  'conceito.empresa.junior'
);
manager.addDocument(
  'pt',
  'Como saber mais sobre Empresa Júnior?',
  'info.empresa.junior'
);
manager.addDocument(
  'pt',
  'Informações sobre Empresa Júnior',
  'info.empresa.junior'
);

//Docentes

manager.addDocument('pt', 'Qual o conceito de docente?', 'definicao.docente');
manager.addDocument('pt', 'Quem são os docentes?', 'quem.sao.docentes');
manager.addDocument(
  'pt',
  'Quais os direitos e deveres dos docentes?',
  'direitos.deveres.docentes'
);
manager.addDocument('pt', 'O que é a coordenação?', 'definicao.coordenacao');

// HISTORIA

manager.addDocument('pt', 'Qual a história do IFS?', 'historia_ifs');
manager.addDocument(
  'pt',
  'Qual a história do campus lagarto?',
  'historia.campus.lagarto'
);
manager.addDocument(
  'pt',
  'O que é o curso de Sistemas de Informação?',
  'definicao.sistemas.informacao'
);

//TERMOS
manager.addDocument('pt', 'O que é o IRA?', 'definicao.ira');
manager.addDocument('pt', 'O que é o MEC?', 'definicao.mec');
manager.addDocument(
  'pt',
  'Como funciona a avaliação de institições?',
  'avaliacao.instituicoes'
);
manager.addDocument('pt', 'O que é PPC?', 'definicao.ppc');
manager.addDocument('pt', 'O que é ROD?', 'definicao.rod');

manager.addDocument('pt', 'O que é SIGAA?', 'definicao.sigaa');
manager.addDocument(
  'pt',
  'Quais foram as alterações no PPC do curso?',
  'definicao.ppc.alteracoes'
);
manager.addDocument(
  'pt',
  'O que é a Matriz Curricular?',
  'definicao.matriz.curricular'
);
manager.addDocument(
  'pt',
  'O que são as Atividades Complementares?',
  'definicao.atividades.complementares'
);
manager.addDocument(
  'pt',
  'O que é o Estágio Curricular Supervisionado?',
  'definicao.estagio'
);
manager.addDocument(
  'pt',
  'O que é o Trabalho de Conclusão de Curso (TCC)',
  'definicao.tcc'
);
manager.addDocument(
  'pt',
  'O que são as Disciplinas Optativas?',
  'definicao.optativas'
);
manager.addDocument(
  'pt',
  'O que é o Projeto Pedagógico de Curso (PPC)?',
  'definicao.ppc'
);

// RESPOSTAS

manager.addAnswer('pt', 'greetings.bye', 'Até a próxima');
manager.addAnswer('pt', 'greetings.bye', 'Vejo você depois!');
manager.addAnswer('pt', 'greetings.hello', 'Oiê!');
manager.addAnswer('pt', 'greetings.hello', 'Opa!');
manager.addAnswer('pt', 'biblioteca.regras', BIBLIOTECA_REGRAS_MESSAGE);
manager.addAnswer('pt', 'biblioteca.cadastro', BIBLIOTECA_CADASTRO_MESSAGE);
manager.addAnswer('pt', 'biblioteca.pearson', PEARSON_MESSAGE);
manager.addAnswer('pt', 'pergamum', PERGAMUM_MESSAGE);
manager.addAnswer('pt', 'conceito.discente', DISCENTE_MESSAGE);
manager.addAnswer('pt', 'info.direitos.discente', DISCENTE_DIREITOS_MESSAGE);
manager.addAnswer('pt', 'conceito.monitoria', MONITORIA_MESSAGE);
manager.addAnswer('pt', 'info.monitoria', MONITORIA_INFOS_MESSAGE);
manager.addAnswer('pt', 'requisitos.aprovacao', APROVACAO_MESSAGE);
manager.addAnswer('pt', 'info.media.frequencia', FREQUENCIA_MESSAGE);
manager.addAnswer('pt', 'conceito.jubilamento', JUBILAMENTO_MESSAGE);
manager.addAnswer('pt', 'info.jubilamento', JUBILEMENTO_INFO_MESSAGE);
manager.addAnswer('pt', 'conceito.enade', ENADE_MESSAGE);
manager.addAnswer('pt', 'info.enade', ENADE_INFO_MESSAGE);
manager.addAnswer('pt', 'conceito.empresa.junior', EMPRESA_JUNIOR_MESSAGE);
manager.addAnswer('pt', 'info.empresa.junior', EMPRESA_JUNIOR_INFO_MESSAGE);
manager.addAnswer('pt', 'definicao.docente', DOCENTE_MESSAGE);
manager.addAnswer('pt', 'quem.sao.docentes', QUEM_SAO_DOCENTE_MESSAGE);
manager.addAnswer(
  'pt',
  'direitos.deveres.docentes',
  DIREITOS_DEVERES_DOCENTE_MESSAGE
);
manager.addAnswer('pt', 'definicao.coordenacao', COORDENACAO_MESSAGE);
manager.addAnswer('pt', 'historia.ifs', HISTORIA_IFS_MESSAGE);
manager.addAnswer(
  'pt',
  'historia.campus.lagarto',
  HISTORIA_CAMPUS_LAGARTO_MESSAGE
);
manager.addAnswer(
  'pt',
  'definicao.sistemas.informacao',
  SISTEMAS_DE_INFORMACAO_MESSAGE
);
manager.addAnswer('pt', 'definicao.ira', IRA_MESSAGE);
manager.addAnswer('pt', 'definicao.mec', MEC_MESSAGE);
manager.addAnswer('pt', 'definicao.rod', ROD_MESSAGE);
manager.addAnswer('pt', 'definicao.ppc', PPC_MESSAGE);
manager.addAnswer('pt', 'definicao.sigaa', SIGAA_MESSAGE);
manager.addAnswer('pt', 'avaliacao.instituicoes', AVALIACAO_MEC_MESSAGE);
manager.addAnswer('pt', 'definicao.optativas', OPTATIVAS_MESSAGE);
manager.addAnswer('pt', 'definicao.tcc', TCC_MESSAGE);
manager.addAnswer('pt', 'definicao.estagio', ESTAGIO_MESSAGE);
manager.addAnswer(
  'pt',
  'definicao.atividades.complementares',
  ATIVIDADES_COMPLEMENTARES_MESSAGE
);
manager.addAnswer(
  'pt',
  'definicao.matriz.curricular',
  MATRIZ_CURRICuLAR_MESSAGE
);
manager.addAnswer('pt', 'definicao.ppc.alteracoes', PPC_ALTERACOES_MESSAGE);

export { manager };
