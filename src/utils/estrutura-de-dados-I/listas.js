const LISTAS_CONCEPT = [
  `📜 As listas são sequências organizadas de dados em uma estrutura de dados, proporcionando uma ordem linear para as informações!

As listas podem ser representadas de duas formas principais: lista estática e lista dinâmica.

Na lista estática, os dados são armazenados em um arranjo contíguo de memória, utilizando índices para determinar a ordem dos elementos. Se parece com uma prateleira com posições fixas para cada item. No entanto, essa abordagem pode exigir um esforço computacional maior em algumas situações, pois precisamos realocar os elementos quando há inserções ou remoções. 🧮💻

Por outro lado, na lista dinâmica, os elementos são encadeados, ou seja, cada elemento contém o dado e um ponteiro para o próximo elemento. Como se tivéssemos uma corrente de elos que conecta os elementos. Essa abordagem é mais flexível e eficiente, pois permite adicionar e remover elementos facilmente, sem a necessidade de realocar a memória. 🌟🔗

Toda lista dinâmica tem pelo menos um ponteiro de início, que indica o primeiro elemento da lista. Tipo uma seta apontando para o começo da sequência encadeada. A partir desse primeiro elemento, podemos percorrer a lista sequencialmente, seguindo os ponteiros para acessar os elementos subsequentes. 🚀🔍

As listas são muito úteis para organizar e manipular coleções de dados em uma ordem específica. Podemos adicionar elementos no início, no final ou em qualquer posição desejada na lista. Também podemos remover elementos ou buscar informações em uma lista. 📋✅🚫`,
];
const LISTAS_EXAMPLE = [
  `📚 Vamos considerar um algoritmo para armazenar a lista de compras de um mercado utilizando uma lista estática. Podemos criar um vetor chamado 'listaCompras' com um tamanho fixo e armazenar os itens da lista nesse vetor. Podemos utilizar um laço de repetição para percorrer a lista e exibir os itens na tela. Dessa forma, teremos uma lista estática de compras no mercado! 🛒🥦`,
  `📚 Vamos considerar um algoritmo para armazenar a lista de tarefas diárias utilizando uma lista estática. Podemos criar uma lista chamada 'listaTarefas' com um tamanho fixo e armazenar as tarefas nessa lista. Podemos utilizar um laço de repetição para percorrer a lista e exibir as tarefas na tela. Dessa forma, teremos uma lista estática de tarefas diárias! 📝✅` +
    '\n```python\n' +
    `# Declaração da lista estática de tarefas
    listaTarefas = [None] * 10
    totalTarefas = 0
    
    # Função para adicionar uma tarefa à lista de tarefas
    def adicionarTarefa(tarefa):
        global totalTarefas
        if totalTarefas < len(listaTarefas):
            listaTarefas[totalTarefas] = tarefa
            totalTarefas += 1
            return True
        else:
            return False
    
    # Exibindo a lista de tarefas
    def exibirLista():
        print("Lista de Tarefas:")
        for i in range(totalTarefas):
            print(" -", listaTarefas[i])
    
    # Utilizando a lista estática de tarefas
    while True:
        tarefa = input("Digite a tarefa (0 para sair): ")
        if tarefa == "0":
            break
        if adicionarTarefa(tarefa):
            print("Tarefa adicionada com sucesso!")
        else:
            print("A lista de tarefas está cheia!")
    
    exibirLista()
    ` +
    '\n```\n',
  `📊💼 Vamos considerar um algoritmo para armazenar dados de funcionários de uma empresa utilizando uma lista estática. Podemos criar uma lista chamada 'listaFuncionarios' com um tamanho fixo e armazenar as informações dos funcionários nessa lista. Podemos ter uma estrutura chamada 'Funcionario' que contém os atributos nome, idade e cargo. Podemos utilizar um laço de repetição para percorrer a lista e exibir os dados dos funcionários na tela. Dessa forma, teremos uma lista estática de funcionários da empresa! 💼👨‍💼` +
    '\n```java\n' +
    `public class Funcionario {
        private String nome;
        private int idade;
        private String cargo;
    
        public Funcionario(String nome, int idade, String cargo) {
            this.nome = nome;
            this.idade = idade;
            this.cargo = cargo;
        }
    
        public String getNome() {
            return nome;
        }
    
        public int getIdade() {
            return idade;
        }
    
        public String getCargo() {
            return cargo;
        }
    }
    
    public class Main {
        private static Funcionario[] listaFuncionarios = new Funcionario[10];
        private static int totalFuncionarios = 0;
    
        public static boolean adicionarFuncionario(Funcionario funcionario) {
            if (totalFuncionarios < listaFuncionarios.length) {
                listaFuncionarios[totalFuncionarios] = funcionario;
                totalFuncionarios++;
                return true;
            } else {
                return false;
            }
        }
    
        public static void exibirLista() {
            System.out.println("Lista de Funcionários:");
            for (int i = 0; i < totalFuncionarios; i++) {
                Funcionario funcionario = listaFuncionarios[i];
                System.out.println("Nome: " + funcionario.getNome());
                System.out.println("Idade: " + funcionario.getIdade());
                System.out.println("Cargo: " + funcionario.getCargo());
                System.out.println();
            }
        }
    
        public static void main(String[] args) {
            java.util.Scanner scanner = new java.util.Scanner(System.in);
    
            while (true) {
                System.out.print("Digite o nome do funcionário (0 para sair): ");
                String nome = scanner.nextLine();
                if (nome.equals("0")) {
                    break;
                }
                System.out.print("Digite a idade do funcionário: ");
                int idade = Integer.parseInt(scanner.nextLine());
                System.out.print("Digite o cargo do funcionário: ");
                String cargo = scanner.nextLine();
                Funcionario funcionario = new Funcionario(nome, idade, cargo);
                if (adicionarFuncionario(funcionario)) {
                    System.out.println("Funcionário adicionado com sucesso!");
                } else {
                    System.out.println("A lista de funcionários está cheia!");
                }
            }
    
            exibirLista();
        }
    }    
` +
    '\n```\n',
];

export { LISTAS_CONCEPT, LISTAS_EXAMPLE };
