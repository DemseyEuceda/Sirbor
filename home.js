





    class Sirbor {

        constructor(pelo, barba, esgracioso, semalea){
            this.pelo = pelo;
            this.barba = barba;
            this.esgracioso = esgracioso;
            this.semalea = semalea;
        }



       



    }


    
    function cris(){
        let corral1 = 30;
        let corral2 = 40;
        let corral3 = 20;
        let inicio = corralA(corral1, 7);
        console.log("estso chanchitos quedaron en corral 1", inicio)
        let medio = corralB(corral2, 5, 8);
        console.log("estos chanchitos quedaron en corral 2",medio)
        let final = corralC(corral3, medio, inicio , 10, 3);
        console.log("este es el total de chanchitos",final)

    }


    
    function corralA(corral1, venta){
        let total = corral1-venta;
        return total;
    }

    
    function corralB(corral2, venta, compra){
        let total = corral2-venta+compra;
        return total;
    }

    
    function corralC(corral3, corral2, corral1, venta, chicharron){
        let total = corral3-venta-chicharron;
        total = corral2-15+corral1-10+corral3;
        return total;

    }
    













/// esta función regresa al login esa en home.html en el primer boton 
function regresar(){
    let cerrar = confirm("esta seguro que desea salir?")
    if(cerrar){
        window.localStorage.clear()
        window.location.href = "index.html?";
    }

}
/// esta función redirige al NuevoEmpleado.html

function nuevoEmpleado(){
    window.location.href = "nuevoEmpleado.html";
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

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let cargo = document.getElementById("cargo").value;
    /*
    data es un tipo de objeto llamado json, este tipo de objeto es lo principal en peticiones https y en lenguajes como javascript
    */
   /*
    if(JSON.parse(localStorage.getItem("list")))
        list = JSON.parse(localStorage.getItem("list"));
    */
    let data = {nombre :nombre, apellido : apellido, cargo : cargo};
    axios.post('http://192.168.107.80:8000/agregarPersonal', data).then(res=>{
        console.log(res.data)
    })


    //list.push(data);
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("cargo").value = "";
    window.localStorage.setItem("list", JSON.stringify(list));
    console.log(window.localStorage.getItem("list"));

}


var lista = JSON.parse(localStorage.getItem("list"));
   
            
//// agrego una lista para los empleados que se irán agregando
var list = []

document.addEventListener('DOMContentLoaded', function() {
    // Aquí va la función que quieres ejecutar
    initHome();
});

function initHome(){
    axios.get("http://192.168.107.80:8000/getPersonas")
.then((res)=>{  
    list = res.data
    if(list.length !==0){
        list.forEach(element => {
            //console.log(element)
            document.getElementById("tabla").innerHTML += `            
                    <tr>
                        <th scope="row">${element.id}</th>
                        <td>${element.nombre}</td>
                        <td>${element.apellido}</td>
                        <td>${element.cargo}</td>
                        <td>
                        <button class="btn btn-success" onclick="actualizar(${element.id})" >
                        <span class="material-symbols-outlined">
                            edit
                        </span>                  
                        </button>
                        </td>
                        <td>
                        <button class="btn btn-danger" onclick="eliminar(${element.id})" >
                        <span class="material-symbols-outlined">
                            delete
                        </span>
                        </button>
                        </td>
                    </tr>
            `;
            ;    
        });
        
    }
    
});


}





function eliminar(e){
    let list = JSON.parse(localStorage.getItem("list"));
    let eliminado = e-1
    let userConfirmed = confirm("esta seguro que desea eliminar?");
    if (userConfirmed) {
        /*
        delete(list[eliminado])
        let arraySinNulos = list.filter(item => item !== null && item !== undefined);
        window.localStorage.setItem("list", JSON.stringify(arraySinNulos));
        */
        axios.delete(`http://192.168.107.80:8000/eliminarPersona/${e}`).then((res)=>{
            console.log(res.data)
            window.location.reload(); 
        })
          
    } else {
        // El usuario presionó "Cancelar"
        console.log("El usuario canceló la acción.");
        // Aquí puedes poner el código para cancelar la acción
    }
   
}

function actualizar(e){
    window.location.href = "actualizarEmpleado.html?id="+e
}
