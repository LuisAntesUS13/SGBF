import { Component, Injectable } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  public isLoading: boolean = false;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.spinnerState$.subscribe(
      (state) => this.isLoading = state
    );
  }
}
