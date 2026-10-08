function isNumerico(num) {
    if (isNaN(num) || num.length == 0) {
        return false
    }
    return true
}

function calcular(){
    var inicioTxt = document.querySelector("input#inicio")
    var fimTxt = document.querySelector("input#fim")
    var passoTxt = document.querySelector("input#passo")
    var inicio = Number(inicioTxt.value)
    var fim = Number(fimTxt.value)
    var passo = Number(passoTxt.value)
    var resultadoDiv = document.querySelector("div#resultado")
    var resultadoFinalTxt = ""
    if ((inicio < fim && passo < 0) || (inicio > fim && passo > 0) || (passo==0) || inicioTxt.value.length==0 || fimTxt.value.length==0 || passoTxt.value.length==0){ 
        resultadoFinalTxt = '<strong>Valores inválidos para a contagem.</strong>'
    } else if (inicio <= fim){// Contagem crescente
        for (var i=inicio; i<=fim; i+=passo){
            resultadoFinalTxt += `${i} \u{1F449} `
        }
        resultadoFinalTxt += '\u{1F3C1}'
    } else if (inicio > fim){// contagem decrescente
        for (var i=inicio; i>=fim; i+=passo){
            resultadoFinalTxt += `${i} \u{1F449} `
        }
        resultadoFinalTxt += '\u{1F3C1}'
    }
    resultadoDiv.innerHTML = "Resultado: " + resultadoFinalTxt
}
