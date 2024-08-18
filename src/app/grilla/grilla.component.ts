import { Component } from '@angular/core';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})

export class GrillaComponent {
  items = [
    { contenido: '', mostrarCelda: true },
    { contenido: '', mostrarCelda: true },
  ];
}
