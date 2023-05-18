import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherDataType } from './models/weather.model';
import { WeatherForecast } from './models/weatherforecast.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  weatherData?: WeatherDataType;
  cityName: string = 'patna';
  errorMessage?: string;
  weatherDataForcaste?: WeatherForecast;
  lat: number = 25.6;
  long: number = 85.1167;
  showError?: boolean = false;
  ngOnInit(): void {
    this.getweather();
    
  }
  onInputReceived(inputText: string) {
    console.log('inputText', inputText);
    this.cityName = inputText;
    this.getweather();
  }
  getweather() {
    this.weatherService.getWeatherData(this.cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        this.lat= response.coord.lat;
        this.long = response.coord.lon;
        this.showError = false;
        console.log(response);
        this.getWeatherForecaste();
      },
      error: (errorResponse: HttpErrorResponse) => {
        if (errorResponse) {
          this.showError = true;
          console.log(errorResponse.error.message);
          this.errorMessage = errorResponse.error.message;
        }
      },
    });
  }
  getWeatherForecaste(){
    this.weatherService.getWeatherForeCastData(this.lat, this.long).subscribe({
      next: (response) => {
        this.weatherDataForcaste = response;
        this.showError = false;
        console.log('this.weatherDataForcaste', this.weatherDataForcaste);
      },
      error: (errorResponse: HttpErrorResponse) => {
        if (errorResponse) {
          this.showError = true;
          console.log(errorResponse.error.message);
          this.errorMessage = errorResponse.error.message;
        }
      },
    });
  }
}
