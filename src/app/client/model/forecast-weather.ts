import { NumberFormatStyle } from '@angular/common';

export interface ForecastWeather{
    "list": [
        {
            "dt": number,
            "main": {
                "temp": number,
            },
            "weather": [
                {
                    "icon": string
                }
            ],
        },
    ],
}