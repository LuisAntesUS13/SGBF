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

    console.log("Llegamos al servicio")
    this.spinnerSubject.next(true);
  }

  ocultarSpinner() {
    this.spinnerSubject.next(false);
  }
}
