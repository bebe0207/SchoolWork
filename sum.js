function sum(n){
    var result=0;
    for (let index = 1 ; index <= n ; index++){
        result += index;
    }

    var sign=1
    for (let index = 1 ; index <=n; index++){
        result =   result += index*sign;
        sign *=-1
    }

    return result;
}

console.log(sum(5));