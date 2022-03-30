let valores = [1, 0, 9, 2, 7, 8]
valores.sort()

/*for(let pos=0; pos < valores.length; pos++) {
   console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

//console.log(valores)

// Ainda simplificando o código.

for (let num in valores) {
    console.log(`Valor ${valores[num]} adicionado.`)
}
    console.log(`O maior valor é ${valores[5]}`)
    

