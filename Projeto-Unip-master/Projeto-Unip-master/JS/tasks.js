let entrega = document.getElementById("a_entregar");
let tarefa = document.querySelector(".tarefa");

var atrasado = document.getElementById("atrasados");
let tarefa2 = document.querySelector(".tarefa2");

if (entrega.value < "1"){
    tarefa.style.backgroundColor = "rgb(0, 163, 0)";
}

if (entrega.value == "1"){
    tarefa.style.backgroundColor = "rgba(202, 202, 39, 0.808)";
}

if (entrega.value > "1"){
    tarefa.style.backgroundColor = "tomato";
}

if (atrasado.value < "1"){
    tarefa2.style.backgroundColor = "rgb(0, 163, 0)";
}

if (atrasado.value == "1"){
    tarefa2.style.backgroundColor = "rgba(202, 202, 39, 0.808)";
}

if (atrasado.value > "1"){
    tarefa2.style.backgroundColor = "tomato";
}