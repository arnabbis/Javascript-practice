function linearSearch(arr,k){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==k){
            return i;
        }else{
            return -1
        }
    }
}

let search = linearSearch([2,3,4,5,6,7,8],4)
console.log(search)