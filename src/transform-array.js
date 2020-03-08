module.exports = function transform(arr) {
    if(!Array.isArray(arr)){
        throw Error();
    }
    const tranformedArr = [];
    for(var i=0; i< arr.length; i++){
        if (arr[i] === '--discard-next' && i!== arr.length-1){
            i++;
        }
        else if (arr[i] === '--discard-prev' && i!== 0) {
            tranformedArr.pop();
        }
        else if(arr[i] === '--double-next' && i!== arr.length-1 ){
            tranformedArr.push(arr[i+1]);
        }
        else if (arr[i] === '--double-prev' && i!== 0){
            tranformedArr.push(arr[i-1]);
        }
        else if (arr[i] === '--discard-next' || arr[i] === '--discard-prev' || arr[i] === '--double-next' || arr[i] === '--double-prev'){
           
        }
        else{
            tranformedArr.push(arr[i]);
        }
    }
    return tranformedArr;
    
};
