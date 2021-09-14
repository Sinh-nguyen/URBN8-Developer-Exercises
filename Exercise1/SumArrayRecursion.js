function sum(start,end,cb) {
    if(start < end){
        cb(start)
        return sum(start+1,end,cb)
    }
}
var array=[5, 9, 6, 8, 4, 6]
var sumArray=0;
sum(0,array.length,function(index) {   
    sumArray += array[index];
})
console.log("The Sum Of Array: ",sumArray)