import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-separador-texto',
  templateUrl: './separador-con-texto.component.html',
  styleUrls: ['./separador-con-texto.component.css']
})
export class SeparadorConTextoComponent {
  @Input() texto: string =""; 
  @Input() colorTexto: string = '#0e159d'; 
  @Input() colorLinea: string = '#000000'; 

  constructor(){
    
  }
}
