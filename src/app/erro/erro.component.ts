import { Component, OnInit } from '@angular/core';
import { EventoService } from '../service/evento.service';

@Component({
  selector: 'app-erro',
  templateUrl: './erro.component.html',
  styleUrls: ['./erro.component.css']
})
export class ErroComponent implements OnInit {

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
  }

}
