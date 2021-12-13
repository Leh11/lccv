import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Funcionario } from './Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private readonly API = `${environment.API}Fornecidores`

  constructor(private Http: HttpClient) { }

  list() {
    return this.Http.get<Funcionario[]>(this.API);
  }
}

