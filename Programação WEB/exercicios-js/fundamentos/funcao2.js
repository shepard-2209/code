// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função Arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 4))

// retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(4, 5))

const imprimir2 = a => console.log(a)
imprimir2('LEGAL!')