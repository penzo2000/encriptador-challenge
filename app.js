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
    ["O","ober"],
    ["u","ufat"],
]

function encriptar(){
    let textoIngresado=textoUsuario.value;
    console.log(textoIngresado);
}