import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {CountryModel} from "../core/Country/Country.model";


@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  countriesURL: string ='https://restcountries.com/v3.1/all'
  constructor(private http: HttpClient) { }

  getCountries(): Observable<CountryModel[]> {
    return this.http.get(this.countriesURL, { observe: 'response' }).
    pipe(map((response: HttpResponse<any>) => response.body));
  }
}
