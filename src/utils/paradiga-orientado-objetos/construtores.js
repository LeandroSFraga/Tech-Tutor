const CONSTRUTORES_CONCEPT = [
  `😊🔧 Os construtores são métodos especiais que são chamados automaticamente quando você cria uma nova instância de uma classe.

Imagine que você está construindo uma casa. O construtor é como o arquiteto que coordena todo o processo de construção. Ele é responsável por iniciar e configurar a casa, definindo seus alicerces e estrutura. Da mesma forma, um construtor em uma classe é chamado para configurar e inicializar uma nova instância da classe.

Os construtores podem fazer muitas coisas interessantes! 🏠🔨 Eles podem inicializar os membros da instância, definir valores padrão, executar cálculos iniciais e até realizar outras tarefas especiais quando um novo objeto é criado. É como se eles dessem vida ao objeto recém-criado, preparando-o para ser usado.

Então, quando você cria um objeto a partir de uma classe, o construtor é automaticamente chamado e cuida de todos os preparativos necessários. É uma forma conveniente de garantir que as instâncias da classe estejam prontas para serem utilizadas imediatamente.`,
];
const CONSTRUTORES_EXAMPLE = [
  `🏠 Vamos pensar em um algoritmo para representar a construção de casas. Podemos criar uma classe chamada 'Casa' que representa uma casa e possui atributos como 'número de quartos', 'tamanho do terreno' e 'cor'. Para facilitar a criação de uma casa, podemos definir um construtor que recebe esses atributos como parâmetros e os atribui aos respectivos campos da classe. Assim, ao criar uma instância da classe 'Casa', podemos fornecer os valores desejados diretamente no momento da criação. Isso nos permite criar casas de forma mais fácil e eficiente no nosso algoritmo! 🏡👷`,
  `📚 Vamos criar um algoritmo para representar livros em uma biblioteca. Podemos criar uma classe chamada 'Livro' que representa um livro e possui atributos como 'título', 'autor' e 'ano de publicação'. Para facilitar a criação de um livro, podemos definir um construtor que recebe esses atributos como parâmetros e os atribui aos respectivos campos da classe. Assim, ao criar uma instância da classe 'Livro', podemos passar os valores desejados diretamente no momento da criação. Isso nos permite criar livros de forma mais prática e organizada no nosso algoritmo! 📖✒️` +
    '\n```\n' +
    `classe Livro
    caractere titulo
    caractere autor
    inteiro ano_publicacao
    
    // Construtor
    construtor Livro(titulo, autor, ano_publicacao)
       this.titulo <- titulo
       this.autor <- autor
       this.ano_publicacao <- ano_publicacao
    fimconstrutor
 fimclasse
 
 // Criação de objetos
 Livro meuLivro = novo Livro("Dom Casmurro", "Machado de Assis", 1899)
 ` +
    '\n```\n',
  `🎮 Vamos criar um programa em Java para representar jogos de videogame. Podemos criar uma classe chamada 'Jogo' que representa um jogo e possui atributos como 'nome', 'plataforma' e 'gênero'. Para facilitar a criação de um jogo, podemos definir um construtor que recebe esses atributos como parâmetros e os atribui aos respectivos campos da classe. Assim, ao criar uma instância da classe 'Jogo', podemos fornecer os valores desejados diretamente no momento da criação. Isso nos permite criar jogos de forma mais simples e organizada no nosso programa! 🎮🕹️` +
    '\n```\n' +
    `class Jogo {
      String nome;
      String plataforma;
      String genero;
      
      // Construtor
      Jogo(String nome, String plataforma, String genero) {
          this.nome = nome;
          this.plataforma = plataforma;
          this.genero = genero;
      }
  }
  
  // Criação de objetos
  Jogo meuJogo = new Jogo("The Legend of Zelda: Breath of the Wild", "Nintendo Switch", "Ação e Aventura")
  ` +
    '\n```\n',
];

export { CONSTRUTORES_CONCEPT, CONSTRUTORES_EXAMPLE };
