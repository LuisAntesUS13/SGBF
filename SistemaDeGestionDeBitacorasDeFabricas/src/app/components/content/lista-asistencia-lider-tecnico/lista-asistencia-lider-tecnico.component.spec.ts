import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAsistenciaLiderTecnicoComponent } from './lista-asistencia-lider-tecnico.component';

describe('ListaAsistenciaLiderTecnicoComponent', () => {
  let component: ListaAsistenciaLiderTecnicoComponent;
  let fixture: ComponentFixture<ListaAsistenciaLiderTecnicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAsistenciaLiderTecnicoComponent]
    });
    fixture = TestBed.createComponent(ListaAsistenciaLiderTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
