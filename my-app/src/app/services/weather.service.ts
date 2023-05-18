import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { WeatherDataType } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData(cityName:string):Observable<WeatherDataType> {
    return this.http.get<WeatherDataType>(environment.weatherUrl,{
      // headers: new HttpHeaders().set(environment.headerName,environment.headerValue),
      params: new HttpParams().set('q',cityName).set('units','metric').set(environment.keyName,environment.key)
    })
  }
}
