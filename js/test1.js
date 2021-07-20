function graterThan(arr,num){
    let count = 0;
for(let i=0 ;i<arr.length;i++){
    if(arr[i] > num){
        count++;
    }
}
return count;
}
console.log(graterThan([4,-7,-8,-9,3,-2,-10,5],5));
