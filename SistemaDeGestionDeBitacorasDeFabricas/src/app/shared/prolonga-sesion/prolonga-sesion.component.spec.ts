import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProlongaSesionComponent } from './prolonga-sesion.component';

describe('ProlongaSesionComponent', () => {
  let component: ProlongaSesionComponent;
  let fixture: ComponentFixture<ProlongaSesionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProlongaSesionComponent],
    });
    fixture = TestBed.createComponent(ProlongaSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
