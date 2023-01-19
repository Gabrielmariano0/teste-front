import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../../curso.model';
import { CursoService } from '../../curso.service';


@Component({
  selector: 'app-curso-listar',
  templateUrl: './curso-listar.component.html',
  styleUrls: ['./curso-listar.component.scss']
})

export class CursoListarComponent implements OnInit {

  cursos$!: Observable<Curso[]>;

  colunasTabela = ['codigo', 'nome', 'instrutor', 'local', 'carga', 'data'];
  
  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
      this.listarCursos();
  }

  listarCursos(): void{
    this.cursos$ = this.cursoService.listar();
  }

}
