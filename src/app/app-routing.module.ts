import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {
    path: "cursos",
    loadChildren: () => import('./curso/curso-listar/curso-listar.module').then(modulo => modulo.CursoListarModule)
  },
  {
    path: "cursos/cadastrar",
    loadChildren: () => import('./curso/curso-cadastrar/curso-cadastrar.module').then(modulo => modulo.CursoCadastrarModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
