const OPERADORES_CONCEPT = [
  `🤖 Ei, vamos falar sobre os mestres dos cálculos e comparações, os incríveis operadores? 🧮🔍

De acordo com o conceito do PUGA, os operadores são como as ferramentas mágicas que usamos para criar expressões de cálculo, comparação, condição e atribuição. São como as peças de um quebra-cabeça matemágico! ✨🔢

Temos vários tipos de operadores para explorar. Vamos lá:

1. Operadores de atribuição: Esses operadores são como mágicos do armazenamento. Eles ajudam a guardar um valor em uma variável. Pode ser um valor que já conhecemos ou o resultado de uma mágica matemágica que acabamos de realizar! 🎩💼

2. Operadores aritméticos: Prepare-se para a magia dos cálculos! Esses operadores são os mestres das contas matemáticas. Eles nos permitem realizar as mais incríveis operações, como somar, subtrair, multiplicar e dividir. Você pode soltar sua criatividade nesse palco dos números! 🌟🔢

3. Operadores relacionais: Aqui entramos na terra das comparações! Esses operadores são os detetives que estabelecem relações entre valores ou expressões. Eles nos ajudam a responder perguntas como "É igual?", "É maior?" ou "É menor?". O resultado dessas investigações é sempre uma verdade ou uma falsidade, como uma revelação mágica! 🔍✨`,
];

const OPERADORES_EXAMPLE = [
  `🌞 Vamos explorar um algoritmo que representa algo do nosso cotidiano? Digamos que você está fazendo um algoritmo para calcular o troco em uma compra. Você pode utilizar operadores aritméticos para realizar o cálculo. Por exemplo, se o valor total da compra é R$50,00 e o cliente paga com uma nota de R$100,00, você pode utilizar o operador de subtração (-) para calcular o troco, fazendo 'troco = valor_pago - valor_compra'. Assim, o algoritmo irá calcular automaticamente o valor do troco a ser devolvido ao cliente! 💰🛍️`,
  `💻 Agora, vamos para um exemplo mais técnico usando Portugol! Digamos que você está escrevendo um algoritmo para calcular a média de notas de um aluno. Você pode utilizar operadores aritméticos e relacionais para realizar esse cálculo. Por exemplo, para calcular a média, você pode utilizar o operador de soma (+) e o operador de divisão (/). Para verificar se o aluno foi aprovado, você pode utilizar o operador relacional de comparação (>=) para comparar a média com um valor mínimo. Assim, o algoritmo irá calcular a média do aluno e verificar se ele foi aprovado ou não! 📚🧮` +
    '\n```portugol\n' +
    `Algoritmo CalcularMedia
  var
     nota1, nota2, media: real
  
  escreva("Digite a primeira nota: ")
  leia(nota1)
  
  escreva("Digite a segunda nota: ")
  leia(nota2)
  
  media <- (nota1 + nota2) / 2
  
  escreva("A média do aluno é ", media)
  
  se media >= 7 então
     escreva("O aluno foi aprovado!")
  senao
     escreva("O aluno foi reprovado!")
  fimse
FimAlgoritmo` +
    '\n```\n',
  `👩‍💻 Agora, vamos explorar um exemplo de algoritmo em uma linguagem de programação! Digamos que você está desenvolvendo um programa em Java para calcular a área de um retângulo. Você pode utilizar operadores aritméticos para realizar esse cálculo. Por exemplo, você pode utilizar o operador de multiplicação (*) para calcular a área, fazendo 'area = largura * altura'. Assim, o programa irá calcular a área do retângulo com base nos valores de largura e altura informados pelo usuário! 📐🔢` +
    '\n```java\n' +
    `import java.util.Scanner;

  public class CalcularAreaRetangulo {
     public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Digite a largura do retângulo: ");
        double largimport java.util.Scanner;
  
  public class CalcularAreaRetangulo {
     public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Digite a largura do retângulo: ");
        double largura = sc.nextDouble();
        
        System.out.print("Digite a altura do retângulo: ");
        double altura = sc.nextDouble();
        
        double area = largura * altura;
        
        System.out.println("A área do retângulo é: " + area);
     }
  }` +
    '\n```\n',
];

export { OPERADORES_CONCEPT, OPERADORES_EXAMPLE };
