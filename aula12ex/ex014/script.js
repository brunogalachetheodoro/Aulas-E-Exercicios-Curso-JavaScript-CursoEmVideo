function carregar() {

var agora = new Date ()
var hora = agora.getHours() 


var msg = document.getElementById('msg')
var img = document.getElementById('imagem')

msg.innerHTML = `Agora são ${hora} horas!`

if (hora >= 6 && hora < 12) {
    img.src = 'imagens/dia.png'
    document.body.style.background = '#f3fbb8'
} else if (hora >= 12 && hora <18){
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#ff640e'
} else if (hora >=18 && hora <= 23){
    img.src = 'imagens/noite.png'
    document.body.style.background = '#353f6b'
    document.body.style.color = 'white'
} else if (hora >=0 && hora <=3) {
    img.src = 'imagens/noite.png'
    document.body.style.background = '#353f6b'
    document.body.style.color = 'white'
    
} else {
    img.src = 'imagens/madrugada-manha.png'
    document.body.style.background = '#c89c82'
}

}





