let bt1Enviar = <HTMLButtonElement>document.getElementById("bt1Enviar");
let bt2Enviar = <HTMLButtonElement>document.getElementById("bt2Enviar");
let bt3Enviar = <HTMLButtonElement>document.getElementById("bt3Enviar");

let numero_1 = <HTMLInputElement>document.getElementById("numero_1");
let numero_2 = <HTMLInputElement>document.getElementById("numero_2");
let numero_3 = <HTMLInputElement>document.getElementById("numero_3");

let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let rotulo2 = <HTMLParagraphElement>document.getElementById("rotulo2");
let rotulo3 = <HTMLParagraphElement>document.getElementById("rotulo3");

let respuestaNota1 = <HTMLParagraphElement>document.getElementById("respuestaNota1");
let respuestaNota2 = <HTMLParagraphElement>document.getElementById("respuestaNota2");
let respuestaNota3 = <HTMLParagraphElement>document.getElementById("respuestaNota3");

let primerNumero: number;
let segundoNumero: number;
let tercerNumero: number;

function calificarNota (nota:number): string {
  let respuesta : string;

  if (nota < 0) {
    respuesta = `La nota debe ser mayor a cero`; 
  } else {if (nota < 5) {
            respuesta = `Desaprobado`; 
          }else{if (nota > 8){
                  respuesta = `Excelente`; 
                 } else {
                   respuesta = `Aprobado`; 
                       }
               }
           }
    return (respuesta);
  };          

 bt1Enviar.addEventListener("click", () => {
   rotulo1.innerHTML = "Ingrese la primera nota";
   primerNumero = Number(numero_1.value);
   respuestaNota1.innerHTML = calificarNota (primerNumero);
   console.log(respuestaNota1.innerHTML);
  };
 
 bt2Enviar.addEventListener("click", () => {
   rotulo2.innerHTML = "Ingrese la segunda nota";
   segundoNumero = Number(numero_2.value); 
   respuestaNota2.innerHTML = calificarNota (segundoNumero);
   console.log(respuestaNota2.innerHTML);
  };

bt3Enviar.addEventListener("click", () => {
  rotulo3.innerHTML = "Ingrese la tercera nota";
  tercerNumero = Number(numero_3.value); 
  respuestaNota3.innerHTML = calificarNota (tercerNumero);
  console.log(respuestaNota3.innerHTML);
};

