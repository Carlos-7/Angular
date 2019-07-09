import { authGuard } from "./guarda/auth.guard.service";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EventoComponent } from './evento/evento.component';
import { LoginComponent } from './login/login.component';
import { EventoService } from "./service/evento.service";
import { RouterModule, Routes } from "@angular/router";
import { ErroComponent } from './erro/erro.component';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'evento', component: EventoComponent, canActivate:[authGuard]},
  { path: 'cadatro.evento', component: CadastroEventoComponent, canActivate:[authGuard]},
  { path: 'erro', component: ErroComponent, canActivate:[authGuard]}
]
 

@NgModule({
  declarations: [ 
    AppComponent,
    EventoComponent,
    LoginComponent,
    ErroComponent,
    CadastroEventoComponent,
    ErrorMsgComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
    
  providers: [EventoService, authGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 
constructor( private eventoService: EventoService ){
  
}

}
