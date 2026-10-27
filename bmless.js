function brackMatch(inputString){
    var stack=[];
    var Breackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    var RIGHT = [')',']','}'];

    for (var symbol of inputString){
        if (Breackets[symbol]!== undefined){
            stack.push(Breackets[symbol]);
        }
        else if (RIGHT.indexOf(symbol) !== -1 && stack.pop() !== symbol){
            return false;
        }
    }
    return stack.length === 0;
}
var str="(a + b)"
console.log(brackMatch(str));