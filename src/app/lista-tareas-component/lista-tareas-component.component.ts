import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  template: `
    <h2>Lista de Tareas</h2>
    
    <div *ngIf="tareas.length === 0">
      <p>No hay tareas pendientes.</p>
    </div>

    <ul *ngIf="tareas.length > 0">
      <li *ngFor="let tarea of tareas">{{ tarea }}</li>
    </ul>
  `
})
export class ListaTareasComponent {
  tareas: string[] = ['Hacer la compra', 'Limpiar la casa', 'Preparar la cena'];
}
