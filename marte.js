var canvas = document.getElementById ('myCanvas')  ;
var ctx = canvas.getContext ('2d') ;
var largura = 100  ;
var altura = 90 ;
var rouverX= 10 ;
var rouverY = 10  ;
var img = 'marte.jpg' ;
var rouver = 'rover.png' ;

function add () {
     fundo =  new Image () ;
fundo.onload = carregarfundo ;
fundo.src = img ;
 rouver2 = new Image () ; 
rouver2.onload = carregarrouver ;
rouver2.src = rouver ;

}
function carregarfundo () {
ctx.drawImage (fundo,0,0,canvas.width,canvas.heigth) ;


}
function carregarrouver () {
    ctx.drawImage (rouver2,rouverX,rouverY,largura,altura) ; 

}
 window.addEventListener ('keydown', mykeydown) ;
 function mykeydown (e){
keypressd = e.keyCode ;
console.log(keypressd);
if(keypressd == '38')

{
up();
console.log('up') ;
}
if(keypressd == '40')
{
down();
console.log('down') ;
}
if(keypressd == '37')
{
left();
console.log('feft') ;
}
if(keypressd == '39')
{
right();
console.log('right');
}


 }
function up()
{
if(rouverY >=0)
{
rouverY = rouverY - 10 ;
carregarfundo();
carregarrouver();
}

}
function down() {
if(rouverY<=500)
{
rouverY =rouverY+ 10
carregarfundo();
carregarrouver();
}
}
function left(){
if(rouverX =rouverX - 10)
carregarfundo();
carregarrouver();
}
function right(){
if(rouverX <=700)
{
rouverX =rouverX + 10;
carregarfundo();
carregarrouver();
}


}
