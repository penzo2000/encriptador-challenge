//Declaración de variables globales y uso del DOM
const textoUsuario=document.getElementById("texto-usuario");//textarea DOM
const textoMostrado=document.querySelector("#caja-de-texto");

//Matriz de encriptación, Encriptado y Desencriptado 
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

function encriptado(texto) {
    for (let i=0; i<matrizKey.length; i++){
        if (texto.includes(matrizKey[i][0])){
            texto=texto.replaceAll(matrizKey[i][0],matrizKey[i][1]);
        }
    }  
    console.log(texto);
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

function desencriptado(texto) {
    let auxiliar=texto;
    for (let i=0; i<matrizKey.length; i++){
        if (texto.includes(matrizKey[i][1])){
            auxiliar=auxiliar.replaceAll(matrizKey[i][1],matrizKey[i][0]);
        }
    }  
    console.log(auxiliar);
}

function botonDesencriptar(){
    console.log(getUserText());
    desencriptado(getUserText());
    
}

//Control de condiciones para el texto ingresado en el textarea
//Minúsculas
function conversorMinusculas(){
    let textoIngresado=textoUsuario.value;
    textoUsuario.value=textoIngresado.toLowerCase();
}

function avisoCambioAMinusculas(){
    alert("No se permiten mayúsculas, se cambiará el texto a minúsculas automáticamente");
    conversorMinusculas();
    textoUsuario.oninput=conversorMinusculas;
}


function verificarMayusculas(){
    let ultimaLetra = getUserText().charAt(getUserText().length - 1);
    if (ultimaLetra==ultimaLetra.toUpperCase() && /[A-ZÑ]/.test(ultimaLetra)){
        avisoCambioAMinusculas();
    }
}
//Bloqueo caracteres especiales
//textoUsuario.addEventListener("keypress",bloqueoCaracteresEspeciales);
function bloqueoCaracteresEspeciales(event){
   const charCode=event.charCode;
   if (charCode!=9 && charCode!=32 && charCode!=209 && charCode!=241 && (charCode<65 || charCode>90) && (charCode<97 || charCode>122)){
     event.preventDefault();
   }
}

