//Declaração de variável global
let nivel;

//Função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador
function calcularNivel(vitorias, derrotas) {
    //Uso de estrutura de decisão com operadores lógicos e relacionais
    if (vitorias <= 10) {
        nivel = "Ferro";
    }
    else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    }
    else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    }
    else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    }
    else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    }
    else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    }
    else {
        nivel = "Imortal";
    }

    return vitorias - derrotas;
}

// A função retorna o resultado para uma variável
let saldoVitorias = calcularNivel(100, 5)

//Exibição da mensagem de saída
console.log(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`)
