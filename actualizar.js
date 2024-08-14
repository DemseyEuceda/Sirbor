let listita = JSON.parse(localStorage.getItem("list"));
const params = new URLSearchParams(window.location.search);
let id = params.get("id");
let empleado = listita[id-1]
//console.log(listita[id-1])

document.getElementById("nombre").value = empleado.nombre
document.getElementById("apellido").value = empleado.apellido
document.getElementById("cargo").value = empleado.cargo


function editar (){
    let Nnombre = document.getElementById("nombre").value;
    let Napellido = document.getElementById("apellido").value;
    let Ncargo = document.getElementById("cargo").value;
    let seguro = confirm("esta seguro de actulizar estos datos")
    if(seguro){
        listita[id-1] = { nombre : Nnombre, apellido : Napellido, cargo : Ncargo };
        window.localStorage.setItem("list",  JSON.stringify(listita));
        window.location.href = 'home.html'
    }
    else{
        console.log("se canceló")
    }
  
}