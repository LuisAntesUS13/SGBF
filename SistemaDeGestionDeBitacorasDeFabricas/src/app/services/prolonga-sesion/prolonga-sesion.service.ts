import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProlongaSesionComponent } from 'src/app/shared/prolonga-sesion/prolonga-sesion.component';

@Injectable({
  providedIn: 'root',
})
export class ProlongaSesionService {
  private inactivityTime: number = 6000000; // 10 minutos = 6000000 => 1000 = 1 segundo  
  private timeoutId: any;
  private inactivity: boolean = false;

  constructor(
    private modal: NgbModal,
    private config: NgbModalConfig,
    private router: Router,
    // private datosSesionService: DatosSesionService,
    // private usuarioService: UsuarioService
  ) {
    this.config.backdrop = 'static';
    this.config.keyboard = false;
    this.startInactivityTimer();
    this.setupListeners();
  }

    // Función para iniciar el temporizador de inactividad
    private startInactivityTimer() {
      this.clearTimeout();
      this.timeoutId = setTimeout(() => this.onInactivity(), this.inactivityTime);
    }
  
    // Función que se ejecuta cuando el tiempo de inactividad se cumple
    private onInactivity() {
      this.inactivity = true;
      const modalref = this.modal.open(ProlongaSesionComponent);
      modalref.result.then((result) => {
        if (result === 'extender') {
          this.inactivity = false;
          this.resetTimer();
        } else {
          this.inactivity = false;
          this.router.navigate(['/content/login']);
        }
      });
    }
  
    // Configurar los listeners de eventos (clic, movimiento de ratón, teclas presionadas)
    private setupListeners() {
      window.addEventListener('mousemove', () => this.resetTimer());
      window.addEventListener('mousedown', () => this.resetTimer());
      window.addEventListener('keypress', () => this.resetTimer());
      window.addEventListener('touchstart', () => this.resetTimer());
    }
  
    // Reinicia el temporizador cuando hay actividad
    private resetTimer() {
      if(!this.inactivity){
        this.startInactivityTimer();
      }
    }
  
    // Limpia el temporizador
    private clearTimeout() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
    }


}
