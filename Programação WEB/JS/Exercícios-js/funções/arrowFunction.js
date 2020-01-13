let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // retorno implícito (pode ser usado quando há apenas uma linha)
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá!'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parâmetro
console.log(ola())
