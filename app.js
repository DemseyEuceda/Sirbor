/*
var juan = "juanito";
var pedro = "me electrocutaste pedrito";
var kerim = "que pedo bello sebastian";
*/
var user = "juanito@ine.gov.hn";
var pass = "juanitoToro69";
var sirvo;


if(!window.localStorage.getItem("Juan"))
    console.log("verdadero")
else
    console.log("falso")

//window.localStorage.setItem("nombre" , "valor");

//document.getElementById("nombre").value = window.localStorage.getItem("nombre");

console.log(window.location.pathname)
/*

en los if cuando tienen una cadena vacia tira un falso
si mandan algo que tiene algo es un verdadero 
tambien cuando tienen numeros cualquier numero diferente de cero es un verdadero 
pero si mando un 0 es falso


*/

//en este if estoy haciendo un diferencia "!=" lo cual significa que si es diferente esa parte del if 
//dara como resultado un verdadero y se ejecutará lo que esta dentro del if
if(window.localStorage.getItem("sirhbor") != "cris" || !window.localStorage.getItem("sirhbor") ){
    if( path.substring(path.lastIndexOf('/') + 1)!="index.html")
        window.location.href ="index.html";
}
    

function sirhbor(){
    let ahora = new Date();   
    if((ahora.getSeconds()>0 && ahora.getSeconds()<10) || (ahora.getSeconds()%2 == 0)  )
        document.getElementById("texto").innerHTML +=juan
    else if (ahora.getSeconds()>10 && ahora.getSeconds()<20)
        document.getElementById("texto").innerHTML +=pedro
    else if (ahora.getSeconds()>30)
        document.getElementById("texto").innerHTML +=kerim
}

function login(){
    let usuario = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    if(usuario ==user && password == pass){
        window.localStorage.setItem("sirhbor", "cris")
        window.location.href = "home.html";
    }else
        alert("usuario o contraseña incorrec")


        
    
}






/*
    < menor que
    > mayor que

    <= menor o igual que 
    >= mayor o igual que 

    == igual usando para comparar

    != diferente

    || ó

    &&
    
    
*/