let num = document.getElementById('txta')
let lista = document.getElementById('sellista')
let res = document.getElementById('res')
let valores = []
valores.sort((a, b) => {
    return a-b
})


//Verificar se (n) é um número.
function Numero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function Lista(n, l) {
    /*Se na lista indexOf o número de n for diferente de -1*/
    //-1 == valor não encontrado
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    //Se realmente Numero for um número e se esse número não está na lista
    if(Numero(num.value) && !Lista(num.value, valores)) {
        valores.push(Number(num.value)) //add elemento em um vetor
        var i = Number(num.value)
        var item = document.createElement('option')
        item.text = `Valor ${i} adicionado.`
        lista.appendChild(item)
        /*Quando eu conseguir adicionar um elemento ele tem que limpar o resultado*/
        res.innerHTML = ''
        
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    /*
    Apagar o número ou no caso deixar vazio.
    Depois focar o click para o input de num com focus.
     */
    num.value = ''
    num.focus()
}


function finalizar() {
    if(valores.length == 0 ) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let t = valores.length
        //maior e menor número por enquanto é 0
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            /*Começa com o valor 0 e vai somando com os outros valores adicionados*/
            soma += valores[pos]
            /*Se valores na posição pos for maior do que o maior valor (0), o maior valor passa a ser valores[pos]*/
            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            /*Se valores na posição pos for menor do que o menor valor (0), o menor valor passa a ser valores[pos]*/
            if(valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        media = soma / t
        res.innerHTML = ''
        res.innerHTML += `<p>O total de números cadastrados é ${valores.length}</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma entro todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média entre os valores é ${media.toFixed(1)}</p>`

        
    }
    
}