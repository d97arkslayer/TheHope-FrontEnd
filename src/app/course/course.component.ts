import { Component, OnInit } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Course } from '../Models/course.model';
import { Grade } from '../Models/grade.model';
import { GradeService } from '../Services/grade.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [CourseService, GradeService]
})
export class CourseComponent implements OnInit {

  courses: Course[];
  grades: Grade[];
  name: string;
  grade_id: number;

  constructor(private courseService: CourseService, private gradeService: GradeService ) {
    this.courseService.getCourses()
    .subscribe(course => {
      this.courses = course;
    });

    this.gradeService.getGrades()
    .subscribe(grade => {
      this.grades = grade;
    });
   }

  ngOnInit() {
  }

  addCourse(event) {
    event.preventDefault();  // Evita que se refresque la pagina
    const newCourse: Course = {
      name: this.name,
      grade_id: this.grade_id
    };
    this.courseService.addCourse(newCourse)
    .subscribe(course => {
      this.courses.push(course);
      this.name = '';
    });
  }

}
