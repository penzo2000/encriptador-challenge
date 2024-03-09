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

function getUserText() {
    let textoIngresado=textoUsuario.value;
    return textoIngresado;
}


//function alertaMayusYSimbol()

function botonEncriptar(te){
    console.log(getUserText());
    encriptado(getUserText());
    
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
            texto=texto.replace(new RegExp(matrizKey[i][1], "g"),matrizKey[i][0]);
        }
    }  
    console.log(texto);
}