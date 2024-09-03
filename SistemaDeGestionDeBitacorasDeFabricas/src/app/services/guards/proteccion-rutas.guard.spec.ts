import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { proteccionRutasGuard } from './proteccion-rutas.guard';

describe('proteccionRutasGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => proteccionRutasGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
