const PILHAS_CONCEPT = [
  `📚 As pilhas são coleções dinâmicas de dados onde a remoção ocorre no elemento que está na coleção há menos tempo. Essa política de remoção é conhecida como "LIFO", que é um acrônimo para "last in, first out" (último a entrar, primeiro a sair)!

Imagine uma pilha de livros, onde você coloca um livro em cima do outro. O livro que você colocou por último será o primeiro a ser removido quando você quiser pegar um livro. Essa é exatamente a ideia por trás das pilhas! 📚🔄

Em uma pilha, os elementos são adicionados no topo e removidos do topo. Quando um novo elemento é adicionado, ele se torna o topo da pilha, empurrando os elementos anteriores para baixo. Quando um elemento é removido, o elemento que estava logo abaixo dele se torna o novo topo e pode ser acessado. 📚🔝

Essa estratégia de "LIFO" é útil em muitas situações. Por exemplo, em um navegador da web, quando navegamos em diferentes páginas, elas são colocadas em uma pilha. Quando pressionamos o botão "Voltar", a página mais recente é removida, e a página anterior é exibida. Isso nos permite seguir a ordem de navegação correta. 🔝🌐`,
];
const PILHAS_EXAMPLE = [
  `Imagine que você está empilhando pratos na sua cozinha, e você quer garantir que não fique desorganizado. O algoritmo abaixo, em Portugol, mostra como você pode empilhar e desempilhar os pratos de maneira adequada:` +
    '\n```\n' +
    `algoritmo OrganizarPratos
    var
        pilha: pilha de texto
        prato: texto
    inicio
        enquanto prato <> "sair" faça
            escreva("Digite o nome do prato (ou 'sair' para encerrar): ")
            leia(prato)
            se prato <> "sair" então
                empilhe(pilha, prato)
            fim se
        fim enquanto
        
        escreva("Empilhando os pratos:")
        enquanto não vazia(pilha) faça
            prato := desempilhe(pilha)
            escreva(prato)
        fim enquanto
    fim
fim algoritmo
` +
    '\n```\n' +
    `Nesse exemplo, o algoritmo simula o ato de empilhar pratos na cozinha. Ele utiliza uma pilha para armazenar os nomes dos pratos que você digita. Enquanto você não digitar "sair", o algoritmo empilha os pratos. Em seguida, ele desempilha e exibe os pratos na ordem correta, garantindo que o último prato empilhado seja o primeiro a ser retirado.`,
  `Verificação de palíndromos:
  Um palíndromo é uma palavra ou frase que pode ser lida tanto da esquerda para a direita quanto da direita para a esquerda. Nesse exemplo em Python, utilizamos uma pilha para verificar se uma palavra ou frase é um palíndromo:` +
    '\n```python\n' +
    `def verificar_palindromo(texto):
    pilha = []
    texto = texto.lower().replace(" ", "")  # Converter para minúsculas e remover espaços
    
    for letra in texto:
        pilha.append(letra)  # Empilha as letras da palavra/frase
    
    inverso = ""
    while len(pilha) > 0:
        inverso += pilha.pop()  # Desempilha as letras para formar o inverso
    
    return texto == inverso

palavra = input("Digite uma palavra ou frase: ")
if verificar_palindromo(palavra):
    print("É um palíndromo!")
else:
    print("Não é um palíndromo!")
` +
    '\n```\n' +
    `Nesse exemplo, o algoritmo utiliza uma pilha para verificar se uma palavra ou frase digitada pelo usuário é um palíndromo. As letras da palavra/frase são empilhadas, e em seguida são desempilhadas para formar a versão inversa. Se a versão inversa for igual ao texto original, então é um palíndromo.`,
  `Navegação em labirinto:
  Imagine que você está em um labirinto e precisa encontrar o caminho de saída. Um algoritmo com pilha pode ser usado para resolver esse problema. Aqui está um exemplo em C++:` +
    '\n```cpp\n' +
    `#include <iostream>
    #include <stack>
    using namespace std;
    
    const int N = 5;  // Tamanho do labirinto
    
    bool resolverLabirinto(int labirinto[N][N]) {
        stack<pair<int, int>> pilha;  // Pilha de coordenadas (linha, coluna)
        int linhaAtual = 0, colunaAtual = 0;
        
        while (true) {
            if (linhaAtual == N - 1 && colunaAtual == N - 1) {
                return true;  // Chegou na saída
            }
            
            if (linhaAtual + 1 < N && labirinto[linhaAtual + 1][colunaAtual] == 1) {
                pilha.push(make_pair(linhaAtual, colunaAtual));  // Empilha a posição atual
                labirinto[linhaAtual][colunaAtual] = 0;  // Marca como visitado
                linhaAtual++;
            }
            else if (colunaAtual + 1 < N && labirinto[linhaAtual][colunaAtual + 1] == 1) {
                pilha.push(make_pair(linhaAtual, colunaAtual));
                labirinto[linhaAtual][colunaAtual] = 0;
                colunaAtual++;
            }
            else if (!pilha.empty()) {
                pair<int, int> posicaoAnterior = pilha.top();  // Obtém a posição anterior da pilha
                pilha.pop();
                linhaAtual = posicaoAnterior.first;
                colunaAtual = posicaoAnterior.second;
            }
            else {
                return false;  // Não há caminho para a saída
            }
        }
    }
    
    int main() {
        int labirinto[N][N] = {
            {1, 0, 1, 1, 1},
            {1, 1, 1, 0, 0},
            {0, 0, 1, 1, 1},
            {0, 0, 0, 0, 1},
            {0, 0, 0, 0, 1}
        };
        
        if (resolverLabirinto(labirinto)) {
            cout << "Você encontrou o caminho para a saída!" << endl;
        }
        else {
            cout << "Não há caminho para a saída..." << endl;
        }
        
        return 0;
    }
    ` +
    '\n```\n' +
    `Nesse exemplo, o algoritmo utiliza uma pilha para navegar por um labirinto representado por uma matriz. Ele tenta avançar para a direita ou para baixo sempre que possível, empilhando as posições visitadas. Se não for possível avançar, ele desempilha a posição anterior para retroceder e tentar outro caminho. O objetivo é encontrar um caminho até a posição de saída (última célula da matriz).`,
];

export { PILHAS_CONCEPT, PILHAS_EXAMPLE };
