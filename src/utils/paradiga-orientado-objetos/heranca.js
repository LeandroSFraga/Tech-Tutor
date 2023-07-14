const HERANCA_CONCEPT = [
  `🔗 A herança é como uma conexão especial entre classes que permite que uma classe herde as características de outra classe!

Na programação orientada a objetos, a herança é uma ferramenta poderosa que nos permite reutilizar código e criar programas mais complexos. 🏗️💡 Por exemplo, pense em uma classe chamada Animal. Agora, você pode criar uma nova classe chamada Cachorro que herda de Animal. 🐶 A classe Cachorro pode usar os métodos e atributos da classe Animal, como comer(), dormir() e reproduzir(). Isso significa que não precisamos reescrever todo o código para essas funções na classe Cachorro. Legal, né? 😉

A herança também nos permite criar hierarquias de classes, como uma árvore genealógica! 🌳 Por exemplo, podemos ter uma classe chamada Animal que herda de uma classe chamada SerVivo. E a classe SerVivo pode herdar de uma classe chamada Objeto. Isso cria uma hierarquia de classes, em que Animal é um tipo de SerVivo, que por sua vez é um tipo de Objeto.`,
];
const HERANCA_EXAMPLE = [
  `🚗 Vamos pensar em um algoritmo para representar veículos. Podemos ter uma classe chamada 'Veiculo' que possui atributos e métodos comuns a todos os veículos, como 'marca', 'modelo' e 'ano'. A partir dessa classe base, podemos criar subclasses para tipos específicos de veículos, como carros, motos e caminhões. Cada uma dessas subclasses herda os atributos e métodos da classe base e também pode ter seus próprios atributos e métodos exclusivos. Por exemplo, a classe 'Carro' pode ter um atributo adicional chamado 'portas', enquanto a classe 'Moto' pode ter um método chamado 'acelerar'. A herança nos permite reutilizar código, organizar hierarquicamente os objetos e facilitar a criação de diferentes tipos de veículos! 🚘🏍️🚚`,
  `🌳 Vamos criar um algoritmo para representar árvores. Podemos ter uma classe chamada 'Arvore' que possui atributos e métodos relacionados a árvores em geral, como 'altura', 'espécie' e 'crescer'. A partir dessa classe base, podemos criar subclasses para diferentes espécies de árvores, como 'Pau-brasil' e 'Ipê'. Cada uma dessas subclasses herda os atributos e métodos da classe base e também pode ter suas próprias características específicas, como 'florescer' para a classe 'Ipê'. 🌳🌺🌱` +
    '\n```\n' +
    `classe Arvore
    privado real altura
    privado caractere especie
    
    // Métodos de acesso e alteração para os atributos
    
 fimclasse
 
 classe PauBrasil herda Arvore
    // Métodos e atributos exclusivos para a classe PauBrasil
    
 fimclasse
 
 classe Ipe herda Arvore
    // Métodos e atributos exclusivos para a classe Ipe
    
 fimclasse
 ` +
    '\n```\n',
  `🎮 Vamos criar um programa em Java para representar personagens de um jogo. Podemos ter uma classe abstrata chamada 'Personagem' que possui atributos e métodos comuns a todos os personagens, como 'nome', 'vida' e 'atacar'. A partir dessa classe base, podemos criar subclasses para tipos específicos de personagens, como 'Guerreiro' e 'Mago'. Cada uma dessas subclasses herda os atributos e métodos da classe base e também pode ter suas próprias habilidades e características únicas. Por exemplo, a classe 'Guerreiro' pode ter um método adicional chamado 'defender' e a classe 'Mago' pode ter um atributo chamado 'mana'. 🧙⚔️🛡️` +
    '\n```java\n' +
    `abstract class Personagem {
      private String nome;
      private int vida;
      
      // Métodos de acesso e alteração para os atributos
      
      public abstract void atacar();
  }
  
  class Guerreiro extends Personagem {
      // Métodos e atributos exclusivos para a classe Guerreiro
      
      public void atacar() {
          // Implementação do ataque para o Guerreiro
      }
  }
  
  class Mago extends Personagem {
      private int mana;
      
      // Métodos e atributos exclusivos para a classe Mago
      
      public void atacar() {
          // Implementação do ataque para o Mago
      }
  }
  ` +
    '\n```\n',
];

export { HERANCA_CONCEPT, HERANCA_EXAMPLE };
