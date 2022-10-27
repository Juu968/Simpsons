var imagens =["Homer.jpg","Marge_Simpson.png","Maggie.png","Lisa.webp","Bart.png"]
var nome =["Homer","Marge","Maggie","Lisa","Bart"]


var inicio =0;
function proximoparente()
{
inicio++;
var numerodeparentes = 4
if(inicio > numerodeparentes)
{
    inicio=0
}
var adicionarimagem = imagens[inicio];
var adicionarnome = nome[inicio];
document.getElementById("fotodoparente").src = adicionarimagem;
document.getElementById("nomedoparente").innerHTML = adicionarnome



}