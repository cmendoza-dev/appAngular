import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaTareasComponent } from './lista-tareas-component/lista-tareas-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTareasComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
