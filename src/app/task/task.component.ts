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

  title: string;
  description: string;
  limitDate: string;

  constructor() { }

  ngOnInit() {
  }

}
