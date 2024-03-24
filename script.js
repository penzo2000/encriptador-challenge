//--------Declaración de variables globales y uso del DOM-------
const textoUsuario=document.getElementById("textareaid");//textarea DOM
const copiar=document.getElementById('boton-copiar');
const mensajeContenedor=document.getElementById("mensajeContenedorId");
const textareaMensaje=document.getElementById("mensajeTextareaId");
const mensajeAUsuario=document.getElementById("mensajeId");

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

//Encriptado
function encriptado(texto) {
    for (let i=0; i<matrizKey.length; i++){
        if (texto.includes(matrizKey[i][0])){
            texto=texto.replaceAll(matrizKey[i][0],matrizKey[i][1]);
        }
    } 
    cambiarContenidoTextarea(textareaMensaje,texto); 
    console.log(texto);
}
function botonEncriptar(){
    console.log(getUserText());
    encriptado(getUserText());
    mostrarElemento(copiar);
    mostrarElemento(textareaMensaje);
    limpiarTextArea(textoUsuario);
    quitarFondoMensaje();
    ocultarElemento(mensajeAUsuario);
    restablecerBotonCopiar();
}

//Desencriptado
function desencriptado(texto) {
    for (let i=matrizKey.length-1; i>=0; i--){
        if (texto.includes(matrizKey[i][1])){
            texto=texto.replaceAll(matrizKey[i][1],matrizKey[i][0]);
        }
    }
    cambiarContenidoTextarea(textareaMensaje,texto); 
}

function botonDesencriptar(){
    console.log(getUserText());
    desencriptado(getUserText());
    mostrarElemento(copiar);
    mostrarElemento(textareaMensaje);
    limpiarTextArea(textoUsuario);
    quitarFondoMensaje();
    ocultarElemento(mensajeAUsuario);
    restablecerBotonCopiar();
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
    let textoCompleto=getUserText();
    if ((ultimaLetra==ultimaLetra.toUpperCase() || textoCompleto!=textoCompleto.toLowerCase() ) && /[A-ZÑ]/.test(ultimaLetra)|| textoCompleto!=textoCompleto.toLowerCase()){
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

function limpiarTextArea(textarea) {
    textarea.value="";
}

function cambiarContenidoTextarea(textarea,textoNuevo){
    textarea.value=textoNuevo;
}

function mostrarElemento(elemento){
    elemento.hidden=false;
}

function quitarFondoMensaje(){
    mensajeContenedor.style.backgroundImage="none";
}

function ocultarElemento(elemento){
    elemento.hidden=true;
}

function restablecerMensajeContenedor(){
    limpiarTextArea(textareaMensaje);
    mostrarElemento(mensajeAUsuario);
    ocultarElemento(textareaMensaje);
}

//-----------------Copiar texto--------------

function restablecerBotonCopiar() {
    copiar.textContent="Copiar";
    copiar.style.background="none";
}

function cambiarBtnCopiar(){
    copiar.textContent="Copiado!";
    copiar.style.background="rgb(178, 252, 149)";
}
 async function copiarTexto(){
    let textoEncriptado=textareaMensaje.value;
    console.log("tu texto copiado es: "+textareaMensaje.value);
    try{
        await navigator.clipboard.writeText(textoEncriptado);
        cambiarBtnCopiar();
    }
    catch(err){
        console.error("Error al copiar: "+err);
    }
    restablecerMensajeContenedor();
}
