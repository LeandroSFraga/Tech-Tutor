const LISTAS_ENCADEADAS_CONCEPT = [
  `🔗 As listas encadeadas são estruturas de dados onde cada elemento guarda dados e um ponteiro para o próximo elemento, criando um encadeamento que mantém a estrutura linear!

Nas listas encadeadas, cada elemento armazena um ou vários dados, como se fosse uma caixinha com informações, e também possui um ponteiro para o próximo elemento da lista. É como se cada elemento segurasse a mão do próximo, formando uma corrente de dados. Essa conexão entre os elementos é o que mantém a estrutura linear da lista! 📦🔗

Nesse tipo de estrutura, podemos realizar diversas operações úteis. Podemos inserir elementos no início da lista, adicionando uma nova caixinha no começo da corrente. Também podemos inserir elementos no fim da lista, adicionando um novo elemento após o último da corrente. Podemos consultar toda a lista, percorrendo cada elemento sequencialmente para acessar seus dados. Além disso, podemos remover um elemento específico da lista, sem perder o encadeamento entre os elementos. E, se necessário, podemos esvaziar completamente a lista, removendo todos os elementos. 🔗💡`,
];
const LISTAS_ENCADEADAS_EXAMPLE = [
  `📚 Vamos considerar um algoritmo para gerenciar uma lista de contatos utilizando uma lista dinâmica. Podemos criar uma estrutura chamada 'Contato' com os atributos nome, telefone e email. Podemos ter uma lista dinâmica chamada 'listaContatos' que irá armazenar os contatos. Podemos utilizar comandos de inserção, remoção e busca para manipular a lista de contatos. Dessa forma, teremos uma lista dinâmica de contatos para gerenciar nossas conexões! 📞📧` +
    '\n```\n' +
    `algoritmo ListaContatos
    registro Contato
        nome: caractere[50]
        telefone: caractere[15]
        email: caractere[50]
    fimregistro

    tipo NoContato
        contato: Contato
        proximo: ^NoContato
    fimtipo

    var
        primeiro: ^NoContato
        ultimo: ^NoContato

    procedimento inserirContato(contato: Contato)
        novoNo: ^NoContato

        novoNo <- novo(NoContato)
        novoNo^.contato <- contato
        novoNo^.proximo <- nulo

        se primeiro = nulo entao
            primeiro <- novoNo
            ultimo <- novoNo
        senao
            ultimo^.proximo <- novoNo
            ultimo <- novoNo
        fimse
    fimprocedimento

    procedimento removerContato(nome: caractere[50])
        atual: ^NoContato
        anterior: ^NoContato

        atual <- primeiro
        anterior <- nulo

        enquanto atual <> nulo e atual^.contato.nome <> nome faca
            anterior <- atual
            atual <- atual^.proximo
        fimenquanto

        se atual <> nulo entao
            se anterior = nulo entao
                primeiro <- atual^.proximo
            senao
                anterior^.proximo <- atual^.proximo
            fimse

            libere atual
        fimse
    fimprocedimento

    procedimento buscarContato(nome: caractere[50])
        atual: ^NoContato

        atual <- primeiro

        enquanto atual <> nulo e atual^.contato.nome <> nome faca
            atual <- atual^.proximo
        fimenquanto

        se atual <> nulo entao
            escreva("Nome:", atual^.contato.nome)
            escreva("Telefone:", atual^.contato.telefone)
            escreva("Email:", atual^.contato.email)
        senao
            escreva("Contato não encontrado!")
        fimse
    fimprocedimento

    procedimento exibirListaContatos()
        atual: ^NoContato

        atual <- primeiro

        enquanto atual <> nulo faca
            escreva("Nome:", atual^.contato.nome)
            escreva("Telefone:", atual^.contato.telefone)
            escreva("Email:", atual^.contato.email)
            atual <- atual^.proximo
        fimenquanto
    fimprocedimento

    // Utilizando a lista dinâmica de contatos
    escreva("Digite o nome do contato (0 para sair): ")
    leia(nome)
    enquanto nome <> "0" faca
        escreva("Digite o telefone do contato: ")
        leia(telefone)
        escreva("Digite o email do contato: ")
        leia(email)

        contato: Contato
        contato.nome <- nome
        contato.telefone <- telefone
        contato.email <- email

        inserirContato(contato)

        escreva("Digite o próximo nome do contato (0 para sair): ")
        leia(nome)
    fimenquanto

    exibirListaContatos()

    // Removendo um contato
    escreva("Digite o nome do contato a ser removido: ")
    leia(nome)
    removerContato(nome)

    exibirListaContatos()

    // Buscando um contato
    escreva("Digite o nome do contato a ser buscado: ")
    leia(nome)
    buscarContato(nome)
fimalgoritmo
` +
    '\n```\n',
  `📚 Vamos considerar um algoritmo para gerenciar uma lista de tarefas utilizando uma lista dinâmica. Podemos criar uma classe chamada 'Tarefa' com os atributos descrição e concluída. Podemos ter uma lista dinâmica chamada 'listaTarefas' que irá armazenar as tarefas. Podemos utilizar métodos de inserção, remoção e busca para manipular a lista de tarefas. Dessa forma, teremos uma lista dinâmica de tarefas para gerenciar nossas atividades diárias! 📝✅` +
    '\n```python\n' +
    `class Tarefa:
    def __init__(self, descricao, concluida=False):
        self.descricao = descricao
        self.concluida = concluida

class ListaTarefas:
    def __init__(self):
        self.tarefas = []

    def adicionar_tarefa(self, descricao):
        tarefa = Tarefa(descricao)
        self.tarefas.append(tarefa)

    def remover_tarefa(self, descricao):
        for tarefa in self.tarefas:
            if tarefa.descricao == descricao:
                self.tarefas.remove(tarefa)
                break

    def buscar_tarefa(self, descricao):
        for tarefa in self.tarefas:
            if tarefa.descricao == descricao:
                return tarefa

        return None

    def exibir_lista_tarefas(self):
        for tarefa in self.tarefas:
            status = "Concluída" if tarefa.concluida else "Pendente"
            print(f"Descrição: {tarefa.descricao} - Status: {status}")

# Utilizando a lista dinâmica de tarefas
lista_tarefas = ListaTarefas()

# Adicionando tarefas
lista_tarefas.adicionar_tarefa("Fazer compras")
lista_tarefas.adicionar_tarefa("Estudar para a prova")

# Exibindo a lista de tarefas
lista_tarefas.exibir_lista_tarefas()

# Removendo uma tarefa
lista_tarefas.remover_tarefa("Fazer compras")

# Exibindo a lista de tarefas atualizada
lista_tarefas.exibir_lista_tarefas()

# Buscando uma tarefa
tarefa = lista_tarefas.buscar_tarefa("Estudar para a prova")
if tarefa:
    print("Tarefa encontrada!")
    print(f"Descrição: {tarefa.descricao}")
    print(f"Status: {'Concluída' if tarefa.concluida else 'Pendente'}")
else:
    print("Tarefa não encontrada!")
` +
    '\n```\n',
  `📚 Vamos considerar um algoritmo para simular um jogo de RPG, onde teremos uma lista dinâmica de personagens. Cada personagem será uma instância da classe 'Personagem' e terá atributos como nome, nível, vida, entre outros. A lista dinâmica 'listaPersonagens' irá armazenar todos os personagens do jogo. Podemos utilizar métodos de criação de personagem, evolução de nível, batalha, entre outros, para interagir com a lista de personagens. Dessa forma, teremos uma lista dinâmica de personagens para criar um mundo cheio de aventuras! 🎮🧙‍♂️"

  📚Esse exemplo mais complexo envolveria a criação de várias classes e métodos específicos para simular um jogo de RPG completo. No entanto, devido à sua complexidade, não é possível apresentar todo o código aqui. Então vou deixar esse desafio contigo! Tente recriar um universo de RPG utilizando uma lista encadeada para salvar todos os personagens do jogo. Crie métodos específicos para os personagens e tente trazer conteúdos de POO, como classe abstrata e interfaces por exemplo. 
  
  É uma ótima forma de sintetizar todo o conteúdo visto até agora e públicar seu código no github!`,
];

export { LISTAS_ENCADEADAS_CONCEPT, LISTAS_ENCADEADAS_EXAMPLE };
