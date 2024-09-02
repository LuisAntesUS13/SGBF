import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './components/content/header/header.component';
import { ConsultorBitacoraComponent } from './components/pages/consultor-bitacora/consultor-bitacora.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    ButtonComponent,
    HeaderComponent,
    ConsultorBitacoraComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SistemaDeGestionDeBitacorasDeFabricas';
}
