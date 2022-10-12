import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Forecast from "../components/Forecast";
import useInput from "../hooks/useInput";
import "./Weather.css";

const API_KEY = "49f8863eee1ab82c478747f2d0dcac8f";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
const NOT_FOUND = "Unluckily, we could not find any data for the city 😓";

export interface ForecastProps {
	weatherForecastObject?: any;
	city: string;
	country: string;
	weather: string;
	weatherDescription: string;
	weatherIcon: string;
	temperature: number;
	pressure: number;
	humidity: number;
	windSpeed: number;
}

export default function Weather() {
	const [city, setCity] = useState("");
	const inputCity = useInput("");
	const [weatherForecastObject, setWeatherForecastObject] =
		useState<ForecastProps>();
	const [errorStatus, setErrorStatus] = useState(" ");
	const [isForecastVisible, setIsForecastVisible] = useState(false);

	const captureEnteredCity = (e: React.KeyboardEvent<Element>) => {
		if (e.key === "Enter") {
			if (inputCity.value.length <= 0) {
				alert("City name is empty!");
			} else {
				setCity(inputCity.value);
				inputCity.setValue("");
			}
		}
	};

	useEffect(() => {
		if (city !== "") {
			const url = `${BASE_URL}q=${city}+&appid=${API_KEY}`;
			axios
				.get(url)
				.then((res: any) => {
					setWeatherForecastObject({
						city: res.data.name,
						country: res.data.sys.country,
						weather: res.data.weather[0].main,
						weatherDescription: res.data.weather[0].description,
						weatherIcon: res.data.weather[0].icon,
						temperature: res.data.main.temp,
						pressure: res.data.main.pressure,
						humidity: res.data.main.humidity,
						windSpeed: res.data.wind.speed,
					});
					setIsForecastVisible(true);
					setErrorStatus("");
				})
				.catch((err: any) => {
					setErrorStatus(err.code);
					setIsForecastVisible(false);
				});
		}
	}, [city]);

	return (
		<>
			<header>
				<h1>
					<Link to="/" style={{ textDecoration: "none", color: "white" }}>
						Hello Weather app!
					</Link>
				</h1>
			</header>
			<article className="city-input-container">
				<input
					type="text"
					className="city-input"
					placeholder="Enter a city name"
					onChange={inputCity.onChange}
					value={inputCity.value}
					onKeyDown={captureEnteredCity}
					autoComplete="on"
				/>

				{errorStatus === "ERR_BAD_REQUEST" ? (
					<h3 className="city-not-found">{NOT_FOUND}</h3>
				) : null}
			</article>
			{isForecastVisible ? (
				<Forecast weatherForecastObject={weatherForecastObject}></Forecast>
			) : null}
		</>
	);
}
