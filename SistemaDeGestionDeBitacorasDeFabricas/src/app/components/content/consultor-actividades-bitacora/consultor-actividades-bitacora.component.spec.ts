import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorActividadesBitacoraComponent } from './consultor-actividades-bitacora.component';

describe('ConsultorActividadesBitacoraComponent', () => {
  let component: ConsultorActividadesBitacoraComponent;
  let fixture: ComponentFixture<ConsultorActividadesBitacoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultorActividadesBitacoraComponent]
    });
    fixture = TestBed.createComponent(ConsultorActividadesBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
