import { useState } from "react";

export default function useInput(initialValue: any) {
	const [value, setValue] = useState(initialValue);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return {
		value,
		setValue,
		onChange: handleChange,
	};
}
