function tabuada(){
    let num = document.getElementById('numero')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        alert('[ERRO], digite um número')
    } else {
        let n = Number(num.value)
        tab.innerHTML = '';
        for(let t = 1; t <= 10; t++){
           let item = document.createElement('option')

           item.text = `${n} x ${t} = ${n*t}`
           tab.appendChild(item)
        }
    }
}