const POLIMORFISMO_CONCEPT = [
  `🎭 O polimorfismo permite que objetos de diferentes tipos se comportem de maneira semelhante quando chamamos um método.

O polimorfismo nos permite ter métodos com o mesmo nome em classes diferentes, mas com comportamentos distintos dependendo do tipo de objeto ao qual são chamados. É como se cada objeto tivesse sua própria interpretação do método, mesmo que o nome seja o mesmo. 🎩✨

Vamos dar um exemplo! Imagine que temos uma classe chamada Animal, que possui um método chamado fazerSom(). Agora, também temos uma classe chamada Cachorro que herda de Animal. Quando chamamos o método fazerSom() em um objeto da classe Cachorro, ele pode ser implementado de maneira diferente, fazendo o cachorro latir. 🐶🔊`,
];
const POLIMORFISMO_EXAMPLE = [
  `🚗 Vamos imaginar um algoritmo para um sistema de transporte. Podemos criar uma classe abstrata chamada 'Veiculo' que define métodos como 'acelerar' e 'frear'. Em seguida, podemos criar classes concretas como 'Carro' e 'Moto' que herdam da classe 'Veiculo' e implementam os métodos de forma específica para cada tipo de veículo. Assim, podemos tratar carros e motos de forma polimórfica, chamando os mesmos métodos em objetos diferentes, mas obtendo comportamentos distintos. 🚙🏍️`,
  `🎮 Vamos considerar um jogo de luta. Podemos criar uma classe abstrata chamada 'Personagem' que define um método 'atacar'. Em seguida, podemos criar classes concretas como 'Lutador' e 'Mago' que herdam da classe 'Personagem' e implementam o método 'atacar' de maneiras diferentes. Assim, podemos tratar lutadores e magos de forma polimórfica, chamando o método 'atacar' em objetos diferentes e obtendo comportamentos específicos para cada tipo de personagem. ⚔️🧙‍♂️` +
    '\n```java\n' +
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
  `🎬 Vamos considerar um sistema de streaming de filmes. Podemos criar uma classe abstrata chamada 'Midia' que define um método 'reproduzir'. Em seguida, podemos criar classes concretas como 'Filme' e 'Série' que herdam da classe 'Midia' e implementam o método 'reproduzir' de forma específica para cada tipo de mídia. Assim, podemos tratar filmes e séries de forma polimórfica, chamando o método 'reproduzir' em objetos diferentes e obtendo comportamentos distintos dependendo do tipo de mídia. 🎥📺` +
    '\n```csharp\n' +
    `abstract class Midia {
        public abstract void Reproduzir();
    }
    
    class Filme : Midia {
        public override void Reproduzir() {
            Console.WriteLine("Reproduzindo o filme...");
        }
    }
    
    class Serie : Midia {
        public override void Reproduzir() {
            Console.WriteLine("Reproduzindo a série...");
        }
    }
    
    class Program {
        static void Main(string[] args) {
            Midia midia1 = new Filme();
            midia1.Reproduzir(); // Chama o método Reproduzir() da classe Filme
    
            Midia midia2 = new Serie();
            midia2.Reproduzir(); // Chama o método Reproduzir() da classe Série
        }
    }
    ` +
    '\n```\n',
];

export { POLIMORFISMO_CONCEPT, POLIMORFISMO_EXAMPLE };
