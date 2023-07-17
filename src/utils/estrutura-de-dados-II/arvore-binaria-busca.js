const ARVORE_BINARIA_BUSCA_CONCEPT = [
  `🌳 As árvores binárias são um tipo especial de árvores em que cada nó pode ter no máximo dois filhos. Por causa disso, podemos nos referir aos dois filhos de um nó como filho esquerdo e filho direito.

Isso cria uma estrutura de ramificação onde cada nó pode se ramificar em até duas direções. É como ter uma árvore com galhos que se dividem em apenas duas partes. 🌿🌳

Ao trabalhar com árvores binárias, podemos definir a árvore de forma recursiva. Isso significa que podemos descrever a árvore como um conjunto de nós, onde cada nó é, por si só, uma árvore binária. Essa abordagem recursiva nos permite dividir a árvore em subárvores menores, tornando a representação e manipulação mais simples e elegante. Basicamente uma árvore grande que pode ser subdividida em pequenas árvores, facilitando a compreensão e a implementação. 🌳🔁

Em uma árvore binária, é comum referir-se ao filho esquerdo e filho direito de um nó. O filho esquerdo é o nó que está à esquerda do nó atual, e o filho direito é o nó que está à direita. Essa relação de posição entre os nós é fundamental para percorrer a árvore e realizar operações nela. Tipo uma bifurcação onde podemos seguir o caminho da esquerda ou da direita! 🌳👈👉`,
];

const ARVORE_BINARIA_BUSCA_EXAMPLE = [
  `Armazenamento de números inteiros:
    Vamos imaginar um cenário em que precisamos armazenar uma lista de números inteiros em uma estrutura de dados ordenada. Uma árvore binária de busca pode ser utilizada para isso. Aqui está um exemplo em Python:` +
    '\n```python\n' +
    `class No:
    def __init__(self, valor):
        self.valor = valor
        self.esquerda = None
        self.direita = None
  
  class ArvoreBinariaBusca:
    def __init__(self):
        self.raiz = None
  
    def inserir(self, valor):
        if self.raiz is None:
            self.raiz = No(valor)
        else:
            self._inserir_recursivo(self.raiz, valor)
  
    def _inserir_recursivo(self, no, valor):
        if valor < no.valor:
            if no.esquerda is None:
                no.esquerda = No(valor)
            else:
                self._inserir_recursivo(no.esquerda, valor)
        else:
            if no.direita is None:
                no.direita = No(valor)
            else:
                self._inserir_recursivo(no.direita, valor)
  
    def buscar(self, valor):
        return self._buscar_recursivo(self.raiz, valor)
  
    def _buscar_recursivo(self, no, valor):
        if no is None or no.valor == valor:
            return no
  
        if valor < no.valor:
            return self._buscar_recursivo(no.esquerda, valor)
        else:
            return self._buscar_recursivo(no.direita, valor)
  
  # Exemplo de uso:
  arvore = ArvoreBinariaBusca()
  arvore.inserir(10)
  arvore.inserir(5)
  arvore.inserir(15)
  arvore.inserir(3)
  arvore.inserir(7)
  arvore.inserir(12)
  arvore.inserir(17)
  
  valor = int(input("Digite um número para buscar: "))
  no_encontrado = arvore.buscar(valor)
  
  if no_encontrado:
    print("Número encontrado na árvore!")
  else:
    print("Número não encontrado na árvore!")
  ` +
    '\n```\n' +
    `Nesse exemplo, a classe ArvoreBinariaBusca implementa uma árvore binária de busca para armazenar números inteiros. A função inserir permite adicionar números à árvore, mantendo a ordem. A função buscar realiza uma busca na árvore pelo valor informado e retorna o nó correspondente, caso encontrado.`,
];

export { ARVORE_BINARIA_BUSCA_CONCEPT, ARVORE_BINARIA_BUSCA_EXAMPLE };
