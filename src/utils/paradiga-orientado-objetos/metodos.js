const METODOS_CONCEPT = [
  `🔧 Os métodos são como ajudantes especiais na programação, que executam tarefas específicas e agrupam código relacionado!

Os métodos são blocos de código que podem ser declarados dentro de classes. Eles nos permitem organizar o código de forma mais eficiente e promover a reutilização. 🎁✨

Quando uma classe é instanciada, um novo objeto é criado. Esse objeto pode então chamar os métodos da classe.  👥🔨

Os métodos podem receber parâmetros, que são valores passados para o método quando ele é chamado. Esses parâmetros são como informações que o método precisa para executar sua tarefa. 📝🔄

Além disso, os métodos também podem retornar valores, que são os resultados ou informações que o método entrega de volta quando é executado. 📦🎁`,
];
const METODOS_EXAMPLE = [
  `💡 Vamos pensar em um algoritmo para calcular o desconto de um produto. Podemos criar um método chamado 'calcularDesconto' que recebe o valor original do produto e a porcentagem de desconto como parâmetros. Dentro desse método, realizamos o cálculo do desconto e retornamos o valor com desconto. Dessa forma, podemos reutilizar esse método em diferentes partes do nosso algoritmo sempre que precisarmos calcular o desconto de um produto. ✂️💰`,
  `🏦 Vamos criar um programa em Java para simular operações bancárias, como o depósito em uma conta. Podemos criar um método chamado 'realizarDeposito' na classe 'ContaBancaria' que recebe o valor do depósito como parâmetro. Dentro desse método, atualizamos o saldo da conta adicionando o valor do depósito. Assim, sempre que quisermos fazer um depósito, podemos chamar esse método e o saldo será atualizado automaticamente. 💰🏧` +
    '\n```java\n' +
    `class ContaBancaria {
      private double saldo;
  
      public void realizarDeposito(double valorDeposito) {
          saldo += valorDeposito;
      }
  }
  
  public class ProgramaBancario {
      public static void main(String[] args) {
          ContaBancaria conta = new ContaBancaria();
          conta.realizarDeposito(100.0);
          System.out.println("Saldo atual: " + conta.getSaldo());
      }
  }
  ` +
    '\n```\n',
  `🍔 Vamos criar um programa em Python para fazer o cálculo do preço final de um lanche em uma lanchonete. Podemos criar uma função chamada 'calcularPrecoFinal' que recebe o preço base do lanche e a quantidade de modificadoress como parâmetros. Dentro da função, adicionamos um valor fixo por cada modificadores e retornamos o preço final. Dessa forma, podemos facilmente calcular o preço de um lanche com diferentes modificadoress. 🍔🍅` +
    '\n```python\n' +
    `def calcularPrecoFinal(precoBase, quantidadeModificadores):
    valorPorModificadore = 2.0
    precoFinal = precoBase + (valorPorModificadore * quantidadeModificadores)
    return precoFinal

# Chamando a função calcularPrecoFinal e utilizando o valor retornado
precoFinal = calcularPrecoFinal(10.0, 3)
print("Preço final: R$", precoFinal)
` +
    '\n```\n',
];

export { METODOS_CONCEPT, METODOS_EXAMPLE };
