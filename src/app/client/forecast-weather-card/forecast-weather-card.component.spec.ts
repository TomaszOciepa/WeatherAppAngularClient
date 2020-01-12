import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastWeatherCardComponent } from './forecast-weather-card.component';

describe('ForecastWeatherCardComponent', () => {
  let component: ForecastWeatherCardComponent;
  let fixture: ComponentFixture<ForecastWeatherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastWeatherCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
