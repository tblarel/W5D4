Array.prototype.bubbleSort = function() {
    let sorted_arr = [];
    Object.assign(sorted_arr,this);
    let sorted = false;
    while (!sorted) {
        sorted = true;
        let i = 0;
        sorted_arr.forEach( function(ele) {
            if (i < sorted_arr.length ) {
                if ( ele > sorted_arr[i+1]){
                    sorted = false
                    sorted_arr[i] = sorted_arr[i+1];
                    sorted_arr[i+1] = ele;
                }  
            }
            i++;
        });
    }
    return sorted_arr;
}

// let test_arr = [6,4,1,2,3,4,5];
// console.log(test_arr.bubbleSort());
// console.log(test_arr);


String.prototype.substrings = function() {
    let substrings = [];
    let startidx = 0;
    while(startidx < this.length){
        let endidx = 1;
        while(endidx <= this.length){
            if (endidx > startidx)  {
                substrings.push(this.slice(startidx,endidx));
            }
            endidx++;
        }
        startidx++;
    }
    return substrings;
}
