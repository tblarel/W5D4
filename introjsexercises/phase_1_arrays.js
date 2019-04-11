Array.prototype.uniq = function() {
    let uniq_arr = [];
    this.forEach((element) => {
        if (!uniq_arr.includes(element)) {
            uniq_arr.push(element)
        }
    });
    return uniq_arr;
}

Array.prototype.two_sum = function() {
    let two_sum_pos = [];
    let i = 0;
    this.forEach((element) => {
        let j = 0;
        this.forEach((element2) => {
            if ((j > i) && (element2 + element === 0 )) {
                two_sum_pos.push([i,j]);
            }
            j++;
        });
        i++;
    });

    return two_sum_pos;
}

// let arr = [1, -1, 2, -2, 5, 4, -5, -4];
// console.log(arr.two_sum());

Array.prototype.transpose = function() {
    let transposed_arr = [];
    let i = 0;
    while (i < this[0].length) {
        let current_transposition = [];
        this.my_each(function(subArray) {
            current_transposition.push(subArray[i]);
        });
        i++;
        transposed_arr.push(current_transposition);
    }
    return transposed_arr;
}




