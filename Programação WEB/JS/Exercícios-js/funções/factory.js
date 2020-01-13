const prod1 = {
    nome:'...',
    preco: 45
}

const prod2 = {
    nome:'...',
    preco: 1500
}

// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

function criarProduto(nome, preco, desconto = 0.3 * preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: desconto,
        valorFinal: preco - desconto 
    }
}

console.log(criarProduto('Monitor', 455))
