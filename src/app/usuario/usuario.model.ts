export class UsuarioModel {
    public codigo: number;
    public nome: string;
    public email: string;
    public senha: string;

    constructor(){
        this.codigo=0;
        this.nome = "";
        this.email = "";
        this.senha = "";
    }
}
