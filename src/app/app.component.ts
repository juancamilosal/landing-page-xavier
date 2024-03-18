import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CountryServiceService} from "../service/country.service.service";
import {CountryModel} from "../core/Country/Country.model";
import Swal from 'sweetalert2'
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage, FormsModule, ReactiveFormsModule],
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

    this.formRegistration = this.fb.group({
      name:[null, [Validators.required]],
      email: [null,  [Validators.required, Validators.email]],
      phone: [null,[Validators.required]],
      country: [null, [Validators.required]],
      city:[null, [Validators.required]]
    })
  }

  countries: CountryModel[];
  mostrarSeccion: boolean = false;
  formRegistration: FormGroup;
  name: string = 'Nombre y Apellido';
  email: string = 'Email';
  phone: string = 'Teléfono';
  country: string = 'País';
  city: string = 'Ciudad';
  alertInfoName: string= 'peer-focus:dark:text-[#b9dd71]';
  alertInfoEmail: string= 'peer-focus:dark:text-[#b9dd71]';
  alertInfoPhone: string= 'peer-focus:dark:text-[#b9dd71]';
  alertInfoCountry: string= 'peer-focus:dark:text-[#b9dd71]';
  alertInfoCity: string= 'peer-focus:dark:text-[#b9dd71]';

  constructor(private countryService: CountryServiceService, private fb:FormBuilder) {}

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

  sendInformation= () =>{

    if (this.formRegistration.get('name')?.invalid){
      this.alertInfoName='peer-focus:dark:text-red-600 dark:text-red-600';
      this.name = '*Ingrese un nombre';
    } else {
      this.alertInfoName='peer-focus:dark:text-[#b9dd71]';
      this.name = 'Nombre y Apellido';
    }

    if (this.formRegistration.get('email')?.invalid){
      this.alertInfoEmail='peer-focus:dark:text-red-600 dark:text-red-600';
      this.email = '*Ingrese un correo electrónico válido';
    } else {
      this.alertInfoEmail='peer-focus:dark:text-[#b9dd71]';
      this.email = 'Email';
    }


    if (this.formRegistration.get('phone')?.invalid){
      this.alertInfoPhone='peer-focus:dark:text-red-600 dark:text-red-600';
      this.phone = '*Ingrese un número de teléfono';
    } else {
      this.alertInfoPhone='peer-focus:dark:text-[#b9dd71]';
      this.phone = 'Teléfono';
    }


    if (this.formRegistration.get('country')?.invalid){
      this.alertInfoCountry='peer-focus:dark:text-red-600 dark:text-red-600';
      this.country = '*Ingrese un país';
    } else {
      this.alertInfoCountry='peer-focus:dark:text-[#b9dd71]';
      this.country = 'País';
    }


    if (this.formRegistration.get('city')?.invalid){
      this.alertInfoCity='peer-focus:dark:text-red-600 dark:text-red-600'
      this.city = '*Ingrese ciudad';
    } else {
      this.alertInfoCity='peer-focus:dark:text-[#b9dd71]';
      this.city = 'Ciudad';
    }

    if(this.formRegistration.valid) {

      Swal.fire({
        title: "Registro Enviado",
        icon: "success"
      });

      this.formRegistration.get('name')?.setValue(null);
      this.formRegistration.get('email')?.setValue(null);
      this.formRegistration.get('phone')?.setValue(null);
      this.formRegistration.get('city')?.setValue(null);
    }
  }
}
