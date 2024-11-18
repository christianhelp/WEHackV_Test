import Navbar from "@/components/shared/Navbar";
import Footer from "./sections/Footer/Footer";
import MLHBadge from "@/components/landing/MLHBadge";
import Jumbotron from "./sections/Jumbotron/Jumbotron";
import About from "./sections/About/About";
import FAQ from "./sections/FAQ/FAQ";
import "./main.css";

export default function Home() {
	return (
		<div className="App w-full overflow-x-hidden">
			<Navbar />
			<MLHBadge />
			<Jumbotron />
			<About />
			<FAQ />
			<Footer />
		</div>
	);
}

export const runtime = "edge";
export const revalidate = 30;
