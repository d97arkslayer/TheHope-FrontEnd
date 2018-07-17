import { Component, OnInit } from '@angular/core';
import { Prengunta } from '../Models/prengunta'
import { debug } from 'util';


@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  preguntas: Prengunta[] = new Array();
  respuestaActual: string[] = new Array();
  LetrasEncontradas: String[] = new Array();
  imagenes=[
    "../../assets/ahorcado0.png",
    "../../assets/ahorcado1.png",
    "../../assets/ahorcado2.png",
    "../../assets/ahorcado3.png",
    "../../assets/ahorcado4.png",
    "../../assets/ahorcado5.png",
    "../../assets/ahorcado6.png"
  ]

  preguntaActual=0;
  preguntaTemporal: string;
  respuestaTemporal: string;
  intentos;
  letra:string;
  labelResultados="";
  perdio=true;
  gano=false;
  cerrar=true;

  victorias:number=0;
  
  constructor() {
    this.llenarPreguntas();
    this.seleccionarPregunta(0);


  }

  ngOnInit() {
  }

  reintentar(){
    this.victorias=0;
    this.seleccionarPregunta(this.preguntaActual);
  }
  siguientePregunta(){
   
    this.preguntaActual++;
    this.seleccionarPregunta(this.preguntaActual);
    
  }
  finalizarJuego(){
   
    this.victorias=0;
    
    ///hacer mas cosas
    this.cerrar=false;
    
  }
  



  llenarPreguntas() {

    let p1: Prengunta = new Prengunta();
    let p2: Prengunta = new Prengunta();
    let p3: Prengunta = new Prengunta();
    let p4: Prengunta = new Prengunta();
    let p5: Prengunta = new Prengunta();
    let p6: Prengunta = new Prengunta();


    p1.pregunta = " Estado de agregación de la materia compuesto principalmente por moléculas no unidas, expandidas y con poca fuerza de atracción";
    p2.pregunta = " Mayor color de la bandera";
    p3.pregunta = " Primer dia de la semana";
    p4.pregunta = " Opuesto al blanco";
    p5.pregunta = " Colegio del proyecto";
    p6.pregunta = " Apellido de Esteban";



    p1.respuesta = "gaseoso";
    p2.respuesta = "amarillo";
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



  seleccionarPregunta(indice: number) {
    this.perdio=false;
    this.cerrar=false;
    this.gano=false;
    
    this.intentos=6;
    this.preguntaTemporal = this.preguntas[indice].pregunta;
    this.respuestaTemporal = this.preguntas[indice].respuesta;
    this.LetrasEncontradas = [];
    
    this.labelResultados="";
    var respuesta: string[] = new Array(this.preguntas[indice].respuesta.length);
    for (var i = 0; i < this.preguntas[indice].respuesta.length; i++) {
      respuesta[i] = (this.preguntas[indice].respuesta.charAt(i));
      this.labelResultados+="_ "
    }

    this.respuestaActual = respuesta;
   
  }
  evaluar() {


   let aux="";
for(var j=0;j<this.labelResultados.length;j++){
  if(this.labelResultados.charAt(j)!= ' '){
    aux+=this.labelResultados.charAt(j);
  }
}


this.labelResultados="";
let contadorExito=0;
let respuestaMala=true;
 for(var i=0;i<this.respuestaTemporal.length;i++)
{
  if(this.letra==this.respuestaTemporal.charAt(i)){
    this.labelResultados+=this.letra;
    respuestaMala=false;
    contadorExito++;
  }else{
    
    if(aux.charAt(i)=='_'){
      this.labelResultados+="_ ";
     
    }else{
      this.labelResultados+=aux.charAt(i);
          contadorExito++;
    }
  }

}

if(respuestaMala){
  this.intentos--;
}
if(this.intentos==0){
  this.perdio=true;
  this.cerrar=true;

}
if(aux.length==contadorExito){
  this.gano=true;
  this.cerrar=true;
  this.victorias++;
  
}
 this.letra='';

 
 console.log(this.victorias);
 if(this.victorias==3){
   this.cerrar=true
   this.gano=false;
 }
  }



}
