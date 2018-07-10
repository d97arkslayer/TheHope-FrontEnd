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

   preguntaTemporal: string;
   respuestaTemporal: string;
   

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
 
    let respuesta : any[];
  for (var i=0;i<this.preguntas[indice].respuesta.length;i++){
    respuesta.push(this.preguntas[indice].respuesta.charAt(i));
  }

 }


}
