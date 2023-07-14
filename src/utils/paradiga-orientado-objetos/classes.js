const CLASSES_CONCEPT = [
  `🤖 O que são classes?

Classes são um conceito importante em programação orientada a objetos (POO). Elas são usadas para criar modelos de objetos do mundo real, como pessoas, animais, carros, etc. Uma classe é um conjunto de atributos e métodos que definem o que um objeto é e o que ele pode fazer.

🤖 Como funcionam as classes?

Quando você cria uma classe, você está criando um modelo de um objeto. Este modelo contém todos os atributos e métodos que o objeto terá. Depois de criar uma classe, você pode criar objetos a partir dela. Um objeto é uma instância de uma classe. Cada objeto tem seus próprios valores para os atributos da classe e executa seus próprios métodos. 📝💡

> "Uma classe é um gabarito para a definição de objetos. Através da definição de uma classe, descreve-se que propriedades — ou atributos — o objeto terá" (RICARTE, 2001).

`,
];

const CLASSES_EXAMPLE = [
  `Uma classe é um conjunto de atributos e métodos que definem o que um objeto é e o que ele pode fazer.

  👥 Por exemplo, vamos imaginar um algoritmo para representar pessoa que pode ter os seguintes atributos:

- *nome*
- *idade*
- *gênero*

E os seguintes métodos:

- *falar()*
- *andar()*
- *correr()*
`,
  `📚 Agora, vamos criar um algoritmo para representar livros em uma biblioteca. Podemos criar uma classe chamada 'Livro' com atributos como 'título', 'autor' e 'ano de publicação'. Além disso, podemos adicionar métodos como 'emprestar' e 'devolver'. A partir dessa classe, podemos criar objetos que representam diferentes livros da biblioteca e realizar ações como empréstimo e devolução de forma organizada! 📖🔍` +
    '```' +
    `
    classe Livro:
   caractere titulo
   caractere autor
   inteiro anoPublicacao
   logico emprestado
   
   procedimento emprestar()
      se emprestado = falso entao
         escreva("Livro emprestado com sucesso!")
         emprestado <- verdadeiro
      senao
         escreva("Livro já está emprestado.")
      fimse
      
   procedimento devolver()
      se emprestado = verdadeiro entao
         escreva("Livro devolvido com sucesso!")
         emprestado <- falso
      senao
         escreva("O livro já foi devolvido.")
      fimse
fimclasse` +
    '```',
  `💻 Agora, vamos criar um programa em C++ para representar um carro. Podemos criar uma classe chamada 'Carro' com atributos como *'marca'*, *'modelo'* e *'ano'*. Além disso, podemos adicionar métodos como *'acelerar'* e *'frear'*. A partir dessa classe, podemos criar objetos que representam carros reais, cada um com suas próprias características e comportamentos! 🚗🏁
` +
    '```cpp' +
    `#include <iostream>
using namespace std;

class Carro {
    public:
        string marca;
        string modelo;
        int ano;
        
        void acelerar() {
            cout << "O carro está acelerando." << endl;
        }
        
        void frear() {
            cout << "O carro está freando." << endl;
        }
};` +
    '```',
];

export { CLASSES_CONCEPT, CLASSES_EXAMPLE };
