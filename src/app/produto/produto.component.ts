import { Component } from '@angular/core';
import { ProdutoModel } from './produto.model';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  public mensagem: string = "";
  public mostrarDetalhe: boolean = false;
  public cursos = ['java', 'html5', 'js', 'ts'];
  public selection = 'java';
  public produto : ProdutoModel = new ProdutoModel();
  public listaProduto : ProdutoModel[] = [];

  constructor(private produtoService: ProdutoService) {
    this.listar();
  }


  public mostrar(){
    this.mostrarDetalhe = !this.mostrarDetalhe;
  }

  public gravar(){
    try{
      this.mensagem = "Regristro gravado com sucesso!";
      this.produtoService.gravar(this.produto);
    }catch(erro){
      this.mensagem = "Ocorreu um erro durante a gravação!";
    }
  }

  public alterar(){
    try{
      this.mensagem = "Regristro alterado com sucesso!";
      this.produtoService.alterar(this.produto);
    }catch(erro){
      this.mensagem = "Ocorreu um erro durante a gravação!";
    }
 }

 public remover(){
  try{
    this.mensagem = "Regristro removido com sucesso!";
    this.produtoService.remover(this.produto);
  }catch(erro){
    this.mensagem = "Ocorreu um erro durante a exclusão";
  }
}

public listar(){
this.produtoService.listar().subscribe(
  (data: ProdutoModel[]) => {
    this.listaProduto = data;
  } ,
  (error) => {
    this.mensagem = "ocorreu um erro no carregamento da listagem !"+ error;
  }
)
}


  public carregar(){
    this.mensagem = "";
      this.produtoService.carregar(this.produto.codigo).subscribe(
        (data: ProdutoModel) => {
          this.produto.nome = data.nome;
          this.produto.descricao = data.descricao;
          this.produto.quantidade = data.quantidade;
          if(this.produto.nome==null){
            this.mensagem = "Registro não encontrado!";
          }
        } ,
        (error) => {
          this.mensagem = "ocorreu um erro no carregamento do produto !"+ error;
        }
      )
  }

}
