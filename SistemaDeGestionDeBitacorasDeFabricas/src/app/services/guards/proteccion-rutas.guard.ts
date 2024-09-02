import { CanActivateFn } from '@angular/router';

export const proteccionRutasGuard: CanActivateFn = (route, state) => {
  return true;
};
