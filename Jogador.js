import { Entidade } from "./Entidade.js"

class Jogador extends Entidade {

    constructor(cor, posicaoX, posicaoY, altura, largura) {
        super(cor, posicaoX, posicaoY, altura, largura)
    }

    desenhar(ctx) {
        ctx.fillStyle = this.getCor()
        ctx.fillRect(
            this.getPosicaoX(),
            this.getPosicaoY(),
            this.getLargura(),
            this.getAltura()
        )
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