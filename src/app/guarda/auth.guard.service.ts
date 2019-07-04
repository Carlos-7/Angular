import { EventoService } from "./../service/evento.service";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router/";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class authGuard implements CanActivate{

  constructor(private router: Router, private eventoService: EventoService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean{
    if(this.eventoService.isLogado){
      return true;
      
    }else{
      this.router.navigate(["login"]);
      return false;
    }
    
  }
}
