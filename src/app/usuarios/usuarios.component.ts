import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  names: String[];
  constructor() {
    this.names = ['Airton boquinha', 'Felipe cuscuz', 'Gabriel Esporte'];
  }

  ngOnInit() {
  }

}
