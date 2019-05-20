class Usuario {
    constructor(public nome: string, public telefone: number) {
    }
    getNome(){
        return this.nome;
    }
    getTelefone(){
        return this.telefone;
    }
}