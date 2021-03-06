let tasks = document.getElementById("ftask")
let dec = document.getElementById("fdesc")
let date = document.getElementById("fdate")

let cadastrar = document.getElementById("button").onclick = function(){
    if (tasks.value == ""){
        alert("Por favor, preencha os campos obrigatórios!")
        return false
    }
}