let num = [2,3,6,8,9]
num.push(1)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} elementos`)
 
var c = 0
while (c<num.length) {
    console.log(num[c])
    c++
}