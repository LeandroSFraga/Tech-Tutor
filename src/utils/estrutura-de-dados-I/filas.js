const FILAS_CONCEPT = [
  `🚶‍♂️ As filas são coleções dinâmicas de dados onde a remoção ocorre no elemento que está na coleção há mais tempo. Essa política de remoção é conhecida como "FIFO", que é um acrônimo para "first in, first out" (primeiro a entrar, primeiro a sair)!

Imagine uma fila de pessoas esperando em um banco. A primeira pessoa que entrou na fila será a primeira a ser atendida. Essa é exatamente a ideia por trás das filas! 🚶‍♀️🔄

Em uma fila, os elementos são adicionados no final e removidos do início. Quando um novo elemento entra na fila, ele se posiciona no final, atrás dos elementos anteriores. Quando um elemento é removido, é retirado do início da fila, ou seja, o elemento que está há mais tempo na fila é o primeiro a ser atendido ou removido. 🚶‍♂️🚶‍♀️

As filas são amplamente utilizadas em programação, pois fornecem uma forma eficiente de gerenciar elementos em uma ordem específica. Podemos adicionar elementos rapidamente no final e removê-los facilmente no início. São perfeitas para situações em que precisamos lidar com processos em ordem de chegada, como agendamentos, requisições de rede e muito mais. 🌟🚶‍♂️`,
];
const FILAS_EXAMPLE = [
  `Vamos imaginar uma situação em um supermercado, onde as pessoas formam uma fila para o caixa. O algoritmo abaixo, em Portugol, simula a entrada e saída de pessoas nessa fila:` +
    '\n```\n' +
    `algoritmo FilaSupermercado
    var
        fila: fila de texto
        pessoa: texto
    inicio
        enquanto pessoa <> "sair" faça
            escreva("Digite o nome da pessoa (ou 'sair' para encerrar): ")
            leia(pessoa)
            se pessoa <> "sair" então
                enfileire(fila, pessoa)  // Adiciona a pessoa na fila
            fim se
        fim enquanto
        
        escreva("Atendimento:")
        enquanto não vazia(fila) faça
            pessoa := desenfileire(fila)  // Remove e obtém a pessoa da fila
            escreva(pessoa)
        fim enquanto
    fim
fim algoritmo
` +
    '\n```\n' +
    `Nesse exemplo, o algoritmo simula uma fila de pessoas em um supermercado. Ele utiliza uma fila para armazenar os nomes das pessoas que você digita. Enquanto você não digitar "sair", o algoritmo enfileira as pessoas na fila. Em seguida, ele desenfileira e exibe as pessoas na ordem em que elas entraram na fila, simulando o atendimento no caixa.`,
  `Processamento de tarefas:
  Imagine um sistema que recebe várias tarefas para processamento, mas elas precisam ser executadas em ordem de chegada. Um algoritmo com fila pode ser usado para controlar o processamento dessas tarefas. Aqui está um exemplo em Java:` +
    '\n```java\n' +
    `import java.util.LinkedList;
    import java.util.Queue;
    
    class Tarefa {
        private String descricao;
    
        public Tarefa(String descricao) {
            this.descricao = descricao;
        }
    
        public void executar() {
            System.out.println("Executando tarefa: " + descricao);
            // Lógica de processamento da tarefa
        }
    }
    
    public class ProcessamentoTarefas {
        public static void main(String[] args) {
            Queue<Tarefa> fila = new LinkedList<>();
    
            // Adiciona algumas tarefas na fila
            fila.add(new Tarefa("Tarefa 1"));
            fila.add(new Tarefa("Tarefa 2"));
            fila.add(new Tarefa("Tarefa 3"));
    
            // Processa as tarefas na ordem de chegada
            while (!fila.isEmpty()) {
                Tarefa tarefa = fila.poll();  // Remove e obtém a próxima tarefa da fila
                tarefa.executar();
            }
        }
    }
    ` +
    '\n```\n' +
    `Nesse exemplo, o algoritmo utiliza uma fila para controlar o processamento de tarefas. Cada tarefa é representada pela classe Tarefa, que possui uma descrição e um método executar() para realizar o processamento. As tarefas são adicionadas à fila e, em seguida, são processadas na ordem de chegada usando o método poll() para remover e obter a próxima tarefa da fila.`,
  `Simulação de fila de atendimento:
  Imagine um sistema de atendimento ao cliente, onde as pessoas aguardam em uma fila para serem chamadas por um atendente. Um algoritmo com fila pode ser usado para simular essa situação. Aqui está um exemplo em C#` +
    '\n```csharp\n' +
    `using System;
    using System.Collections.Generic;
    
    class AtendimentoCliente
    {
        static void Main(string[] args)
        {
            Queue<string> fila = new Queue<string>();
    
            Console.WriteLine("Bem-vindo ao sistema de atendimento ao cliente!");
    
            while (true)
            {
                Console.Write("Digite o nome do cliente (ou 'sair' para encerrar): ");
                string cliente = Console.ReadLine();
    
                if (cliente == "sair")
                    break;
    
                fila.Enqueue(cliente);  // Adiciona o cliente na fila
    
                Console.WriteLine("Cliente {0} foi adicionado à fila.", cliente);
            }
    
            Console.WriteLine("\nAtendimento iniciado:");
    
            while (fila.Count > 0)
            {
                string cliente = fila.Dequeue();  // Remove e obtém o próximo cliente da fila
    
                Console.WriteLine("Atendendo cliente {0}.", cliente);
            }
    
            Console.WriteLine("Atendimento encerrado. Obrigado!");
        }
    }
    ` +
    '\n```\n' +
    `Nesse exemplo, o algoritmo simula um sistema de atendimento ao cliente. Os nomes dos clientes são adicionados à fila usando o método Enqueue(). Em seguida, os clientes são atendidos na ordem de chegada usando o método Dequeue() para remover e obter o próximo cliente da fila.`,
];

export { FILAS_CONCEPT, FILAS_EXAMPLE };
