// Math.random() - gera um número aleatório entre 0 e 1, multiplicado por 111 dará um número aleatório entre 0 e 100
// parseInt() - pega somente a parte inteira do número, descartando os decimais após a vírgula
let numeroMaximo = prompt('Informe um número máximo');
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
let chute;
let tentativas = 0;
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

while (chute != numeroSecreto) {
    let chute = prompt(`Escolha um número entre 0 e ${numeroMaximo}`);

    // console.log(`Você digitou ${chute}`);
    // console.log(`O número secreto é ${numeroSecreto}`);
    // console.log("Resultado da comparação: ", chute == numeroSecreto);

    if (chute == numeroSecreto) {
        alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`);
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else if (chute < numeroSecreto) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é ${numeroSecreto}`);
        }
    }
    tentativas++;
}