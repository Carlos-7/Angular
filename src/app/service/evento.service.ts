import { Usuario } from "./../entity/usuario";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const url = "http://localhost:3357/";

 
@Injectable()
export class EventoService{
    isLogado: boolean = false;

    constructor(private http: HttpClient){

    }

    public create( usuario: Usuario ){
        return this.http.post<Usuario>(`${url + "usuario"}`, usuario);
    } 

    public findAll(){
        return this.http.get<Usuario[]>(`${url + "usuario"}`);
    }

    public getUsuario( usuario: Usuario){   
        return this.http.post<Usuario>(`${url + "logar"}`, usuario);
    }

    public usuarioLogado(): boolean{
        return this.isLogado;
    }

    
}