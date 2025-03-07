class hero {
    constructor(nome, idade, classe) {
        this.nome = nome
        this.idade = idade
        this.classe = classe
    }

    atacar() {
        let ataque = ""
        switch (this.classe) {
            case "Mago":
                ataque = "magia"
                break;
            case "Guerreiro":
                ataque = "espada"
                break;
            case "Monge":
                ataque = "artes marciais"
                break;
            case "Ninja":
                ataque = "shuriken"
                break;
        }
        return ataque
    }
}

let personagem = new hero("Panda", 50, "Monge")

console.log(`O ${personagem.nome} atacou usando ${personagem.atacar()}`)



