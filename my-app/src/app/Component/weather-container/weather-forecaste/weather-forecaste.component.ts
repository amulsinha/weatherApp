import { Component, Input, OnInit } from '@angular/core';
import { WeatherForecast } from 'src/app/models/weatherforecast.model';

@Component({
  selector: 'app-weather-forecaste',
  templateUrl: './weather-forecaste.component.html',
  styleUrls: ['./weather-forecaste.component.css']
})
export class WeatherForecasteComponent implements OnInit {
  @Input() weatherDataForcaste?:WeatherForecast;
  ngOnInit(): void {

  }
  ngOnChanges(): void {
    console.log('data-child',this.weatherDataForcaste);
    
  }

}
