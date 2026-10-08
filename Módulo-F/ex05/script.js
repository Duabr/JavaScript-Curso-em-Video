var listaDoc = document.querySelector("select#listaNum")
var listaNums = []
var num
var output = document.querySelector("div#output")
// var num1 = document.createElement("option")
// num1.text = 'teste'
// listaNum.appendChild(num1)

function adicionarNum(novoNum){
    output.innerHTML = ''
    if (listaNums.indexOf(novoNum) != -1){
        output.innerHTML = "Este número já está na lista"
    } else {
        listaNums.push(novoNum)
        num = document.createElement("option")
        num.text = `Número ${novoNum} adicionado`
        listaDoc.appendChild(num)
    }
}

function totaNums(){
    var total = listaNums.length
    return total
}

function maiorNum(){
    var novaLista = listaNums
    var maior = novaLista.sort()[-1]
    return maior
}

function menorNum(){
    var novaLista = listaNums
    var menor = novaLista.sort()[-1]
    return menor
}

function somaTotal(){
    var total = 0
    for (var i=0; i<listaNums.length; i++){
        total += listaNums[i]
    }
    return total
}

function media(){
    var total = 0
    for (var i=0; i<listaNums.length; i++){
        total += listaNums[i]
    }
    return total/listaNums.length
}
