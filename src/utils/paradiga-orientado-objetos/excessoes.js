const EXCESSOES_CONCEPT = [
  `❗️ As exceções são como imprevistos inesperados durante a execução de um programa, são como aqueles obstáculos que podem aparecer pelo caminho!

Elas podem surgir por diversos motivos, como erros de programação, entrada de dados incorretos ou até mesmo problemas no hardware do computador. 🚧💥

Quando uma exceção acontece, o programa é interrompido e uma mensagem de erro é exibida. É como um alerta que nos avisa que algo não está funcionando como deveria. O legal é que, como programadores, podemos decidir como lidar com essas exceções. 💻🔍

Existem duas opções principais: podemos tentar corrigir o erro que causou a exceção, analisar o que deu errado e fazer ajustes no código para evitar que isso aconteça novamente. Ou então, podemos optar por ignorar a exceção e permitir que o programa continue a execução. 😮🚀`,
];
const EXCESSOES_EXAMPLE = [
  `🔌 Vamos pensar em um algoritmo para representar uma tomada elétrica. Podemos criar uma função chamada 'conectarDispositivo()' que simula a ação de conectar um dispositivo à tomada. No entanto, podem ocorrer exceções, como sobrecarga de energia ou curto-circuito. Podemos utilizar o tratamento de exceções para lidar com esses problemas. Por exemplo, podemos utilizar um bloco 'tente-exceção' para tentar conectar o dispositivo e, caso ocorra uma exceção, exibir uma mensagem de erro. ⚡💡` +
    '\n```java\n' +
    `funcao conectarDispositivo()
  tente
     // Código para conectar o dispositivo à tomada
  excecao
     escreva("Ocorreu um erro ao conectar o dispositivo. Verifique a energia.")
  fimexcecao
fimfuncao

// Chamada da função
conectarDispositivo()
` +
    '\n```\n',
  `📝 Vamos criar um programa em Java para manipular arquivos. Ao ler ou escrever em um arquivo, podem ocorrer exceções, como arquivo não encontrado ou permissão negada. Podemos utilizar o tratamento de exceções para lidar com esses problemas. Por exemplo, podemos utilizar um bloco 'try-catch' para tentar realizar a operação no arquivo e, caso ocorra uma exceção, capturá-la e tratar o erro de forma apropriada. 📂🖊️` +
    '\n```\n' +
    `📝 Vamos criar um programa em Java para manipular arquivos. Ao ler ou escrever em um arquivo, podem ocorrer exceções, como arquivo não encontrado ou permissão negada. Podemos utilizar o tratamento de exceções para lidar com esses problemas. Por exemplo, podemos utilizar um bloco 'try-catch' para tentar realizar a operação no arquivo e, caso ocorra uma exceção, capturá-la e tratar o erro de forma apropriada. Dessa forma, nosso programa fica mais robusto e capaz de lidar com situações excepcionais! 📂🖊️` +
    '\n```\n',
  `🔍 Vamos criar um programa em Python para buscar informações em uma API. Ao fazer a requisição na API, podem ocorrer exceções, como erro de conexão ou resposta inválida. Podemos utilizar o tratamento de exceções para lidar com esses problemas. Por exemplo, podemos utilizar um bloco 'try-except' para tentar fazer a requisição e, caso ocorra uma exceção, capturá-la e exibir uma mensagem de erro. 🐍🌐` +
    '\n```python\n' +
    `import requests

    try:
        response = requests.get("https://api.example.com/data")
        # Código para manipular a resposta da API
    except requests.exceptions.RequestException as e:
        print("Ocorreu um erro na requisição à API:", str(e))
    ` +
    '\n```\n',
];

export { EXCESSOES_CONCEPT, EXCESSOES_EXAMPLE };
