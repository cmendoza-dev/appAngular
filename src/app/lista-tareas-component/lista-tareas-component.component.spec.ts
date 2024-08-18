import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTareasComponentComponent } from './lista-tareas-component.component';

describe('ListaTareasComponentComponent', () => {
  let component: ListaTareasComponentComponent;
  let fixture: ComponentFixture<ListaTareasComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaTareasComponentComponent]
    });
    fixture = TestBed.createComponent(ListaTareasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
