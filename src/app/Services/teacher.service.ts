import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';
import {Teacher} from '../Models/teacher.model';


@Injectable()
export class TeacherService {

  constructor(private httpClient: HttpClient) { }

  getTeachers() {
    return this.httpClient.get<Teacher[]>(`${environment.api}/teachers`)
    .map(res => res);
  }
  addTeacher(newTeacher: Teacher) {
    return this.httpClient.post<Teacher>(`${environment.api}/teachers`, newTeacher)
      .map(res => res);
  }
  updateTeacher(newTeacher: Teacher) {
    return this.httpClient.put(`${environment.api}/teachers/${newTeacher.id}`, newTeacher)
      .map(res => res);
  }
  deleteTeacher(id) {
    return this.httpClient.delete(`${environment.api}/teachers/${id}`)
      .map(res => res);
  }
}
