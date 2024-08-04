import { useState, useEffect } from "react";
import Cube from "./cube";
import generateRandomJson from "../../utils/generateJson";

export default function Background() {
	const [json, setJson] = useState([]);

	useEffect(() => {
		setJson(generateRandomJson());

		const intervalId = setInterval(() => {
			setJson(generateRandomJson());
		}, 3000);

		return () => clearInterval(intervalId);
	}, []);
	return (
		<div className="w-full h-full overflow-hidden grid max-sm:grid-cols-[repeat(auto-fit,minmax(64px,1fr))] max-md:grid-cols-[repeat(auto-fit,minmax(80px,1fr))] max-lg:grid-cols-[repeat(auto-fit,minmax(128px,1fr))] grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
			{json.map((item, index) => (
				<Cube opacity={item.opacity / 100} color={item.color} key={index} />
			))}
		</div>
	);
}
