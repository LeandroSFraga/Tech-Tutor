const MATRIZES_CONCEPT = [
  `
🤖 Uma matriz é uma estrutura de dados que nos permite armazenar e organizar informações em forma de tabela, utilizando mais de um índice para identificar seus elementos. 📊🔢

Conforme explicado por PUGA e RISSETTI, uma matriz de dimensão n é uma estrutura indexada que requer mais de um índice para identificar um de seus elementos. Por exemplo, uma matriz de dimensão 2 exige dois índices para identificar um elemento em sua estrutura. E o melhor de tudo é que a maioria das linguagens de programação não impõe limites sobre a dimensão de uma matriz, permitindo que os programadores utilizem quantos índices forem necessários. 📏🔠

Vamos imaginar um exemplo prático para entender melhor o conceito de matriz. Digamos que você precise desenhar um gráfico de uma curva no plano, e para isso, seja necessário guardar as posições dos pontos dessa curva em coordenadas x e y. Uma forma possível de armazenar essas informações em memória seria utilizando uma matriz de dimensão 2. Cada elemento dessa matriz conteria o valor correspondente a um ponto, identificado pelo índice de x para a abscissa e y para a ordenada desse elemento. 📈📝

Por exemplo, se a curva representasse as vendas de um determinado produto em diferentes regiões, o elemento da linha 4 e da coluna 5 da matriz poderia conter a informação sobre as vendas de 5 unidades na região correspondente, com um valor de $4 no período em questão. Assim, a matriz nos permite organizar e acessar esses dados de forma estruturada, como se fosse uma tabela mágica! 💰🌍

As matrizes são poderosas ferramentas em programação, utilizadas em uma variedade de aplicações, desde cálculos matemáticos até bancos de dados complexos. Com elas, podemos representar e manipular dados de forma eficiente e organizada, facilitando a solução de problemas mais complexos. 💻🧩`,
];

const MATRIZES_EXAMPLE = [
  `📅 Vamos imaginar um algoritmo para registrar a agenda de compromissos de uma semana. Utilizando uma matriz, podemos criar uma tabela com dias da semana nas linhas e horários do dia nas colunas. Cada elemento da matriz representaria um compromisso agendado em um determinado dia e horário. Dessa forma, teríamos uma forma organizada de visualizar e gerenciar nossos compromissos semanais! 🗓️✨
\`\`\`python
agenda = [
    ["", "8:00", "10:00", "12:00", "14:00", "16:00"],
    ["Segunda", "Trabalho", "Reunião", "Almoço", "Projeto", ""],
    ["Terça", "Academia", "", "Almoço", "Estudo", ""],
    ["Quarta", "Trabalho", "Reunião", "Almoço", "Projeto", ""],
    ["Quinta", "Academia", "", "Almoço", "Estudo", ""],
    ["Sexta", "Trabalho", "Reunião", "Almoço", "Projeto", ""]
]

print("Agenda de compromissos:")
for linha in agenda:
    print("\t".join(linha))

\`\`\`
`,
  `💻 Agora, vamos criar um algoritmo para armazenar uma tabela de notas de alunos. Utilizando uma matriz, podemos criar uma estrutura com nomes dos alunos nas linhas e disciplinas nas colunas. Cada elemento da matriz representaria a nota do aluno em uma disciplina específica. Dessa forma, teríamos uma organização clara das notas de cada aluno em cada disciplina! 📚🔢
\`\`\`less
Algoritmo NotasAlunos
   var
      notas: matriz[1..5, 1..3] de real
      nomes: vetor[1..5] de caractere
      disciplinas: vetor[1..3] de caractere
   
   disciplinas[1] <- "Matemática"
   disciplinas[2] <- "Português"
   disciplinas[3] <- "História"
   
   para i de 1 até 5 faça
      escreva("Digite o nome do aluno ", i, ": ")
      leia(nomes[i])
      para j de 1 até 3 faça
         escreva("Digite a nota de ", nomes[i], " em ", disciplinas[j], ": ")
         leia(notas[i, j])
      fimpara
   fimpara
   
   escreva("Tabela de notas dos alunos:")
   para i de 1 até 5 faça
      escreva(nomes[i])
      para j de 1 até 3 faça
         escreva("\t", notas[i, j])
      fimpara
      escreval()
   fimpara
FimAlgoritmo
\`\`\`

`,
  `👩‍💻 Vamos criar um programa em JavaScript para representar uma matriz que armazena informações sobre os produtos em um estoque. Utilizando uma matriz, podemos ter os nomes dos produtos nas linhas e as quantidades disponíveis nas colunas. Dessa forma, teríamos uma estrutura organizada pararepresentar e gerenciar o estoque dos produtos de forma eficiente! 💼📦
\`\`\`javascript
let estoque = [
    ["Produto", "Quantidade"],
    ["Maçãs", 50],
    ["Laranjas", 30],
    ["Bananas", 20],
    ["Morangos", 40]
];

console.log("Estoque de produtos:");
for (let i = 0; i < estoque.length; i++) {
    console.log(estoque[i][0] + ": " + estoque[i][1]);
}

\`\`\`

`,
];

export { MATRIZES_CONCEPT, MATRIZES_EXAMPLE };
