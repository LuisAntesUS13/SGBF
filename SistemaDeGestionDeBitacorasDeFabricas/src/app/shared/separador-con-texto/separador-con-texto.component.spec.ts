import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparadorConTextoComponent } from './separador-con-texto.component';

describe('SeparadorConTextoComponent', () => {
  let component: SeparadorConTextoComponent;
  let fixture: ComponentFixture<SeparadorConTextoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeparadorConTextoComponent]
    });
    fixture = TestBed.createComponent(SeparadorConTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
