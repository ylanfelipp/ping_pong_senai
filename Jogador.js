import { Entidade } from "./Entidade.js"

class Jogador extends Entidade {

    constructor(cor, posicaoX, posicaoY, altura, largura) {
        super(cor, posicaoX, posicaoY, altura, largura)
    }

    moverParaEsquerda() {
        this.setVelocidadeX(-10)
        let posicao = this.getPosicaoX()
        posicao += this.getVelocidadeX()
        this.setPosicaoX(posicao)
    }

    moverParaDireita() {
        this.setVelocidadeX(10)
        let posicao = this.getPosicaoX()
        posicao += this.getVelocidadeX()
        this.setPosicaoX(posicao)
    }
}

export { Jogador }