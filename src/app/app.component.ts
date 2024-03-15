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

  }
  countries: string[] = ['País 1', 'País 2', 'País 3'];
  cities: string[] = ['Ciudad 1', 'Ciudad 2', 'Ciudad 3'];
  mostrarSeccion: boolean = false;

  constructor() {}

}
