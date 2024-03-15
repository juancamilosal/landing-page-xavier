import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  countries: string[] = ['País 1', 'País 2', 'País 3'];
  cities: string[] = ['Ciudad 1', 'Ciudad 2', 'Ciudad 3'];
  mostrarSeccion: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.mostrarSeccion = window.innerWidth > 767; // Verifica el ancho inicialmente

    // Observa cambios en el tamaño de la ventana y ajusta la visibilidad de la sección
    window.addEventListener('resize', () => {
      this.mostrarSeccion = window.innerWidth > 767;
    });
  }
}
