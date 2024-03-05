/*Aparece el botón copiar
let copiar=document.getElementById('boton-copiar');
copiar.style.display = "block";*/

//Captura de elementos de texto
const textoUsuario=document.getElementById("texto-usuario");
const cajaDeTexto=document.querySelector("#caja-de-texto");
const textoMostrado=document.querySelector("#texto-modificado");
cajaDeTexto.innerHTML="Chau";
textoMostrado.innerHTML="Hola que ace";
console.log(textoMostrado,textoUsuario,cajaDeTexto);

const matrizKey=[
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
];
    