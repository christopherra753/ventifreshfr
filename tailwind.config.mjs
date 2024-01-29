/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#D4EEFA",
					100: "#AADDF5",
					200: "#7FCDF0",
					300: "#55BCEB",
					400: "#2AABE5",
					500: "#1891C8",
					600: "#1479A7",
					700: "#106185",
					800: "#0C4864",
					900: "#083043"
				},
				secundary: {
					50: "#ECF7FF",
					100: "#D9EFFF",
					200: "#C5E7FF",
					300: "#B2DEFF",
					400: "#9FD6FF",
					500: "#8CCEFF",
					600: "#4AB2FF",
					700: "#0896FF",
					800: "#0071C6",
					900: "#004C84"
				},
				paragraph: {
					50: "#F7F8F9",
					100: "#EFF1F2",
					200: "#E7EAEB",
					300: "#DFE3E5",
					400: "#D7DCDF",
					500: "#CFD5D8",
					600: "#A8B3B8",
					700: "#819199",
					800: "#5F6D75",
					900: "#3F494E"
				}
			}
		},
	},
	plugins: [],
};
