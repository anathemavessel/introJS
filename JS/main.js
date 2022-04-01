// alert("Hola mundo!!!");
// Mensajes en consola
// console.log("Este es un mensaje");
var nombre = "AnathemaVessel";
let edad=10;
let titulo=document.getElementById('titulo');
let titulo2=document.getElementById('titulo2');
let titulo3=document.getElementById('titulo3');
var btn=document.getElementById('btn');


let mensaje="Mi nombre es: "+nombre+" y mi edad es: "+(edad+11);

console.log(mensaje);

titulo.innerHTML=mensaje;
titulo3.style.color="#1919FF";
titulo.style.color="#000000";
btn.onclick=function()
{
    titulo.innerHTML = "Le disteS click";
    titulo2.innerHTML = "Cambiamos el color y el texto";
    titulo2.style.color="#4DA6FF";
    titulo3.innerHTML = "BUUUUUUUU";
    titulo3.style.color="#40FF19";
    btn.innerHTML="Ni modo, ya le diste click"
}
titulo.onclick=function()
{
    titulo.innerHTML = "Le disteS click";
};
titulo2.onclick=function()
{
    titulo2.innerHTML = "Cambiamos el color y el texto";
    titulo2.style.color="#4DA6FF";

};
titulo3.onclick=function()
{
    titulo3.innerHTML = "BUUUUUUUU";
    titulo3.style.color="#40FF19";
};
var player = titulo3.animate([
    {transform: 'translate(0)'},
    {transform: 'translate(100px, 100px)'}
], 1500);
player.addEventListener('finish', function() {
    target.style.transform = 'translate(100px, 100px)';
});

