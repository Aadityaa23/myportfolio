import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import CCPd from "./components/CCPod";
import PNV from "./components/PNV";

export default function Home() {
	return (
		<main>
			<NavBar></NavBar>
			<Hero></Hero>
			<Intro></Intro>
			<Experience></Experience>
			<CCPd></CCPd>
			<PNV></PNV>
		</main>
	);
}
