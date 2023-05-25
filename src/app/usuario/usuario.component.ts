import { Component } from '@angular/core';
import { UsuarioModel } from './usuario.model';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
    public mensagem: string = "";
    public mostrarDetalhe: boolean = false;
    public cursos = ['java', 'html5', 'js', 'ts'];
    public selection = 'java';
    public usuario : UsuarioModel = new UsuarioModel();
    public listaUsuario : UsuarioModel[] = [];
    
    constructor(private usuarioService: UsuarioService) {
      this.listar();
    }
        

    public mostrar(){
      this.mostrarDetalhe = !this.mostrarDetalhe;
    }

    public gravar(){
      try{
        this.mensagem = "Regristro gravado com sucesso!";
        this.usuarioService.gravar(this.usuario); 
      }catch(erro){
        this.mensagem = "Ocorreu um erro durante a gravação!";
      }
    }

    public alterar(){
      try{
        this.mensagem = "Regristro alterado com sucesso!";
        this.usuarioService.alterar(this.usuario); 
      }catch(erro){
        this.mensagem = "Ocorreu um erro durante a gravação!";
      }
   }

   public remover(){
    try{
      this.mensagem = "Regristro removido com sucesso!";
      this.usuarioService.remover(this.usuario); 
    }catch(erro){
      this.mensagem = "Ocorreu um erro durante a exclusão";
    }
 }

 public listar(){
  this.usuarioService.listar().subscribe(
    (data: UsuarioModel[]) => {            
      this.listaUsuario = data;      
    } , 
    (error) => {
      this.mensagem = "ocorreu um erro no carregamento da listagem !"+ error;
    }
  )        
}

    public carregar(){
      this.mensagem = "";
        this.usuarioService.carregar(this.usuario.codigo).subscribe(
          (data: UsuarioModel) => {            
            this.usuario.nome = data.nome;
            this.usuario.email = data.email;
            this.usuario.senha = data.senha;
            if(this.usuario.nome==null){
              this.mensagem = "Registro não encontrado!";
            }
          } , 
          (error) => {
            this.mensagem = "ocorreu um erro no carregamento do usuario !"+ error;
          }
        )        
    }

   
}
