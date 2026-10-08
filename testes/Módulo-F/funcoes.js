// Jogar uma função direto dentro de uma variável (não precisa dar nome pra função)
// Mais informações sobre funções em javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
let dobro = function(n){
    return n*2
}
console.log(dobro(8))

// Funções recursivas (usando fatoriais como exemplo):
// Levando em conta que n! = n x (n-1)!, contanto que n != 1 (1! = 1):
// (Por exemplo, 5! = 5 x 4!, 4! = 4 x 3!, etc...)
function fatorial5(n){
    if (n == 1){
        return 1
    } else {
        return n * fatorial5(n-1)
    }
}
fatorial5 = fatorial5(5)
console.log(`O fatorial de 5 é: ${fatorial5}`)