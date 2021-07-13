//Item 9
console.log("Item (9) ***************************************")
var hiperespaco = new String('Apertem os cintos para adentramos ao hiper-espaçp rumo a uma nova Missão Estelar JS!')

console.log(hiperespaco)
console.log("Type variavel: " + typeof(hiperespaco))

//Item 10
console.log("Item 10 ***************************************")

var nomeCliente = new String("Matheus")
var renda = new Number(2300)
var dataNacimento = new Date(1996,10,14)
var ativo = new Boolean(true)

const exibirDadosClienteVariaveis = () => {
    console.log(nomeCliente)
    console.log(renda)
    console.log(dataNacimento)
    console.log(ativo?"Ativo: Sim":"Ativo: Não")
}

exibirDadosClienteVariaveis()

// Item 11
var array = ["Matheus", 1500, "14/10/1996", true]

const exibirDadosClienteArray = (array) => {  // iterator interador resebe o valor da variavel array
    for (const iterator of array) {
        console.log("Valor: ", iterator)
    }
}

//exibirDadosClienteArray(array)


// Item 12

var object = {
    nomeCliente: "MAtheus",
    renda: 1500,
    dataNacimento: "14-10-1996",
    ativo: true
}

const exibirDadosClienteObject = (object) => { // iterator resebe o index do object
    for (const iterator in object) {
        console.log(object)
    }
}

//exibirDadosClienteObject(object)

// Item 13

const data = new Date(14,10,1996);

const retornaDataAtualFormatada = (data) => {
    console.log(data)
}

retornaDataAtualFormatada(data)