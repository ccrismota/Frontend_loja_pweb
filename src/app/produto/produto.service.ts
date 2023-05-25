import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoModel } from './produto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http : HttpClient) {}


  public gravar(obj : ProdutoModel) : string{
      let mensagem  = "";
    this.http.post<String>("http://localhost:8090/api/produto", obj).subscribe({
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

  public alterar(obj: ProdutoModel): string{
    let mensagem  = "";
    this.http.put<String>("http://localhost:8090/api/produto", obj).subscribe({
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

  public remover(obj: ProdutoModel) :string{
    let mensagem  = "";
    this.http.delete<String>("http://localhost:8090/api/produto/"+ obj.codigo).subscribe({
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


  public carregar(codigo: number): Observable<ProdutoModel>{
    return this.http.get<ProdutoModel>("http://localhost:8090/api/produto/"+codigo);
  }


  public listar() :  Observable<ProdutoModel[]>{
      return this.http.get<ProdutoModel[]>("http://localhost:8090/api/produtos");
  }

}
