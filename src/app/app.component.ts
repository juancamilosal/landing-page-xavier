import {Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showCountryOptions: boolean = false;
  showCityOptions: boolean = false;
  selectedCountry: string = '';
  selectedCity: string = '';

  countries: string[] = ['País 1', 'País 2', 'País 3'];
  cities: string[] = ['Ciudad 1', 'Ciudad 2', 'Ciudad 3'];

  toggleCountryOptions() {
    this.showCountryOptions = !this.showCountryOptions;
    if (!this.showCountryOptions) {
      this.selectedCountry = '';
    }
  }

  toggleCityOptions() {
    this.showCityOptions = !this.showCityOptions;
    if (!this.showCityOptions) {
      this.selectedCity = '';
    }
  }

  selectCountry(country: string) {
    this.selectedCountry = country;
    this.showCountryOptions = false;
  }

  selectCity(city: string) {
    this.selectedCity = city;
    this.showCityOptions = false;
  }

  @HostListener('document:click', ['$event'])
  closeOptions(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.select-container')) {
      this.showCountryOptions = false;
      this.showCityOptions = false;
    }
  }
}
