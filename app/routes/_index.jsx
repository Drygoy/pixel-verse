import Background from "../components/home/background";
import Content from "../components/home/content";

export const meta = () => {
	return [
		{ title: "Pixel verse" },
		{ name: "description", content: "Pixel verse future of Internet art " },
	];
};

export default function Index() {
	return (
		<section className="w-full h-full relative">
			<Background />
			<Content />
		</section>
	);
}
