import "./Forecast.css";

export default function Forecast({ weatherForecastData }: any) {
	const city = weatherForecastData.city;
	const country = weatherForecastData.country;

	return (
		<>
			<div className="main-forecast-container">
				<div>
					<h1>{city}</h1>
					<h1>{country}</h1>
				</div>
			</div>
		</>
	);
}
