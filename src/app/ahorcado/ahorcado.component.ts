import { Component, OnInit } from '@angular/core';
import {Prengunta} from '../Models/prengunta'
import { debug } from 'util';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

    preguntas: Prengunta [] = new Array();
    respuestaActual: string [] = new Array();
    LetrasEncontradas:String[]= new Array();

   preguntaTemporal: string;
   respuestaTemporal: string;
   intentos:number=6;

  constructor() { 
  this.llenarPreguntas();
  this.seleccionarPregunta(0);

  
  }

  ngOnInit() {
  }

 llenarPreguntas(){

    let p1 : Prengunta= new Prengunta();
    let p2 : Prengunta= new Prengunta();
    let p3 : Prengunta= new Prengunta();
    let p4 : Prengunta= new Prengunta();
    let p5 : Prengunta= new Prengunta();
    let p6 : Prengunta= new Prengunta();

    p1.pregunta = " Mayor color de la bandera";
    p2.pregunta = " Mejor equipo de futbol";
    p3.pregunta = " Primer dia de la semana";
    p4.pregunta = " Opuesto al blanco";
    p5.pregunta = " Colegio del proyecto";
    p6.pregunta = " Apellido de Esteban";


    p1.respuesta = "amarillo";
    p2.respuesta = "Real";
    p3.respuesta = "lunes";
    p4.respuesta = "negro";
    p5.respuesta = "esperanza";
    p6.respuesta = "herrera";  
    
    
    this.preguntas.push(p1);
    this.preguntas.push(p2);
    this.preguntas.push(p3);
    this.preguntas.push(p4);
    this.preguntas.push(p5);
    this.preguntas.push(p6);
 }


 seleccionarPregunta(indice : number){
  this.preguntaTemporal=this.preguntas[indice].pregunta;
  this.respuestaTemporal=this.preguntas[indice].respuesta;
  console.log(this.preguntas[indice].respuesta.length);
 
 
  var respuesta:string[]= new Array(this.preguntas[indice].respuesta.length);
  for (var i=0;i<this.preguntas[indice].respuesta.length;i++){
    respuesta[i]=(this.preguntas[indice].respuesta.charAt(i));
  }

  this.respuestaActual= respuesta;
  
 //this.verificarLetra("i",respuesta);

 }

 verificarLetra(letra : string)
 {
   var contador:number=0;
   var bandera:boolean=true;

    this.respuestaActual.forEach(element => {
      contador=contador+1;
      if (element===letra) {
        alert("Letra correcta"+ contador);   
        this.LetrasEncontradas.push(element);     
        bandera=false;
        
        //(<HTMLInputElement>document.getElementById("labelResultados")).textContent=(<HTMLInputElement>document.getElementById("labelResultados")).textContent+letra;
      } 
     
      
    });
    if (contador>=this.respuestaActual.length && bandera) {
      alert("Has ingresado una letra incorrecta lo sentimos"); 
  this.intentos= this.intentos-1;
  if (this.intentos>0) {
    alert("Intentalo otra vez, tienes "+ this.intentos)
  }
    }
    
    this.pintarLetras();
 }


 evaluar(event, letra:string)
 {
    event.preventDefault();
   
   letra=(<HTMLInputElement>document.getElementById("letra")).value;
   console.log("letra buscada: "+ letra);
   this.verificarLetra(letra);
  

 } 

 pintarLetras()
 {
   var contadorLetras=0;
  (<HTMLInputElement>document.getElementById("labelResultados")
).textContent=" ";
  this.respuestaActual.forEach(element => {
    if (this.LetrasEncontradas.indexOf(element)>-1) {
      (<HTMLInputElement>document.getElementById("labelResultados")
    ).textContent=(<HTMLInputElement>document.getElementById("labelResultados")).textContent+element;
    contadorLetras+=1;
    }
    else
    (<HTMLInputElement>document.getElementById("labelResultados")).textContent=(<HTMLInputElement>document.getElementById("labelResultados")).textContent+" __ "; 
  });
  if(contadorLetras===this.respuestaActual.length)
  {
      alert("!!! COMPLETASTE LA PALABRA MUY BIEN :D");
  }
 }


}
