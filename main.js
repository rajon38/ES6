var billGates = {shirt:true, shirtColor:"offWhite", smile:true, swatter:true, swatterColor:"Gray", glass:true}


// //console.log(billGates['shirt']);

// var billGatesPro={
//     shirt:{
//         color:"offWhite",
//         quality:"Good",
//         price:"200USD"
//     },
//     swatter:{
//         color:"Gray",
//         quality:"Good",
//         price:"230USD",
//         warm:"best"
//     },
//     face:{
//         smiling:"yes",
//         chosma:"yes",
//         teeth:"White"
//     }
// }

// console.log(billGatesPro['swatter']['price']);


//for-in loop
// for (let props in billGates){
//     console.log(props+": "+billGates[props]);
// }

if(billGates["shirtColor"]== "blue"){
    console.log("Shirt color is Blue");
}
else if(billGates["shirtColor"]== "Red"){
    console.log("Shirt color is Red");
}
else{
    console.log("Shirt color not found");
}