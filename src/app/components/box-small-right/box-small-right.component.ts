import { Component, OnInit, OnDestroy } from '@angular/core';
import { BoxCardComponent } from "../box-card/box-card.component";

@Component({
  selector: 'app-box-small-right',
  templateUrl: './box-small-right.component.html',
  styleUrls: ['./box-small-right.component.scss'],
})
export class BoxSmallRightComponent implements OnInit, OnDestroy {

  seconds: number = 0; // Contador de segundos
  timer: any; // Variable para el intervalo del temporizador
  running: boolean = true; // Estado del temporizador (en ejecución o detenido)
  displayTime: string = '00:00:00'; // Tiempo a mostrar en la interfaz

  // Método que se ejecuta cuando el componente es creado
  ngOnInit(): void {
    this.startTimer(); // Iniciar el temporizador automáticamente al cargar
  }

  // Método que se ejecuta cuando el componente es destruido (para limpiar el intervalo)
  ngOnDestroy(): void {
    clearInterval(this.timer); // Limpiar el intervalo al destruir el componente
  }

  // Método para alternar el estado del temporizador (iniciar/pausar)
  toggleTimer(): void {
    if (this.running) {
      this.stopTimer();
      this.resetTimer();  // Reiniciar el contador al presionar "Pausar"
    } else {
      this.startTimer();
    }
    this.running = !this.running; // Cambiar el estado del temporizador
  }

  // Iniciar el temporizador
  startTimer(): void {
    this.timer = setInterval(() => {
      this.seconds++;
      this.updateDisplay();
    }, 1000);
  }

  // Detener el temporizador
  stopTimer(): void {
    clearInterval(this.timer);
  }

  // Reiniciar el temporizador a 00:00:00
  resetTimer(): void {
    this.seconds = 0;
    this.updateDisplay(); // Actualizar la visualización del tiempo
  }

  // Actualizar la visualización del tiempo en formato HH:MM:SS
  updateDisplay(): void {
    const hours = Math.floor(this.seconds / 3600);
    const minutes = Math.floor((this.seconds % 3600) / 60);
    const secs = this.seconds % 60;
    this.displayTime = `${this.padNumber(hours)}:${this.padNumber(minutes)}:${this.padNumber(secs)}`;
  }

  // Formatear el número para que siempre tenga dos dígitos
  padNumber(num: number): string {
    return num.toString().padStart(2, '0');
  }
}
