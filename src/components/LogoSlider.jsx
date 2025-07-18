import React from "react";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

const LogoSlider = () => {
	const logoData = [
		{logoUrl: "/assets/images/home-one-client-1.webp", href: "/"},
		{logoUrl: "/assets/images/home-one-client-2.webp", href: "/"},
		{logoUrl: "/assets/images/home-one-client-3.webp", href: "/"},
		{logoUrl: "/assets/images/home-one-client-4.webp", href: "/"},
		{logoUrl: "/assets/images/home-one-client-5.webp", href: "/"},
		{logoUrl: "/assets/images/home-one-client-6.webp", href: "/"},
		{logoUrl: "/assets/images/home-one-client-7.webp", href: "/"},
	];
	const swiperOptions = {
		modules: [Autoplay],
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: false,
		navigation: false,
		breakpoints: {
			640: {slidesPerView: 4, spaceBetween: 20},
			768: {slidesPerView: 5, spaceBetween: 40},
			1024: {slidesPerView: 6, spaceBetween: 50},
		},
	};

	return (
		<section>
			<div className="2xl:px-[152px] md:px-10 xl:py-[130px] md:py-[80px] px-5 py-10 overflow-x-hidden">
				<p className="text-base text-paragraph font-medium mb-[50px] text-center">We’ve more than 1250+ global clients</p>
				<Swiper {...swiperOptions} className="w-full h1-partner_slider ">
					{logoData.map((item, index) => (
						<SwiperSlide key={index}>
							<div className="flex justify-center client-item hover:opacity-80 transition duration-300">
								<a href={item.href} aria-label={`partner-${index + 1}`}>
									<img src={item.logoUrl} alt={`client-logo-${index + 1}`} loading="lazy" />
								</a>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default LogoSlider;
