let amigo = {nome: 'Junior',
sexo: 'M',
peso: 70.3,
engordar(p=0){
    console.log('Agora ele engordou!!')
    this.peso += p
}}

console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
amigo.engordar(3)
console.log(`${amigo.nome} está pesando ${amigo.peso}Kg`)

