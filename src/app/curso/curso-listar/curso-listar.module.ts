import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoListarRoutingModule } from './curso-listar-routing.module';
import { CursoListarComponent } from './curso-listar/curso-listar.component';

import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    CursoListarComponent
  ],
  imports: [
    CommonModule,
    CursoListarRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class CursoListarModule { }
