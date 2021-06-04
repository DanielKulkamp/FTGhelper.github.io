contagem = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("pkNormal").addEventListener("click", normal)
    document.getElementById("pkReverse").addEventListener("click", pkReverse)

})

function sum_arr(acc, curr, index, array){
    return curr+acc
}

function pkReverse(){
    let probs = [ 75, 95, 85, 85, 100, 95]
    let idxs = probs.map((val, index, arr)=> {return index})
    while (probs.length > 1){
        let probscum = probs.map((curr, index, arr) => {
            if(index>0) {
                return curr + probs.filter((val, idx, arr) => {if (idx< index) return true; return false;}).reduce(sum_arr,0) 
            }
            return curr
        })
        let rand = Math.random()*probscum[probscum.length-1]
        console.log(rand)
        let deleted = probs.filter((val, idx, arr) => {return (val < rand)}).length
    }
    let bater = ["a", "b", "c", "d", "e", "f"]
    console.log("bater em:" + bater[idxs[0]] )     
    contagem[bater[idxs[0]]]++
    console.log(contagem)
    




}

function normal(){
    console.log(contagem)
    let rand = Math.random()*(75+95+85+85+100+95)
    if (rand < 75){
        console.log("Superior Esquerdo")
        contagem.a++
        return
    }
    rand -= 75
    if (rand < 95){
        console.log("Superior centro")
        contagem.b++
        return
    }
    rand -= 95
    if (rand < 85) {
        console.log("Superior direito")
        contagem.c++
        return
    }
    rand -= 85
    if (rand < 85) {
        console.log("inferior esquerdo")
        contagem.d++
        return
    }
    rand -= 85
    if (rand < 100){
        console.log("meio embaixo")
        contagem.e++
        return
    }
    contagem.f++
    console.log("inferior direito")
}