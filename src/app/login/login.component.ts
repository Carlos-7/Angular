import { HttpClient } from "@angular/common/http";
import { EventoService } from "./../service/evento.service";
import { Usuario } from "./../entity/usuario";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario;

  formulario: FormGroup;

  ngOnInit() {
    this.formulario = this.formBuider.group({
      senha: [null, Validators.required, Validators.minLength(3) ],
      email: [null, Validators.required, Validators.email]  
    });
  }

  constructor(private formBuider: FormBuilder, 
              private router: Router, 
              private eventoService: EventoService,
              private http: HttpClient ) {
    this.usuario = new Usuario();
  }

  onSubmit(){
    //this.http.post("https://httpbin.org.post", JSON.stringify(this.formulario.value)).subscribe(dados=>console.log(dados));
    console.log(this.formulario);
    // this.resetar(form);
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

  verificaValidTouched(campo){
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched; 
  }

  aplicaCssError(campo){
    return {
      "has-error": this.verificaValidTouched(campo),
      "has-feedback": this.verificaValidTouched(campo),
    }
  }

  // resetar(form){
  //   form.form.reset();  
  // }


}
