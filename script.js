/*const mensajeContenedor = document.getElementById("mensajeContenedorId");
let prueba= prompt("Ingrese mensaje");
mensajeContenedor.textContent=prueba;
mensajeContenedor.style.alignContent="start";
mensajeContenedor.style.backgroundImage="none";*/

//--------Declaración de variables globales y uso del DOM-------
const textoUsuario=document.getElementById("textareaid");//textarea DOM
const copiar=document.getElementById('boton-copiar');
const mostrarEncriptado=document.getElementById("mensajeContenedorId");

//--------Matriz de encriptación, Encriptado y Desencriptado------ 
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
    cambiarContenido(mostrarEncriptado, texto);
    console.log(texto);
}
function botonEncriptar(){
    console.log(getUserText());
    encriptado(getUserText());
    apareceBotonCopiar();
    limpiarTextArea();
    restablecerBotonCopiar();
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
    limpiarTextArea();
    restablecerBotonCopiar()
}

//------------Control de condiciones para el texto ingresado en el textarea--------
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
function bloqueoCaracteresEspeciales(event){
   const charCode=event.charCode;
   if (charCode!=9 && charCode!=32 && charCode!=209 && charCode!=241 && (charCode<65 || charCode>90) && (charCode<97 || charCode>122)){
     event.preventDefault();
   }
}

//---------------Otras funcionalidades------------

function limpiarTextArea() {
    textoUsuario.value="";
}

function cambiarContenido(elemento, contenidoNuevo){
    elemento.innerHTML=contenidoNuevo;
}
//Copiar texto
function apareceBotonCopiar() {
    copiar.style.display = "block";
}

function restablecerBotonCopiar() {
    copiar.textContent="Copiar";
}
 async function copiarTexto(){
    let textoEncriptado=mostrarEncriptado.textContent;
    console.log("tu texto copiado es: "+mostrarEncriptado.textContent);
    try{
        await navigator.clipboard.writeText(textoEncriptado);
        copiar.textContent="Copiado!";
    }
    catch(err){
        console.error("Error al copiar: "+err);
    }
}
