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

console.log(deepDup([[2,[3,5,6]],1]));