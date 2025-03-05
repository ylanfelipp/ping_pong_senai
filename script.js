import { Bola } from "./Bola.js"
import { Jogador } from "./Jogador.js"

const canvas = document.getElementById('jogo')
const ctx = canvas.getContext('2d')

const jogador = new Jogador("white", canvas.width / 2 - 55, canvas.height - 20, 15, 70)
const bola = new Bola("deepskyblue", canvas.width / 2 - 55, canvas.height / 2 - 12, 15, 15)
const cacheJogadorPosicaoX = localStorage.getItem('jogadorPosicaoX') ? localStorage.getItem('jogadorPosicaoX') : canvas.width / 2 - 55
const cacheJogadorPosicaoY = localStorage.getItem('jogadorPosicaoY') ? localStorage.getItem('jogadorPosicaoY') : canvas.height - 20

document.addEventListener("keydown", e => {
    if (e.code === 'KeyA') {
        jogador.moverParaEsquerda()
    }

    if (e.code === "KeyD") {
        jogador.moverParaDireita()
    }

    if (e.key) {
        localStorage.setItem('jogadorPosicaoX', jogador.getPosicaoX())
        localStorage.setItem('jogadorPosicaoY', jogador.getPosicaoY())
    }
})

function verificaColisao() {
    if (
            bola.getPosicaoY() < jogador.getPosicaoY() + jogador.getAltura() &&
            jogador.getPosicaoY() - jogador.getAltura() > bola.getPosicaoY() &&
            bola.getPosicaoX() < cacheJogadorPosicaoX + jogador.getLargura() &&
            bola.getPosicaoX() + bola.getLargura() > jogador.getPosicaoX()
        ) 
    {
        return true
    }

    
    return false
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    jogador.desenhar(ctx)
    bola.desenhar(ctx)
    bola.atualizaPosicao(verificaColisao())
    if (bola.getPosicaoY() === 365) {
        bola.movimentoDaBola()
    }
    requestAnimationFrame(loop)
}

loop()