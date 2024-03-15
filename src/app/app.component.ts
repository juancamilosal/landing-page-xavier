import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  ngOnInit() {
    this.mostrarSeccion = window.innerWidth > 767;
    window.addEventListener('resize', () => {
      this.mostrarSeccion = window.innerWidth > 767;
    });

    const video = document.getElementById('videoPlayer') as HTMLVideoElement;
    video.addEventListener('canplay', () => {
      video.currentTime = 60; // Inicia el video en el segundo 60 (es decir, 1 minuto)
      video.play(); // Comienza la reproducción del video
    })

  }
  countries: string[] = ['País 1', 'País 2', 'País 3'];
  cities: string[] = ['Ciudad 1', 'Ciudad 2', 'Ciudad 3'];
  mostrarSeccion: boolean = false;

  constructor() {}

}
