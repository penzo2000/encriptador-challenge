//Captura de elementos de texto
const textoUsuario=document.getElementById("texto-usuario");//textarea DOM
const textoMostrado=document.querySelector("#caja-de-texto");
centinela=0;
console.log(textoUsuario,textoMostrado);
//Matriz de encriptación 
const matrizKey=[
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
]
 
function getUserText() {
    let textoIngresado=textoUsuario.value;
    return textoIngresado;
}

function funcionesToActivar() {
    conversorMinusculas();
    conversorAcento();
}

function conversorMinusculas(){
    let textoIngresado=textoUsuario.value;
    textoUsuario.value=textoIngresado.toLowerCase();
}

function conversorAcento(){
    let textoIngresado=textoUsuario.value;
    acento=["á","é","í","ó","ú"];
    sinAcento=["a","e","i","o","u"];
    for(let i=0; i<acento.length; i++){
        textoIngresado=textoIngresado.replaceAll(acento[i],sinAcento[i]);
    }
    textoUsuario.value=textoIngresado;
}

function peticionUsuarioAMinusculas(){
    let resultado = confirm("Pulse en aceptar para cambiar todo a minúsculas automáticamente");
    if (resultado) {
        conversorMinusculas();
        if(centinela==0){
            textoUsuario.oninput=conversorMinusculas;
            centinela=1;
        }
        else{
            textoUsuario.addEventListener('input', funcionesToActivar);
        }
    } 
    else{
        alert("No se pueden encriptar mayúsculas, acentos ni caracteres especiales");
    }
}

function peticionUsuarioSinAcento(){
    let resultado = confirm("Pulse en aceptar para bloquear acentos automáticamente");
    if (resultado) {
        conversorAcento();
        if(centinela==0){
            textoUsuario.oninput=conversorAcento;
            centinela=1;
        }
        else{
            textoUsuario.addEventListener('input', funcionesToActivar);
        }
    } 
    else{
        alert("No se pueden encriptar mayúsculas, acentos ni caracteres especiales");
    }
}


function verificarMayusculasAcentos(event){
    let ultimaLetra = getUserText().charAt(getUserText().length - 1);
    if (ultimaLetra==ultimaLetra.toUpperCase() && /[A-Z]/.test(ultimaLetra)){
        peticionUsuarioAMinusculas();
    }
    if(/[áéíóú]/.test(ultimaLetra)){
        peticionUsuarioSinAcento();
    }
}

function botonEncriptar(te){
    console.log(getUserText());
    encriptado(getUserText());
    apareceBoton();
    
}

function apareceBoton() {
    let copiar=document.getElementById('boton-copiar');
    copiar.style.display = "block";
}

function encriptado(texto) {
    for (let i=0; i<matrizKey.length; i++){
        if (texto.includes(matrizKey[i][0])){
            texto=texto.replace(new RegExp(matrizKey[i][0], "g"),matrizKey[i][1]);
        }
    }  
    console.log(texto);
}

function botonDesencriptar(){
    console.log(getUserText());
    desencriptado(getUserText());
    
}

function desencriptado(texto) {
    for (let i=0; i<matrizKey.length; i++){
        if (texto.includes(matrizKey[i][1])){
            texto=texto.replaceAll(matrizKey[i][1],matrizKey[i][0]);
        }
    }  
    console.log(texto);
}