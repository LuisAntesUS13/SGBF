import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasignarLiderEquipoComponent } from './reasignar-lider-equipo.component';

describe('ReasignarLiderEquipoComponent', () => {
  let component: ReasignarLiderEquipoComponent;
  let fixture: ComponentFixture<ReasignarLiderEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReasignarLiderEquipoComponent]
    });
    fixture = TestBed.createComponent(ReasignarLiderEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
