function calcIdade() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var txtAnoNasc = document.querySelector("input#anoNasc")
    var anoNasc = Number(txtAnoNasc.value)
    var idade = anoAtual - anoNasc
    if (txtAnoNasc.value.length == 0 || idade < 0){
        return -1
    }
    return idade
}

function verificar(){// Decidi fazer sem fotos, alterando mais o texto ao invés disso
    var msg = document.querySelector("p#resultado")
    msg.innerHTML = ''// Limpar a mensagem toda vez que o botão for pressionado
    var idade = calcIdade()
    var sexoInputs = document.getElementsByName("sexo")

    if (idade == -1) {
        msg.innerHTML = "Ano de nascimento inválido."
    } else if (!(sexoInputs[0].checked || sexoInputs[1].checked || sexoInputs[2].checked)) {
        msg.innerHTML = "Selecione uma opção de sexo."
    } else if (idade <= 5) {
        msg.innerHTML = `Detectamos um bebê de ${idade} anos de idade.`
    } else if (idade > 120){
        msg.innerHTML = 'Detectamos uma pessoa morta!'
    } else if (sexoInputs[0].checked) {// Masculino
        if (idade < 18) {
            msg.innerHTML = `Detectamos um garoto de ${idade} anos de idade.`
        } else if (idade < 60) {
            msg.innerHTML = `Detectamos um homem de ${idade} anos de idade.`
        } else {
            msg.innerHTML = `Detectamos um idoso de ${idade} anos de idade.`
        }
    } else if (sexoInputs[1].checked) {// Feminino
        if (idade < 18) {
            msg.innerHTML = `Detectamos uma garota de ${idade} anos de idade.`
        } else if (idade < 60) {
            msg.innerHTML = `Detectamos uma mulher de ${idade} anos de idade.`
        } else {
            msg.innerHTML = `Detectamos uma idosa de ${idade} anos de idade.`
        }
    } else if (sexoInputs[2].checked) {// Outros
        if (idade < 18) {
            msg.innerHTML = `Detectamos uma criança de ${idade} anos de idade.`
        } else if (idade < 60) {
            msg.innerHTML = `Detectamos uma pessoa adulta de ${idade} anos de idade.`
        } else {
            msg.innerHTML = `Detectamos uma pessoa idosa de ${idade} anos de idade.`
        }
    }
}