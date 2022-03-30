function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementsByClassName('imagem')[0]
    let agora = new Date()
    let hora = agora.getHours()
    let min = agora.getMinutes()
    msg.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos.</br></p>`
    if (hora >= 0 && hora < 12){
        msg.innerHTML += ('Bom dia!')
        img.src = 'imagens/manha1.jpg'
        document.body.style.background = 'rgb(192, 167, 28)'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += ('Boa Tarde!')
        img.src = 'imagens/tarde1.jpg'
        document.body.style.background = 'rgb(204, 132, 39)'
    } else {
        msg.innerHTML += ('Boa Noite!')
        img.src = 'imagens/noite1.jpg'
        document.body.style.background = 'rgba(0, 0, 0, 0.849)'
    }
}