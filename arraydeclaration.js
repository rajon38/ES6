var friendsName = ["Rony", "Ratul", "Rana", "Ripu"];
var friendsAge = [21, 22, 25, 29];

console.log(friendsAge.length);
console.log(friendsAge.indexOf(25));
//console.log(friendsName[3]);
friendsName[3]= "Ritu";
console.log(friendsName);

//array add and delete
//friendsAge.pop(29);
//friendsAge.push(28);
// friendsAge.unshift(28);
friendsAge.shift();
console.log(friendsAge);