function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for( c = 1; c <= 10; c++) {
        var item = document.createElement('option')
        
        item.text = `O valor é = ${n*c}`
        tab.appendChild(item)
    }
    }
}