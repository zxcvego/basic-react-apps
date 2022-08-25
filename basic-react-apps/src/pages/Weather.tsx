import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import "./Weather.css";

const API_KEY = "49f8863eee1ab82c478747f2d0dcac8f";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";

export default function Weather() {
	const [city, setCity] = useState("");
	const inputCity = useInput("");
	const [weatherObject, setWeatherObject] = useState({});
	const [errorStatus, setErrorStatus] = useState({});
	const axios = require("axios");

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
		const url = `${BASE_URL}q=${city}+&appid=${API_KEY}`;
		axios
			.get(url)
			.then((res: any) => setWeatherObject(res.data))
			.catch((err: any) => setErrorStatus(err));
		window.localStorage.setItem("city", city);
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
			<article className="city-input">
				<input
					type="text"
					placeholder="Enter a city name"
					onChange={inputCity.onChange}
					value={inputCity.value}
					onKeyDown={captureEnteredCity}
					autoComplete="on"
					required
				/>
			</article>
		</>
	);
}
