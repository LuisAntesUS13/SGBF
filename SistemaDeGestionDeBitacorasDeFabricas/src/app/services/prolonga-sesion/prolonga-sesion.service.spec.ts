import { TestBed } from '@angular/core/testing';

import { ProlongaSesionService } from './prolonga-sesion.service';

describe('ProlongaSesionService', () => {
  let service: ProlongaSesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProlongaSesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
