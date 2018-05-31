import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';
import {Grade} from '../Models/grade.model';

@Injectable()
export class GradeService {

  constructor(private httpClient: HttpClient) { }

  getGrades() {
    return this.httpClient.get<Grade[]>(`${environment.api}/grades`)
    .map(res => res);
  }
  addGrade(newGrade: Grade) {
    return this.httpClient.post<Grade>(`${environment.api}/grades`, newGrade)
      .map(res => res);
  }
  updateGrade(newGrade: Grade) {
    return this.httpClient.put(`${environment.api}/grades/${newGrade.id}`, newGrade)
      .map(res => res);
  }
  deleteGrade(id) {
    return this.httpClient.delete(`${environment.api}/grades/${id}`)
      .map(res => res);
  }
}
