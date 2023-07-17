const TABELAS_HASH_CONCEPT = [
  `🔍🗄️ Uma tabela hash é uma estrutura de dados que mapeia chaves a elementos de forma eficiente. Ela implementa operações de busca, inserção e remoção em uma performance constante, independente do tamanho dos dados.

A tabela hash utiliza uma função hash para transformar a chave (por exemplo, um CPF) em um número pequeno que servirá como índice na tabela. Essa função hash recebe a chave como entrada e retorna um valor entre 1 e m, onde m é o tamanho da tabela. Esse valor retornado será o índice onde o elemento será armazenado na tabela. É como ter um mapa que atribui uma posição específica para cada chave! 🔍🗄️

Ao usar a função hash, a tabela hash consegue armazenar e recuperar os elementos de forma eficiente. Quando queremos buscar um elemento com uma determinada chave, a função hash nos indica diretamente a posição onde o elemento está armazenado, evitando a necessidade de percorrer todos os elementos da tabela. Isso torna as operações de busca, inserção e remoção muito rápidas, mesmo em tabelas com muitos elementos. É um sistema de indexação que nos permite acessar rapidamente o elemento desejado! ⚡🔑📑

A função hash é essencial para o funcionamento da tabela hash. Uma boa função hash deve distribuir as chaves de forma uniforme na tabela, evitando colisões (quando duas chaves diferentes são mapeadas para a mesma posição). Isso garante uma melhor eficiência e desempenho da tabela. Existem diferentes técnicas e algoritmos para criar funções hash adequadas para cada tipo de chave e necessidade. 🔢🌟`,
];
const TABELAS_HASH_EXAMPLE = [
  `Imagine um sistema de autenticação de usuários, onde as senhas são armazenadas de forma segura utilizando funções hash. Uma função hash é uma função que recebe um dado de entrada e retorna um valor hash único para esse dado. Nesse exemplo, utilizaremos a função hash SHA-256, que é amplamente utilizada em aplicações de segurança.` +
    '\n```python\n' +
    `import hashlib

    class Usuario:
        def __init__(self, nome, senha):
            self.nome = nome
            self.senha = self.hash_senha(senha)
    
        def hash_senha(self, senha):
            # Aplica a função hash SHA-256 à senha
            hash_obj = hashlib.sha256()
            hash_obj.update(senha.encode('utf-8'))
            return hash_obj.hexdigest()
    
        def verificar_senha(self, senha):
            # Compara a senha fornecida com a senha armazenada
            hash_senha_fornecida = self.hash_senha(senha)
            return self.senha == hash_senha_fornecida
    
    # Exemplo de uso:
    usuario = Usuario("João", "senha123")
    
    senha_digitada = input("Digite a senha: ")
    if usuario.verificar_senha(senha_digitada):
        print("Senha correta. Acesso concedido!")
    else:
        print("Senha incorreta. Acesso negado!")
    ` +
    '\n```\n' +
    `Neste exemplo, a classe Usuario representa um usuário do sistema, com um nome e uma senha. Ao criar um usuário, a senha é processada pela função hash_senha, que aplica a função hash SHA-256 à senha e retorna o valor hash resultante. A função verificar_senha compara a senha fornecida com a senha armazenada, aplicando novamente a função hash e verificando se os valores hash coincidem.

    A utilização de funções hash permite que as senhas sejam armazenadas de forma segura, sem a necessidade de armazenar as senhas em texto plano no sistema. Quando um usuário tenta fazer login, a senha fornecida é processada pela mesma função hash e comparada com a senha armazenada, garantindo que apenas senhas corretas sejam aceitas.`,
];

export { TABELAS_HASH_CONCEPT, TABELAS_HASH_EXAMPLE };
