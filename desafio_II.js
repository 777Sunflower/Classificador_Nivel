let vitorias = 180
let derrotas = 90
let saldo = contarSaldo(vitorias, derrotas)
let nivel = validarNivel(saldo)

console.log("O Herói tem um saldo de " + saldo + " vitórias, e está no nível " + nivel)

function contarSaldo(vitorias, derrotas) {
    let calculo = vitorias - derrotas
    return calculo
}

function validarNivel(nivel) {
    if (saldo <= 10) {
        classificacao = "Ferro";
    } else if (saldo <= 20) {
        classificacao = "Bronze";
    } else if (saldo <= 50) {
        classificacao = "Prata";
    } else if (saldo <= 80) {
        classificacao = "Ouro";
    } else if (saldo <= 90) {
        classificacao = "Diamante";
    } else if (saldo <= 100) {
        classificacao = "Lendário";
    } else {
        classificacao = "Imortal";
    }
    return classificacao
}