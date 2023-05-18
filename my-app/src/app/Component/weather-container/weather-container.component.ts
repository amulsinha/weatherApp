import { Component, OnInit,Input } from '@angular/core';
import { WeatherDataType } from 'src/app/models/weather.model';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css']
})
export class WeatherContainerComponent implements OnInit{
  constructor(){

  }
  @Input() weatherData?:WeatherDataType
  ngOnInit(): void {
      
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('data:',this.weatherData);
  }

}
