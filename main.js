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