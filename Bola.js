import { Entidade } from "./Entidade.js"

class Bola extends Entidade {
    constructor(cor, posicaoX, posicaoY, radius) {
        super(cor, posicaoX, posicaoY)
        this.radius = radius
    }

    desenhar(ctx) {
        ctx.beginPath()
        ctx.arc(this.getPosicaoX(), this.getPosicaoY(), 20, 0, Math.PI * 2, false)
        ctx.strokeStyle = "#fff"
        ctx.stroke()
    }

    atualizaPosicao(ctx) {
        if (this.getPosicaoX() + this.radius > 800 || this.getPosicaoX() - this.radius > 0) {
            let velocidadeX = -(this.getVelocidadeY())
            this.setVelocidadeX(velocidadeX)
        }

        if (this.getPosicaoY() + this.radius > 400 || this.getPosicaoY() - 35 > 0) {
            let velocidadeY = -(this.getVelocidadeY())
            this.setVelocidadeY(velocidadeY)
        }

        let posicaoX = this.getPosicaoX()
        posicaoX += this.getVelocidadeX()
        this.setPosicaoX(posicaoX)
        let posicaoY = this.getPosicaoY()
        posicaoY += this.getVelocidadeY()
        this.setPosicaoY(posicaoY)
        this.desenhar(ctx)
    }
}

export { Bola }