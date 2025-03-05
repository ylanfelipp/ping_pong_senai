import { Entidade } from "./Entidade.js"

class Bola extends Entidade {
    #gravidade
    #pulando
    constructor(cor, posicaoX, posicaoY, altura, largura) {
        super(cor, posicaoX, posicaoY, altura, largura)
        this.#gravidade = 4
        this.cacheJogadorPosicaoX = 0
        this.cacheJogadorPosicaoY = 0
        this.#pulando = true
    }

    getGravidade() {
        return this.#gravidade
    }

    movimentoDaBola() {
        this.#pulando = true
        this.setVelocidadeY(-7)
        let posicao = this.getPosicaoY()
        posicao += this.getVelocidadeY()
        this.setVelocidadeY(posicao)
    }

    atualizaPosicao() {
        if (this.#pulando) {
            this.setVelocidadeY(this.getGravidade())
        }
        let posicao = this.getPosicaoY()
        posicao += this.getVelocidadeY()
        this.setPosicaoY(posicao)
        if (this.getPosicaoY() - this.getVelocidadeY() >= 365) {
            this.setVelocidadeY(0)
            this.#pulando = false
            this.setPosicaoY(365)
        }
    }
}

export { Bola }