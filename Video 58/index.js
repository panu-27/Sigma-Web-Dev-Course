function nice(name) {
    console.log("Hey "+ name + " You are nice!")
}
nice("Rohan")
nice("Pranav")

function sum(a=0,b=1,c=5) { // default parameters
    console.log(a+b+c);
}

sum(3,5);
sum(3,5,1);
sum(1);
sum();

//arrow function
const funct1 = (x)=>{
    console.log("I am " , x);
}


funct1(100)