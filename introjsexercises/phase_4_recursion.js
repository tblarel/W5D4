function range(start,end) {
    if (start === end) {
        return [start];
    }
    return [start].concat(range(start+1,end));
}
// console.log(range(0,5));

function sumRed(arr){
    if (arr.length === 1){
        return arr[0];
    }
    else if (arr.length < 1)
    {
        return 0;
    }
    return arr[0]+sumRed(arr.slice(1,arr.length));
}

// console.log(sumRed([1,2,3,4]));


function exponent(base,exp) {
    if(exp === 0){
        return 1;
    }
    return base * exponent(base,exp-1);
}

function exponent2(base,exp){
    if ( exp===0 ){
        return 1;
    }
    else if (exp === 1 ){
        return base;
    }
    if (exp % 2 === 0){
        return exponent2(base, (exp/2)) ** 2
    }
    else {
        return base * (exponent2(base, ((exp-1) / 2)) ** 2)
    }
}

// console.log(exponent(2,10));
// console.log(exponent2(2,10));

function fibonacci(n) {
    if (n === 0){
        return [0];
    }
    else if (n === 1){
        return [1];
    }
    else if (n === 2){
        return [1, 1];
    }
    let last_fib = fibonacci(n-1);
    let last_fib_num = last_fib[last_fib.length-1] + last_fib[last_fib.length-2];
    last_fib.push(last_fib_num);
    return last_fib;
}

// console.log(fibonacci(5));

function deepDup(arr){
    let deep_duped = [];
    if (!Array.isArray(arr)){
        return arr;
        // debugger;
    }
    else{
        arr.forEach (function (ele) {
            // debugger;
            deep_duped.push(deepDup(ele));
        });
        
    }
    // debugger;
    return deep_duped;
}

// console.log(deepDup([[2,[3,5,6]],1]));

function bsearch(arr,target){
    if (target === arr[Math.floor(arr.length/2)]){
        // debugger;
        return Math.floor(arr.length/2);
    }
    else if ((arr.length === 1) && (arr[0] != target)) {
        // debugger;
        return -1;
    }

    if (arr[Math.floor(arr.length/2)] > target) {
        // debugger;
        return bsearch(arr.slice(0, Math.floor(arr.length/2)), target);
    }
    else if (arr[Math.floor(arr.length/2)] < target) {
        let right_search = bsearch(arr.slice(((Math.floor(arr.length/2)) + 1), arr.length), target) 
        if (right_search === -1) {
            // debugger;
            return -1;
        }
        else {
            // debugger;
            return right_search + (Math.floor(arr.length/2) + 1)
        }
    }
}

let test_arr_thing = [1,2,3,4,5,6,7,8,9,10];
console.log(bsearch(test_arr_thing, 1));
console.log(bsearch(test_arr_thing, 2));
console.log(bsearch(test_arr_thing, 3));
console.log(bsearch(test_arr_thing, 4));
console.log(bsearch(test_arr_thing, 5));
console.log(bsearch(test_arr_thing, 6));
console.log(bsearch(test_arr_thing, 7));
console.log(bsearch(test_arr_thing, 8));
console.log(bsearch(test_arr_thing, 9));
console.log(bsearch(test_arr_thing, 10));

function mergesort(arr) {

}

function merger(arr1, arr2) {
    let merged_arr = [];
    while (arr1.length != 0 && arr2.length != 0) {
        switch (arr1[0] <= arr2[0]) {
            case true:
                merged_arr.push(arr1.shift());
            break;
            case false:
                merged_arr.push(arr2.shift());
            break;
        }
    }
    merged_arr = merged_arr.concat(arr1);
    merged_arr = merged_arr.concat(arr2);
    return merged_arr;
}