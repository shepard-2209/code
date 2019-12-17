const prod1 = {}

prod1.nome = 'Celular Ultra Mega' // Atributo 'nome' criado dinamicamente
prod1.preco = 4998.90 // Atributo 'preço' criado dinamicamente
prod1['Desconto Legal'] = 0.40 // Adiciona um novo atributo e um novo valor 

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2

        }

    }
}

console.log(prod2)