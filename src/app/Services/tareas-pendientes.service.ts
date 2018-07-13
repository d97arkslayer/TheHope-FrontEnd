import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';
import {Tareas} from '../Models/tareas.model';

@Injectable()
export class TareasPendientesService {

  constructor(private httpClient: HttpClient) { }
  getTareas() {
    return this.httpClient.get<Tareas[]>(`${environment.api}/tasks`)
    .map(res => res);
  }
}
