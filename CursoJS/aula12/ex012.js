/*var idade = 16
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65){
        console.log('Voto opcional')
    } else {
        console.log('Voto obrigatório')
    }
*/

var idade = 47
var ca = 24

if(idade > 18) {
    console.log('Você pode assinar a Carteira de Trabalho!')
} else if(idade < 18){
    console.log('Você ainda não pode assinar a Carteira de Trabalho, apenas como Jovem Aprendiz!')
} if(idade >= 43 && ca >= 25) {
    console.log('Você já pode aposentar!')
} else {
    console.log('Você ainda não tem tempo suficiente de Carteira Assinada, não pode se aposentar.')
}

