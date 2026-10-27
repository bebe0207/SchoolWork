function brackMatch(inputString){
    var stack=[];
    var isMatched = true;
    var i=0;
    var symbol = inputString.charAt(0);
    var LEFT = ['(','[','{'];
    var RIGHT = [')',']','}'];

    while(isMatched && i < inputString.length){//??? \n
        if(LEFT.indexOf(symbol) >= 0){
            stack.push(symbol);
        }else if(RIGHT.indexOf(symbol) >= 0){
            if(stack.length==0){
                isMatched=false;
            }else{
                var topSymbol = stack.pop();
                if(LEFT.indexOf(topSymbol) != RIGHT.indexOf(symbol)){
                    isMatched=false;
                }
            }
        }
        i++;
        symbol=inputString.charAt(i);

    }
    if(stack.length>0)
        isMatched=false;
    return isMatched;
}

var str="(a + b)"
var result = brackMatch(str);
console.log(result);