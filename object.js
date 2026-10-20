//object 物件
var Student1 ={"ch":70,"en":80,"ma":90,"so":60,"ph":80,"興趣":["打球","看書"]};

//class 類別
class Student{
    constructor(_name,_ch,_en,_ma,_so,_ph,_habit=[])
    {
        this.name=_name;
        this.ch=_ch;
        this.en=_en;
        this.ma=_ma;
        this.so=_so;
        this.ph=_ph;
        this.habit=_habit;
    }

    printchen(){
        console.log(this.name+"的國文"+this.ch+"以及英文"+this.en);
    }
    avg(){
        var sum=this.ch+this.en+this.ma+this.so+this.ph;
        console.log(this.name+"的平均分數為"+sum/5);
    }

}

var MD2=[];

MD2.push(new Student("Chen",70,80,90,60,80,["ball"]));
MD2.push(new Student("Chan",90,90,70,75,85,["book"]));
MD2.push(new Student("Lin",85,85,80,90,80));


var sum=0;
for (let i=0;i<MD2.length; i++){
    sum+=MD2[i].ch;
}
//國文成績總和
var avg=sum/MD2.length;

MD2[1].printchen();
MD2[1].avg();

console.log(JSON.stringify(MD2));

for (let i=0;i<MD2.length; i++){
    if (MD2[i].habit.indexOf("ball")>=0){
        console.log(MD2[i].name+"的興趣是打球");
    }
    else if(MD2[i].habit.indexOf("book")>=0){
        console.log(MD2[i].name+"的興趣是看書");
    }
    else{
        console.log(MD2[i].name+"的興趣不是打球")
    }
}

var ary=[3,7,2,1,9,8];
//ascendence小到大  
console.log(ary.sort())

//decendence大到小
console.log(ary.sort( function(a,b){
   return b-a;
}));

//random sort
console.log(ary.sort( function(a,b){
    return 0.5-Math.random();
 }));


//Object sort
console.log(MD2.sort( function(a,b){
   if( b.ph==a.ph){
     return b.en-a.en;
   }
     else 
  return b.PhCh-a.PhCh;
 }));

 console.log(MD2.sort( function(a,b){
    if(b.avg==a.avg){
        return b.en-a.en;
    }
 }


))