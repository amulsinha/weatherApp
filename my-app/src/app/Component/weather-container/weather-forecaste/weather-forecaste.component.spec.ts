import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecasteComponent } from './weather-forecaste.component';

describe('WeatherForecasteComponent', () => {
  let component: WeatherForecasteComponent;
  let fixture: ComponentFixture<WeatherForecasteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherForecasteComponent]
    });
    fixture = TestBed.createComponent(WeatherForecasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
