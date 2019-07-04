import { EventoService } from "./../service/evento.service";
import { Usuario } from "./../entity/usuario";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario;

  constructor(private router: Router, private eventoService: EventoService) {
    this.usuario = new Usuario();
  }

  public logar(){
    return this.eventoService.getUsuario(this.usuario).subscribe(res=>{
      this.usuario = res;
      
      if (this.usuario) {
        this.eventoService.isLogado = true;
        this.router.navigate(['evento']);
        
        console.log("Usuário logado.");
      }
      else{
        console.log("acesso negado.");
      }
    });
  }

  ngOnInit() {
  }

}
