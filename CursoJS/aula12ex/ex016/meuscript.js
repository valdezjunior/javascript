function verificar(){
    let agora = new Date()
    let ano = agora.getFullYear()
    let anoN = document.getElementById('txtano')
    let res = document.getElementById('res')

    if(anoN.value.length == 0 || Number(anoN.value) > ano){
        alert('[ERRO], digite sua data de nascimento!')
    } else {
        let sexo = document.getElementsByName('radsex')
        let idade = ano - Number(anoN.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sexo[0].checked){
            genero = 'Homem'
            if(idade > 0 && idade < 10){
                img.setAttribute('src', 'imagens/criancam.png')
            } else if(idade < 17){
                img.setAttribute('src', 'imagens/adolescentem.png')
            } else if(idade < 29){
                img.setAttribute('src', 'imagens/jovemm.png')
            } else if(idade < 50){
                img.setAttribute('src', 'imagens/adultom.png')
            } else {
                img.setAttribute('src', 'imagens/idosom.png')
            }
        } else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade > 0 && idade < 10){
                img.setAttribute('src', 'imagens/criancaf.png')
            } else if(idade < 17){
                img.setAttribute('src', 'imagens/adolescentef.png')
            } else if(idade < 29){
                img.setAttribute('src', 'imagens/jovemf.png')
            } else if(idade < 50){
                img.setAttribute('src', 'imagens/adultof.png')
            } else {
                img.setAttribute('src', 'imagens/idosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)
    }
}