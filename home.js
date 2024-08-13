


    class Sirbor {

        constructor(pelo, barba, esgracioso, semalea){
            this.pelo = pelo;
            this.barba = barba;
            this.esgracioso = esgracioso;
            this.semalea = semalea;
        }



       



    }

    let cris = new Sirbor("pelo");







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

/*

let string = '123123121qwdqwdacdsfadfasdf';
let number = 0;
let fecha = new Date();
let bol = false;

*/
/*
let unaCosa = "algo"
let otra = "otra cosa"
*/
/*
cuando tenemos cadenas de texto y utilizamos operadores matematicos solamente funcionara para algo el "+" y este servirá como un 
concatenador, esto significa que unira ambas cadenas de texto

*/

/*
let resultado = unaCosa+otra;
let unnumero = 9;
let otronumero = 10;
*/
/**
 * en cambio con numeros si podremos utilizar todas las operaciones matematicas y estas nos arrojaran un valor
 */
/*
let hoy = new Date();
let algunDia = new Date("8-11-2024")

if(hoy > algunDia)
    console.log("verdaero")
else
    console.log("falso")

*/
//esta funcion esta en NuevoEMpleado.html y hace un nuevo empleado que se agrega a la 
//lista que se
/// que se creo antes 
function crear(){
    list = []
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let cargo = document.getElementById("cargo").value;

    /*
    data es un tipo de objeto llamado json, este tipo de objeto es lo principal en peticiones https y en lenguajes como javascript
    */
    
    if(JSON.parse(localStorage.getItem("list")))
        list = JSON.parse(localStorage.getItem("list"));
        




    let data = {nombre :nombre, apellido : apellido, cargo : cargo};
    list.push(data);
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("cargo").value = "";
    window.localStorage.setItem("list", JSON.stringify(list))
    console.log(window.localStorage.getItem("list"));

}


var lista = JSON.parse(localStorage.getItem("list"))




           
       
            
let count = 1;
lista.forEach(element => {
    
    document.getElementById("tabla").innerHTML += `
            
            <tr>
                <th scope="row">${count}</th>
                <td>${element.nombre}</td>
                <td>${element.apellido}</td>
                <td>${element.cargo}</td>
            </tr>

    `
    count++;


    

   
    
});
