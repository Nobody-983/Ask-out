let submit = document.getElementById("submit")
let input = document.getElementById("input")

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    let inputEl = input.value
    localStorage.setItem("input",inputEl)
    window.location.href = "main.html"
})