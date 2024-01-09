import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import CCPd from "./components/CCPod";
import PNV from "./components/PNV";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";

export default function Home() {
	return (
		<main>
			<NavBar></NavBar>
			<Hero title="Aadityaa Gupta" tagline="I don't know yet"></Hero>
			<Intro></Intro>
			<Experience></Experience>
			<CCPd></CCPd>
			<PNV></PNV>
			<Education></Education>
			<Hobbies></Hobbies>
			<Testimonial></Testimonial>
			<Footer></Footer>
		</main>
	);
}
