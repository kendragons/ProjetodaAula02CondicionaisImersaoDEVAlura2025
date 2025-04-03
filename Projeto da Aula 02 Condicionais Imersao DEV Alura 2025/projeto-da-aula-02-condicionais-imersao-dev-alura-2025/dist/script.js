let idade = prompt("Quantos anos você tem?");
if (idade < 18) {
    alert("Você não pode participar da Luta de Classes.");
}

if (idade >= 18) {
    let escolhaJogador = prompt("Escolha seu lado: 1 - Proletariado ✊, 2 - Patrão 💼, 3 - Sindicato 📢?");
    let escolhaComputador = Math.floor(Math.random() * 3) + 1;

    // Empates
    if (escolhaJogador == escolhaComputador) {
        alert("Empate! A luta continua...");
    }

    // Proletariado ✊
    if (escolhaJogador == 1) {
        if (escolhaComputador == 2) {
            alert("Vitória do Proletariado! A revolução chegou! ✊🔥");
        }
        if (escolhaComputador == 3) {
            alert("O Sindicato traiu o movimento... Derrota. 😢");
        }
    }

    // Patrão 💼
    if (escolhaJogador == 2) {
        if (escolhaComputador == 1) {
            alert("O Proletariado se revoltou! Derrota do Patrão! ✊🚩");
        }
        if (escolhaComputador == 3) {
            alert("O Patrão esmagou o Sindicato com coerção! Vitória do sistema! 💼💰");
        }
    }

    // Sindicato 📢
    if (escolhaJogador == 3) {
        if (escolhaComputador == 1) {
            alert("O Sindicato manipulou o movimento! Vitória burocrática! 📢😈");
        }
        if (escolhaComputador == 2) {
            alert("O Patrão esmagou o Sindicato... Derrota. 💼❌");
        }
    }

    alert("O computador escolheu: " + escolhaComputador);
}