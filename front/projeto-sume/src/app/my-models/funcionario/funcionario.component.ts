import { Component, OnInit } from '@angular/core';
import { Funcionario } from './Funcionario';
import { FuncionarioService } from './funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  constructor(private service: FuncionarioService) { }
  funcionarios: Funcionario[] = [];

  ngOnInit(): void {
    this.service.list()
      .subscribe(
        data => this.funcionarios = data
      );
  }
}
