import { Entidade } from "./Entidade.js"

class Bola extends Entidade {
    #gravidade
    #noAr
    constructor(cor, posicaoX, posicaoY, altura, largura) {
        super(cor, posicaoX, posicaoY, altura, largura)
        this.#gravidade = 0.6
        this.#noAr = true
    }

    getGravidade() {
        return this.#gravidade
    }

    movimentoDaBola =  function() {
        this.setVelocidadeY(5)
        let posicao = this.getPosicaoY()
        posicao += this.getVelocidadeY()
        this.setPosicaoY(posicao)
    }

    atualizaPosicao() {
        if (this.#noAr) {
            let velocidade = this.getVelocidadeY() - this.getGravidade()
            this.setVelocidadeY(velocidade)
            let posicao = this.getVelocidadeY()
            posicao += velocidade
            this.setPosicaoY(posicao)
        }
    }
}

export { Bola }