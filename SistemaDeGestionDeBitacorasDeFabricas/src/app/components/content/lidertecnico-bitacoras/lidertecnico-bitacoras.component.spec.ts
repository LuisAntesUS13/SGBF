import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LidertecnicoBitacorasComponent } from './lidertecnico-bitacoras.component';

describe('LidertecnicoBitacorasComponent', () => {
  let component: LidertecnicoBitacorasComponent;
  let fixture: ComponentFixture<LidertecnicoBitacorasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LidertecnicoBitacorasComponent]
    });
    fixture = TestBed.createComponent(LidertecnicoBitacorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
