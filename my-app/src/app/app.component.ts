import { Component, OnInit } from '@angular/core';
import { WeatherDataType } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService:WeatherService){}
  weatherData?:WeatherDataType;
  cityName:string="patna";
 ngOnInit(): void {
  this.getweather();
 }
 onInputReceived(inputText:string){
  console.log('inputText',inputText);
  this.cityName = inputText;
  this.getweather();
 }
 getweather(){
  this.weatherService.getWeatherData(this.cityName).subscribe({
    next: (response) => {
      this.weatherData = response;
      console.log(response);
    }
  });
 }
}
