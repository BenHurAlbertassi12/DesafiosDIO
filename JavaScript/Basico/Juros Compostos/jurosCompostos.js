// Função para calcular o valor final do investimento com juros compostos
function calcularValorFinal(valorInicial, taxaJuros, periodo) {
    let valorFinal = valorInicial * Math.pow(1 + taxaJuros, periodo);
    return valorFinal.toFixed(2);
}

// Lê as entradas
const valorInicial = parseFloat(gets());
const taxaJuros = parseFloat(gets());
const periodo = parseInt(gets());

// Calcula e imprime o valor final do investimento
const valorFinal = calcularValorFinal(valorInicial, taxaJuros, periodo);
print(`Valor final do investimento: R$ ${valorFinal}`);
