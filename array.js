// [1,2,3,4,5]

 //let a = [1,2,2,3,4,5,5]

function dublicate(arr){

    let s = [];
    let len = [...arr].sort()

    for(let i=0;i<len.length;i++){
        if(len[i+1]==len[i]){
            s.push(len[i])
        }
    }
    return s
}

let res = dublicate([1,2,2,3,4,5,5,3])
console.log(res)

