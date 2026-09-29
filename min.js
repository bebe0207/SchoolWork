function min(A){
    var min = A[0];

    for (var i = 1; i < A.length; i++) {
        if (A[i] < min) {
            min = A[i];
        }
    } 
    return min;
}
var Ary = [0, 5, 3, 9, 6, 7, 2, 1];

console.log("Min=" + min(Ary))