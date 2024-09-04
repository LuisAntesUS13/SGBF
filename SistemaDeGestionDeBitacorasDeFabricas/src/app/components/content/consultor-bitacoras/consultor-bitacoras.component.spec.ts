import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorBitacorasComponent } from './consultor-bitacoras.component';

describe('ConsultorBitacorasComponent', () => {
  let component: ConsultorBitacorasComponent;
  let fixture: ComponentFixture<ConsultorBitacorasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultorBitacorasComponent]
    });
    fixture = TestBed.createComponent(ConsultorBitacorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
