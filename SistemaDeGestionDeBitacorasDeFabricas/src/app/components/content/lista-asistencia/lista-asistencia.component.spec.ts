import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaComponent } from './lista-asistencia.component';

describe('AsistenciaComponent', () => {
  let component: AsistenciaComponent;
  let fixture: ComponentFixture<AsistenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsistenciaComponent]
    });
    fixture = TestBed.createComponent(AsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
