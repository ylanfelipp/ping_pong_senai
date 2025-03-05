class Entidade {
    #altura
    #largura
    #cor
    #posicaoX
    #posicaoY
    #velocidadeX
    #velocidadeY
    constructor(cor, posicaoX, posicaoY, altura, largura) {
        this.#altura = altura
        this.#largura = largura
        this.#cor = cor
        this.#velocidadeX = 0
        this.#velocidadeY = 0
        this.#posicaoX = posicaoX
        this.#posicaoY = posicaoY
    }

    atualizaPosicao() {
        console.log("Atualiza Posição")
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

    getPosicaoX() {
        return this.#posicaoX
    }

    getPosicaoY() {
        return this.#posicaoY
    }

    setPosicaoX(posicao) {
        this.#posicaoX = posicao
    }

    setPosicaoY(posicao) {
        this.#posicaoY = posicao
    }

    getVelocidadeX() {
        return this.#velocidadeX
    }

    getVelocidadeY() {
        return this.#velocidadeY
    }

    setVelocidadeX(velocidade) {
        this.#velocidadeX = velocidade
    }

    getAltura() {
        return this.#altura
    }

    getLargura() {
        return this.#largura
    }

    getCor() {
        return this.#cor
    }
}

export { Entidade }