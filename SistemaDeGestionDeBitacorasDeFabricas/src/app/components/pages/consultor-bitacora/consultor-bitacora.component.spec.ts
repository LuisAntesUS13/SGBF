import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorBitacoraComponent } from './consultor-bitacora.component';

describe('ConsultorBitacoraComponent', () => {
  let component: ConsultorBitacoraComponent;
  let fixture: ComponentFixture<ConsultorBitacoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultorBitacoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultorBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
