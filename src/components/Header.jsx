import React, {useEffect, useRef} from "react";
import {menuData} from "../data/data";

const Header = () => {
	const headerRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (headerRef.current) {
				if (window.scrollY >= 76) {
					headerRef.current.classList.remove("header-sticky");
				} else {
					headerRef.current.classList.add("header-sticky");
				}
			}
		};

		document.addEventListener("scroll", handleScroll);

		return () => document.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header>
			<div ref={headerRef} className="fixed top-0 left-0 z-40 hidden w-full header-wrapper xl:block header-sticky ">
				<div className="2xl:px-[110px] px-5 mx-auto relative">
					{/* top bar */}
					<div className="w-full h-[45px] justify-between items-center pl-[50px] bg-white border border-[#e7e8e9] hidden top-bar">
						<span className="hidden 2xl:block">
							Welcome to <span className="font-semibold text-purple">ktland</span>
						</span>
						<div
							className="2xl:w-[1021px] w-full h-full flex items-center justify-end"
							style={{backgroundImage: "linear-gradient(270deg, #794aff 50%,rgba(121, 74, 255, 0) 90.03%)"}}
						>
							<div className="flex space-x-2.5 items-center mr-7">
								{/* icon */}
								<span className="">
									<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M21 10.5001C21 10.0087 20.9947 9.01723 20.9842 8.52439C20.9189 5.45886 20.8862 3.92609 19.7551 2.79066C18.6239 1.65523 17.0497 1.61568 13.9012 1.53657C11.9607 1.48781 10.0393 1.48781 8.09882 1.53656C4.95033 1.61566 3.37608 1.65521 2.24495 2.79065C1.11382 3.92608 1.08114 5.45885 1.01576 8.52438C0.994745 9.51007 0.994745 10.4899 1.01577 11.4756C1.08114 14.5412 1.11383 16.0739 2.24496 17.2094C3.37608 18.3448 4.95033 18.3843 8.09883 18.4634C8.90159 18.4836 9.70108 18.4954 10.5 18.4989"
											stroke="white"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M1 4L7.91302 7.92462C10.4387 9.35846 11.5613 9.35846 14.087 7.92462L21 4"
											stroke="white"
											strokeWidth="1.5"
											strokeLinejoin="round"
										/>
										<path
											d="M21 15.5L13 15.5M21 15.5C21 14.7998 19.0057 13.4915 18.5 13M21 15.5C21 16.2002 19.0057 17.5085 18.5 18"
											stroke="white"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
								<span className="font-semibold text-white">
									Email: <u>info@ktland.com</u>
								</span>
							</div>
							<div className="flex space-x-2.5 items-center mr-7">
								{/* icon */}
								<span>
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
											stroke="white"
											strokeWidth="1.5"
											strokeLinejoin="round"
										/>
										<path
											d="M22 5L12 5M22 5C22 4.43982 20.604 3.39322 20.25 3M22 5C22 5.56018 20.604 6.60678 20.25 7M12 5C12 4.43982 13.396 3.39322 13.75 3M12 5C12 5.56018 13.396 6.60678 13.75 7"
											stroke="white"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
								<span className="font-semibold text-white">call : 000 000 000 00</span>
							</div>
							<ul className="flex space-x-[15px] items-center mr-[55px]">
								{/* icon */}
								<li>
									<a href="#" aria-label="facebook" className="text-white opacity-50 hover:opacity-100">
										<svg
											className="fill-current"
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M12 2H11.3333C8.756 2 6.66667 4.08934 6.66667 6.66667H4V9.33333H6.66667V14H9.33333V9.33333H12V6.66667H9.33333V5.66667C9.33333 5.11438 9.78105 4.66667 10.3333 4.66667H12V2Z" />
										</svg>
									</a>
								</li>
								<li>
									<a href="#" aria-label="twitter" className="text-white opacity-50 hover:opacity-100">
										<svg
											className="fill-current"
											width="12"
											height="12"
											viewBox="0 0 12 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.19087 0.666504C6.78831 0.666504 5.6513 1.86041 5.6513 3.33317C5.6513 3.55572 5.67726 3.7719 5.72618 3.97855C4.37757 3.97855 2.34626 3.70589 0.649788 2.00624C0.424199 1.78023 0.00821913 1.93134 0.0238667 2.25029C0.275284 7.37494 2.47001 8.86978 3.60023 8.9628C2.8704 9.68362 1.81023 10.2526 0.743422 10.508C0.461872 10.5754 0.39232 10.8836 0.667629 10.9731C1.43098 11.2214 2.52361 11.317 3.11173 11.3332C7.27228 11.3332 10.6539 7.83126 10.7292 3.48137C11.2754 3.12613 11.6253 2.35484 11.8219 1.80844C11.8698 1.67537 11.6517 1.52032 11.5211 1.57468C11.1131 1.74455 10.595 1.78483 10.1538 1.64104C9.688 1.04601 8.98164 0.666504 8.19087 0.666504Z"
												fill="white"
											/>
										</svg>
									</a>
								</li>
								<li>
									<a href="#" aria-label="instagram" className="text-white opacity-50 hover:opacity-100">
										<svg
											className="fill-current"
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M6.33301 1.3335C3.57159 1.3335 1.33301 3.57207 1.33301 6.33349V9.66683C1.33301 12.4283 3.57158 14.6668 6.333 14.6668H9.66634C12.4278 14.6668 14.6663 12.4283 14.6663 9.66683V6.3335C14.6663 3.57207 12.4278 1.3335 9.66634 1.3335H6.33301ZM11.9997 4.66683C12.3679 4.66683 12.6663 4.36835 12.6663 4.00016C12.6663 3.63197 12.3679 3.3335 11.9997 3.3335C11.6315 3.3335 11.333 3.63197 11.333 4.00016C11.333 4.36835 11.6315 4.66683 11.9997 4.66683ZM11.333 8.00016C11.333 9.84111 9.84062 11.3335 7.99967 11.3335C6.15873 11.3335 4.66634 9.84111 4.66634 8.00016C4.66634 6.15921 6.15873 4.66683 7.99967 4.66683C9.84062 4.66683 11.333 6.15921 11.333 8.00016ZM7.99968 10.0002C9.10425 10.0002 9.99968 9.10473 9.99968 8.00016C9.99968 6.89559 9.10425 6.00016 7.99968 6.00016C6.89511 6.00016 5.99968 6.89559 5.99968 8.00016C5.99968 9.10473 6.89511 10.0002 7.99968 10.0002Z"
											/>
										</svg>
									</a>
								</li>
								<li>
									<a href="#" aria-label="dribble" className="text-white opacity-50 hover:opacity-100">
										<svg
											className="fill-current"
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M1.39835 8.93393C1.72537 11.2671 3.26008 13.213 5.35023 14.1194C5.44171 12.239 5.83 10.4322 6.47139 8.73968C5.78768 8.60911 5.07968 8.54051 4.35424 8.54051C3.32743 8.54051 2.33568 8.67795 1.39835 8.93393ZM6.33747 14.4578C6.86896 14.5943 7.42608 14.6668 8.00014 14.6668C9.91365 14.6668 11.6389 13.8607 12.8547 12.5694C11.5276 10.8837 9.64293 9.60383 7.45264 8.97387C6.78607 10.6931 6.3976 12.5372 6.33747 14.4578ZM13.4973 11.7729C14.235 10.7001 14.6668 9.40055 14.6668 8.00016C14.6668 7.88284 14.6638 7.76623 14.6578 7.65041C13.948 7.77894 13.2155 7.84617 12.4668 7.84617C11.0007 7.84617 9.59723 7.58844 8.305 7.11771C8.1422 7.42243 7.98857 7.73218 7.84446 8.04667C10.1079 8.72233 12.0726 10.0381 13.4973 11.7729ZM14.5314 6.6569C14.1849 4.96311 13.1961 3.50327 11.8305 2.54302C10.6581 3.63978 9.64049 4.88118 8.81019 6.23601C9.94876 6.63046 11.1803 6.84617 12.4668 6.84617C13.1737 6.84617 13.8641 6.78102 14.5314 6.6569ZM10.9363 2.01321C10.0504 1.57794 9.05381 1.3335 8.00014 1.3335C6.45644 1.3335 5.03529 1.85817 3.90528 2.73893C4.9255 4.06164 6.28638 5.14045 7.86883 5.85997C8.71336 4.45258 9.7469 3.1601 10.9363 2.01321ZM3.1626 3.41292C2.04672 4.5893 1.35538 6.17236 1.33398 7.91672C2.29735 7.67129 3.31 7.54051 4.35424 7.54051C5.21416 7.54051 6.05258 7.62919 6.85965 7.79752C7.02036 7.43714 7.19278 7.08257 7.37645 6.73426C5.706 5.95997 4.2611 4.81593 3.1626 3.41292Z"
											/>
										</svg>
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* header */}
					<div className="w-full h-[95px] flex justify-between items-center px-[50px] border border-[#e7e8e9] bg-white border-t-0 relative">
						<div className="flex 2xl:space-x-[100px] xl:space-x-10 justify-between items-center w-full xl:w-auto">
							<div>
								<a href="/" aria-label="logo">
									<img width={120} height={90} src="/assets/images/logo.png" alt="" />
								</a>
							</div>
							<div>
								<ul className="flex items-center space-x-10">
									{menuData.map((menu) => (
										<li key={menu.title} className="font-semibold text-paragraph hover:underline hover:text-purple">
											<a href={`${menu.href}`}>{menu.title}</a>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="xl:flex hidden space-x-[30px] items-center">
							<a href="#">
								<div className="flex space-x-1.5 items-center">
									<span className="font-semibold">Sign Up</span>
									{/* sign up icon */}
									<span>
										<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M8.84289 11.625H8.84961M5.09961 11.625H5.10633"
												stroke="#101828"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M1.17547 14.1336C1.34413 15.3862 2.38171 16.3676 3.64435 16.4257C4.70682 16.4745 5.78609 16.5 6.97461 16.5C8.16313 16.5 9.24241 16.4745 10.3049 16.4257C11.5675 16.3676 12.6051 15.3862 12.7738 14.1336C12.8838 13.316 12.9746 12.4782 12.9746 11.625C12.9746 10.7718 12.8838 9.93399 12.7738 9.11644C12.6051 7.86377 11.5675 6.88237 10.3049 6.82432C9.24241 6.77548 8.16313 6.75 6.97461 6.75C5.78609 6.75 4.70681 6.77548 3.64435 6.82432C2.38171 6.88237 1.34413 7.86377 1.17547 9.11644C1.06539 9.93399 0.974609 10.7718 0.974609 11.625C0.974609 12.4782 1.06539 13.316 1.17547 14.1336Z"
												stroke="#101828"
												strokeWidth="1.5"
											/>
											<path
												d="M3.59961 6.75V4.875C3.59961 3.01104 5.11065 1.5 6.97461 1.5C8.83857 1.5 10.3496 3.01104 10.3496 4.875V6.75"
												stroke="#101828"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</span>
								</div>
							</a>
							<a href="/blog">
								<div className="py-3 learn-more-btn group bg-blue-seo border-blue-seo">
									<span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-blue-seo font-inter">
										Learn More
									</span>
									{/* Arrow icon */}
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
		</header>
	);
};

export default Header;
