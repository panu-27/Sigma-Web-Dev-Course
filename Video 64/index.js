console.log("ans of busiines name genrator")
let rand = Math.random();
let first ;
let second ;
let third ;

if (rand<0.33) {
    first="Crazy"
}else if(rand<0.66){
    first="Amazing"
}else{
    first="fire"
}


 rand = Math.random();
if (rand<0.33) {
    second="Engine"
}else if(rand<0.66){
    second="Foods"
}else{
    second="Garments"
}

 rand = Math.random();
if (rand<0.33) {
    third="Bores"
}else if(rand<0.66){
    third="Limits"
}else{
    third="Hub"
}

console.log(`Your Bussines Name is ${first} ${second} ${third}`)