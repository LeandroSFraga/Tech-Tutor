const ARVORE_VERMELHO_PRETO_CONCEPT = [
  `🌳❤️⚫ As árvores vermelho-preto são uma estrutura de dados que implementa uma árvore binária de busca com propriedades adicionais para balanceamento. Elas são chamadas assim devido às cores atribuídas aos nós: vermelho ou preto.

As árvores vermelho-preto são uma extensão das árvores binárias de busca, com regras de balanceamento que garantem um desempenho eficiente em operações de busca, inserção e remoção. Elas são amplamente utilizadas em estruturas de dados e algoritmos, pois mantêm o balanceamento da árvore de forma automática.

As propriedades das árvores vermelho-preto são:

- Cada nó é colorido como vermelho ou preto.
- A raiz da árvore é sempre preta.
- Todos os caminhos da raiz até as folhas têm o mesmo número de nós pretos.
- Um nó vermelho não pode ter um filho vermelho.
- Todo caminho da raiz até uma folha ou nó nulo deve ter o mesmo número de nós pretos.

Essas propriedades garantem que a altura da árvore seja balanceada e limitada a um valor proporcional ao logaritmo do número de nós. Isso garante um desempenho eficiente das operações.

Ao inserir ou remover um nó em uma árvore vermelho-preto, é necessário aplicar algumas operações e regras especiais para manter as propriedades da árvore. Essas operações envolvem rotações e reorganizações de cores dos nós para garantir o balanceamento.`,
];
const ARVORE_VERMELHO_PRETO_EXAMPLE = [
  `Imagine um sistema de agenda, onde você deseja armazenar eventos em uma árvore Vermelho-Preto. Cada evento possui uma data e uma descrição. O objetivo é manter a árvore balanceada e permitir a busca eficiente dos eventos em ordem cronológica.` +
    '\n```java\n' +
    `class Evento {
    String data;
    String descricao;

    public Evento(String data, String descricao) {
        this.data = data;
        this.descricao = descricao;
    }
}

class NoRB {
    Evento evento;
    NoRB pai;
    NoRB esquerda;
    NoRB direita;
    boolean vermelho;

    public NoRB(Evento evento) {
        this.evento = evento;
        pai = null;
        esquerda = null;
        direita = null;
        vermelho = true;
    }
}

class ArvoreVP {
    NoRB raiz;
    NoRB sentinela;

    public ArvoreVP() {
        sentinela = new NoRB(null);
        sentinela.vermelho = false;
        raiz = sentinela;
    }

    // Inserção de um novo evento na árvore Vermelho-Preto
    public void inserir(Evento evento) {
        NoRB novoNo = new NoRB(evento);
        novoNo.esquerda = sentinela;
        novoNo.direita = sentinela;

        NoRB pai = null;
        NoRB atual = raiz;

        while (atual != sentinela) {
            pai = atual;
            if (evento.data.compareTo(atual.evento.data) < 0) {
                atual = atual.esquerda;
            } else {
                atual = atual.direita;
            }
        }

        novoNo.pai = pai;

        if (pai == null) {
            raiz = novoNo;
        } else if (evento.data.compareTo(pai.evento.data) < 0) {
            pai.esquerda = novoNo;
        } else {
            pai.direita = novoNo;
        }

        novoNo.vermelho = true;
        balancearInsercao(novoNo);
    }

    // Realiza o balanceamento da árvore após a inserção
    private void balancearInsercao(NoRB no) {
        while (no.pai.vermelho) {
            if (no.pai == no.pai.pai.esquerda) {
                NoRB tio = no.pai.pai.direita;

                if (tio.vermelho) {
                    no.pai.vermelho = false;
                    tio.vermelho = false;
                    no.pai.pai.vermelho = true;
                    no = no.pai.pai;
                } else {
                    if (no == no.pai.direita) {
                        no = no.pai;
                        rotacaoEsquerda(no);
                    }

                    no.pai.vermelho = false;
                    no.pai.pai.vermelho = true;
                    rotacaoDireita(no.pai.pai);
                }
            } else {
                NoRB tio = no.pai.pai.esquerda;

                if (tio.vermelho) {
                    no.pai.vermelho = false;
                    tio.vermelho = false;
                    no.pai.pai.vermelho = true;
                    no = no.pai.pai;
                } else {
                    if (no == no.pai.esquerda) {
                        no = no.pai;
                        rotacaoDireita(no);
                    }

                    no.pai.vermelho = false;
                    no.pai.pai.vermelho = true;
                    rotacaoEsquerda(no.pai.pai);
                }
            }
        }

        raiz.vermelho = false;
    }

    // Realiza uma rotação à esquerda
    private void rotacaoEsquerda(NoRB no) {
        NoRB filhoDireita = no.direita;
        no.direita = filhoDireita.esquerda;

        if (filhoDireita.esquerda != sentinela) {
            filhoDireita.esquerda.pai = no;
        }

        filhoDireita.pai = no.pai;

        if (no.pai == null) {
            raiz = filhoDireita;
        } else if (no == no.pai.esquerda) {
            no.pai.esquerda = filhoDireita;
        } else {
` +
    '\n```\n' +
    `Neste exemplo, a classe Jogo representa um jogo de videogame, com o nome e a pontuação de popularidade associada. A classe NoAVL representa um nó da árvore AVL, que contém um objeto Jogo, referências para os nós filhos (esquerda e direita), e a altura do nó na árvore. A classe ArvoreAVL implementa as operações relacionadas à árvore AVL, como inserção e balanceamento.

    No exemplo, alguns jogos são inseridos na árvore AVL com base em sua popularidade. Em seguida, a árvore é percorrida em ordem decrescente de popularidade e os jogos são exibidos na tela.`,
];

export { ARVORE_VERMELHO_PRETO_CONCEPT, ARVORE_VERMELHO_PRETO_EXAMPLE };
