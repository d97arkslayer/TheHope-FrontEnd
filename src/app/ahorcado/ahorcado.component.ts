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
    p1.pregunta = " Análisis";
    p1.respuesta = "suicidio";   
    this.preguntas.push(p1);
 }


 seleccionarPregunta(indice : number){
  this.preguntaTemporal=this.preguntas[indice].pregunta;
  this.respuestaTemporal=this.preguntas[indice].respuesta;
  console.log(this.preguntas[indice].respuesta.length);
 
   // let respuesta : any[];
 // for (var i=0;i<this.preguntas[indice].respuesta.length;i++){
  //  respuesta.push(this.preguntas[indice].respuesta.charAt(i));
  var respuesta:string[]= new Array(this.preguntas[indice].respuesta.length);
  for (var i=0;i<this.preguntas[indice].respuesta.length;i++){
    respuesta[i]=(this.preguntas[indice].respuesta.charAt(i));
  }
 // }
  this.respuestaActual= respuesta;
 //this.verificarLetra("i",respuesta);

 }

 verificarLetra(letra : string)
 {
    this.respuestaActual.forEach(element => {
      if (element===letra) {
        console.log("Correcto "+ element);
      }
      
    },
    alert("Has ingresado una letra incorrecta lo sentimos") );
    this.intentos= this.intentos-1;
    if (this.intentos>0) {
      alert("Intentalo otra vez, tienes "+ this.intentos)
    }
 
 }


 evaluar(event, letra:string)
 {
    event.preventDefault();
   
   letra=(<HTMLInputElement>document.getElementById("letra")).value;
   console.log("letra buscada: "+ letra);
   this.verificarLetra(letra);
  

 } 


}
