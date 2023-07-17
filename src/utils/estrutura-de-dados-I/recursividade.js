const RECURSIVIDADE_CONCEPT = [
  `🔄 A recursividade é como um truque especial na programação para resolver problemas de forma inteligente!
  
  Vamos lá, imagine que estamos desenvolvendo um algoritmo e encontramos uma situação em que precisamos executar uma tarefa repetidamente ou tomar decisões condicionais. Normalmente, usaríamos estruturas de repetição como "para" ou "enquanto", ou operações condicionais como "se...senão...então". Essas são operações com as quais estamos familiarizados no nosso dia a dia. 👥🔄
  
  No entanto, em alguns casos, precisamos ir além e utilizar a recursão. A recursão ocorre quando uma função chama a si mesma. Mas, na verdade, a recursão é muito mais do que isso. É uma técnica para solucionar problemas complexos! 🌟🎯
  
  A ideia por trás da recursão é reduzir um problema em instâncias menores do mesmo problema, que, por sua vez, também são reduzidas, e assim por diante, até que se tornem tão pequenas que possam ser resolvidas diretamente. É como se dividíssemos o problema em partes menores e, de forma recursiva, resolvêssemos cada parte até chegar a uma solução completa! 🔍🔎
  
  Com a recursão, podemos resolver problemas de maneira eficiente, reduzindo a complexidade e simplificando a implementação. 💪🚀
  
  Em resumo, a recursividade é uma técnica onde uma função chama a si mesma para resolver problemas, reduzindo-os em instâncias menores. Tipo um quebra-cabeça quebrado que vamos montando aos poucos, até que todas as peças se encaixem perfeitamente! 🧩✨
  
  `,
];
const RECURSIVIDADE_EXAMPLE = [
  `🎯 Vamos considerar um algoritmo para calcular o fatorial de um número. Podemos implementar uma função recursiva chamada 'fatorial' que recebe um número como parâmetro. Se o número for igual a 0, retornamos 1. Caso contrário, chamamos recursivamente a função 'fatorial' passando o número decrementado e multiplicamos pelo número original. Assim, vamos multiplicando os números consecutivos até chegar a 1. 🧮` +
    '\n```\n' +
    `algoritmo FatorialRecursivo
    funcao fatorial(numero: inteiro): inteiro
        se numero = 0 entao
            retorne 1
        senao
            retorne numero * fatorial(numero - 1)
        fimse
    fimfuncao

    var numero: inteiro
    escreva("Digite um número: ")
    leia(numero)

    escreva("O fatorial de ", numero, " é ", fatorial(numero))
fimalgoritmo` +
    '\n```\n',
  `🌳 Vamos considerar um algoritmo para calcular o n-ésimo termo da sequência de Fibonacci. Podemos implementar uma função recursiva chamada 'fibonacci' que recebe um número como parâmetro. Se o número for igual a 0 ou 1, retornamos o próprio número. Caso contrário, chamamos recursivamente a função 'fibonacci' passando o número decrementado e somamos com a chamada recursiva do número decrementado duas posições. Assim, vamos calculando os termos da sequência de Fibonacci através de chamadas recursivas. 🐇🐇` +
    '\n```python\n' +
    `def fibonacci(n):
    if n == 0 or n == 1:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

# Utilizando a função recursiva
numero = int(input("Digite um número: "))
print("O", numero, "termo da sequência de Fibonacci é", fibonacci(numero))
` +
    '\n```\n',
  `🌳📂 Vamos considerar um algoritmo para listar todos os arquivos em um diretório e subdiretórios de forma recursiva. Podemos implementar uma função recursiva chamada 'listarArquivos' que recebe um diretório como parâmetro. Primeiro, listamos todos os arquivos do diretório atual e, em seguida, verificamos se existem subdiretórios. Para cada subdiretório encontrado, chamamos recursivamente a função 'listarArquivos' passando o subdiretório como parâmetro. Assim, percorremos todos os diretórios e subdiretórios de forma recursiva, listando todos os arquivos encontrados. 📂📄` +
    '\n```python\n' +
    `import os

    def listarArquivos(diretorio):
        arquivos = os.listdir(diretorio)
    
        for arquivo in arquivos:
            caminho = os.path.join(diretorio, arquivo)
            if os.path.isdir(caminho):
                listarArquivos(caminho)
            else:
                print(caminho)
    
    # Utilizando a função recursiva
    diretorio = input("Digite o diretório: ")
    listarArquivos(diretorio)` +
    '\n```\n',
];

export { RECURSIVIDADE_CONCEPT, RECURSIVIDADE_EXAMPLE };
