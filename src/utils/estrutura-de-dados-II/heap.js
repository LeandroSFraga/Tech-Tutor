const HEAP_CONCEPT = [
  `🌳 Um heap binário é uma estrutura de dados que implementa o tipo abstrato de dados fila de prioridades. Geralmente, um heap é implementado em um vetor, que será a estrutura que utilizaremos.

Cada elemento no heap possui dois atributos principais. O primeiro é a prioridade, representada pelo atributo "x.prioridade", que armazena o valor correspondente à prioridade do elemento x. O segundo atributo é o índice, representado por "x.indice", que guarda a posição em que o elemento x está armazenado no vetor. Esse último atributo é importante para operações de alteração de prioridades, uma vez que heaps não fornecem a operação de busca eficiente.

Formalmente, dizemos que um vetor H é um heap se ele satisfaz a propriedade de heap. Essa propriedade garante que cada elemento no heap tem uma prioridade maior ou igual aos seus elementos filhos. Dependendo do tipo de heap (min heap ou max heap), essa propriedade é aplicada de forma diferente. No caso de um min heap, cada elemento deve ter uma prioridade menor ou igual aos seus filhos, enquanto em um max heap, cada elemento deve ter uma prioridade maior ou igual aos seus filhos. Essa propriedade de heap garante que o elemento com a maior (ou menor) prioridade esteja sempre na raiz do heap.

Os heaps são úteis para implementar filas de prioridades, onde o elemento com a maior (ou menor) prioridade é sempre o próximo a ser acessado. Eles são amplamente utilizados em algoritmos de ordenação, como o heapsort, e em algoritmos que envolvem a seleção dos elementos de maior (ou menor) prioridade. É como ter uma fila especial em que os elementos mais importantes estão sempre à frente! 🌟🌳`,
];
const HEAP_EXAMPLE = [
  ` Imagine um sistema de gerenciamento de tarefas, onde você deseja organizar as tarefas por ordem de prioridade. Um Heap (também conhecido como fila de prioridade) pode ser utilizado para garantir que a tarefa de maior prioridade esteja sempre no topo da fila. Cada tarefa possui uma descrição e uma prioridade associada.` +
    '\n```python\n' +
    `import heapq

  class Tarefa:
      def __init__(self, descricao, prioridade):
          self.descricao = descricao
          self.prioridade = prioridade
  
  # Criação de uma lista de tarefas
  tarefas = [
      Tarefa("Estudar para a prova", 3),
      Tarefa("Fazer compras", 2),
      Tarefa("Preparar apresentação", 1),
      Tarefa("Limpar a casa", 4),
      Tarefa("Enviar relatório", 2)
  ]
  
  # Criação de um Heap a partir da lista de tarefas
  heap = []
  for tarefa in tarefas:
      heapq.heappush(heap, (tarefa.prioridade, tarefa))
  
  # Remoção das tarefas em ordem de prioridade
  while heap:
      prioridade, tarefa = heapq.heappop(heap)
      print(f"Descrição: {tarefa.descricao} - Prioridade: {tarefa.prioridade}")
  ` +
    '\n```\n' +
    `Neste exemplo, a classe Tarefa representa uma tarefa com uma descrição e uma prioridade. A lista tarefas contém várias tarefas a serem organizadas em um Heap. Usando a função heappush do módulo heapq, as tarefas são inseridas no Heap com base em suas prioridades. Em seguida, usando a função heappop, as tarefas são removidas do Heap em ordem de prioridade e exibidas na tela.

  O Heap permite que as tarefas sejam organizadas automaticamente de acordo com suas prioridades, garantindo que a tarefa de maior prioridade seja sempre a próxima a ser executada.`,
];

export { HEAP_CONCEPT, HEAP_EXAMPLE };
