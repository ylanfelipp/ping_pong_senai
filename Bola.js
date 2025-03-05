import { Entidade } from "./Entidade.js"

class Bola extends Entidade {
    #gravidade
    constructor(cor, posicaoX, posicaoY, altura, largura) {
        super(cor, posicaoX, posicaoY, altura, largura)
        this.#gravidade = 0.6
    }

    getGravidade() {
        return this.#gravidade
    }
}

export { Bola }