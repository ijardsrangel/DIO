// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    //Método atacar
    atacar() {
        let ataque;

        // Estrutura de decisão para definir o ataque com base no tipo do herói
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque indefinido'; // Caso o tipo não seja reconhecido
        }

        // Exibindo a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias (objetos) de heróis de diferentes tipos
let mago = new Heroi('Gandalf', 80, 'mago');
let guerreiro = new Heroi('Khan', 35, 'guerreiro');
let monge = new Heroi('Dalai', 60, 'monge');
let ninja = new Heroi('Hattori', 25, 'ninja');

// Chamando o método atacar para cada herói e exibindo a saída
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
