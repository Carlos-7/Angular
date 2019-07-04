import { Usuario } from "./../entity/usuario";
import { EventoService } from "./../service/evento.service";
import { Component, OnInit } from '@angular/core';
import { Evento } from '../entity/evento';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  usuario: Usuario;
  usuarios: Usuario[] = [];
  evento: Evento;
  eventos: Evento[]=[];
  
  constructor( private eventoService: EventoService ) { 
    this.usuario = new Usuario();
    this.evento = new Evento();
  }

  ngOnInit() {
    this.listar();  
  }

  public adicionarEvento(){
    this.eventoService.create( this.usuario ).subscribe(res=>{
      console.log("Dados gravados com sucesso.");
    
    });
  }

  public listar(){
    this.eventoService.findAll().subscribe(res=>{
      this.usuarios = res;
    })
  }
}