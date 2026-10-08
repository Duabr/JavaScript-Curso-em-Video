function calcular() {
    var numeroTxt = document.querySelector("input#numero")
    var tabuada = document.querySelector("select#tabuada")
    tabuada.innerHTML = ''// Limpa o conteúdo do output tabuada
    if (numeroTxt.value.length == 0){
        var item = document.createElement("option")
        item.text = "Por favor, digite um número."
        tabuada.appendChild(item)
    } else {
        num = Number(numeroTxt.value)
        for (var i = 1; i<=10; i++){
            var item = document.createElement("option")
            item.text = `${num} x ${i} = ${num*i}`
            item.value = `val${i}`
            tabuada.appendChild(item)
        }
    }
}