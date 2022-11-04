//while loop

// var num=0;
// while(num<50){
//     console.log(num);
//     console.log("hello world");
//     num++
// }

// var number=1;
// while(number<100){
//     if(number%2!=0){
//         console.log(number);
//     }
//     number++;
// }


//for loop

// for(var num=0; num<10; num++){
//     console.log(num);
//     console.log("Hello World");
// }

// for(var i=100; i>0; i-=10){
//     console.log(i);
// }

//array-loop

// var numbers = [21, 22, 25, 29, 17, 15, 24, 32, 28];

// for(var i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

// var item = ["bottol", "cola", "candy", "jamm", "apple"];

// for(var i=0; i<item.length; i++){
//     console.log(item[i]);
// }


//continue
// var numbers = [28, 32, 35, 44, 55, 56, 75, 88, 102, 111, 120, 92, 95];

// for(var i=0; i<numbers.length; i++){
//     if(numbers[i]>100){
//         continue;
//     }
//     console.log(numbers[i]);
// }

//function declaration
// function calAge1(birthyear){
//     return 2022 - birthyear
// }
// var age1 = calAge1(1991);
// //function expression
// var calAge2 = function (birthyear){
//     return 2022 - birthyear;
// }
// var age2 = calAge2(1991);
// console.log(age1, age2);

//object
// var sakib={
//     name: "Shakib Al Hasan",
//     age: 30,
//     country: "Bangladesh",
//     isAllrounder: true
// }

// sakib.isActive= true;

// console.log(sakib.age);
// console.log(sakib["country"]);

// console.log(Object.keys(sakib));
// console.log(Object.values(sakib));

//object-loop

var shoppingCart = {
    books: 3,
    sunglass: 5,
    keyboard: 5,
    mouse: 4,
    pen: 25
}
for(propertyName in shoppingCart){
    // console.log(propertyName);
    var value=shoppingCart[propertyName];
    console.log(propertyName, value);
}