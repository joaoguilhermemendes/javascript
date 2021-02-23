let num = [2,5,9,4,8,7]
num.sort()
/*for (c=0; c<valores.length; c++) {
    console.log(`${valores[c]}`)
}*/

for(let c in num) {
    console.log(`${num[c]}`)
}

let pos = num.indexOf(0)
console.log(pos)