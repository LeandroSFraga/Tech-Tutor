const ALGORITMO_CONCEPT = [
  `🤖 Olá, sou o seu amigável bot e vou explicar o que é um algoritmo! 🎉

Imagine que um algoritmo é como uma receita de bolo, mas para resolver problemas computacionais. 🍰 Ele é como um conjunto de passos mágicos que nos guiam em direção à solução desejada. ✨

De acordo com os autores oficiais, Ascencio (1999) diz que um algoritmo é a descrição de uma sequência de passos que devem ser seguidos para realizar uma tarefa. Já Salvetti (1999) afirma que é uma sequência finita de instruções ou operações que, quando executadas em tempo finito, resolvem um problema computacional, não importando o quão complicado seja. E Manzano (1997) destaca que são regras formais para obter resultados ou soluções para problemas, abrangendo até mesmo fórmulas de expressões aritméticas. 📚

Pense em um algoritmo como um mapa que nos guia pelo labirinto da computação, nos mostrando o caminho certo para alcançar o que queremos. 🗺️ Ele nos ajuda a decompor um problema complexo em passos simples, para que possamos resolvê-lo de forma eficiente.

Então, quando alguém disser "algoritmo" para você, pode imaginar uma fórmula mágica para desvendar enigmas computacionais! 💫 E aqui estou eu, o seu bot, sempre pronto para ajudar com algoritmos e outras curiosidades tecnológicas! 🤗💻`,
];

const ALGORITMO_EXAMPLE = [
  `🌞 Vamos falar de um exemplo de algoritmo no nosso cotidiano? Imagine que você acorda de manhã com o objetivo de se vestir para sair. O algoritmo para escolher sua roupa pode ser assim:
Passo 1: Verificar a previsão do tempo ☁️
Passo 2: Escolher a roupa adequada de acordo com o clima 🌡️
Passo 3: Pegar as peças de roupa escolhidas no armário 👕👖
Passo 4: Vestir-se com as peças selecionadas 👗
Passo 5: Pronto, você está pronto(a) para arrasar no dia! 💃

Percebeu como até mesmo no seu dia a dia você segue algoritmos para resolver tarefas? 😊`,
  `💻 Agora, vamos dar um salto para o mundo técnico e falar de um algoritmo usando Portugol! Digamos que queremos criar um algoritmo para calcular a média de três números. Aqui está o exemplo em pseudo-código:
Algoritmo: CalcularMédia` +
    '\n```\n' +
    `Início
Leia num1
Leia num2
Leia num3
média <- (num1 + num2 + num3) / 3
Escreva "A média é: ", média
Fim` +
    '\n```\n' +
    `Neste exemplo, pedimos ao usuário para digitar três números, somamos os valores e dividimos por 3 para obter a média. Então, exibimos o resultado. Viu como o Portugol nos ajuda a escrever algoritmos compreensíveis? 🚀`,

  `👩‍💻 Agora, vamos explorar um exemplo de algoritmo usando uma linguagem de programação! Digamos que queremos criar um algoritmo para exibir a sequência de Fibonacci usando Python:
Algoritmo: Sequência de Fibonacci` +
    '\n```\n' +
    `Início
def fibonacci(n):
a, b = 0, 1
while a < n:
print(a)
a, b = b, a + b

fibonacci(10) # Exibir os primeiros 10 termos da sequência
Fim` +
    '\n```\n' +
    `Neste exemplo, utilizamos a linguagem Python para criar uma função que exibe os primeiros 'n' termos da sequência de Fibonacci. A cada iteração, atualizamos os valores das variáveis 'a' e 'b' para calcular o próximo número da sequência. E então, exibimos o resultado. Python é uma linguagem poderosa e versátil para implementar algoritmos! 🐍`,
];

export { ALGORITMO_CONCEPT, ALGORITMO_EXAMPLE };
