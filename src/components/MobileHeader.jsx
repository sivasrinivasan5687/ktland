import React, { useState } from "react";
import { menuData } from "../data/data";

const MobileHeader = () => {
	const [isNavActive, setIsNavActive] = useState(false);


    function toggleNav(){
        setIsNavActive(!isNavActive);
    }
    
	return (
		<header className="relative flex flex-col xl:hidden">
			<div className="h-16 bg-white flex items-center justify-between fixed top-0 left-0 z-50 w-full px-2.5">
				<a href="/" aria-label="logo">
					<img width={120} src="/assets/images/logo.png" alt="logo" />
				</a>
				<button
					aria-label="mobile-Menu"
					className="w-6 h-6 text-main-black text-48 toggle_nav_menu"
					id="mobile_nav_toggle_menu"
					onClick={toggleNav}
				>
					<svg
						className={`transition-all duration-300 pointer-events-none ${isNavActive ? "hidden" : ""}`}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32-14.3 32 32z" />
					</svg>
					<svg
						className={`transition-all duration-300 pointer-events-none ${isNavActive ? "" : "hidden"}`}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 384 512"
					>
						<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
					</svg>
				</button>
			</div>
			<div className="transition-all duration-300">
				<div
					className={`fixed z-40 w-full h-screen transition-all duration-300 delay-150 bg-black/80 ${
						isNavActive ? "left-0" : "-left-full"
					}`}
				></div>
				<div
					className={`fixed z-50 w-full h-screen overflow-y-scroll transition-all duration-300 bg-white top-16 ${
						isNavActive ? "left-0" : "-left-full"
					}`}
				>
					<div className="flex flex-col pt-5 pl-5 gap-28">
						<ul className="flex flex-col gap-5 text-base font-medium leading-5 text-paragraph font-inter">
							{menuData.map((menuItem, index) => (
								<li key={index} className="group">
									<a className="relative nav-item w-fit" href={menuItem.href}>
										{menuItem.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default MobileHeader;
