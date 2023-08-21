// Entrada da quantidade de ativos
const quantidadeAtivos = parseInt(gets());

// Entrada dos tipos de ativos
const ativos = [];
for (let i = 0; i < quantidadeAtivos; i++) {
    const codigoAtivo = gets();
    ativos.push(codigoAtivo);
}

// Ordenar os ativos em ordem alfabética
ativos.sort();

// Imprimir a lista de ativos ordenada
for (const ativo of ativos) {
    console.log(ativo);
}
