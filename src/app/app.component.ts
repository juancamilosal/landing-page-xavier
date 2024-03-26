import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterOutlet} from '@angular/router';
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
export class AppComponent implements OnInit {

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
    alertInfoName: string = 'peer-focus:dark:text-[#b9dd71]';
    alertInfoEmail: string = 'peer-focus:dark:text-[#b9dd71]';
    alertInfoPhone: string = 'peer-focus:dark:text-[#b9dd71]';
    alertInfoCountry: string = 'peer-focus:dark:text-[#b9dd71]';
    alertInfoCity: string = 'peer-focus:dark:text-[#b9dd71]';
    nameValue: any | null = null;
    emailValue: any | null = null;
    phoneValue: any | null = null;
    countryValue: any | null = null;
    cityValue: any | null = null;

    constructor(private countryService: CountryServiceService) {
    }

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

    sendForm = () => {
        const scriptURL = "https://script.google.com/macros/s/AKfycbyd9iWNKoanoFTZwxWnbG_xJCTyNAajFvtSNv7u8GvBkbPHkVb6t1PCCainqt4RU9nB/exec";
        const form = document.forms[0];
        form.addEventListener('submit', e => {
            e.preventDefault();
            fetch(scriptURL, {method: 'POST', body: new FormData(form)})
                .then(() => {
                    window.location.reload();
                })
                .catch(error => console.error('Error!', error.message));

            Swal.fire({
                title: "<strong>¡Ya estás registrado!</strong>",
                icon: "success",
                html: `
    <h4>Bienvenido a nuestra comunidad de WhastApp, 
    te contaremos todo sobre el webinar y recibirás el 
    link para el día del evento.</h4>,
  `,
                confirmButtonText: `
<a   href="https://wa.me/13465814158" >
OK
</a>
  `
            });
        });
    }
}
