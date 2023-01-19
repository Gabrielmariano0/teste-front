import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-curso-cadastrar',
  templateUrl: './curso-cadastrar.component.html',
  styleUrls: ['./curso-cadastrar.component.scss']
})
export class CursoCadastrarComponent implements OnInit{

  formGroup: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder) {}


  ngOnInit(): void {
      this.formGroup = this.formBuilder.group({
        nome: ["", Validators.required]
      })
  }

}
