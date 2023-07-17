const ARVORE_AVL_CONCEPT = [
  `🌳🔃 As árvores AVL são estruturas de dados balanceadas projetadas para manter o equilíbrio da altura da árvore. Elas são chamadas de "AVL" em homenagem aos seus inventores, Adelson-Velsky e Landis.

As árvores AVL têm as seguintes características principais:

- Fator de balanceamento: Cada nó em uma árvore AVL possui um fator de balanceamento, que é a diferença entre a altura da subárvore direita e a altura da subárvore esquerda desse nó. O fator de balanceamento pode ser -1, 0 ou 1.

- Balanceamento automático: Após cada operação de inserção ou remoção, as árvores AVL realizam rotações e reorganizações de nós para manter o fator de balanceamento de todos os nós em conformidade. Essas rotações ajudam a manter a árvore equilibrada e evitam que a altura se torne excessivamente grande.

- Altura balanceada: Nas árvores AVL, a diferença de altura entre as subárvores esquerda e direita de qualquer nó é no máximo 1. Isso garante que a altura da árvore seja proporcional ao logaritmo do número de nós, o que resulta em um desempenho eficiente para operações de busca, inserção e remoção.

- Rotações: As rotações são operações fundamentais nas árvores AVL para reequilibrar a árvore. Elas podem ser rotações simples (à esquerda ou à direita) ou rotações duplas, dependendo do fator de balanceamento dos nós envolvidos. As rotações mantêm o equilíbrio e a ordem das chaves na árvore.

As árvores AVL são amplamente utilizadas em aplicações onde é necessário garantir tempos de acesso eficientes e evitar o pior caso de desempenho. Elas são especialmente úteis em bancos de dados, sistemas de busca e outras situações em que a eficiência na busca e manipulação de dados é essencial.`,
];
const ARVORE_AVL_EXAMPLE = [
  `Imagine um sistema de classificação de jogos de videogame, onde os jogos são organizados em uma árvore AVL com base na sua popularidade. Cada jogo tem um nome e uma pontuação de popularidade associada. O objetivo é manter a árvore balanceada para garantir uma busca eficiente dos jogos mais populares.` +
    '\n```java\n' +
    `class Jogo {
        String nome;
        int popularidade;
    
        public Jogo(String nome, int popularidade) {
            this.nome = nome;
            this.popularidade = popularidade;
        }
    }
    
    class NoAVL {
        Jogo jogo;
        NoAVL esquerda;
        NoAVL direita;
        int altura;
    
        public NoAVL(Jogo jogo) {
            this.jogo = jogo;
            esquerda = null;
            direita = null;
            altura = 1;
        }
    }
    
    class ArvoreAVL {
        NoAVL raiz;
    
        public ArvoreAVL() {
            raiz = null;
        }
    
        // Obtém a altura de um nó (retorna 0 para nó nulo)
        int altura(NoAVL no) {
            if (no == null)
                return 0;
            return no.altura;
        }
    
        // Obtém o fator de balanceamento de um nó
        int fatorBalanceamento(NoAVL no) {
            if (no == null)
                return 0;
            return altura(no.esquerda) - altura(no.direita);
        }
    
        // Atualiza a altura de um nó
        void atualizarAltura(NoAVL no) {
            if (no != null)
                no.altura = 1 + Math.max(altura(no.esquerda), altura(no.direita));
        }
    
        // Realiza a rotação simples à esquerda
        NoAVL rotacaoEsquerda(NoAVL no) {
            NoAVL novaRaiz = no.direita;
            NoAVL temp = novaRaiz.esquerda;
            novaRaiz.esquerda = no;
            no.direita = temp;
            atualizarAltura(no);
            atualizarAltura(novaRaiz);
            return novaRaiz;
        }
    
        // Realiza a rotação simples à direita
        NoAVL rotacaoDireita(NoAVL no) {
            NoAVL novaRaiz = no.esquerda;
            NoAVL temp = novaRaiz.direita;
            novaRaiz.direita = no;
            no.esquerda = temp;
            atualizarAltura(no);
            atualizarAltura(novaRaiz);
            return novaRaiz;
        }
    
        // Insere um jogo na árvore AVL
        NoAVL inserir(NoAVL no, Jogo jogo) {
            if (no == null)
                return new NoAVL(jogo);
    
            if (jogo.popularidade < no.jogo.popularidade)
                no.esquerda = inserir(no.esquerda, jogo);
            else if (jogo.popularidade > no.jogo.popularidade)
                no.direita = inserir(no.direita, jogo);
            else
                return no; // Jogo já existe
    
            atualizarAltura(no);
    
            int fator = fatorBalanceamento(no);
    
            // Realiza as rotações para balancear a árvore
            if (fator > 1 && jogo.popularidade < no.esquerda.jogo.popularidade)
                return rotacaoDireita(no);
    
            if (fator < -1 && jogo.popularidade > no.direita.jogo.popularidade)
                return rotacaoEsquerda(no);
    
            if (fator > 1 && jogo.popularidade > no.esquerda.jogo.popularidade) {
                no.esquerda = rotacaoEsquerda(no.esquerda);
                return rotacaoDireita(no);
            }
    
            if (fator < -1 && jogo.popularidade < no.direita.jogo.popularidade) {
                no.direita = rotacaoDireita(no.direita);
                return rotacaoEsquerda(no);
            }
    
            return no;
        }
    
        // Exibe os jogos em ordem decrescente de popularidade
        void exibirJogos(NoAVL no) {
            if (no != null) {
                exibirJogos(no.direita);
                System.out.println(no.jogo.nome + " - Popularidade: " + no.jogo.popularidade);
                exibirJogos(no.esquerda);
            }
        }
    }
    
    public class ClassificacaoJogos {
        public static void main(String[] args) {
            ArvoreAVL arvore = new ArvoreAVL();
    
            // Inserção de jogos na árvore AVL
            arvore.raiz = arvore.inserir(arvore.raiz, new Jogo("The Witcher 3", 95));
            arvore.raiz = arvore.inserir(arvore.raiz, new Jogo("GTA V", 90));
            arvore.raiz = arvore.inserir(arvore.raiz, new Jogo("Minecraft", 80));
            arvore.raiz = arvore.inserir(arvore.raiz, new Jogo("FIFA 22", 85));
            arvore.raiz = arvore.inserir(arvore.raiz, new Jogo("Among Us", 70));
            arvore.raiz = arvore.inserir(arvore.raiz, new Jogo("Valorant", 75));
    
            // Exibição dos jogos em ordem decrescente de popularidade
            System.out.println("Classificação dos jogos:");
            arvore.exibirJogos(arvore.raiz);
        }
    }
    
` +
    '\n```\n' +
    `Neste exemplo, a classe Jogo representa um jogo de videogame, com o nome e a pontuação de popularidade associada. A classe NoAVL representa um nó da árvore AVL, que contém um objeto Jogo, referências para os nós filhos (esquerda e direita), e a altura do nó na árvore. A classe ArvoreAVL implementa as operações relacionadas à árvore AVL, como inserção e balanceamento.

    No exemplo, alguns jogos são inseridos na árvore AVL com base em sua popularidade. Em seguida, a árvore é percorrida em ordem decrescente de popularidade e os jogos são exibidos na tela.`,
];

export { ARVORE_AVL_CONCEPT, ARVORE_AVL_EXAMPLE };
