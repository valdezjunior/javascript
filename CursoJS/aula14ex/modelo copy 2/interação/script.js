function tabuada() {
    var num = document.getElementById('txtt')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } 
    else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for (c = 1; c <= 10; c++) {
        var item = document.createElement('option')
        item.value = `tab${c}`
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        }
    }


}

