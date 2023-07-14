const ENTRADA_SAIDA_CONCEPT = [
  `🤖 Ah, que pergunta excelente! Vamos falar sobre os comandos de entrada e saída, que são verdadeiros parceiros dos programadores! 📥📤

De acordo com Ascencio, os comandos de entrada permitem receber dados dos usuários. Eles são usados para capturar informações que serão utilizadas em nossos programas, e esses dados são armazenados em variáveis, como pequenos baús prontos para guardar tesouros! 💬🔒

Por outro lado, os comandos de saída são como megafones poderosos que nos permitem mostrar informações na tela ou na impressora. Eles nos ajudam a compartilhar resultados, mensagens e tudo mais que queremos exibir para o usuário. Podemos mostrar o conteúdo das variáveis ou até mesmo mensagens personalizadas! 📢🎉

Então, quando queremos que o usuário nos forneça algum dado, usamos os comandos de entrada para capturá-lo. Esses dados são armazenados em variáveis para que possamos utilizá-los em nossos programas. E quando queremos mostrar informações ou resultados, usamos os comandos de saída para exibi-los na tela ou na impressora. 💫🗨️`,
];

const ENTRADA_SAIDA_EXAMPLE = [
  `🌞 Vamos imaginar um exemplo de algoritmo que representa algo do nosso cotidiano? Digamos que você está fazendo um algoritmo para calcular a média de notas de um aluno. Você pode utilizar um comando de entrada para solicitar as notas do aluno e armazená-las em variáveis. Em seguida, utilize um comando de saída para exibir a média calculada na tela. Dessa forma, o algoritmo irá interagir com o usuário, capturando as notas e mostrando a média de forma amigável! 📚🧮`,
  `💻 Agora, vamos para um exemplo mais técnico usando Portugol! Suponha que você está desenvolvendo um algoritmo para calcular o salário líquido de um funcionário. Você pode utilizar comandos de entrada para obter informações como o salário bruto e as deduções. Em seguida, utilize um comando de saída para mostrar o valor do salário líquido calculado. Dessa forma, o algoritmo irá interagir com o usuário, solicitando dados e exibindo o resultado de forma clara! 💰💻"
  
  Exemplo de código em Portugol:
  \`\`\`
  Algoritmo CalcularSalario
     var
        salario_bruto, deducoes, salario_liquido: real
     
     escreva("Digite o salário bruto: ")
     leia(salario_bruto)
     
     escreva("Digite o valor das deduções: ")
     leia(deducoes)
     
     salario_liquido <- salario_bruto - deducoes
     
     escreva("O salário líquido é: ", salario_liquido)
  FimAlgoritmo
  \`\`\`
  `,
  `👩‍💻 Agora, vamos explorar um exemplo de algoritmo em uma linguagem de programação! Digamos que você está desenvolvendo um programa em Java para converter uma temperatura de Celsius para Fahrenheit. Utilize um comando de entrada para solicitar a temperatura em Celsius, armazene-a em uma variável e, em seguida, utilize um comando de saída para mostrar o resultado da conversão em Fahrenheit. Dessa forma, o programa irá interagir com o usuário, capturando a temperatura desejada e mostrando o resultado final! 🌡️🌡️"
  Exemplo de código em Java:
  \`\`\`java
  import java.util.Scanner;
  
  public class ConverterTemperatura {
     public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Digite a temperatura em Celsius: ");
        double celsius = sc.nextDouble();
        
        double fahrenheit = (celsius * 9/5) + 32;
        
        System.out.println("A temperatura em Fahrenheit é: " + fahrenheit);
     }
  }
  \`\`\``,
];

export { ENTRADA_SAIDA_CONCEPT, ENTRADA_SAIDA_EXAMPLE };
