class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch(this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = '';
        }
        return `O ${this.tipo} atacou usando ${ataque}`;
    }
}
let heroi = new Heroi('Chan', 25, 'monge');
console.log(heroi.atacar());  // Saída: O monge atacou  usando artes marciais