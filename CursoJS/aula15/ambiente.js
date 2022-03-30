let num = [9,200,15,13,120,220,300]
num[7] = 8
num.push(10)
num.sort((a, b) => {
    return a-b
})

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(14)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
} 
console.log(`O maior valor é ${num[8]}`)
