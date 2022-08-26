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

export default function Forecast({ weatherForecastData }: any) {
	const IMG_URL = `https://openweathermap.org/img/wn/${weatherForecastData.weatherIcon}@2x.png`;

	return (
		<>
			<div className="main-forecast-container">
				<div className="temperature-icon-weather-flex">
					<div className="temperature-icon-container">
						<h1 className="temperature">
							{Math.floor(weatherForecastData.temperature - 272.15)}°C
						</h1>
						<img
							className="weather-icon"
							src={IMG_URL}
							alt={weatherForecastData.description}
						/>
					</div>
					<h1 className="weather">{weatherForecastData.weather}</h1>
				</div>
				<div className="location-container">
					<h1 className="city">{weatherForecastData.city}</h1>
					<h1 className="country">{weatherForecastData.country}</h1>
				</div>
				<div className="bottom-info-container">
					<div className="weather-details">
						<h1>{weatherForecastData.pressure} hPa</h1>
						<h2>pressure</h2>
					</div>
					<div className="weather-details">
						<h1>{weatherForecastData.humidity}%</h1>
						<h2>humidity</h2>
					</div>
					<div className="weather-details">
						<h1>{Math.floor(weatherForecastData.windSpeed * 3.6)}km/h</h1>
						<h2>windspeed</h2>
					</div>
				</div>
			</div>
		</>
	);
}
