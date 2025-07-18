import Parallax from "parallax-js";
import React, {useEffect, useRef} from "react";
import WinGrid from "./WinGrid";

const Hero = () => {
	const screenRef = useRef(null);

	useEffect(() => {
		if (screenRef.current) {
			const parallaxInstance = new Parallax(screenRef.current);

			return () => {
				parallaxInstance.disable();
			};
		}
	}, []);

	return (
		<section id="home-one-hero">
			<div className="hero-one-section-wrapper w-full xl:h-[905px] overflow-hidden relative">
					<WinGrid />
				<div className="relative z-10 h-full mx-auto pointer-events-none theme-container">
					<div className="w-full grid xl:grid-cols-2 grid-cols-1 2xl:gap-[130px] gap-10 items-center lg:pt-[223px] pt-[130px] h-full">
						<div className="article-area">
							<div className="inline-flex md:px-6 px-3 py-2.5 md:py-[14px] bg-white space-x-2.5 items-center rounded-full shadow-style-one mb-5">
								<span>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_460_7967)">
											<path
												d="M10.0005 10.9371L0.0507812 7.62184C0.132029 7.4156 0.3164 7.26529 0.535144 7.23435L6.68811 6.32812L10.0005 10.9371Z"
												fill="#FEC461"
											/>
											<path
												d="M10.0002 10.937V16.6775L4.49725 19.6149C4.28475 19.7274 4.03195 19.709 3.83789 19.5649L10.0002 10.937Z"
												fill="#F7B84E"
											/>
											<path
												d="M10.0005 10.937L3.83784 19.5646C3.64753 19.4243 3.55035 19.1837 3.59128 18.9431L4.64094 12.7248L10.0005 10.937Z"
												fill="#FEC461"
											/>
											<path
												d="M10 10.9368L4.64079 12.7246L0.190595 8.31813C0.0190365 8.14938 -0.0437743 7.89595 0.0312237 7.66814C0.0377861 7.65252 0.0405985 7.63658 0.0502858 7.62158L10 10.9368Z"
												fill="#F7B84E"
											/>
											<path
												d="M9.99992 0.312012V10.9367L6.6875 6.32748L9.44055 0.665128C9.54368 0.449196 9.76242 0.312012 9.99992 0.312012Z"
												fill="#FEC461"
											/>
											<path
												d="M13.3124 6.32748L10 10.9367V0.312012C10.2375 0.312012 10.4562 0.449196 10.5594 0.665128L13.3124 6.32748Z"
												fill="#F7B84E"
											/>
											<path
												d="M19.9497 7.62167L10 10.9369L13.3124 6.32764L19.4654 7.23386C19.6841 7.26511 19.8685 7.41511 19.9497 7.62167Z"
												fill="#FEC461"
											/>
											<path
												d="M19.8123 8.31813L15.3592 12.7246L10 10.9368L19.9497 7.62158C19.9591 7.63689 19.9622 7.65283 19.9688 7.66814C20.0435 7.89626 19.981 8.14938 19.8123 8.31813Z"
												fill="#F7B84E"
											/>
											<path
												d="M16.1623 19.5646L10 10.937L15.3592 12.7248L16.4092 18.9431C16.4498 19.184 16.353 19.4243 16.1623 19.5646Z"
												fill="#FEC461"
											/>
											<path
												d="M16.1623 19.5646C15.9686 19.7087 15.7155 19.7274 15.5033 19.6146L10 16.6775V10.937L16.1623 19.5646Z"
												fill="#F7B84E"
											/>
										</g>
										<defs>
											<clipPath id="clip0_460_7967">
												<rect width="20" height="20" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</span>
								<span className="text-sm font-semibold pointer-events-auto md:text-20 text-purple">
									Quland digital agency
								</span>
							</div>
							<h2 className="text-4xl md:text-65 text-main-black font-semibold mb-[35px] pointer-events-auto">
								<span>We’re Modern &</span> <br />
								effective
								<span className="relative inline-block px-3 font-bold text-white uppercase">
									<span className="relative z-10">digital</span>
									<span className="absolute top-0 left-0 block w-full h-full bg-gradient-to-r from-purple"></span>
								</span>
								<br />
								<span className="italic"> marketing agency </span>
							</h2>
							<div className="px-6 py-[14px] bg-white border-l-2 border-blue-sass mb-[35px] pointer-events-auto xl:w-full md:w-[500px]">
								<p className="text-ptwo text-paragraph">
									Digital marketing agency, we craft compelling narratives & leverage cutting-edge technologies to propel
									brands towards
								</p>
							</div>
							<div className="flex space-x-[30px] items-center pointer-events-auto">
								<a href="#">
									<div className="py-3 learn-more-btn group bg-purple border-blue-seo">
										<span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-purple font-inter">
											Learn More
										</span>
										<svg
											className="relative z-10"
											width="7"
											height="12"
											viewBox="0 0 7 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												className="transition-all duration-300 group-hover:stroke-blue-seo"
												d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
												stroke="white"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
									</div>
								</a>

								<a href="#">
									<div className="flex items-center gap-2 group">
										<p className="mb-[1px] font-medium text-main-black leading-5 font-inter border-b border-main-black before:block before:pb-[1px] before:border-purple before:font-medium before:text-purple before:leading-5 before:font-inter before:border-b before:content-['Our_Services'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
											Our Services
										</p>
										<svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												className="transition-all duration-300 delay-300 group-hover:stroke-purple"
												d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
												stroke="#101828"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
								</a>
							</div>
						</div>
						<div className="relative h-full image-area">
							<div className="xl:absolute relative 2xl:w-[752px] lg:w-[600px] w-full left-0 top-0 h-full">
								{/* <!-- main image --> */}
								<div className="relative bottom-0 left-0 z-10 w-full xl:absolute">
									<div className="flex justify-center w-full">
										<img src="./assets/images/home-one-hero-main.webp" alt="" />
									</div>
								</div>
								{/* <!-- tags --> */}
								<div className="absolute bottom-0 left-0 hidden w-full h-full md:block">
									<div ref={screenRef} id="hero-mouse-move-anim" className="relative z-10 w-full h-full pointer-events-auto">
										<div data-depth="0.2" className="layer">
											<span className="inline-block xl:px-[30px] px-6 xl:py-2.5 py-1.5 bg-[#BA4AFF] 2xl:text-pone xl:text-sm lg:text-pone text-white rounded-br-none rounded-full">
												SEO & Marketing
											</span>
										</div>
										<div data-depth="0.3" className="layer">
											<span className="inline-block xl:px-[30px] px-6 xl:py-2.5 py-1.5 bg-purple 2xl:text-pone xl:text-sm lg:text-pone text-white rounded-full rounded-bl-none">
												Website Optimizations
											</span>
										</div>
										<div data-depth="0.4" className="layer h-fit">
											<span className="inline-block xl:px-[30px] px-6 xl:py-2.5 py-1.5 bg-blue-sass 2xl:text-pone xl:text-sm lg:text-pone text-white rounded-br-none rounded-full h-fit">
												Marketing & Growth
											</span>
										</div>
										<div data-depth="0.5" className="layer h-fit">
											<span className="inline-block xl:px-[30px] px-6 xl:py-2.5 py-1.5 bg-[#FF8C05] 2xl:text-pone xl:text-sm lg:text-pone text-white rounded-full rounded-bl-none h-fit">
												Keywords Research
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
