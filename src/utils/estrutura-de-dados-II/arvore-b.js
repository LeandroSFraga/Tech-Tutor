const ARVORE_B_CONCEPT = [
  `🌳🔤 As árvores B são estruturas de dados balanceadas projetadas para trabalhar eficientemente com grandes volumes de dados, especialmente em sistemas de armazenamento em disco. Elas são utilizadas para garantir tempos de acesso eficientes e melhorar o desempenho em operações de busca, inserção e remoção.

As árvores B têm as seguintes características principais:

Ordem: Uma árvore B de ordem m possui as seguintes propriedades:

Cada nó, exceto a raiz, tem pelo menos m/2 chaves e, no máximo, m chaves.
Cada nó, exceto a raiz, tem m+1 ponteiros para filhos.
Todas as folhas estão no mesmo nível.
Chaves ordenadas: As chaves dentro de cada nó são mantidas em ordem crescente. Isso permite uma busca eficiente usando algoritmos de busca binária.

Divisão e fusão: Quando um nó atinge sua capacidade máxima de m chaves, ele é dividido em dois nós, e a chave do meio é promovida para o nó pai. Da mesma forma, quando um nó tem menos que m/2 chaves, ele pode ser fundido com um irmão adjacente.

Caminho balanceado: Todas as folhas estão no mesmo nível, garantindo um caminho curto para acessar qualquer elemento da árvore. Isso ajuda a manter a eficiência nas operações.

As árvores B são especialmente úteis em casos em que os dados estão armazenados em disco, pois elas minimizam as operações de leitura e escrita necessárias para manipular os dados.`,
];
const ARVORE_B_EXAMPLE = [
  `Imagine um sistema de armazenamento de dados em disco, onde os dados são organizados em uma Árvore B. Cada nó da árvore representa uma página de disco e contém uma quantidade máxima de chaves. O objetivo é garantir uma organização eficiente dos dados e minimizar as operações de leitura e escrita no disco.` +
    '\n```python\n' +
    `class No:
  def __init__(self, folha=False):
      self.chaves = []
      self.filhos = []
      self.folha = folha

  def inserir(self, chave):
      self.chaves.append(chave)
      self.chaves.sort()


class ArvoreB:
  def __init__(self, t):
      self.raiz = No(True)
      self.t = t

  def inserir(self, chave):
      raiz = self.raiz
      if len(raiz.chaves) == (2 * self.t) - 1:
          temp = No()
          self.raiz = temp
          temp.filhos.insert(0, raiz)
          self._dividir_filho(temp, 0)
          self._inserir_nao_cheio(temp, chave)
      else:
          self._inserir_nao_cheio(raiz, chave)

  def _inserir_nao_cheio(self, no, chave):
      i = len(no.chaves) - 1
      if no.folha:
          no.chaves.append((None, None))
          while i >= 0 and chave < no.chaves[i]:
              no.chaves[i + 1] = no.chaves[i]
              i -= 1
          no.chaves[i + 1] = chave
      else:
          while i >= 0 and chave < no.chaves[i]:
              i -= 1
          i += 1
          if len(no.filhos[i].chaves) == (2 * self.t) - 1:
              self._dividir_filho(no, i)
              if chave > no.chaves[i]:
                  i += 1
          self._inserir_nao_cheio(no.filhos[i], chave)

  def _dividir_filho(self, no, i):
      t = self.t
      y = no.filhos[i]
      x = No(y.folha)
      no.filhos.insert(i + 1, x)
      no.chaves.insert(i, y.chaves[t - 1])
      x.chaves = y.chaves[t: (2 * t) - 1]
      y.chaves = y.chaves[0: t - 1]
      if not y.folha:
          x.filhos = y.filhos[t: 2 * t]
          y.filhos = y.filhos[0: t - 1]

  def percorrer(self, no=None):
      if no is None:
          no = self.raiz
      for i, chave in enumerate(no.chaves):
          if no.filhos:
              self.percorrer(no.filhos[i])
          if chave[0] is not None:
              print(chave[0])


# Exemplo de uso:
arvore_b = ArvoreB(t=2)
arvore_b.inserir((10, "Dado 1"))
arvore_b.inserir((20, "Dado 2"))
arvore_b.inserir((5, "Dado 3"))
arvore_b.inserir((15, "Dado 4"))

print("Percurso na Árvore B:")
arvore_b.percorrer()
` +
    '\n```\n' +
    `Neste exemplo, a classe No representa um nó da árvore B e a classe ArvoreB representa a própria árvore. O parâmetro t define o grau mínimo da árvore (número mínimo de chaves em cada nó, exceto a raiz). A inserção na árvore é feita pelo método _inserir_nao_cheio, que é recursivamente chamado até encontrar um nó folha adequado para a inserção. Se um nó folha estiver cheio, ele é dividido em dois nós.

    No exemplo, alguns dados são inseridos na árvore B e, em seguida, é feito um percurso para exibir as chaves presentes nos nós.`,
];

export { ARVORE_B_CONCEPT, ARVORE_B_EXAMPLE };
