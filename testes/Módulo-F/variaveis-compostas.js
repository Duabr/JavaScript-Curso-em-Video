let listaNums = []// Variável composta vazia
listaNums[0] = 4
listaNums[1] = 9
console.log(listaNums)

listaNums.push(1)// Adicionar um elemento no final da lista
console.log(listaNums)

listaNums.sort()// Ordenar todos os elementos de forma crescente
console.log(listaNums)
var letras = ['g', 'z', 'r', 'b']
var i = letras.sort()
console.log(letras)

for (let pos in letras){
    console.log(`${pos}º valor das letras: ${letras[pos]}`)
}

pos1 = listaNums.indexOf(4)// Procurar e retornar a chave de um valor
pos2 = listaNums.indexOf(7)
console.log(pos1)
console.log(pos2)