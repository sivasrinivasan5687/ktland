import Parallax from "parallax-js";
import React, {useEffect, useRef} from "react";

const About = () => {
	const screenRef = useRef(null);

	useEffect(() => {
		if (screenRef.current) {
			const parallaxInstance = new Parallax(screenRef.current);

			return () => {
				parallaxInstance.disable();
			};
		}
	}, []);

	const aboutData = [
		"Transform & businesses",
		"Unified product catalog",
		"All-in-one SaaS solution",
		"Wide largest companies",
	];
	return (
		<section id="about">
			<div className=" w-full xl:pb-[153px] pb-[60px]">
				<div className="mx-auto theme-container">
					<div className="w-full grid xl:grid-cols-2 grid-cols-1 md:gap-[130px] gap-10 md:items-center relative">
						<div className="w-full about-thumbnil-area">
							<div className="xl:absolute relative lg:-left-16 left-0 top-0 lg:w-[682px] w-full">
								<div id="about-shape-mouse-anim">
									<div className="layer">
										<div className="hidden thumbnil-wrapper md:block">
											<img src="./assets/images/home-one-about-thumb-shape.webp" alt="" />
										</div>
									</div>
								</div>
								<div className="left-0 w-full thumbnil-main md:absolute -bottom-16">
									<div className="flex justify-center w-full">
										<img
											src="./assets/images/home-one-about-thumb-main.webp"
											alt=""
											className="rounded-[20px] overflow-hidden"
										/>
									</div>
								</div>
								<div className="w-full md:block hidden absolute left-0 top-0 h-[550px]">
									<div ref={screenRef} id="home-one-about-mouse-anim" className="h-full">
										<div className="absolute layer left-2/3 top-36" data-depth="0.30">
											<div
												data-aos="fade-left"
												data-aos-delay="100"
												className="inline-block h-fit px-[30px] py-2.5 bg-purple text-pone shadow-small shadow-purple text-white rounded-full rounded-bl-none"
											>
												Marketing & Growth
											</div>
										</div>
										<div data-depth="0.50" className="absolute bottom-0 layer left-1/2">
											<div
												data-aos="fade-left"
												data-aos-delay="200"
												className="w-[296px] h-fit flex justify-between p-[7px] pl-5 bg-white shadow-style-one rounded-full items-center"
											>
												<span className="text-sm font-semibold text-main-black text-nowrap">Trusted Clients</span>
												<img src="/assets/images/home-one-about-group.webp" alt="" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="about-article-area">
							<span className="mb-5 section-title-top-tag">About Company</span>
							<h2 className="md:text-48 text-34 font-semibold text-main-black mb-[50px] md:w-[80%] w-full xl:w-full">
								Digital Transforming Brands, Elevating Reach Crafting Success
							</h2>
							<p className="text-paragraph mb-[50px]">
								Defined by digital dynamism, our digital marketing agency emerges as a beacon of innovation and strategic
								prowess.
							</p>
							<ul className="flex flex-wrap md:gap-[30px] gap-5 mb-[50px]">
								{aboutData.map((about) => (
									<li
										key={about}
										className="flex space-x-2.5 items-center text-purple font-medium px-5 py-3 bg-main-gray border border-[#e7e3fa] leading-none rounded-full"
									>
										<span>
											<svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M16.751 0.287391C17.3457 0.749891 17.4528 1.60687 16.9903 2.20151L9.70279 11.5712C8.56844 13.0296 6.43472 13.2189 5.06137 11.9829L0.451552 7.83405C-0.108394 7.3301 -0.153786 6.46764 0.350164 5.90769C0.854115 5.34775 1.71657 5.30236 2.27652 5.80631L6.88634 9.95514C7.08253 10.1317 7.38735 10.1047 7.5494 9.89633L14.8369 0.526657C15.2994 -0.0679854 16.1564 -0.175108 16.751 0.287391Z"
													fill="currentColor"
												/>
											</svg>
										</span>
										<span>{about}</span>
									</li>
								))}
							</ul>
							<a href="#">
								<div className="inline-flex py-3 learn-more-btn group bg-blue-sass border-blue-sass">
									<span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-blue-sass font-inter">
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
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
