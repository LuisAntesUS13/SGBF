import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimientosComponent } from './requerimientos.component';

describe('RequerimientosComponent', () => {
  let component: RequerimientosComponent;
  let fixture: ComponentFixture<RequerimientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequerimientosComponent]
    });
    fixture = TestBed.createComponent(RequerimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
