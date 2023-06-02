let tarjetasDestapadas=0;
let tarjeta1=null;
let tarjeta2=null;
let primerResultado=null;
let segundoResultado=null;
let movimientos=3;
let aciertos=0;
let jugar=false
let mostrarAciertos=document.getElementById('aciertos');
let ganar=document.getElementById('ganar');
let mostrarMovimientos=document.getElementById('movimientos');
let numero=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numero=numero.sort(()=>{return Math.random()-0.5})
console.log(numero);

function bloquearTarjetas(){
    for(let i=0;i<=15;i++){
      let tarjetabloqueada=document.getElementById(i);
      tarjetabloqueada.innerHTML=`<img src="./${numero[i]}.png"alt"">`
      tarjetabloqueada.disabled=true  
    }
}
function repetir(jugar){
    if(movimientos==0||aciertos==8){
if(jugar=true){
    window.location.reload();
    jugar=false;
}}
}
function destapar(id){
    if(movimientos==0){
            bloquearTarjetas()
            ganar.innerHTML=`🌑PERDISTE🌑`
            return
        }
 tarjetasDestapadas++;
 console.log(tarjetasDestapadas);
if(tarjetasDestapadas==1){
tarjeta1=document.getElementById(id);
primerResultado=numero[id];
tarjeta1.innerHTML=`<img src="./${primerResultado}.png"alt"">`;

tarjeta1.disabled=true;
}else if(tarjetasDestapadas==2){
    tarjeta2=document.getElementById(id);
    segundoResultado=numero[id];
    tarjeta2.innerHTML=`<img src="./${segundoResultado}.png"alt"">`;
    tarjeta2.disabled=true
    
    if(primerResultado==segundoResultado){
        tarjetasDestapadas=0;
        aciertos++;
        mostrarAciertos.innerHTML=`Acietos: ${aciertos}`; 
    if(aciertos==8){
        ganar.innerHTML='⭐GANASTE⭐';
    }
    }else{
        setTimeout(()=>{
            tarjeta1.innerHTML=`<img src="./favorito.png"alt"">`;
            tarjeta2.innerHTML=`<img src="./favorito.png"alt"">`;
            tarjeta1.disabled=false;
            tarjeta2.disabled=false;
            tarjetasDestapadas=0;
            movimientos--;
            mostrarMovimientos.innerHTML=`Tienes ${movimientos} intentos`;
        },1000);
        
    }
}
}