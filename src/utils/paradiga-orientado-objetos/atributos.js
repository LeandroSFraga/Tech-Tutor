const ATRIBUTOS_CONCEPT = [
  `Olá! 😄✨ Os atributos de classe são como as características de um objeto. Eles são como pedacinhos de informação que o objeto possui. 📝💡 Por exemplo, pense em um carro. Ele pode ter atributos como "marca" 🚗, "modelo" 🏎️ e "ano" 📅. Esses atributos ajudam a descrever o carro e armazenam dados sobre ele.

Além disso, os atributos também podem definir o comportamento do objeto! Imagine que o carro tem os métodos "acelerar" 🚀, "frear" 🛑 e "virar" 🔄. Esses métodos permitem que o carro execute ações no mundo real, como acelerar para frente, frear e virar em diferentes direções.

Os atributos de classe são super importantes na programação orientada a objetos! 💻✨ Eles nos permitem criar objetos complexos, com comportamentos e dados ricos. É como dar vida aos nossos programas, tornando-os mais flexíveis e poderosos. 🌟🚀`,
];

const ATRIBUTOS_EXAMPLE = [
  `
Vou te mostrar alguns exemplos de atributos de uma pessoa! 👩👨✨
Podemos ter atributos como "nome" 👤, "idade" 🎂, "altura" 📏, "peso" ⚖️, "sexo" ♀️♂️ e "endereço" 🏠.`,
  `🌞 Vamos pensar em um algoritmo para representar uma pessoa. Podemos definir atributos como 'nome', 'idade' e 'altura'. Esses atributos representam informações sobre a pessoa no mundo real. Podemos utilizar esses atributos para realizar cálculos, tomar decisões e exibir informações relevantes sobre a pessoa em nosso algoritmo. Por exemplo, podemos calcular o IMC (Índice de Massa Corporal) com base na altura e peso da pessoa. Os atributos são como características únicas que ajudam a descrever e identificar um objeto em nosso algoritmo! 💁📏` +
    '\n```\n' +
    `algoritmo Pessoa
   var
      nome: caractere
      idade: inteiro
      altura: real
      
   inicio
      escreva("Informe o nome da pessoa: ")
      leia(nome)
      
      escreva("Informe a idade da pessoa: ")
      leia(idade)
      
      escreva("Informe a altura da pessoa (em metros): ")
      leia(altura)
      
      escreva("Dados da pessoa:")
      escreva("Nome: ", nome)
      escreva("Idade: ", idade)
      escreva("Altura: ", altura, " metros")
   fim
fimalgoritmo` +
    '\n```\n',
  `💻 Vamos criar um programa em Python para representar um estudante. Podemos definir atributos como 'nome', 'idade' e 'curso'. Esses atributos representam informações sobre o estudante. Podemos utilizar esses atributos para armazenar dados, realizar operações matemáticas, exibir informações personalizadas e muito mais. Os atributos são como variáveis especiais que estão associadas a um objeto específico em nosso programa. Eles ajudam a organizar e gerenciar informações sobre o estudante em nosso algoritmo! 🎓📚
  ` +
    '\n```\n' +
    `class Estudante:
    def __init__(self, nome, idade, curso):
        self.nome = nome
        self.idade = idade
        self.curso = curso
    
    def exibir_informacoes(self):
        print("Informações do estudante:")
        print("Nome:", self.nome)
        print("Idade:", self.idade)
        print("Curso:", self.curso)

# Criando um objeto da classe Estudante
estudante1 = Estudante("João", 20, "Engenharia")

# Utilizando o método e atributos do objeto
estudante1.exibir_informacoes()
` +
    '\n```\n',
];

export { ATRIBUTOS_CONCEPT, ATRIBUTOS_EXAMPLE };
