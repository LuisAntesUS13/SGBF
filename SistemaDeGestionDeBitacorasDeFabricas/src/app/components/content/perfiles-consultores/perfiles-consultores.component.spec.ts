import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilesConsultoresComponent } from './perfiles-consultores.component';

describe('PerfilesConsultoresComponent', () => {
  let component: PerfilesConsultoresComponent;
  let fixture: ComponentFixture<PerfilesConsultoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilesConsultoresComponent]
    });
    fixture = TestBed.createComponent(PerfilesConsultoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
