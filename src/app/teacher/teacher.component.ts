import { Component, OnInit } from '@angular/core';

import {TeacherService} from '../Services/teacher.service';
import { Teacher } from '../Models/teacher.model';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  providers: [TeacherService]
})
export class TeacherComponent implements OnInit {
teachers: Teacher[];
name: string;
lastName: string;


  constructor(private teacherService: TeacherService) {
    this.teacherService.getTeachers()
    .subscribe(teachers => {
      console.log(teachers);
       this.teachers = teachers;
    });

  }

  ngOnInit() {
  }

  addTeacher(event) {
    event.preventDefault();  // Evita que se refresque la pagina
    const newTeacher: Teacher = {
      name: this.name,
      lastName: this.lastName
    };
    this.teacherService.addTeacher(newTeacher)
    .subscribe(teacher => {
      this.teachers.push(teacher);
      this.name = '';
      this.lastName = '';
    });
  }

  deleteTeacher(id) {
   const response = confirm('¿Estas seguro de eliminar?');
 if (response) {
   const teachers = this.teachers;
    this.teacherService.deleteTeacher(id)
    .subscribe(data => {
    });
   for (let i = 0; i < teachers.length; i++) {
    if (teachers[i].id === id) {
       this.teachers.splice(i, 1);
       break;
    }
  }
  }
  return;
  }

}
