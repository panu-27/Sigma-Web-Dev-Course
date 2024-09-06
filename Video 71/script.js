// console.log(document.querySelector(".box").innerHTML)
// console.log(document.querySelector(".container").innerHTML)
// //got the inner html in therse boxes 
// console.log(document.querySelector(".box").innerText)
// console.log(document.querySelector(".container").innerText)
// //got the text in html
// console.log(document.querySelector(".box").outerHTML)
// console.log(document.querySelector(".container").outerHTML)
// //got the html out of the class that you selected 
// console.log(document.querySelector(".box").nodeName)
// //got the type like div body header
 
// // console.log(document.querySelector(".container").hidden ="true")
// // hides the html element 



//document.designMode = "on" -- you can litterally design any website
let div = document.createElement("div")
div.innerHTML = "i am been inserted by pnau27"
div.setAttribute("class","created")
document.querySelector(".container").before(div)
// document.querySelector(".container").after(div)
// document.querySelector(".container").append(div)
let cont = document.querySelector(".container")
cont.innerAdjacentHTML("afterend", <b> i ma  under the water , please help me </b>)

// toggle agar khula hai to band karo aur band hai to chalu karo 

