const WELCOME_MESSAGE = `🤖💻 Olá e boas vindas ao <strong>Tech Tutor</strong>! 

Eu sou um bot preparado para te auxiliar no aprendizado em programação, comigo você pode entender como funciona os principais cocneitos e a base de como começar a programar, ofereço explicações de diversos conteúdos divididos em tópicos e módulos, trago exemplos em diferentes linguagens e disponibilizo uma forma de você praticar seu aprendizado e entender melhor o seu código desde a base.

Estou <strong>extremamente empolgado</strong> em te ajudar nesta incrível jornada rumo ao mundo da programação. Sou treinado para te auxiliar com os principais conteúdos que você deve percorrer durante esse caminho e não exite em me usar quando estiver com <strong>dúvidas</strong> ou quiser aprender mais! 🚀🎓

Meus conteúdos estão dispostos seguindo a grade curricular do curso de <strong>bacharelado em sistemas de informação</strong> do <strong>IFS - Campus Lagarto</strong>. Por causa disso, você aluno do instituto se sentirá muito familiarizado com o que poderá encontrar comigo. Mas não se preocupe, caso não seja um estudante deste curso, estou preparado para te ajudar também. 📚🎓

Então, vamos começar essa <strong>jornada</strong>? Estou animado para ver todo o seu <strong>potencial</strong> sendo desbloqueado e o <strong>crescimento</strong> que você alcançará ao dominar a <strong>arte da programação</strong>. Prepare-se para mergulhar em um mundo repleto de <strong>criatividade</strong>, <strong>inovação</strong> e <strong>infinitas possibilidades</strong>. 🌟💡

<strong>Antes de começar!</strong>

Gostaria de lembrar que eu sou apenas uma ferramenta de suporte, e que para aprimorar o aprendizado é necessário que você pratique cada conteúdo aprendido! Para facilitar o uso do Tech Tutor recomendo que você conheça alguns comandos! Digite /help para mais informações! 😉📚
`;

const SELECT_OPTION_MESSAGE = `Certo! Por onde devemos começar? Você pode selecionar um módulo específico que esteja em dúvida ou começar a trilha desde o início caso esteja iniciando agora:  `;

const HELP_MESSAGE = `ℹ️🤖 <strong>Ajuda</strong> 

Olá! Essa é a seção de ajuda do Tech Tutor.

Aqui embaixo você encontra as principais informações de como utilizar o bot! 

Você pode interagir comigo através de <strong>cliques</strong> nas opções disponíveis para acessar as principais áreas de ensino, o bot é alimentado com diversos conceitos e exemplos reunidos de diversos autores da área. Fique à vontade para explorar por conta própria e aprender mais sobre programação. 🖱️📚

Só será necessário digitar apenas para utilizar comandos precedidos pela '/', você pode visualizar os comandos logo abaixo. ⌨

📚🔍 Aqui estão os principais <strong>comandos globais</strong> disponíveis:

<strong>/start</strong> - Inicia o bot e fornece as boas-vindas.
<strong>/help</strong> - Exibe a tela de ajuda com informações sobre o bot.
<strong>/modulos</strong> - Exibe todos os módulos disponíveis.
<strong>/conteudos</strong> - Lista todos os conteúdos disponíveis.
<strong>/referencias</strong> - Lista as referencias utilizadas para preenchimento da base de dados do bot.

Você também pode acessar algum conteúdo sem ter que passar pelo fluxo apenas utilizando o nome do conteúdo depois da '/', o mesmo serve para algum módulo! 💡✨

<strong>/algoritmo</strong> - Acessa o conteúdo demarcado. 

Fique à vontade para explorar e aproveitar ao máximo o conhecimento disponível! Estou aqui para te ajudar no que precisar. 😊👩‍💻`;

const ALGORITMO_CONCEPT = [
  'Antes de começar a programar de fato é interessante entender o conceito de algoritmo! \n Segundo ASSCENCIO, 1999: Algoritmo é a descrição de uma  sequencia de passos que deve ser seguida para a realização de uma tarefa.',
  'Resposta 2',
  'Resposta 3',
];

const ALGORITMO_EXAMPLE = [
  ` function somar(a, b) {
    return a + b;
  }

  const resultado = somar(2, 3);
  console.log(resultado);`,
  `return(a)`,
];

export {
  ALGORITMO_CONCEPT,
  WELCOME_MESSAGE,
  HELP_MESSAGE,
  SELECT_OPTION_MESSAGE,
  ALGORITMO_EXAMPLE,
};
