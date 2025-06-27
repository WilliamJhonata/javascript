let num = [4, 5, 2, 1]
/*console.log(num)
for(pos=0;pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} */

let pos = num.indexOf(3)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor do vetor é ${pos}`)
}