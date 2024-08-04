export default function Cube({ opacity, color }) {
	return (
		<span
			style={{ opacity: opacity, background: color }}
			className="w-full aspect-square duration-[3000ms] ease-linear"
		/>
	);
}
