import React from "react";

const Services = () => {
	const sericeData = [
		{
			title: "Keyword Research",
			text: "Defined by digital dynamism, our digital marketing agency emerges as a beacon of innovation",
			icon: (
				<svg
					width="30"
					height="30"
					className="fill-current"
					viewBox="0 0 30 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M22.8125 13.125C22.8125 18.4753 18.4753 22.8125 13.125 22.8125C7.77474 22.8125 3.4375 18.4753 3.4375 13.125C3.4375 7.77474 7.77474 3.4375 13.125 3.4375C18.4753 3.4375 22.8125 7.77474 22.8125 13.125ZM13.125 24.6875C19.5108 24.6875 24.6875 19.5108 24.6875 13.125C24.6875 6.73921 19.5108 1.5625 13.125 1.5625C6.73921 1.5625 1.5625 6.73921 1.5625 13.125C1.5625 19.5108 6.73921 24.6875 13.125 24.6875ZM26.7771 26.7771C25.8132 27.741 24.2505 27.741 23.2866 26.7771L20.9454 24.436C22.3081 23.492 23.492 22.3081 24.436 20.9454L26.7771 23.2865C27.741 24.2504 27.741 25.8132 26.7771 26.7771Z"
					/>
				</svg>
			),
		},
		{
			title: "Website Optimization",
			text: "Defined by digital dynamism, our digital marketing agency emerges as a beacon of innovation",
			icon: (
				<svg
					className="fill-current"
					width="28"
					height="28"
					viewBox="0 0 28 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M1.5 15.5H0.5V17.5H1.5V15.5ZM26.5 17.5H27.5V15.5H26.5V17.5ZM10.25 25.5C9.69771 25.5 9.25 25.9477 9.25 26.5C9.25 27.0523 9.69771 27.5 10.25 27.5V25.5ZM17.75 27.5C18.3023 27.5 18.75 27.0523 18.75 26.5C18.75 25.9477 18.3023 25.5 17.75 25.5V27.5ZM15 21.5C15 20.9477 14.5523 20.5 14 20.5C13.4477 20.5 13 20.9477 13 21.5H15ZM5.25 2.5H22.75V0.5H5.25V2.5ZM25.5 5.25V17.75H27.5V5.25H25.5ZM22.75 20.5H5.25V22.5H22.75V20.5ZM2.5 17.75V5.25H0.5V17.75H2.5ZM5.25 20.5C3.73122 20.5 2.5 19.2688 2.5 17.75H0.5C0.5 20.3734 2.62665 22.5 5.25 22.5V20.5ZM25.5 17.75C25.5 19.2688 24.2688 20.5 22.75 20.5V22.5C25.3734 22.5 27.5 20.3734 27.5 17.75H25.5ZM22.75 2.5C24.2688 2.5 25.5 3.73122 25.5 5.25H27.5C27.5 2.62665 25.3734 0.5 22.75 0.5V2.5ZM5.25 0.5C2.62665 0.5 0.5 2.62665 0.5 5.25H2.5C2.5 3.73122 3.73122 2.5 5.25 2.5V0.5ZM1.5 17.5H26.5V15.5H1.5V17.5ZM10.25 27.5H14V25.5H10.25V27.5ZM14 27.5H17.75V25.5H14V27.5ZM15 26.5V21.5H13V26.5H15Z" />
				</svg>
			),
		},
		{
			title: "Content Marketing ",
			text: "Defined by digital dynamism, our digital marketing agency emerges as a beacon of innovation",
			icon: (
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M2.5 7.75V3.5C2.5 2.94772 2.94772 2.5 3.5 2.5H7.75C8.30228 2.5 8.75 2.94772 8.75 3.5V7.75C8.75 8.30228 8.30228 8.75 7.75 8.75H3.5C2.94772 8.75 2.5 8.30228 2.5 7.75Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M21.25 7.75V3.5C21.25 2.94772 21.6977 2.5 22.25 2.5H26.5C27.0523 2.5 27.5 2.94772 27.5 3.5V7.75C27.5 8.30228 27.0523 8.75 26.5 8.75H22.25C21.6977 8.75 21.25 8.30228 21.25 7.75Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M21.25 26.5V22.25C21.25 21.6977 21.6977 21.25 22.25 21.25H26.5C27.0523 21.25 27.5 21.6977 27.5 22.25V26.5C27.5 27.0523 27.0523 27.5 26.5 27.5H22.25C21.6977 27.5 21.25 27.0523 21.25 26.5Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M2.5 26.5V22.25C2.5 21.6977 2.94772 21.25 3.5 21.25H7.75C8.30228 21.25 8.75 21.6977 8.75 22.25V26.5C8.75 27.0523 8.30228 27.5 7.75 27.5H3.5C2.94772 27.5 2.5 27.0523 2.5 26.5Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path d="M12.5 16.25H17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
					<path
						d="M11.25 18.75L15 10L18.75 18.75"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M8.75 5.625H21.25M24.375 8.75V21.25M21.25 24.375H8.75M5.625 21.25V8.75"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			),
		},
		{
			title: "Email Marketing",
			text: "Defined by digital dynamism, our digital marketing agency emerges as a beacon of innovation",
			icon: (
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M25 2.5L26.6161 4.11612C27.1043 4.60427 27.1043 5.39573 26.6161 5.88388L25 7.5M20 5H26.25M7.5 16.25L10.25 18.3125C11.5833 19.3125 13.4167 19.3125 14.75 18.3125L17.5 16.25M6.25 27.5H18.75C20.8211 27.5 22.5 25.8211 22.5 23.75V13.75C22.5 11.6789 20.8211 10 18.75 10H6.25C4.17893 10 2.5 11.6789 2.5 13.75V23.75C2.5 25.8211 4.17893 27.5 6.25 27.5Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			),
		},
		{
			title: "Social Media Marketing",
			text: "Defined by digital dynamism, our digital marketing agency emerges as a beacon of innovation",
			icon: (
				<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M4 12.75H24M4 12.75C2.61929 12.75 1.5 11.6307 1.5 10.25V9C1.5 7.61929 2.61929 6.5 4 6.5H24C25.3807 6.5 26.5 7.61929 26.5 9V10.25C26.5 11.6307 25.3807 12.75 24 12.75M4 12.75L4 24C4 25.3807 5.11929 26.5 6.5 26.5H21.5C22.8807 26.5 24 25.3807 24 24V12.75M14 6.5H19C20.3807 6.5 21.5 5.38071 21.5 4C21.5 2.61929 20.3807 1.5 19 1.5C16.2386 1.5 14 3.73858 14 6.5ZM14 6.5H9C7.61929 6.5 6.5 5.38071 6.5 4C6.5 2.61929 7.61929 1.5 9 1.5C11.7614 1.5 14 3.73858 14 6.5ZM14 6.5V26.5"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
					/>
				</svg>
			),
		},
		{
			title: "Website Development",
			text: "Defined by digital dynamism, our digital marketing agency emerges as a beacon of innovation",
			icon: (
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M8.75 8.75H21.25M8.75 15H15M20 21.25L23.75 27.5M10 21.25L6.25 27.5M15 21.25V25M23.75 2.5L6.25 2.5C4.17893 2.5 2.5 4.17893 2.5 6.25L2.5 17.5C2.5 19.5711 4.17893 21.25 6.25 21.25L23.75 21.25C25.8211 21.25 27.5 19.5711 27.5 17.5L27.5 6.25C27.5 4.17893 25.8211 2.5 23.75 2.5Z"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			),
		},
	];

	return (
		<section id="service">
			<div className="w-full service-section-wrapper xl:pb-[130px] pb-[60px] relative">
				<div className="relative z-10 mx-auto theme-container">
					<div className="w-full xl:py-[130px] py-[60px] xl:px-[80px] md:px-10 px-5 bg-main-gray rounded-[10px] border border-[#e7e3fa]">
						<div className="flex flex-col items-center">
							<span className="text-purple font-medium px-5 py-3 border border-[#e7e3fa] leading-none rounded-full inline-block mb-5 bg-white">
								Explore Services
							</span>
							<h2 className="md:text-48 text-34 font-semibold text-main-black mb-[50px] text-center lg:w-[685px] w-full">
								High Impact Marketing Services to grow your business
							</h2>
						</div>
						<div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-[70px] gap-8">
							{sericeData.map((service, index) => (
								<div
									key={service.title}
									data-aos="zoom-in-left"
									data-aos-delay={`${index + 1}00`}
									className="flex flex-col space-y-[30px] justify-between items-center rounded-[10px] bg-white px-8 py-10 hover:shadow-common group border border-transparent hover:border-purple common-transition"
								>
									<div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#e7e3fa] group-hover:bg-purple common-transition text-purple group-hover:text-white">
										<span>{service.icon}</span>
									</div>
									<div>
										<p className="mb-4 font-semibold text-center text-20 text-main-black">{service.title}</p>
										<p className="text-center text-paragraph">{service.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
