function contar() {

    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        //alert('[ERRO] Digite um número!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando... <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
     if (p <= 0) {
        alert('Passo Inválido! Considerando o PASSO 1')
        p = 1
    } 
    if (i < f) {

        for (var c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F601}`
            } 
        } else {
            for (var c = i; c >= f; c -= p) {
               res.innerHTML += ` ${c} \u{1F601}` 
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
