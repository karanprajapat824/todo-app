import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		extend: {
			colors: {
				border: 'hsl(240 10% 18%)',
				background: 'hsl(240 10% 6%)',
				foreground: 'hsl(240 5% 96%)',
				success: {
					DEFAULT: 'hsl(142 76% 36%)',
					foreground: 'hsl(0 0% 98%)'
				},
				muted: {
					DEFAULT: 'hsl(240 10% 12%)',
					foreground: 'hsl(240 5% 65%)'
				}
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, hsl(250 95% 65%), hsl(260 95% 70%))',
			},
			boxShadow: {
				'glow': '0 0 15px #8a2cf44d'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
