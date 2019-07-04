import { Evento } from "./evento";

export class Usuario{
    id: number;
    nome: string;
    email: string;
    senha: string;
    evento: Evento[] = [];

    constructor(nome?: string, email?: string, senha?: string){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}
