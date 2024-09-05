console.log("types of variables")
let i = 0 ; // after declaration you can modifiy
const j = 1 ; //once declared cannot modified , used to create objects 
var k = 2 ; // not used 
console.log(i)
console.log(j)
console.log(k)

i = 10 ;
console.log(i)

console.log("types of variables")
var a = 5;
var b = 'a';
var c = "pranav";
var d = true;
var e = 3.3;
var f = 3.44;
var g = undefined;
var h = null;
console.log(a,b,c,d,e,f,g,h)
console.log(typeof a, typeof b , typeof c , typeof d , typeof e , typeof f , typeof g , typeof h
)

//why null type is object ?

// diff between var and let is if you declare let in a code block its scope is defined inthat  only but for var it doesnt matter it wherever declared its scope becoems global

//object
let o = {
    "name": "Pranav",
    "is_handsome":true,
    "job code": 234
}

console.log(o);

o.salary = "100cr"

console.log(o);

o.salary ="200cr"

console.log(o);

