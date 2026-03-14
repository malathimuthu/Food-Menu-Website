let items=localStorage.getItem("cart") || 0
let price=localStorage.getItem("total") || 0

document.getElementById("items").innerText=items
document.getElementById("price").innerText=price

function order(){

alert("Order placed successfully 🍔")

localStorage.clear()

}