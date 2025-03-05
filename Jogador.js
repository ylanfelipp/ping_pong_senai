import { Entidade } from "./Entidade.js"

class Jogador extends Entidade {
    constructor(cor, posicaoX, posicaoY, altura, largura) {
        super(cor, posicaoX, posicaoY, altura, largura)
    }
}

export { Jogador }