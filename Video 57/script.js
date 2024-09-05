console.log("i am tutorial on loop")

let i = 0 ;
let array = [1,23,4,5,6,7,8,9,2,4];
//for loop -- used for arrays 
for (let i = 0; i < array.length; i++) {
    console.log(array[i]) 
}
for (let i = 0; i < 5; i++) {
    console.log(i)
}
//for in loop -- used for objects 
let obj = {
    name : "pranav",
    role: "programmer",
    company: "code with panu"
}
for (const key in obj) {
    const element = obj[key];
    console.log(key , element)    
}


//for of 
for (const c of "Harry") {
    console.log(c)
}

//while loop 
 i = 2
while (i<6) {
    console.log(i)
    i++;
}

//do while loop 
i = 0 ; 
do {
    console.log(i);
    i++;
} while (i<6);