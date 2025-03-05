import { Jogador } from "./Jogador.js"

const canvas = document.getElementById('jogo')
const ctx = canvas.getContext('2d')

console.log(ctx)

const jogador = new Jogador("white", canvas.width / 2 - 55, canvas.height - 20, 15, 70)

function loop() {
    jogador.desenhar(ctx)
    requestAnimationFrame(loop)
}

loop()