import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './Component/Search/search/search.component';
import { WeatherContainerComponent } from './Component/weather-container/weather-container.component';
import { HttpClientModule } from  '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { WeatherForecasteComponent } from './Component/weather-container/weather-forecaste/weather-forecaste.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WeatherContainerComponent,
    WeatherForecasteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
