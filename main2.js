//simple function
function myName(){
    var x = 10;
    var y = 20;
    var z = x+y;
    console.log(z);
}

myName();

//peramiterized function
function myName2(x,y){
    var z = x+y;
    console.log(z);
}

myName2(10,20);

//rest peramiter
function something(...x){
    console.log(x);
}
something(1,2,5,7,"d","d");

//function returns
function fun1(){
    return 20;
}
function fun2(){
    return fun1();
}
console.log(fun2());