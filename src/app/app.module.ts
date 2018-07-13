import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CourseComponent } from './course/course.component';
import { TaskComponent } from './task/task.component';
import { GradesComponent } from './grades/grades.component';
import { TaresPendientesComponent } from './tares-pendientes/tares-pendientes.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    NavBarComponent,
    CourseComponent,
    TaskComponent,
    GradesComponent,
    TaresPendientesComponent,
    AhorcadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
