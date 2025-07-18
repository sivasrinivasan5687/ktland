/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontSize: {
				18: [
					"18px",
					{
						lineHeight: "27px",
						letterSpacing: "-0.03em",
					},
				],
				20: [
					"20px",
					{
						lineHeight: "30px",
						letterSpacing: "-0.03em",
					},
				],
				22: [
					"22px",
					{
						lineHeight: "30px",
						letterSpacing: "-0.03em",
					},
				],
				24: [
					"24px",
					{
						lineHeight: "35px",
						letterSpacing: "-0.03em",
					},
				],
				34: [
					"34px",
					{
						lineHeight: "44px",
						letterSpacing: "-0.03em",
					},
				],
				48: [
					"48px",
					{
						lineHeight: "56px",
						letterSpacing: "-0.03em",
					},
				],
				65: [
					"65px",
					{
						lineHeight: "70px",
						letterSpacing: "-0.03em",
					},
				],
				75: [
					"75px",
					{
						lineHeight: "85px",
						letterSpacing: "-0.03em",
					},
				],
				pone: ["16px", "30px"],
				ptwo: ["16px", "26px"],
			},
			fontFamily: {
				"inter": ["Inter", "sans-serif"],
			},
			colors: {
				purple: "#794AFF",
				"main-black": "#101828",
				"main-gray": "#F3F4F9",
				"blue-seo": "#5D51F2",
				"blue-sass": "#007AFF",
				"paragraph": "#6D6D6D",
			},
			boxShadow: {
				common: "0px 10px 60px 0px rgba(121, 74, 255, 0.2)",
				small: "0px 10px 20px -8px rgba(121, 74, 255, 0.3)",
				purple: "0px 10px 60px 0px #794AFF4D",
			},
		},
	},
	plugins: [],
};
