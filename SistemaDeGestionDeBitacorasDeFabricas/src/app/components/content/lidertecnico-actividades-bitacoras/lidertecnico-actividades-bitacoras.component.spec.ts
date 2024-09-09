import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LidertecnicoActividadesBitacorasComponent } from './lidertecnico-actividades-bitacoras.component';

describe('LidertecnicoActividadesBitacorasComponent', () => {
  let component: LidertecnicoActividadesBitacorasComponent;
  let fixture: ComponentFixture<LidertecnicoActividadesBitacorasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LidertecnicoActividadesBitacorasComponent]
    });
    fixture = TestBed.createComponent(LidertecnicoActividadesBitacorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
