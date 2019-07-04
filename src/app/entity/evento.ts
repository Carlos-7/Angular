export class Evento{
    id: number;
    evento: string;
    endereco: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;

    constructor( evento?: string, endereco?: string, complemento?: string, bairro?: string,
                cidade?: string, uf?: string){
        this.evento = evento;
        this.endereco = endereco;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.uf = uf;                
    }
}