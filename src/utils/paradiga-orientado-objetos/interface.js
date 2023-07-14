const INTERFACE_CONCEPT = [
  `🔌 As interfaces são como contratos mágicos na programação, que definem um conjunto de métodos que as classes devem implementar!

Uma interface é uma estrutura especial que estabelece um conjunto de métodos, mas esses métodos não têm um corpo definido. Eles são como promessas que as classes que implementam a interface concordam em cumprir, fornecendo uma implementação específica para cada um dos métodos. É um roteiro para seguir! 📝✨

As interfaces são incríveis porque fornecem contratos para as classes. Isso significa que, quando uma classe implementa uma interface, ela concorda em oferecer exatamente os métodos especificados na interface. Tipo um acordo entre a classe e a interface, onde a classe promete ter certos comportamentos. Isso torna o código mais organizado e previsível! 🤝📚`,
];
const INTERFACE_EXAMPLE = [
  `📱 Vamos pensar em um algoritmo para representar dispositivos eletrônicos, como smartphones, tablets e laptops. Podemos criar uma interface chamada 'Conectividade' que define métodos como 'conectar', 'desconectar' e 'transferirDados'. Todas as classes que representam dispositivos eletrônicos podem implementar essa interface, garantindo que todos eles tenham os mesmos métodos relacionados à conectividade. Dessa forma, independentemente do tipo de dispositivo, podemos usar esses métodos de maneira consistente. Por exemplo, um smartphone pode implementar a interface 'Conectividade' para se conectar a uma rede Wi-Fi, enquanto um laptop pode implementá-la para se conectar a uma impressora. A interface nos ajuda a padronizar e organizar a funcionalidade de conectividade em diferentes dispositivos! 📶💻🖨️`,
  `🎮 Vamos criar um programa em Java para representar jogos. Podemos criar uma interface chamada 'Jogabilidade' que define métodos como 'jogar', 'pausar' e 'salvarJogo'. Todas as classes que representam jogos podem implementar essa interface, garantindo que todas tenham a mesma funcionalidade básica relacionada à jogabilidade. Por exemplo, uma classe 'JogoAventura' pode implementar a interface 'Jogabilidade' para permitir que o jogador jogue, pause o jogo e salve o progresso. Já uma classe 'JogoEsporte' pode implementá-la para permitir que o jogador jogue, pause o jogo e salve as estatísticas. 🎮🕹️💾` +
    '\n```java\n' +
    `interface Jogabilidade {
      void jogar();
      void pausar();
      void salvarJogo();
  }
  
  class JogoAventura implements Jogabilidade {
      // Implementação dos métodos da interface para o Jogo de Aventura
  }
  
  class JogoEsporte implements Jogabilidade {
      // Implementação dos métodos da interface para o Jogo de Esporte
  }
  ` +
    '\n```\n',
  `🌍 Vamos criar um programa em C# para representar serviços de geolocalização. Podemos criar uma interface chamada 'Geolocalizacao' que define métodos como 'obterLocalizacao', 'calcularDistancia' e 'encontrarRota'. Todas as classes que representam serviços de geolocalização podem implementar essa interface, garantindo que todas tenham os mesmos métodos relacionados à geolocalização. Por exemplo, uma classe 'GPS' pode implementar a interface 'Geolocalizacao' para obter a localização atual, calcular distâncias entre pontos e encontrar rotas. Já uma classe 'ServicoMapas' pode implementá-la para obter localizações, calcular distâncias e encontrar rotas baseado em um banco de dados de mapas. A interface nos permite definir um conjunto de funcionalidades comuns para serviços de geolocalização! 🌍📍🗺️` +
    '\n```csharp\n' +
    `interface Geolocalizacao {
    void obterLocalizacao();
    void calcularDistancia();
    void encontrarRota();
}

class GPS : Geolocalizacao {
    // Implementação dos métodos da interface para o GPS
}

class ServicoMapas : Geolocalizacao {
    // Implementação dos métodos da interface para o Serviço de Mapas
}
` +
    '\n```\n',
];

export { INTERFACE_CONCEPT, INTERFACE_EXAMPLE };
