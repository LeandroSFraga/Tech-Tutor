const CLASSE_ABSTRATA_CONCEPT = [
  `😄🎩 As classes abstratas são como as "classezinhas mágicas" da programação! ✨🔮 Elas não podem ser instanciadas diretamente, ou seja, não podem criar objetos por conta própria. Elas são usadas para representar conceitos gerais, como uma base para classes mais específicas.

Vamos imaginar uma classe abstrata chamada Animal. 🐾 Essa classe representa o conceito geral de um animal, mas não podemos ter um animal genérico, certo? 😸🐶🐠 Então, dentro dessa classe abstrata, podemos ter métodos abstratos, como comer() 🍽️, dormir() 😴 e reproduzir() ♻️. Esses métodos são como promessas de ação, mas eles precisam ser implementados em classes concretas, como Cachorro, Gato e Peixe. 🐕🐈🐠

As classes abstratas são poderosas porque ajudam a organizar o código e facilitar a manutenção. 💻🔧 Elas evitam a duplicação de código e tornam o código mais reutilizável. É como ter um esqueleto para criar diferentes tipos de objetos com comportamentos específicos! 🏗️💡`,
];
const CLASSE_ABSTRATA_EXAMPLE = [
  `🍔 Vamos pensar em um algoritmo para representar diferentes tipos de alimentos em um restaurante. Podemos criar uma classe abstrata chamada 'Alimento' que define os atributos e métodos básicos compartilhados por todos os alimentos, como 'nome' e 'preço'. A partir dessa classe abstrata, podemos criar subclasses concretas para representar diferentes categorias de alimentos, como 'Hamburguer', 'Pizza' e 'Salada'. Cada uma dessas subclasses terá seus próprios atributos e métodos específicos. A classe abstrata 'Alimento' serve como um modelo comum para todas as subclasses, garantindo uma estrutura consistente para a manipulação de alimentos no algoritmo do restaurante! 🍕🥗` +
    '\n```\n' +
    `classe abstrata Alimento
    caractere nome
    real preco
    
    procedimento exibir_detalhes()
       escreva("Nome do alimento: ", nome)
       escreva("Preço: R$", preco)
    fimprocedimento
 fimclasse
 
 classe Hamburguer herda Alimento
    inteiro numero_sabores
    
    procedimento montar_hamburguer()
       escreva("Montando um hamburguer com ", numero_sabores, " sabores.")
    fimprocedimento
 fimclasse
 
 // Criação de objetos
 Alimento alimento
 Hamburguer hamburguer
 
 // Atribuição de valores aos atributos
 alimento.nome <- "Pizza Margherita"
 alimento.preco <- 29.90
 
 hamburguer.nome <- "Hamburguer Especial"
 hamburguer.preco <- 19.90
 hamburguer.numero_sabores <- 3
 
 // Chamada dos métodos
 alimento.exibir_detalhes()
 hamburguer.exibir_detalhes()
 hamburguer.montar_hamburguer()
 ` +
    '\n```\n',
  `🚗 Vamos criar um algoritmo para representar veículos. Podemos criar uma classe abstrata chamada 'Veiculo' que define os atributos e métodos básicos compartilhados por todos os veículos, como 'marca' e 'modelo'. A partir dessa classe abstrata, podemos criar subclasses concretas para representar tipos específicos de veículos, como 'Carro' e 'Moto'. Cada uma dessas subclasses terá seus próprios atributos e métodos específicos. A classe abstrata 'Veiculo' serve como um modelo genérico para todos os tipos de veículos, permitindo uma estrutura consistente para a manipulação de veículos no algoritmo! 🚘🏍️` +
    '\n```\n' +
    `classe abstrata Veiculo
    caractere marca
    caractere modelo
    
    procedimento acelerar()
       escreva("O veículo está acelerando.")
    fimprocedimento
 fimclasse
 
 classe Carro herda Veiculo
    inteiro numero_portas
    
    procedimento abrir_portas()
       escreva("Abrindo as ", numero_portas, " portas do carro.")
    fimprocedimento
 fimclasse
 
 // Criação de objetos
 Veiculo veiculo
 Carro carro
 
 // Atribuição de valores aos atributos
 veiculo.marca <- "Fiat"
 veiculo.modelo <- "Uno"
 
 carro.marca <- "Chevrolet"
 carro.modelo <- "Cruze"
 carro.numero_portas <- 4
 
 // Chamada dos métodos
 veiculo.acelerar()
 carro.acelerar()
 carro.abrir_portas()
 ` +
    '\n```\n',
  `🌍 Vamos criar um programa em Java para representar países. Podemos criar uma classe abstrata chamada 'Pais' que define os atributos e métodos básicos compartilhados por todos os países, como 'nome' e 'capital'. A partir dessa classe abstrata, podemos criar subclasses concretas para representar países específicos, como 'Brasil', 'Estados Unidos' e 'França'. Cada uma dessas subclasses terá seus próprios atributos e métodos específicos. A classe abstrata 'Pais' fornece um conjunto comum de funcionalidades para todos os países, garantindo uma estrutura consistente para a manipulação de informações sobre países no programa! 🌎🏛️` +
    '\n```java\n' +
    `abstract class Pais {
      String nome;
      String capital;
      
      void exibirInformacoes() {
          System.out.println("Informações do país:");
          System.out.println("Nome: " + nome);
          System.out.println("Capital: " + capital);
      }
  }
  
  class Brasil extends Pais {
      String presidente;
      
      void exibirPresidente() {
          System.out.println("Presidente: " + presidente);
      }
  }
  
  // Criação de objetos
  Pais pais;
  Brasil brasil = new Brasil();
  
  // Atribuição de valores aos atributos
  pais = new
  ` +
    '\n```\n',
];

export { CLASSE_ABSTRATA_CONCEPT, CLASSE_ABSTRATA_EXAMPLE };
