

//// agrego una lista para los empleados que se irán agregando 
let list = [];
/// esta función regresa al login esa en home.html en el primer boton 
function regresar(){
    window.localStorage.clear()
    window.location.href = "file:///C:/Users/bboyr/Documents/Sirbor/index.html?";
}
/// esta función redirige al NuevoEmpleado.html
function nuevoEmpleado(){
    window.location.href = "file:///C:/Users/bboyr/Documents/Sirbor/nuevoEmpleado.html";
}





//esta funcion esta en NuevoEMpleado.html y hace un nuevo empleado que se agrega a la 
//lista que se
/// que se creo antes 
function crear(){

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let cargo = document.getElementById("cargo").value;
    let data = {nombre :nombre, apellido : apellido, cargo : cargo};
    list.push(data);
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("cargo").value = "";
    console.log(list);

    



}