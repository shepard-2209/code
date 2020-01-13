// FUNÇÕES

// criar de forma literal
function fun1() { }

// armazenar em uma variável
const fun2 = function () { }

// armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]

console.log(array[0](2, 3))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// passar função como parâmetro
function run(fun) {
    fun()
}

// uma função pode conter / retornar uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(5)