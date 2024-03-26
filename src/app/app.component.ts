import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CountryServiceService} from "../service/country.service.service";
import {CountryModel} from "../core/Country/Country.model";
import Swal from 'sweetalert2'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage],
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
  mostrarSeccion: boolean = false;
  name: string = 'Nombre';
  lastName: string = 'Apellidos';
  email: string = 'Email';
  phone: string = 'Teléfono';
  country: string = 'País';
  city: string = 'Ciudad';
  alertInfoName: string= 'peer-focus:dark:text-[#b9dd71]';
  alertInfoEmail: string= 'peer-focus:dark:text-[#b9dd71]';
  alertInfoPhone: string= 'peer-focus:dark:text-[#b9dd71]';
  alertInfoCountry: string= 'peer-focus:dark:text-[#b9dd71]';
  alertInfoCity: string= 'peer-focus:dark:text-[#b9dd71]';
  nameValue: any | null = null;
  emailValue:  any| null = null;
  phoneValue:  any| null = null;
  countryValue: any | null = null;
  cityValue: any | null = null;

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

  validaciones = () => {

    /*if(this.nameValue == null){
      this.alertInfoName='peer-focus:dark:text-red-600 dark:text-red-600';
      this.name = '*Ingrese un nombre';
    } else {
      this.alertInfoName='peer-focus:dark:text-[#b9dd71]';
      this.name = 'Nombre y Apellido';
    }

    if (this.emailValue == null) {
      this.alertInfoEmail='peer-focus:dark:text-red-600 dark:text-red-600';
      this.email = '*Ingrese un correo electrónico válido';
    } else {
      this.alertInfoEmail='peer-focus:dark:text-[#b9dd71]';
      this.email = 'Email';
    }

    if (this.phoneValue == null) {
      this.alertInfoPhone='peer-focus:dark:text-red-600 dark:text-red-600';
      this.phone = '*Ingrese un número de teléfono';
    } else {
      this.alertInfoPhone='peer-focus:dark:text-[#b9dd71]';
      this.phone = 'Teléfono';
    }

    if (this.countryValue == null){
      this.alertInfoCountry='peer-focus:dark:text-red-600 dark:text-red-600';
      this.country = '*Ingrese un país';
    } else {
      this.alertInfoCountry='peer-focus:dark:text-[#b9dd71]';
      this.country = 'País';
    }
    if (this.cityValue == null){
      this.alertInfoCity='peer-focus:dark:text-red-600 dark:text-red-600'
      this.city = '*Ingrese ciudad';
    } else {
      this.alertInfoCity='peer-focus:dark:text-[#b9dd71]';
      this.city = 'Ciudad';
    }*/
    const scriptURL
        = "https://script.google.com/macros/s/AKfycbw2Jvxc3tADPQnwBaz4LAMmhGLKJ13B2iXuJg4uDoEZWLQpZIlYau2-8S__BFNqmgT7zw/exec"
    const form = document.forms[0]

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(() => { window.location.reload(); })
          .catch(error => console.error('Error!', error.message))
      Swal.fire({
        title: "¡Ya estás registrado!",
        text: "En los próximos días recibirás la invitación al webinar en el que contaré cómo invertir en los Estados Unidos.",
        icon: "success"
      }
      );
    })
  }
}
