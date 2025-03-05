import { Bola } from "./Bola.js"
import { Jogador } from "./Jogador.js"

const canvas = document.getElementById('jogo')
const ctx = canvas.getContext('2d')

const jogador = new Jogador("white", canvas.width / 2 - 55, canvas.height - 20, 15, 70)
const bola = new Bola("deepskyblue", canvas.width / 2 - 55, canvas.height / 2 - 12, 15, 15)

document.addEventListener("keydown", e => {
    if (e.code === 'KeyA') {
        jogador.moverParaEsquerda()
    }

    if (e.code === "KeyD") {
        jogador.moverParaDireita()
    }
})

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    jogador.desenhar(ctx)
    bola.desenhar(ctx)
    bola.movimentoDaBola()
    requestAnimationFrame(loop)
}

loop()