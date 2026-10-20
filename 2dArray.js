var ary2d = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log("ary2d[0][1]="+ary2d[0][1]);


var M=5, N=7;

var newAry = new Array();//物件導向 陣列
var o = 1;

for (let row = 0; row < M; row++){
    newAry.push([]);
    for (let col = 0; col < N; col++){
        newAry[row].push(row**col);
    }
    
}

console.log("newAry="+JSON.stringify(newAry));