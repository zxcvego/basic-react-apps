// interface ForecastProps {
// 	city: string;
// 	country: string;
// 	weather: string;
// 	weatherDescription: string;
// 	weatherIcon: string;
// 	temperature: number;
// 	pressure: number;
// 	humidity: number;
// 	windSpeed: number;
// }

import "./Forecast.css";
import { ForecastProps } from "../pages/Weather";
export default function Forecast({
	weatherForecastObject,
}: ForecastProps | any) {
	const {
		city,
		country,
		weather,
		weatherDescription,
		weatherIcon,
		temperature,
		pressure,
		humidity,
		windSpeed,
	} = weatherForecastObject;

	const IMG_URL = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

	return (
		<>
			<div className="main-forecast-container">
				<div className="temperature-icon-weather-flex">
					<div className="temperature-icon-container">
						<h1 className="temperature">
							{(temperature - 272.15).toFixed()}°C
						</h1>
						<img
							className="weather-icon"
							src={IMG_URL}
							alt={weatherDescription}
						/>
					</div>
					<h1 className="weather">{weather}</h1>
				</div>
				<div className="location-container">
					<h1 className="city">{city}</h1>
					<h1 className="country">{country}</h1>
				</div>
				<div className="bottom-info-container">
					<div className="weather-details">
						<h1>{pressure} hPa</h1>
						<h2>pressure</h2>
					</div>
					<div className="weather-details">
						<h1>{humidity}%</h1>
						<h2>humidity</h2>
					</div>
					<div className="weather-details">
						<h1>{(windSpeed * 3.6).toFixed()}km/h</h1>
						<h2>wind speed</h2>
					</div>
				</div>
			</div>
		</>
	);
}
