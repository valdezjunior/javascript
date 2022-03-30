function somar() {
    var primeiro = document.getElementById('pnumero')
    var segundo = document.querySelector('input#snumero')
    var res = document.getElementById('res')
    var pri = Number(primeiro.value)
    var seg = Number(segundo.value)
    var som = pri + seg

    res.innerHTML = `A soma entre ${pri} e ${seg} é igual a <strong>${som}</strong>`

}