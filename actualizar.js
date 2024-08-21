let listita = JSON.parse(localStorage.getItem("list"));
const params = new URLSearchParams(window.location.search);
let id = params.get("id");

//console.log(listita[id-1])

axios.get(`http://192.168.107.80:8000/getPersona/${id}`).then((res)=>{
    console.log(res.data)
    document.getElementById("nombre").value = res.data.nombre
    document.getElementById("apellido").value = res.data.apellido
    document.getElementById("cargo").value = res.data.cargo
})




function editar (){
    let Nnombre = document.getElementById("nombre").value;
    let Napellido = document.getElementById("apellido").value;
    let Ncargo = document.getElementById("cargo").value;
    let data = {nombre : Nnombre, apellido : Napellido, cargo : Ncargo};
    let seguro = confirm("esta seguro de actulizar estos datos")
    if(seguro){
        /*
        listita[id-1] = { nombre : Nnombre, apellido : Napellido, cargo : Ncargo };
        window.localStorage.setItem("list",  JSON.stringify(listita));
       
        */
       axios.put(`http://192.168.107.80:8000/editarPersona/${id}`, data).then((res)=>{
            console.log(res.data)
             window.location.href = 'home.html'
       })
    }
    else{
        console.log("se canceló")
    }
  
}