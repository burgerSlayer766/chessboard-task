
let eghtteengradus = []
let neweghtteengradius =[]
const s = +prompt('введите длину строки')
for(let i = 1;i<s+1;i++){
    let abc = +prompt('введите точку')
    eghtteengradus.push(abc)
    console.log(abc);
}
for (let i = eghtteengradus.length -1; i >= 0; i--){
    neweghtteengradius.push(eghtteengradus[i])
}
console.log(neweghtteengradius)