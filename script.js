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
        let filtered = probscum.filter((val, idx, arr) => {return (val < rand)})
        let deleted = filtered.length
        probs = probs.filter((val, idx, arr) => {return (idx != deleted)})
        idxs = idxs.filter((val, idx, arr)=> {return (idx != deleted)})
    }
    let bater = ["a", "b", "c", "d", "e", "f"]
    document.getElementById("where").innerHTML = "bater em:" + bater[idxs[0]]
    setTimeout(()=> {document.getElementById("where").innerHTML = ""}, 3000)
    contagem[bater[idxs[0]]]++
    console.log(contagem)
   
}

function normal(){
    let probs = [ 75, 95, 85, 85, 100, 95]
    let idxs = probs.map((val, index, arr)=> {return index})
    let probscum = probs.map((curr, index, arr) => {
        if(index>0) {
            return curr + probs.filter((val, idx, arr) => {if (idx< index) return true; return false;}).reduce(sum_arr,0) 
        }
        return curr
    })
    let rand = Math.random()*probscum[probscum.length-1]
    let filtered = probscum.filter((val, idx, arr) => {return (val < rand)})
    let selected = filtered.length
    let bater = ["a", "b", "c", "d", "e", "f"]
    document.getElementById("where").innerHTML = "bater em:" + bater[selected]
    setTimeout(()=> {document.getElementById("where").innerHTML = ""}, 3000)    
    contagem[bater[selected]]++
    console.log(contagem)
}