import { Component, OnInit } from '@angular/core';

import {TareasService} from '../Services/tareas.service';
import { Tareas } from '../Models/tareas.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TareasService]
})
export class TaskComponent implements OnInit {
  tareas: Tareas[];
  title: string;
  description: string;
  limitDate: string;
  class_id: number;

  constructor(private tareasService: TareasService) {
    this.tareasService.getTareas()
    .subscribe(tarea => {
      this.tareas = tarea;
    });
   }

  ngOnInit() {
  }

  addTarea(event) {
    event.preventDefault();  // Evita que se refresque la pagina
    const newTarea: Tareas = {
      title: this.title,
      description: this.description,
      limitDate: this.limitDate,
      class_id: this.class_id
    };
    this.tareasService.addTarea(newTarea)
    .subscribe(tarea => {
      this.tareas.push(tarea);
      this.title = '';
      this.description = '';
    });
  }
}
