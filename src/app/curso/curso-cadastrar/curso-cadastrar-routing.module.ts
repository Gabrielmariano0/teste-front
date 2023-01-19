import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoCadastrarComponent } from './curso-cadastrar/curso-cadastrar.component';

const routes: Routes = [
  {path: "", component: CursoCadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoCadastrarRoutingModule { }
