import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CountryServiceService} from "../service/country.service.service";
import {CountryModel} from "../core/Country/Country.model";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  ngOnInit() {
    this.mostrarSeccion = window.innerWidth >= 1024;
    window.addEventListener('resize', () => {
      this.mostrarSeccion = window.innerWidth >= 1024;
    });
    this.showCountries()
  }
  countries: CountryModel[];
  cities: string[] = ['Ciudad 1', 'Ciudad 2', 'Ciudad 3'];
  mostrarSeccion: boolean = false;


  constructor(private countryService: CountryServiceService) {}

  showCountries = () => {
    this.countryService.getCountries().subscribe(listCountries => {

      listCountries.sort((a, b) => {
        const nameA = a.name.common.toUpperCase();
        const nameB = b.name.common.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      this.countries = listCountries;
    });
  }
}
