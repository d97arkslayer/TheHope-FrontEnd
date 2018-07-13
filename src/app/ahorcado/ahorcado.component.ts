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

  preguntaTemporal: string;
  respuestaTemporal: string;
  intentos: number = 6;
  exitos: number = 0;
  ManejadorPreguntas: number = 0;
  banderaRespueta: number = -1;

  constructor() {
    this.llenarPreguntas();
    this.seleccionarPregunta(0);


  }

  ngOnInit() {
  }

   sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
}

  llenarPreguntas() {

    let p1: Prengunta = new Prengunta();
    let p2: Prengunta = new Prengunta();
    let p3: Prengunta = new Prengunta();
    let p4: Prengunta = new Prengunta();
    let p5: Prengunta = new Prengunta();
    let p6: Prengunta = new Prengunta();


    p1.pregunta = " Mejor equipo de futbol";
    p2.pregunta = " Mayor color de la bandera";
    p3.pregunta = " Primer dia de la semana";
    p4.pregunta = " Opuesto al blanco";
    p5.pregunta = " Colegio del proyecto";
    p6.pregunta = " Apellido de Esteban";



    p1.respuesta = "real";
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
    this.preguntaTemporal = this.preguntas[indice].pregunta;
    this.respuestaTemporal = this.preguntas[indice].respuesta;
    this.LetrasEncontradas = [];
    

    var respuesta: string[] = new Array(this.preguntas[indice].respuesta.length);
    for (var i = 0; i < this.preguntas[indice].respuesta.length; i++) {
      respuesta[i] = (this.preguntas[indice].respuesta.charAt(i));
    }

    this.respuestaActual = respuesta;
    this.intentos = 6;



    //this.verificarLetra("i",respuesta);

  }

  verificarLetra(letra: string) {
    var contador: number = 0;
    var bandera: boolean = true;

    this.respuestaActual.forEach(element => {
      contador = contador + 1;
      if (element === letra) {

        this.LetrasEncontradas.push(element);
        bandera = false;

        //(<HTMLInputElement>document.getElementById("labelResultados")).textContent=(<HTMLInputElement>document.getElementById("labelResultados")).textContent+letra;
      }


    });
    if (contador >= this.respuestaActual.length && bandera) {
      
      this.intentos = this.intentos - 1;
      if (this.intentos > 0) {
        
        this.pintarLetras();
      }
      else
        var divPerdedor = <HTMLDivElement>(document.createElement('div'));
      divPerdedor.style.width = "600px";
      divPerdedor.style.backgroundColor = "#da382a";
      divPerdedor.style.borderWidth = "50px";
      divPerdedor.style.borderRadius = "20px";
      divPerdedor.style.borderColor = "black";
      divPerdedor.style.fontFamily="Impact";
      divPerdedor.style.fontSize="50px";
      divPerdedor.style.textAlign="center";
      divPerdedor.textContent = "HAS PERDIDO, ESTUDIA Y REPITE LA PRUEBA";
      (<HTMLDivElement>document.getElementById("panelGanador").replaceChild(divPerdedor, <HTMLDivElement>document.getElementById("reemplazo")));
      (<HTMLImageElement>document.getElementById("imagenAhorcado")).src = "https://image.ibb.co/fHurro/ahorcado0.png";
    }

    this.pintarLetras();
  }


  evaluar(event, letra: string) {
    event.preventDefault();

    letra = (<HTMLInputElement>document.getElementById("letra")).value;
    this.verificarLetra(letra);


  }

  pintarLetras() {
    
    var contadorLetras = 0;
    (<HTMLLabelElement>document.getElementById("labelInicial")).hidden = false;
    (<HTMLInputElement>document.getElementById("labelResultados")).textContent = " ";

    this.respuestaActual.forEach(element => {

      if (this.LetrasEncontradas.indexOf(element) > -1) {
        (<HTMLInputElement>document.getElementById("labelResultados")
        ).textContent = (<HTMLInputElement>document.getElementById("labelResultados")).textContent + element;
        contadorLetras += 1;
      }
      else
        (<HTMLInputElement>document.getElementById("labelResultados")).textContent = (<HTMLInputElement>document.getElementById("labelResultados")).textContent + " __ ";
    });

    
    if (contadorLetras === this.respuestaActual.length) {
      this.ManejadorPreguntas += 1;
      this.exitos += 1;
      if (this.exitos === 3) {
        alert("ERES EL MEJOR EN ESTE JUEGO");

        var divGanador = <HTMLDivElement>(document.createElement('div'));
        divGanador.style.width = "600px";
        divGanador.style.backgroundColor = "#a8fceb";
        divGanador.style.textAlign="center";
        divGanador.style.borderWidth = "50px";
        divGanador.style.borderRadius = "20px";
        divGanador.style.borderColor = "black";
        divGanador.style.fontFamily="Impact";
        divGanador.style.fontSize="50px";
        divGanador.textContent = "GANASTE LOS TRES RETOS, GRACIAS POR PARTICIPAR";
        (<HTMLDivElement>document.getElementById("panelGanador").replaceChild(divGanador, <HTMLDivElement>document.getElementById("reemplazo")));

      } 
      this.seleccionarPregunta(this.ManejadorPreguntas);
    }
    if (this.intentos === 6) {

      (<HTMLImageElement>document.getElementById("imagenAhorcado")).src = "https://image.ibb.co/m9kxWo/ahorcado6.png";
    }
    if (this.intentos === 5) {
      (<HTMLImageElement>document.getElementById("imagenAhorcado")).src = "https://image.ibb.co/nPN0j8/ahorcado5.png";
    }
    if (this.intentos === 4) {
      (<HTMLImageElement>document.getElementById("imagenAhorcado")).src = "https://image.ibb.co/kgYUcT/ahorcado4.png";
    }
    if (this.intentos === 3) {
      (<HTMLImageElement>document.getElementById("imagenAhorcado")).src = "https://image.ibb.co/juUPBo/ahorcado3.png";
    }
    if (this.intentos === 2) {
      (<HTMLImageElement>document.getElementById("imagenAhorcado")).src = "https://image.ibb.co/goX0j8/ahorcado2.png";
    }
    if (this.intentos === 1) {
      (<HTMLImageElement>document.getElementById("imagenAhorcado")).src = "https://image.ibb.co/jWkLj8/ahorcado1.png";
    }
    if (this.intentos === 0) {
      (<HTMLImageElement>document.getElementById("imagenAhorcado")).src = "https://image.ibb.co/fHurro/ahorcado0.png";
      
    }

  }


}
