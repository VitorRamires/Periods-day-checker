function carregar(){

var data = new Date()
var horario = data.getHours()
var min = data.getMinutes()
var seg = data.getSeconds()


var mensagem = document.querySelector(".mensagem")
var img = document.querySelector(".img")
var corpo = document.querySelector("body")
var title = document.querySelector(".title")

if(horario < 10){
    horario = "0" + horario 
}
if(min < 10){
    min = "0" + min
}
if(seg < 10){
    seg = "0" + seg
}

var relogio = horario + ":" + min + ":" + seg 


    
if(horario >= 7 && horario < 12){
    mensagem.innerHTML = `Agora são ${relogio} da manha!`
    img.src="img/img01.jpg"
    corpo.style.background = "#e2bc53"
} else if(horario >= 12 && horario < 19){
    mensagem.innerHTML = `Agora são ${relogio} da tarde!`
    img.src="img/img02.jpg"
    corpo.style.background = "#dd821a"
    title.style.color = "white"
}  else {
    mensagem.innerHTML = `Agora são ${relogio} da noite!`
    img.src="img/img03.jpg"
    corpo.style.background = "#3b3b75"
    title.style.color = "white"
}

setInterval(carregar,1000)

}