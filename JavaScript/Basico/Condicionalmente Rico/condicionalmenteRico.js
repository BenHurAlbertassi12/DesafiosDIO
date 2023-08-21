// Entrada de dados
let saldoTotal = parseInt(gets());
let valorSaque = parseInt(gets());

// Verificação das condições e exibição das mensagens
if (saldoTotal >= valorSaque) {
    saldoTotal -= valorSaque;
    console.log(`Saque realizado com sucesso. Novo saldo: ${saldoTotal}`);
} else {
    console.log("Saldo insuficiente. Saque nao realizado!");
}
