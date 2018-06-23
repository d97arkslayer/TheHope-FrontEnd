import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';
import {Tareas} from '../Models/tareas.model';

@Injectable()
export class TareasService {

  constructor(private httpClient: HttpClient) { }

  getTareas() {
    return this.httpClient.get<Tareas[]>(`${environment.api}/tasks`)
    .map(res => res);
  }
  addTarea(newTarea: Tareas) {
    return this.httpClient.post<Tareas>(`${environment.api}/tasks`, newTarea)
      .map(res => res);
  }
  updateTarea(newTarea: Tareas) {
    return this.httpClient.put(`${environment.api}/tasks/${newTarea.id}`, newTarea)
      .map(res => res);
  }
  deleteGrade(id) {
    return this.httpClient.delete(`${environment.api}/tasks/${id}`)
      .map(res => res);
  }
}
