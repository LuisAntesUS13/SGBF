import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinnerSubject = new BehaviorSubject<boolean>(false);
  public spinnerState$ = this.spinnerSubject.asObservable();

  constructor() { }

  mostrarSpinner() {
    this.spinnerSubject.next(true);
  }

  ocultarSpinner() {
    this.spinnerSubject.next(false);
  }
}
