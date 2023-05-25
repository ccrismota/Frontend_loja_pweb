export class ProdutoModel {
  public codigo: number;
  public nome: string;
  public descricao: string;
  public preco: number;
  public quantidade: number;


  constructor(){
      this.codigo = 0;
      this.nome = "";
      this.descricao = "";
      this.preco = 0.0;
      this.quantidade = 0;
  }
}
