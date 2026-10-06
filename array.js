var b = [];
var c = [1, 2, 3];

b[0]=0;
b[1]=1;
b.push(123);
b.push("abc");
b[0]=15
b[1]=c[2];

console.log("b[3]="+b[3]);

function average(s){
    var sum=0;
    var avg;
    for (let i=0; i<s.length; i++){
        sum+=s[i];
    }
    avg=sum/s.length;
    return avg;
}

var ary=[];
var num = 5;
var readline = require('readline-sync');
for (let i=0; i<num; i++){
    ary[i]=parseInt(readline.question("Enter a number: "));
}

console.log("Average="+average(ary));