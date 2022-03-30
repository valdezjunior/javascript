function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // Ano atual
    var fano = document.getElementById('txtano') // Ano de nascimento
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) /* Se o valor do ano de nascimento for igual a vazio ou se o número do valor do ano de nascimento for maior do que o ano atual*/ {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        /* fsex 0 e 1 por que são dois nomes iguais em radsex*/
        var idade = ano - Number(fano.value) /* ex: 2022 - 1990 == 32 anos de idade*/
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/criancam.png')
            } else if (idade < 27) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemm.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adultom.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idosom.png')
            } 
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/criancaf.png')
            } else if (idade < 27) {
                //Jovem
                img.setAttribute('src','imagens/jovemf.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adultof.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
