import {useEffect, useState} from "react";
import "./App.css";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import About from "./components/About";
import Aos from "aos";
import FunFact from "./components/FunFact";
import Services from "./components/Services";
import WorkProcess from "./components/WorkProcess";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
	useEffect(() => {
		Aos.init();

		Aos.refresh();
	}, []);
	return (
		<>
			<Header />
			<MobileHeader />
			<Hero />
			<LogoSlider />
			<About />
			<FunFact />
			<Services />
			<WorkProcess />
			<Testimonials />
			<Blog />
			<Cta />
			<Footer />
		</>
	);
}

export default App;
