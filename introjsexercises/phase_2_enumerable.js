Array.prototype.my_each = function (callback) {
    let i = 0;
    while ( i < this.length ){
        callback(this[i]);
        i++;
    }
}

// let trans_arr = [[0,1,2],[3,4,5]];
// console.log(trans_arr.transpose());


Array.prototype.my_map = function(callback) {
    let return_arr = [];
    this.my_each(function (element) {
        return_arr.push(callback(element));
    });
    return return_arr;
}

// let test_arr = [0,1,2,3,4,5];
// console.log(test_arr.my_map(function(ele) {
//     return ele * 2;
// }));

Array.prototype.myReduce = function(callback, initialValue = 0){
    let accumulator = initialValue;
    this.my_each(function (element){
        accumulator = callback(accumulator, element);
    });
    return accumulator;
}

// let test_arr = [2,1,2,3,4,5];
// console.log(test_arr.myReduce((acc, ele)=>{return ele*2;}));
// // without initialValue
// console.log([1, 2, 3].myReduce(function(acc, el) {
//     return acc + el;
//   })); // => 6
  
//   // with initialValue
//   console.log([1, 2, 3].myReduce(function(acc, el) {
//     return acc + el;
//   }, 25)); // => 31
