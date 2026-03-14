let cart = 0
let total = 0

function addCart(price){

cart++
total += price

document.getElementById("cart").innerText = cart
document.getElementById("total").innerText = total

localStorage.setItem("cart",cart)
localStorage.setItem("total",total)

}

function removeCart(price){

if(cart>0){

cart--
total -= price

document.getElementById("cart").innerText = cart
document.getElementById("total").innerText = total

localStorage.setItem("cart",cart)
localStorage.setItem("total",total)

}

}

function searchFood(){

let input=document.getElementById("search").value.toLowerCase()

let cards=document.querySelectorAll(".card")

cards.forEach(card=>{

let name=card.getAttribute("data-name")

if(name.includes(input)){

card.style.display="block"

}else{

card.style.display="none"

}

})

}