import { Component, OnInit } from '@angular/core';
import {GradeService} from '../Services/grade.service';
import { Grade } from '../Models/grade.model';



@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css'],
  providers: [GradeService]
})
export class GradesComponent implements OnInit {

  grades: Grade[];
  name: string;
  constructor(private gradeService: GradeService) {
    this.gradeService.getGrades()
    .subscribe(grades => {
      console.log(grades);
       this.grades = grades;
    });
   }

  ngOnInit() {
  }

  addGrade(event) {
    event.preventDefault();  // Evita que se refresque la pagina
    const newGrade: Grade = {
      name: this.name
    };
    this.gradeService.addGrade(newGrade)
    .subscribe(teacher => {
      this.grades.push(teacher);
      this.name = '';
    });
  }

  deleteTeacher(id) {
   const response = confirm('¿Estas seguro de eliminar?');
 if (response) {
   const grades = this.grades;
    this.gradeService.deleteGrade(id)
    .subscribe(data => {
    });
   for (let i = 0; i < grades.length; i++) {
    if (grades[i].id === id) {
       this.grades.splice(i, 1);
       break;
    }
  }
  }
  return;
  }

}
