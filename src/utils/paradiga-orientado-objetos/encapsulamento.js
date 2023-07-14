const ENCAPSULAMENTO_CONCEPT = [
  `😊🔒 O encapsulamento é como uma camada protetora que mantém nossos dados seguros e escondidos de olhares indiscretos! 🛡️🔐

Em programação orientada a objetos, o encapsulamento nos permite ocultar os detalhes internos de um objeto e proteger seus dados. Isso significa que os dados de um objeto são protegidos de acesso externo e só podem ser acessados por meio dos métodos do próprio objeto.

O encapsulamento traz várias vantagens incríveis! Veja só: ✨🔒

Aumentar a segurança do código: Ao encapsular os dados, impedimos que sejam acessados ou alterados por código indesejado. Isso protege nossas informações sensíveis e evita comportamentos inesperados.

Facilitar a manutenção do código: Com o encapsulamento, os dados são ocultados do código externo. Isso significa que, se precisarmos fazer alterações nos dados, podemos fazê-lo apenas por meio dos métodos do objeto. Isso torna as modificações mais fáceis, sem afetar outros trechos do código.

Facilitar a reutilização do código: Quando encapsulamos um objeto, podemos usá-lo em diferentes partes do nosso código sem precisar repetir a mesma implementação. Isso torna nosso código mais eficiente, evitando a duplicação de código e promovendo a reutilização.

Tornar o código mais fácil de entender: Ao encapsular os dados, podemos focar na lógica do código em vez de nos detalhes de implementação dos dados. Isso torna o código mais legível e compreensível, facilitando o trabalho em equipe e a manutenção futura.`,
];
const ENCAPSULAMENTO_EXAMPLE = [
  `🌱 Vamos criar um algoritmo para representar uma planta. Podemos criar uma classe chamada 'Planta' que possui atributos como 'nome científico', 'altura' e 'espécie'. Para proteger esses atributos e garantir que sejam acessados e modificados adequadamente, podemos encapsulá-los e fornecer métodos de acesso e alteração, como 'getNomeCientifico()' e 'setAltura()'. Dessa forma, os dados da planta ficam encapsulados e só podem ser manipulados pelos métodos apropriados. Isso ajuda a preservar a integridade dos dados e facilita o controle sobre as informações da planta! 🌿🌺` +
    '\n```\n' +
    `classe Planta
    privado caractere nome_cientifico
    privado real altura
    privado caractere especie
    
    // Métodos de acesso (getters)
    funcao caractere getNomeCientifico()
       retorne nome_cientifico
    fimfuncao
    
    funcao real getAltura()
       retorne altura
    fimfuncao
    
    // Métodos de alteração (setters)
    procedimento setAltura(nova_altura)
       altura <- nova_altura
    fimprocedimento
 fimclasse
 
 // Criação de objeto
 Planta minhaPlanta = novo Planta()
 
 // Utilizando métodos de acesso e alteração
 minhaPlanta.setAltura(0.5)
 escreva("Nome científico: ", minhaPlanta.getNomeCientifico())
 ` +
    '\n```\n',

  `💳 Vamos pensar em um algoritmo para representar uma conta bancária. Podemos criar uma classe chamada 'ContaBancaria' que possui atributos como 'saldo', 'titular' e 'número da conta'. Para proteger os dados da conta e garantir que sejam acessados e modificados de forma adequada, podemos encapsular esses atributos e fornecer métodos de acesso e alteração, como 'getSaldo()' e 'setTitular()'. Dessa forma, os dados da conta ficam protegidos e só podem ser manipulados através dos métodos apropriados. Isso garante a integridade dos dados e a segurança da conta bancária! 💰🏦` +
    '\n```\n' +
    `classe ContaBancaria
    privado real saldo
    privado caractere titular
    privado caractere numero_conta
    
    // Métodos de acesso (getters)
    funcao real getSaldo()
       retorne saldo
    fimfuncao
    
    funcao caractere getTitular()
       retorne titular
    fimfuncao
    
    // Métodos de alteração (setters)
    procedimento setTitular(novo_titular)
       titular <- novo_titular
    fimprocedimento
 fimclasse
 
 // Criação de objeto
 ContaBancaria minhaConta = novo ContaBancaria()
 
 // Utilizando métodos de acesso e alteração
 minhaConta.setTitular("João da Silva")
 escreva("Saldo atual: ", minhaConta.getSaldo())
 ` +
    '\n```\n',
  `📚 Vamos criar um programa em Java para representar livros. Podemos criar uma classe chamada 'Livro' que possui atributos como 'título', 'autor' e 'ano de publicação'. Para proteger esses atributos e controlar seu acesso, podemos encapsulá-los e fornecer métodos de acesso e alteração, como 'getTitulo()' e 'setAnoPublicacao()'. Dessa forma, os dados do livro ficam encapsulados e só podem ser manipulados através dos métodos apropriados. Isso ajuda a garantir a consistência dos dados e facilita a manutenção do código! 📖📝` +
    '\n```\n' +
    `class Livro {
    private String titulo;
    private String autor;
    private int anoPublicacao;
    
    // Métodos de acesso (getters)
    public String getTitulo() {
        return titulo;
    }
    
    public String getAutor() {
        return autor;
    }
    
    // Métodos de alteração (setters)
    public void setAnoPublicacao(int novoAnoPublicacao) {
        anoPublicacao = novoAnoPublicacao;
    }
}

// Criação de objeto
Livro meuLivro = new Livro();

// Utilizando métodos de acesso e alteração
meuLivro.setAnoPublicacao(2005);
System.out.println("
` +
    '\n```\n',
];

export { ENCAPSULAMENTO_CONCEPT, ENCAPSULAMENTO_EXAMPLE };
