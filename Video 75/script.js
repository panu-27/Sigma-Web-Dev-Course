// javascript has Asynchronous Naturee
//callback function
//arrow fn dnsf
// prommisses 
let prom1 = new Promise((reolve , reject )=>{
    let a = Math.random();
    if(a<0.5){
        reject("Your Promisse Is rejected");
    }else{
        setTimeout(()=>{
            console.log("Yes I am Done")
            resolve("Harry");
        },3000);
    }
})

promo1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err);
})