let store = localStorage.getItem("input")
let head = document.getElementById("head")
let yes = document.getElementById("yes")
let no = document.getElementById("no")
head.textContent = "Will you be my babe" + " " + store

no.addEventListener("click",(e)=>{
e.preventDefault()

    alert("Will you be my babe")
})
yes.addEventListener("click",()=>{
    window.location.href = "finally.html"
})
console.log(store);