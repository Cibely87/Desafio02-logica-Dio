function nivelJogador(vitorias, derrotas) {

    var pontuacaoDasPartidas = (vitorias - derrotas);
    var nivel;

    if (pontuacaoDasPartidas < 10) {
        nivel = "Ferro";
    } else if (pontuacaoDasPartidas >= 11 && pontuacaoDasPartidas <= 20) {
        nivel = "Bronze";
    } else if (pontuacaoDasPartidas >= 21 && pontuacaoDasPartidas <= 50) {
        nivel = "Prata";
    } else if (pontuacaoDasPartidas >= 51 && pontuacaoDasPartidas <= 80) {
        nivel = "Ouro";
    } else if (pontuacaoDasPartidas >= 81 && pontuacaoDasPartidas <= 90) {
        nivel = "Diamante";
    } else if (pontuacaoDasPartidas >= 91 && pontuacaoDasPartidas <= 100) {
        nivel = "Lendário";
    } else (nivel = "Imortal")

    return `O Herói tem de saldo de ${pontuacaoDasPartidas} está no nível de ${nivel}`

}

var vitorias = 105;
var derrotas = 1;
const placarFinal = nivelJogador(vitorias, derrotas);
console.log(placarFinal)