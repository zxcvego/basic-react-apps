import React, { useState } from "react";
import "./Weather.css";
export default function Weather() {
	const [city, setCity] = useState("");
	const [inputCityVal, setInputCityVal] = useState("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputCityVal(e.target.value);
	};

	const captureEnteredCity = (e: React.KeyboardEvent<Element>) => {
		if (e.key === "Enter") {
			if (inputCityVal.length <= 0) {
				alert("City name is empty!");
			} else {
				setCity(inputCityVal);
				setInputCityVal("");
			}
		}
	};

	return (
		<>
			<header>
				<h1>Hello Weather app!</h1>
			</header>
			<article className="city-input">
				<input
					type="text"
					placeholder="Enter a city name"
					onChange={handleInputChange}
					value={inputCityVal}
					onKeyDown={captureEnteredCity}
					autoComplete="on"
					required
				/>
				<div>{city}</div>
			</article>
		</>
	);
}
