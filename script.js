var data = new Date()
var horario = data.getHours()


var mensagem = document.querySelector(".mensagem")
var container = document.querySelector(".container")
var img = document.querySelector(".img")
var corpo = document.querySelector("body")
var title = document.querySelector(".title")

function carregar(){
    
if(horario >= 7 && horario < 12){
    mensagem.innerHTML = `Agora são ${horario} horas da manha!`
    img.src="img/img01.jpg"
    corpo.style.background = "#e2bc53"
} else if(horario >= 12 && horario < 19){
    mensagem.innerHTML = `Agora são ${horario} horas da tarde!`
    img.src="img/img02.jpg"
    corpo.style.background = "#dd821a"
    title.style.color = "white"
}  else {
    mensagem.innerHTML = `Agora são ${horario} horas da noite!`
    img.src="img/img03.jpg"
    corpo.style.background = "#3b3b75"
    title.style.color = "white"
    
}

}