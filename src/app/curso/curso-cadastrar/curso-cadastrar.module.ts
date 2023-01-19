import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoCadastrarRoutingModule } from './curso-cadastrar-routing.module';
import { CursoCadastrarComponent } from './curso-cadastrar/curso-cadastrar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    CursoCadastrarComponent
  ],
  imports: [
    CommonModule,
    CursoCadastrarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule

  ]
})
export class CursoCadastrarModule { }
