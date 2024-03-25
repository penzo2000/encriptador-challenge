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
}
function botonEncriptar(){
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
    desencriptado(getUserText());
    mostrarElemento(copiar);
    mostrarElemento(textareaMensaje);
    limpiarTextArea(textoUsuario);
    quitarFondoMensaje();
    ocultarElemento(mensajeAUsuario);
    restablecerBotonCopiar();
}

//-----------------Control de condiciones para el texto ingresado en el textarea---------------------

//Modificadores de Texto en textarea
function conversorMinusculas(){
    let textoIngresado=textoUsuario.value;
    textoUsuario.value=textoIngresado.toLowerCase();
}

function eliminarCaracteresEspeciales(texto){
    let textoLimpio = texto.replace(/[^a-zA-Z\sñÑ]/g,'');
    textoUsuario.value=textoLimpio;
}

//Avisa al usuario que se modificará el texto en su textarea
function avisoCambioAMinusculas(){
    Swal.fire({
        text: 'No se permiten mayúsculas, se cambiará el texto a minúsculas automáticamente',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      });
    conversorMinusculas();
    textoUsuario.oninput=conversorMinusculas;
}

function avisoEliminarCaracteres(){
    Swal.fire({
        text: 'No se permiten caracteres especiales, se eliminaran automaticamente',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      });
}

//Control deL texto tipeado directamente en el textarea o copiado de algún lugar externo 

function verificarMayusculasCaracteresEspeciales(){
    let ultimaLetra = getUserText().charAt(getUserText().length - 1);
    let textoCompleto=getUserText();
    if ((ultimaLetra==ultimaLetra.toUpperCase() || textoCompleto!=textoCompleto.toLowerCase() ) && /[A-ZÑ]/.test(ultimaLetra)|| textoCompleto!=textoCompleto.toLowerCase()){
        avisoCambioAMinusculas();
    }
    if(/[^a-zA-Z\sñÑ]/.test(textoCompleto)){
        avisoEliminarCaracteres();
        eliminarCaracteresEspeciales(textoCompleto);
    }
}

function bloqueoCaracteresEspeciales(event){
   const charCode=event.charCode;
   if (charCode!=9 && charCode!=32 && charCode!=209 && charCode!=241 && (charCode<65 || charCode>90) && (charCode<97 || charCode>122)){
     event.preventDefault();
   }
}

//---------------Otras funcionalidades-----------------

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

//-----------------Copiar texto----------------------

function restablecerBotonCopiar() {
    copiar.textContent="Copiar";
    copiar.style.background="white";
}

function cambiarBtnCopiar(){
    copiar.textContent="Copiado!";
    copiar.style.background="rgb(178, 252, 149)";
}
 async function copiarTexto(){
    let textoEncriptado=textareaMensaje.value;
    try{
        await navigator.clipboard.writeText(textoEncriptado);
        cambiarBtnCopiar();
    }
    catch(err){
        console.error("Error al copiar: "+err);
    }
    restablecerMensajeContenedor();
}
