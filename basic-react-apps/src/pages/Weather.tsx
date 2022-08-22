import React, { useState } from "react";
import useInput from "../hooks/useInput";
import "./Weather.css";
export default function Weather() {
	const [city, setCity] = useState("");
	const inputCity = useInput("");

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

	return (
		<>
			<header>
				<h1>Hello Weather app!</h1>
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
				<div>{city}</div>
			</article>
		</>
	);
}
