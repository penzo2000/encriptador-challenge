/*Aparece el botón copiar
let copiar=document.getElementById('boton-copiar');
copiar.style.display = "block";*/

//Captura de elementos de texto
const textoUsuario=document.getElementById("texto-usuario");
const textoMostrado=document.querySelector("#caja-de-texto");
let textoIngresado=textoUsuario.value;
console.log(textoUsuario,textoMostrado);
console.log(textoIngresado);

//Matriz de encriptación 

const matrizKey=[
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
]

function botonEncriptar(){
    let textoIngresado=textoUsuario.value;
    console.log(textoIngresado);
    encriptado(textoIngresado);
    
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
    let textoIngresado=textoUsuario.value;
    console.log(textoIngresado);
    desencriptado(textoIngresado);
    
}

function desencriptado(texto) {
    for (let i=0; i<matrizKey.length; i++){
        if (texto.includes(matrizKey[i][1])){
            texto=texto.replace(new RegExp(matrizKey[i][1], "g"),matrizKey[i][0]);
        }
    }  
    console.log(texto);
}