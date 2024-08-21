var user = "Usuario";
var password = "Contraseña";

if (!window.localStorage.getItem("Juan"))
console.log("Verdadero")
else 
console.log("falso")

console.log(window.location.pathname)

if (window.location.getItem("Inicio") != "Ana" || !window.localStorage.getItem("Ana")){
    let path= window.location.pathname;
    if( path.substring(path.lastIndexOf('/') + 1 ) != "index.html")
        window.location.href = "index.html";
}

function Hola (){
    let ahora= new Date();
    if ((ahora.getSeconds()>0 && ahora.getSeconds()<10) || (ahora.getSeconds()%2 == 0) )
        document.getElementById("texto").innerHTML +=juan
    else if (ahora.getSeconds()>0 && ahora.getSeconds()<20)
        document.getElementById("texto").innerHTML +=pedro
    else if (ahora.getSeconds()>30)
        document.getElementById("texto").innerHTML +=toamte

}


function login(){
    let usuario = document.getElementById("User").value;
    if (usuario ==USer && password == pass){
        window.localStorage.setItem("Ana", "David")
        window.location.href = "Muenu.html";
    }else
    alert("Usaurio o contraseña incorrecto");

}

