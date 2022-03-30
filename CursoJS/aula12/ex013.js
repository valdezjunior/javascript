var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var seg = agora.getSeconds()
console.log(`Agora são exatamente ${hora} horas ${min} minutos e ${seg} segundos.`)
if(hora <= 4){
    console.log('Boa Madrugada!')
} else if (hora <= 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}