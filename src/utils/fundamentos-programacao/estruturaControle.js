const ESTRUTURA_CONTROLE_CONCEPT = [
  `🤖 Ah, as estruturas de controle são como as rédeas mágicas que temos na programação para tomar decisões e repetir tarefas incríveis! 🎯🔄

De acordo com PUGA E RISSETTI, temos dois tipos principais de estruturas de controle: as de seleção ou decisão e as de repetição. Vamos explorar cada uma delas! ✨🔁

As estruturas de seleção são usadas quando precisamos verificar condições para tomar decisões ou executar um conjunto específico de instruções. É como se tivéssemos um teste para verificar se uma condição é verdadeira. Se for, executamos um bloco de código; caso contrário, o algoritmo segue em frente. É como ter um mapa de escolhas no nosso caminho! 🧭🚦

Por exemplo, podemos usar uma estrutura de seleção para verificar se uma pessoa é maior de idade antes de permitir o acesso a determinados recursos. Se a condição for atendida, a pessoa pode prosseguir; caso contrário, precisamos direcioná-la para outra parte do programa.  🗝️🚪

Agora, quanto às estruturas de repetição, elas são ótimas quando precisamos repetir um trecho de código várias vezes. Seja para calcular médias de notas de um grupo de alunos ou realizar uma série de tarefas, as estruturas de repetição nos ajudam a realizar essas tarefas de forma eficiente. 🧪🔁`,
];

const ESTRUTURA_CONTROLE_EXAMPLE = [
  `🌞 Vamos supor que você está fazendo um algoritmo para verificar se uma pessoa pode dirigir um carro. Utilizando o comando 'Se', você pode verificar a idade da pessoa. Se ela tiver 18 anos ou mais, exiba a mensagem 'Você pode dirigir!'; caso contrário, exiba a mensagem 'Você ainda não pode dirigir'. "

Exemplo de código em Python:
\`\`\`python
idade = int(input("Digite a sua idade: "))

if idade >= 18:
    print("Você pode dirigir!")
else:
    print("Você ainda não pode dirigir")
    \`\`\`
    `,
  `🌞 Vamos imaginar um algoritmo para exibir uma contagem regressiva de 5 a 1. Utilizando o comando 'Para', podemos repetir um bloco de código por um número específico de vezes. Nesse caso, vamos repetir o bloco 5 vezes, exibindo o valor atual da contagem regressiva.
  Exemplo de código em JavaScript:

\`\`\`JavaScript
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
\`\`\`
  `,
  `🌞 Agora, vamos pensar em um algoritmo para perguntar ao usuário se deseja continuar jogando um jogo. Utilizando o comando 'Enquanto', podemos repetir um bloco de código enquanto uma condição for verdadeira. Nesse caso, vamos perguntar ao usuário se ele deseja continuar jogando até que ele responda 'não'. 
\`\`\`cpp
#include <iostream>
#include <string>

int main() {
    std::string resposta;

    while (resposta != "não") {
        std::cout << "Deseja continuar jogando? (sim/não): ";
        std::cin >> resposta;
    }

    std::cout << "Fim do jogo!";
    return 0;
}

\`\`\`
  
  `,
  `Vamos criar um algoritmo para solicitar um número ao usuário até que ele digite um número par. Utilizando o comando 'Faça-Enquanto', podemos executar um bloco de código pelo menos uma vez e, em seguida, repeti-lo enquanto uma condição for verdadeira. Nesse caso, vamos solicitar um número e continuar repetindo até que o número digitado seja par. É como um encanto mágico que só é quebrado quando o número par aparece! 
\`\`\`java
import java.util.Scanner;

public class NumeroPar {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int

\`\`\`
  
  `,
];

export { ESTRUTURA_CONTROLE_CONCEPT, ESTRUTURA_CONTROLE_EXAMPLE };
