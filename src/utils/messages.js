const WELCOME_MESSAGE = `🤖💻 Olá e boas vindas ao <strong>IFS Tutor</strong>! 

Eu sou um bot preparado para te auxiliar no aprendizado em programação, comigo você pode entender como funciona os principais cocneitos e a base de como começar a programar, ofereço explicações de diversos conteúdos divididos em tópicos e módulos, trago exemplos em diferentes linguagens e disponibilizo uma forma de você praticar seu aprendizado e entender melhor o seu código desde a base.

Estou <strong>extremamente empolgado</strong> em te ajudar nesta incrível jornada rumo ao mundo da programação. Sou treinado para te auxiliar com os principais conteúdos que você deve percorrer durante esse caminho e não exite em me usar quando estiver com <strong>dúvidas</strong> ou quiser aprender mais! 🚀🎓

Meus conteúdos estão dispostos seguindo a grade curricular do curso de <strong>bacharelado em sistemas de informação</strong> do <strong>IFS - Campus Lagarto</strong>. Por causa disso, você aluno do instituto se sentirá muito familiarizado com o que poderá encontrar comigo. Mas não se preocupe, caso não seja um estudante deste curso, estou preparado para te ajudar também. 📚🎓

Então, vamos começar essa <strong>jornada</strong>? Estou animado para ver todo o seu <strong>potencial</strong> sendo desbloqueado e o <strong>crescimento</strong> que você alcançará ao dominar a <strong>arte da programação</strong>. Prepare-se para mergulhar em um mundo repleto de <strong>criatividade</strong>, <strong>inovação</strong> e <strong>infinitas possibilidades</strong>. 🌟💡

<strong>Antes de começar!</strong>

Gostaria de lembrar que eu sou apenas uma ferramenta de suporte, e que para aprimorar o aprendizado é necessário que você pratique cada conteúdo aprendido! Para facilitar o uso do IFS Tutor recomendo que você conheça alguns comandos! Digite /help para mais informações! 😉📚
`;

const FIRST_OPTIONS_MESSAGE = `Certo! Por onde devemos começar? Você pode selecionar um módulo específico que esteja em dúvida ou começar a trilha desde o início caso esteja iniciando agora:  `;

const HELP_MESSAGE = `ℹ️🤖 <strong>Ajuda</strong> 

Olá! Essa é a seção de ajuda do IFS Tutor.

Aqui embaixo você encontra as principais informações de como utilizar o bot! 

Você pode interagir comigo através de <strong>cliques</strong>, <strong>comandos</strong> ou <strong>fazendo perguntas</strong> para acessar as principais perguntas, o bot é alimentado com diversos conceitos e exemplos reunidos de diversos autores da área. Fique à vontade para explorar por conta própria e aprender mais sobre programação. 🖱️📚

📚🔍 Aqui estão os principais <strong>comandos globais</strong> disponíveis:

<strong>/start</strong> - Inicia o bot e fornece as boas-vindas.
<strong>/help</strong> - Exibe a tela de ajuda com informações sobre o bot.
<strong>/modulos</strong> - Exibe todos os módulos disponíveis.
<strong>/conteudos</strong> - Lista todos os conteúdos disponíveis.
<strong>/referencias</strong> - Lista as referencias utilizadas para preenchimento da base de dados do bot.
<strong>/topicos</strong> - Lista os comandos de todas as respostas que o bot consegue responder.

Você também pode acessar algum conteúdo de programação sem ter que passar pelo fluxo apenas utilizando o nome do conteúdo depois da '/', o mesmo serve para algum módulo! 💡✨

<strong>/algoritmo</strong> - Acessa o conteúdo demarcado. 

Fique à vontade para explorar e aproveitar ao máximo o conhecimento disponível! Estou aqui para te ajudar no que precisar. 😊👩‍💻`;

const TOPICOS_MESSAGE = `Segue essa lista de comandos disponíveis para acessar mais facilmente as respostas que o bot consegue responder:

- /BibliotecaRegras
- /BibliotecaCadastro
- /Pearson
- /Pergamum
- /Discente
- /DireitosDiscentes
- /Monitoria
- /InformacoesMonitoria
- /RequisitosAprovacao
- /MediaFrequencia
- /Jubilamento
- /InformacoesJubilamento
- /Enade
- /InformacoesEnade
- /EmpresaJunior
- /InformacoesEmpresaJunior
- /Docente
- /ListaDocentes
- /DireitosDocentes
- /Coordenacao
- /HistoriaIFS
- /HistoriaCampusLagarto
- /SistemasInformacao
- /IRA
- /MEC
- /ROD
- /PPC
- /SIGAA
- /AvaliacaoInstitucional
- /DisciplinasOptativas
- /TCC
- /Estagio
- /AtividadesComplementares
- /MatrizCurricular
- /AlteracoesPPC`;

const REFERENCES_MESSAGE = `
Claro! Aqui está as referências usadas nos textos e nos exemplos:

📚💡 Referências utilizadas:

- 1. ASCENCIO, Ana Fernanda Gomes; CAMPOS, Edilene Aparecida Veneruchi. "Fundamentos da Programação de Computadores." Pearson Education Brasil, 1999.
- 2. PUGA, Sandra; Rissetti, Gerson. Lógica de programação e estruturas de dados, com aplicações em Java. Pearson 290 ISBN 9788543019147.
- 3. RICARTE, Ivan Luiz Marques. Programação Orientada a Objetos: Uma Abordagem com Java. Unicamp
- 4. LINTZMAYER, Carla Negri; MOTA, Guilherme Oliveira. Análise de Algoritmos e Estruturas de Dados.
- 5. ASCENCIO, Ana Fernanda Gomes; ARAÚJO, Graziela Santos de. Estrutura de Dados, algoritmos, análise dacomplexidade e implementações em Java e C/C++.
- 6. Foi utilizada Inteligência Artificial para geração de alguns exemplos, através das ferramentas Chat GPT e Google Bard.

`;

const ERROR_MESSAGE = `🤔 Desculpe, mas não consegui encontrar uma resposta para a sua pergunta.

Recomendo que você entre em contato com um de nossos professores ou com a equipe gestora do IFS. Eles terão prazer em ajudar você!

Você pode enviar um e-mail para os seguintes contatos:
- <a href="mailto:reitoria@ifs.edu.br">reitoria@ifs.edu.br</a>
- <a href="mailto:cbsi.lagarto@ifs.edu.br">cbsi.lagarto@ifs.edu.br</a>
- <a href="mailto:cre.lagarto@ifs.edu.br">cre.lagarto@ifs.edu.br</a>

Também recomendo que você visite o <a href="http://www.ifs.edu.br/">site do IFS</a> para obter mais informações sobre o instituto.

Espero ter ajudado!
`;

const CONTEUDOS_MESSAGE = `📚🔍 Aqui estão os conteúdos disponíveis que posso te ajudar:

Algoritmo 🧩: /Algoritmo
Constantes 🔒: /Constantes
Variáveis 📊: /Variaveis
Operadores ➗: /Operadores
Comandos de Entrada e Saída 🖥️: /ComandosES
Estruturas de Controle ⚙️: /EstruturasControle
Vetores 📚: /Vetores
Matrizes 📏: /Matrizes
Classes e Objetos 🏗️: /ClassesObjetos
Instanciação de Objetos 🏭: /InstanciacaoObjetos
Construtores 🏗️: /Construtores
Atributos 📝: /Atributos
Métodos 🎛️: /Metodos
Encapsulamento 🔒: /Encapsulamento
Herança 🔄: /Heranca
Polimorfismo 🎭: /Polimorfismo
Classe Abstrata 🖌️: /ClasseAbstrata
Interface 🌐: /Interface
Tratamento de Exceção 🚨: /TratamentoExcecao
Recursividade 🔁: /Recursividade
Listas Lineares 📜: /ListasLineares
Listas Encadeadas ➿: /ListasEncadeadas
Pilha 📚🔺: /Pilha
Fila 📚🔵: /Fila
Algoritmos de Ordenação 🔢: /AlgoritmosOrdenacao
Árvore 🌳: /Arvore
Árvore Binária de Busca 🔍🌳: /ArvoreBinariaBusca
Árvore AVL ⚖️🌳: /ArvoreAVL
Árvore Vermelho-Preto 🟥⬛🌳: /ArvoreVermelhoPreto
Árvore B 🅱️🌳: /ArvoreB
Heap ⛰️: /Heap
Tabela de Espalhamento (Hash) 🗄️: /TabelaHash`;

export {
  WELCOME_MESSAGE,
  HELP_MESSAGE,
  FIRST_OPTIONS_MESSAGE,
  ERROR_MESSAGE,
  REFERENCES_MESSAGE,
  TOPICOS_MESSAGE,
  CONTEUDOS_MESSAGE,
};
