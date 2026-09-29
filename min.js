function min(A){
    var min = A[0];
    var pos = 0;

    for (var i = 1; i < A.length; i++) {
        if (A[i] < min) {
            min = A[i];
            pos = i+1;
        }
    } 
    console.log("pos=" + (i+1))
    return min;
    
}
var Ary = [12, 5, 3, 9, 6, 7, 2, 1];

console.log("Min=" + min(Ary))
