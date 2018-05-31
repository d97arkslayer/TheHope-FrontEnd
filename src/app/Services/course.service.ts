import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';
import {Course} from '../Models/course.model';

@Injectable()
export class CourseService {

  constructor(private httpClient: HttpClient) { }

  getCourses() {
    return this.httpClient.get<Course[]>(`${environment.api}/courses`)
    .map(res => res);
  }
  addCourse(newCourse: Course) {
    return this.httpClient.post<Course>(`${environment.api}/courses`, newCourse)
      .map(res => res);
  }
  updateCourse(newCourse: Course) {
    return this.httpClient.put(`${environment.api}/courses/${newCourse.id}`, newCourse)
      .map(res => res);
  }
  deleteCourse(id) {
    return this.httpClient.delete(`${environment.api}/courses/${id}`)
      .map(res => res);
  }

}
