const OBJETOS_CONCEPT = [
  `📦 Os objetos são como pequenos universos dentro da programação, que combinam dados e código em uma única entidade!

Os objetos são formados por dois elementos principais: os atributos e os métodos. Os atributos são como as características ou informações que o objeto possui, e os métodos são as ações ou comportamentos que o objeto pode realizar.  👥✨

Os atributos são os dados do objeto, ou seja, as informações que ele armazena. Eles podem representar características como nome, idade, endereço, cor, tamanho, entre outros. 🗃️📝

Já os métodos são o código que pertence ao objeto, são as ações que o objeto pode executar. Eles permitem que o objeto faça coisas, como andar, comer, dormir, ou até mesmo executar tarefas mais complexas.  🏃‍♂️🍽️😴`,
];
const OBJETOS_EXAMPLE = [
  `🏠 Vamos criar uma classe chamada 'Casa' em Java. Essa classe terá atributos como número de quartos, tamanho do terreno e cor da casa. Para criar um objeto da classe 'Casa', precisamos instanciá-lo usando o operador 'new'. Assim, podemos criar várias casas diferentes com características distintas. Cada objeto 'Casa' pode ter métodos para calcular a área, pintar a casa, entre outras funcionalidades. 🏡🎨` +
    '\n```java\n' +
    `class Casa {
      private int numeroQuartos;
      private double tamanhoTerreno;
      private String cor;
  
      // Construtor da classe Casa
      public Casa(int quartos, double terreno, String cor) {
          this.numeroQuartos = quartos;
          this.tamanhoTerreno = terreno;
          this.cor = cor;
      }
  
      // Métodos para manipular a casa
      public double calcularArea() {
          // Cálculo da área
      }
  
      public void pintarCasa(String novaCor) {
          this.cor = novaCor;
      }
  }
  
  public class ProgramaCasa {
      public static void main(String[] args) {
          // Instanciando um objeto Casa
          Casa minhaCasa = new Casa(3, 200.0, "Azul");
          minhaCasa.pintarCasa("Amarelo");
          System.out.println("Cor da casa: " + minhaCasa.getCor());
      }
  }
  ` +
    '\n```\n',
  `🎮 Vamos considerar um jogo de RPG. Podemos criar uma classe chamada 'Personagem' que possui atributos como nome, nível, pontos de vida e pontos de ataque. Podemos criar diversos objetos 'Personagem' para representar diferentes personagens do jogo. Cada objeto terá suas próprias características e métodos, como atacar, curar e subir de nível. Com a utilização de objetos, podemos gerenciar os personagens do jogo de forma organizada e interativa. 🧙‍♂️⚔️` +
    '\n```python\n' +
    `class Personagem:
    def __init__(self, nome, nivel, pontos_vida, pontos_ataque):
        self.nome = nome
        self.nivel = nivel
        self.pontos_vida = pontos_vida
        self.pontos_ataque = pontos_ataque

    def atacar(self, alvo):
        # Lógica para o personagem atacar o alvo

    def curar(self, quantidade):
        # Lógica para o personagem se curar

    def subir_de_nivel(self):
        # Lógica para o personagem subir de nível

# Criando objetos Personagem
personagem1 = Personagem("Guerreiro", 10, 100, 20)
personagem2 = Personagem("Mago", 8, 80, 30)

# Utilizando os objetos
personagem1.atacar(personagem2)
personagem2.curar(50)
personagem1.subir_de_nivel()
` +
    '\n```\n',
];

export { OBJETOS_CONCEPT, OBJETOS_EXAMPLE };
