const VETORES_CONCEPT = [
  `🤖 Ah, os vetores são como verdadeiras coleções que nos permitem agrupar valores relacionados em uma única estrutura! 📚🔢

Segundo PUGA e RISSETTI, em casos em que queremos representar conjuntos de valores em vez de utilizar variáveis isoladas, utilizamos estruturas de dados especiais chamadas de estruturas indexadas. Essas estruturas são um verdadeiro encanto, pois nos permitem armazenar diversos valores em uma única estrutura mais complexa, onde cada elemento é identificado por meio de índices. E a forma mais simples dessa estrutura é conhecida como vetor ou array. 📊✨

Imagine um vetor como uma linha de contêineres, onde cada contêiner guarda um valor específico. Esses contêineres são identificados por índices, que nos ajudam a acessar e manipular os valores guardados. É como uma coleção de tesouros organizados e numerados! 💎💫

Um vetor é uma coleção de variáveis do mesmo tipo, compartilhando o mesmo nome e ocupando posições consecutivas de memória. Cada variável dentro do vetor é chamada de elemento e é identificada por um índice. Essa estrutura é uma verdadeira magia da programação, permitindo-nos organizar e acessar conjuntos de valores de forma prática e eficiente! ✨🔍

Com os vetores, podemos realizar operações incríveis, como percorrer todos os elementos, buscar valores específicos, ordenar os elementos e muito mais. É como ter um arsenal de dados à nossa disposição! 🧙‍♂️🎩`,
];

const VETORES_EXAMPLE = [
  `🌞 Vamos imaginar um algoritmo para armazenar a lista de compras de um supermercado. Utilizando um vetor, podemos criar um array chamado 'listaCompras' e armazenar os itens que precisamos comprar. Cada item será um elemento do vetor, permitindo que tenhamos uma estrutura organizada para a nossa lista de compras. Dessa forma, podemos adicionar, remover e acessar os itens facilmente! 🛒✨
  
  listaCompras = ["arroz", "feijão", "macarrão", "leite", "pão"]
`,
  `💻 Agora, vamos criar um algoritmo para armazenar as notas de uma turma de alunos. Utilizando um vetor, podemos criar um array chamado 'notas' e armazenar as notas individuais de cada aluno. Dessa forma, teremos uma estrutura organizada para realizar cálculos, como a média das notas ou a busca por alunos com melhor desempenho. 
  \`\`\`
  Algoritmo NotasAlunos
   var
      notas: vetor[1..5] de real
   
   para i de 1 até 5 faça
      escreva("Digite a nota do aluno ", i, ": ")
      leia(notas[i])
   fimpara
   
   escreva("Notas dos alunos:")
   para i de 1 até 5 faça
      escreva(notas[i], " ")
   fimpara
FimAlgoritmo
\`\`\`


  `,
  `👩‍💻 Agora, vamos criar um programa em JavaScript para armazenar uma lista de nomes de usuários. Utilizando um vetor, podemos criar um array chamado 'usuarios' e adicionar os nomes de usuários à medida que eles se cadastram. Dessa forma, teremos uma estrutura para gerenciar os usuários registrados e realizar a busca por usuários específicos. 
\`\`\`JavaScript
let usuarios = [];

function cadastrarUsuario(nome) {
    usuarios.push(nome);
    console.log("Usuário cadastrado com sucesso!");
}

function buscarUsuario(nome) {
    if (usuarios.includes(nome)) {
        console.log("Usuário encontrado!");
    } else {
        console.log("Usuário não encontrado.");
    }
}

cadastrarUsuario("Alice");
cadastrarUsuario("Bob");
buscarUsuario("Charlie");

\`\`\`
  
  `,
];

export { VETORES_CONCEPT, VETORES_EXAMPLE };
