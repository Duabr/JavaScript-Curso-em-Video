function mostrarHora(){
    var date = new Date()
    var hora = date.getHours()
    var txthora = document.querySelector('p#horario')
    txthora.innerHTML = `Agora são <strong>${hora}</strong> horas`
    var img = document.getElementById('imgHora')
    var fundo = document.querySelector('body')

    if (hora >= 6 && hora < 12) {//                       Dia
        fundo.style.backgroundColor = "rgb(233, 215, 55)"
        img.src = "imgs/amanhecer.webp"
    } else if (hora >= 12 && hora < 19) {//               Tarde
        fundo.style.backgroundColor = "rgb(186, 167, 223)"
        img.src = "imgs/entardecer.webp"
    } else if (hora >= 19 && hora <= 24 || hora < 6){//   Noite
        fundo.style.backgroundColor = "rgb(41, 32, 119)"
        img.src = "imgs/anoitecer.webp"
    } else {
        txthora.innerHTML = "Horário Inválido"
    }
}