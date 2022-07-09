function solution(a) {
    //Write your solution here
      let sum = 0;
      for(let i=0;i<a.length;i++){
          let sqrtcurr = Math.sqrt(a[i]);
          for(let j=0;j<a.length;j++){
              let sqrt = a[j];
              if(sqrt==sqrtcurr){
                  sum = sum+(sqrtcurr*sqrtcurr);
                  break;
              }
          }
      }
      return sum
  }

  const res = solution([1,2,3,4,6,9,10])
  console.log(res)