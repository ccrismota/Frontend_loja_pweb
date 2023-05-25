import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  

  constructor(private http : HttpClient) {}


  public gravar(obj : UsuarioModel) : string{    
      let mensagem  = "";
    this.http.post<String>("http://localhost:8090/api/cliente", obj).subscribe({
      next: data =>
      {
        mensagem =  "Registro salvo com sucesso !";
      },
      error: error => {
        console.log(error);
        mensagem =  "Ocorreu um erro durante a gravação!";
      }
    });    
    return mensagem;
  }

  public alterar(obj: UsuarioModel): string{
    let mensagem  = "";
    this.http.put<String>("http://localhost:8090/api/cliente", obj).subscribe({
      next: data =>
      {
        mensagem =  "Registro alterado com sucesso !";
      },
      error: error => {
        console.log(error);
        mensagem =  "Ocorreu um erro durante a gravação!";
      }
    });    
    return mensagem;
  } 

  public remover(obj: UsuarioModel) :string{    
    let mensagem  = "";
    this.http.delete<String>("http://localhost:8090/api/cliente/"+ obj.codigo).subscribe({
      next: data =>
      {
        mensagem =  "Registro removido com sucesso !";
      },
      error: error => {
        console.log(error);
        mensagem =  "Ocorreu um erro durante a gravação!";
      }
    });    
    return mensagem;   
  } 
  
  
  public carregar(codigo: number): Observable<UsuarioModel>{
    return this.http.get<UsuarioModel>("http://localhost:8090/api/cliente/"+codigo);         
  }

  public listar() :  Observable<UsuarioModel[]>{    
      return this.http.get<UsuarioModel[]>("http://localhost:8090/api/clientes");      
  }
  

}
